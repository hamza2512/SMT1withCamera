import React from 'react'
import { SafeAreaView, StyleSheet, Text,TouchableOpacity, View ,TextInput,} from 'react-native'
import { Avatar, BottomNavigation, } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import StyleButton from '../components/StyleButton';
import * as Animatable from 'react-native-animatable';
//import { Icon } from 'react-native-vector-icons/MaterialCommunityIcons'
// import BottomSheet from 'reanimated-bottom-sheet';
// import Animated from 'react-native-reanimated'
// import { shadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'




const Register = ({navigation}) => {

    // bs=React.createRef();
    // fall= new Animated.Value(1);

    // const renderInner=() =>(
        
    //     <Text>helooo g</Text>
    // );``
    
    // const renderHeader=() =>(

    //     <View style={styles.header1}>   
    //        <View style={styles.panelHeader}>
    //        <View style={styles.panelHandle}></View>
    //     </View>
    //     </View>
       
    // );

    const [data,setData]= React.useState({
        email:'',
        password:'',
        check_textInputChange: false,
        secureTextEntry:true
    });
    const textInputChange=(val)=>{
        if(val.length !== 0){
            setData({
                ...data,
                email:val,
                check_textInputChange:true
            })
        }
        else{
            setData({
                ...data,
                email:val,
                check_textInputChange:false
            })
        }
    }

    const handlePasswordChange=(val)=>{
        setData({
            ...data,
            password:val
        }) 
    }
    const updateSecureTextEntry =() =>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    return (
       <SafeAreaView style={styles.container}>
         <View style={styles.header}>
         <Text style={styles.text_header}>Register Yourself</Text>
         </View>
          
          {/* <BottomSheet 
              ref={this.bs}
              snapPoints={330,0}
              renderContent={this.renderInner}
              renderHeader={this.renderHeader}
              initialSnap={1}
              callbackNode={this.fall}
              enabledGestureInteraction={true}
          /> */}
         <Animatable.View 
            animation="fadeInUpBig"   
             style={styles.footer}>
        <TouchableOpacity 
      //  onPress={()=>this.bs.current.snapTo(0)}
        >
          <View style={{flexDirection:'column', marginTop:5,alignItems:'center'}}>
              <Avatar.Image 
                  source={require('./../assets/_92A2045.jpeg')}
                  size={80}
              />
              {/* <View style={{
                  flex:1,
                  justifyContent:'center',
                  alignItems:'center',
              }}>
              <Icon name="camera" size={35} color="#fff"
              style={{
                  opacity:0.7,
                  alignItems:'center',
                  justifyContent:'center',
                  borderWidth:1,
                  borderColor:"#ffff",
                  borderRadius:10
              }} 

              />

              </View>
              */}

          </View>
          </TouchableOpacity>
             <Text style={styles.text_footer}>Email</Text>
             <View style={styles.action}>
                 <FontAwesome 
                 name="user-o"
                 color="#05375a"
                 size={20}
                />
                <TextInput 
                    placeholder='Your Email address'
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={(val) =>textInputChange(val)}
                />
                {data.check_textInputChange ?
                <Animatable.View  animation="bounceIn">
                <Feather 
                    name='check-circle'
                    color="green"
                    size={20}
                />
                </Animatable.View>
                : null}
             </View>

             <Text style={[styles.text_footer,
            { marginTop:20}]}>Password</Text>
             <View style={styles.action}>
                 <FontAwesome 
                 name="lock"
                 color="#05375a" 
                 size={20} 
                />
                <TextInput 
                    placeholder='Your Password'
                    secureTextEntry={data.secureTextEntry? true:false}
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={(val) =>handlePasswordChange(val)}
                />
                <TouchableOpacity 
                onPress={updateSecureTextEntry}
                >
                {data.secureTextEntry ?
                <Feather 
                    name='eye-off'
                    color="grey"
                    size={20}
                /> :
                <Feather 
                    name='eye'
                    color="grey"
                    size={20}
                />
                }
                </TouchableOpacity>
             </View>
             <Text style={[styles.text_footer,
            { marginTop:20}]}> Confirm Password</Text>
             <View style={styles.action}>
                 <FontAwesome 
                 name="lock"
                 color="#05375a" 
                 size={20} 
                />
                <TextInput 
                    placeholder=' Confirm Your Password'
                    secureTextEntry={data.secureTextEntry? true:false}
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={(val) =>handlePasswordChange(val)}
                />
                <TouchableOpacity 
                onPress={updateSecureTextEntry}
                >
                {data.secureTextEntry ?
                <Feather 
                    name='eye-off'
                    color="grey"
                    size={20}
                /> :
                <Feather 
                    name='eye'
                    color="grey"
                    size={20}
                />
                }
                </TouchableOpacity>
             </View>
             <View style={styles.button}>
                 <StyleButton
                     type="primary"
                     content={"Login"}
                     onPress ={() => { 
                     console.warn("Login  is pressed")
                     navigation.navigate('login')
                     }}
                 />

                 <StyleButton type="primary"
                    content={"SignUp"}
                    onPress ={() => { 
                    console.warn("Register  is pressed")
                    navigation.navigate('Register')
                     }}/>
             </View>

         </Animatable.View>
      
       </SafeAreaView>
    )
}

export default Register

const styles = StyleSheet.create({
   
    container:{
        flex:1,
       backgroundColor:"#4E4DEB",
     },
     header:{
         flex:0.2,
        justifyContent:'flex-end',
         paddingHorizontal:20,
         paddingBottom:50,
     },
     footer:{
         flex:3,
        backgroundColor:"#fff8dc",
       //  backgroundColor:"#1B1D2C",
         borderTopLeftRadius:30,
         borderTopRightRadius:20,
         paddingVertical:30,
         paddingHorizontal:20
     },
     text_header:{
         top:50,
         textAlignVertical:'bottom',
         justifyContent:'flex-end',
         color:'#ffff',
         fontWeight:'bold',
         fontSize:30,
     },
     text_footer:{
       color:'#05375a',
       fontSize:18,
     },
     action:{
         flexDirection:'row',
         marginTop:10,
         borderBottomWidth:1,
         borderBottomColor:'#f2f2f2',
         paddingBottom:5,
     },
     textInput:{
         flex:1,
         paddingLeft:10,
         color:'#05375a',
     },
      button:{
          alignItems:'center',
          marginTop:50,
      },
      signIn:{
          width:'100%',
          height:50,
          justifyContent:'center',
          alignItems:'center',
          borderRadius:10,
      },
      textSign:{
          fontSize:18,
          fontWeight:'bold',
      },
      panelHeader:{
          alignItems:'center',
      },
      panelHandle:{
          width:40,
          height:8,
          borderRadius:4,
          backgroundColor:"#ffff" ,
          marginBottom:10
      },
      panelTitle:{},
      header1:{
          backgroundColor:"#ffffffff",
          shadowColor:"#33333333",
          shadowOffset:{width :-1 ,height:-3},
          shadowRadius:2,
          shadowOpacity:0.4,
          paddingTop:20,
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
      }
 
})
