import React from "react";
import {
     View,
     Text,
     Image,
    StyleSheet,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { LinearGradient } from 'expo-linear-gradient';
import  Home  from "../../screens/home";
import Profile from "../../screens/profile";
import Remedies from "../../screens/remedies";
import Camera from "../../screens/camera";
import Stats from "../../screens/stats";


import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";



const Tab = createBottomTabNavigator()

const onPress=({navigation})=>{ navigation.navigate('Camera') }
    


const TabBarCustomButton=() =>{
    return(
        <TouchableOpacity 
        style={{
            top: -30,
            justifyContent:'center',
            alignItems:'center',
            ...styles.shadow
        }}
         onPress={onPress}
        >
        <LinearGradient
        colors={["#4E4DEB","#1B1D2C"]}
        style={{
            width:70,
            height:70,
            borderRadius:35,
        }}
        >
          {/* {children}  */}
        </LinearGradient>

        </TouchableOpacity>
    )
}
const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions = {{
            tabBarShowLabel: false,
                 
                tabBarStyle :{
                  alignItems:'center',
                  justifyContent:'center',
                  position : 'absolute',
                  backgroundColor:'white',
                  bottom:0,
                  left:0,
                  right:0,
                  elevation : 0,
                  borderTopColor : "transparent",
                  height :100,
                }
           }}
    
        >
         
              <Tab.Screen
                name="Heeme1"
                component={Home}
                 options={{
                     headerShown:false,
                     tabBarIcon :({focused})=>(
                         <View style={{alignItems:'center',
                          justifyContent:'center'}}>
                          <Image  
                              source={'./../../assets/icons/home.png'}
                              resizeMode="contain"
                              style={{
                                  height :20,
                                  width :20,    
                                     tintColor :focused? "#4E4DEB"
                                     :'black'
                              }}

                          />
                          <Text style={{color : focused ? "#4E4DEB" : 'black', 
                          
                         }}>
                             HOME
                          </Text>

                         </View>
                     )
                }}
            />  
            <Tab.Screen
                name="Portfolio"
                component={Profile}
                options={{
                     tabBarIcon :({focused})=>(
                         <View style={{alignItems:'center',
                          justifyContent:'center'}}>
                          <Image  
                              source={'./../../assets/icons/pie_chart.png'}
                              resizeMode="contain"
                              style={{
                                  height :20,
                                  width :20,    
                                     tintColor :focused? "#4E4DEB"
                                     :'white'
                              }}

                          />
                          <Text style={{color : focused ? "#4E4DEB" : 'black', 
                         
                         }}>
                             Portfolio
                          </Text>

                         </View>
                     )
                }}
            />
            <Tab.Screen
                name="Camera"
                component={Camera}
                options={{
                     tabBarIcon :({focused})=>(
                         <View style={{alignItems:'center',
                          justifyContent:'center'}}>
                          <Image  
                              source={'../../assets/icons/settings.png'}
                              resizeMode="contain"
                              style={{
                                  height :30,
                                  width :30,    
                                     tintColor :'white'
                              }}

                          />
                        
                         </View>
                     ),
                     tabBarButton : () =>(
                         <TabBarCustomButton  />
                         
                     )
                }}
            />
            <Tab.Screen
                name="Stats"
                component={Stats}
                options={{
                     tabBarIcon :({focused})=>(
                         <View style={{alignItems:'center',
                          justifyContent:'center'}}>
                          <Image  
                              source={'../../assets/icons/line_graph.png'}
                              resizeMode="contain"
                              style={{
                                  height :20,
                                  width :20,    
                                     tintColor :focused? "#4E4DEB"
                                     :'black'
                              }}

                          />
                          <Text style={{color : focused ? "#4E4DEB" : 'black', 
                          
                         }}>
                             STATS
                          </Text>

                         </View>
                     )
                }}
            />
            <Tab.Screen
                name="Remedies"
                component={Remedies}
                options={{
                     tabBarIcon :({focused})=>(
                         <View style={{alignItems:'center',
                          justifyContent:'center'}}>
                          <Image  
                              source={'../../assets/icons/settings.png'}
                              resizeMode="contain"
                              style={{
                                  height :20,
                                  width :20,    
                                     tintColor :focused? "#4E4DEB"
                                     :'black'
                              }}

                          />
                          <Text style={{color : focused ? "#4E4DEB" : 'black', 
                          
                         }}>
                             Remedies
                          </Text>

                         </View>
                     )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#4E4DEB",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default Tabs;