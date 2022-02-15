
import { useState, useEffect, useRef } from 'react';
import {Camera} from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';


export default function App() {
  
  const cam = useRef();
   const _takePicture= async() => {
   if(cam.current){
     const options={quality:0.5 ,
     base64: true,
    skipProcessing: false}

    
      let picture=await cam.current.takePictureAsync(options)
        console.log(cam.current.getSupportedRatiosAsync());
        const source= picture.uri;

        if(source){
          cam.current.resumePreview();
          handleSave(source);
          console.log("picture source", source );
        }
      }
    };

    const handleSave = async(picture) =>{
      
      const {status} = await Camera.requestCameraPermissionsAsync()
    //  const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      if (status === "granted"){
        const assert = await MediaLibrary.createAssetAsync(picture)
        MediaLibrary.createAlbumAsync("Testing" , assert)
      }
      else {
           console.log("you Missed to give permission")
      }
    }


    const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera ref={cam} style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <TouchableOpacity
            
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
{/* 
            <Text style={styles.text}> Flip </Text> */}
            <Ionicons name="camera-reverse-sharp" size={24} color="black" />
          </TouchableOpacity>
          </View>
          <View style={styles.button}>
          <TouchableOpacity
           
            onPress={_takePicture}>
{/*             
            <Text style={styles.text}> Click </Text> */}
            <Ionicons name="aperture-outline" size={80} color="black" />
          </TouchableOpacity>
          </View>
        </View>
      </Camera>
    </View>
  );

 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
  
    justifyContent: 'space-around',
  //  alignself: 'flex-end',
    alignItems: 'flex-end',
  },
  button1: {
    flex: 0.1,
   alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
