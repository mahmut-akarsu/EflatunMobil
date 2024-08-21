import React from 'react';
import { useMemo,Dimensions, StatusBar, StyleSheet, View ,Text, TouchableOpacity,Image,TextInput,Defs,Filter,FeGaussianBlur} from 'react-native';
import Svg, { Path ,Line,} from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors,laciColors,yesilColors } from '../theme'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { RadioButton } from 'react-native-paper';
import RadioGroup from 'react-native-radio-buttons-group';



export default function VaweScreen() {
  StatusBar.setHidden(true);
  const navigation = useNavigation();
  const [email,setEmail] = useState ('');
  const [checked, setChecked] = React.useState('first');
  

const [selectedId, setSelectedId] = useState();
  
  return(
    <View style={styles.container}>
      <View style={styles.top}>
        <SafeAreaView >
          <View style={styles.box}>
          
          <Text className=" text-xl text-black-700 ml-3 "  style={{color:"white",fontSize:25,textAlign:"center", marginLeft:-10,paddingStart:60,paddingEnd:60,marginTop:50,marginBottom:0}} >
          Peki son zamanlarda seni zorlayan bu duygular, hayatında hangi alanları etkiliyor?
                </Text>
               
            <Svg 
                height={1030}
                marginLeft= {0.4}
                width={400}
                viewBox="0 0 1440 320"
                style={styles.topWavy}> 
              <Path
                fill="#213a59"
                fillOpacity="0.2"
                d="M0,128L60,154.7C120,181,240,235,360,218.7C480,203,600,117,720,101.3C840,85,960,139,1080,144C1200,149,1320,107,1380,85.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                transform="translate(0,40)"/>
              <Path
                fill="#213a59"
                d='M0,128L60,154.7C120,181,240,235,360,218.7C480,203,600,117,720,101.3C840,85,960,139,1080,144C1200,149,1320,107,1380,85.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'/>    
            
              </Svg>
          </View>
          <View style={{marginTop:-490}}>
          <View style={{flexDirection: 'row',}}>
          <TouchableOpacity 
          style={{marginRight:-7}}
                onPress={()=> navigation.navigate("")}>
          <View className=" border border-white"  style={{
            backgroundColor:"#d9d9d9",
        marginLeft:45,
        marginHorizontal:20,
        marginTop:50,
        borderRadius: 10, // Köşe yuvarlaklığını belirleyin
        width:140,
        zIndex:1,
        height:140,
        marginBottom:0,
        }}>
            <Image source={require('../assets/images/aileSoru.png')} style={{zIndex:2,height:170,width:170,marginTop:-20,marginLeft:-17}} />
            <Text style={{zIndex:2,color:"black",fontSize:15,marginTop:-40,marginLeft:55}}>AİLE</Text>
        </View></TouchableOpacity>
        <TouchableOpacity 
          style={{marginRight:-7}}
                onPress={()=> navigation.navigate("")}>
        <View className=" border border-white"  style={{
            backgroundColor:"#d9d9d9",
        marginTop:50,
        borderRadius: 10, // Köşe yuvarlaklığını belirleyin
        width:140,
        zIndex:2,
        height:140,
        marginBottom:0,
        }}>
            <Image source={require('../assets/images/arkadaslikSoru.png')} style={{zIndex:2,height:150,width:150,marginTop:-10,marginLeft:-8}} />
            <Text style={{zIndex:2,color:"black",fontSize:15,marginTop:-30,marginLeft:25}}>ARKADAŞLIK</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row',}}>
          <TouchableOpacity 
          style={{marginRight:-7}}
                onPress={()=> navigation.navigate("")}>
          <View className=" border border-white"  style={{
            backgroundColor:"#d9d9d9",
        marginLeft:45,
        marginHorizontal:20,
        marginTop:15,
        borderRadius: 10, // Köşe yuvarlaklığını belirleyin
        width:140,
       
        zIndex:2,
        height:140,
        marginBottom:0,
        }}>
            <Image source={require('../assets/images/romatikiliskilerSoru.png')} style={{zIndex:2,height:170,width:170,marginTop:-20,marginLeft:-15}} />
            <Text style={{zIndex:2,color:"black",fontSize:15,marginTop:-50,marginLeft:8,textAlign:"center"}}>ROMANTİK İLİŞKİLER</Text>
            </View>
            </TouchableOpacity>
        <TouchableOpacity 
          style={{marginRight:-7}}
                onPress={()=> navigation.navigate("")}>
        <View className=" border border-white"  style={{
            backgroundColor:"#d9d9d9",
        marginTop:15,
        borderRadius: 10, // Köşe yuvarlaklığını belirleyin
        width:140,
        zIndex:2,
        height:140,
        marginBottom:0,
        }}>
            <Image source={require('../assets/images/kariyerSoru.png')} style={{zIndex:2,height:150,width:150,marginTop:-15,marginLeft:-12}} />
            <Text style={{zIndex:2,color:"black",fontSize:15,marginTop:-21,marginLeft:38}}>KARİYER</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row',}}>
          <TouchableOpacity 
          style={{marginRight:-7}}
                onPress={()=> navigation.navigate("")}>
          <View className=" border border-white"  style={{
            backgroundColor:"#d9d9d9",
        marginLeft:45,
        marginHorizontal:20,
        marginTop:15,
        borderRadius: 10, // Köşe yuvarlaklığını belirleyin
        width:140,
       
        zIndex:2,
        height:140,
        marginBottom:0,
        }}>
            <Image source={require('../assets/images/finansSoru.png')} style={{zIndex:2,height:170,width:170,marginTop:-30,marginLeft:-5}} />
            <Text style={{zIndex:2,color:"black",fontSize:15,marginTop:-30,marginLeft:43}}>FİNANS</Text>
            </View>
            </TouchableOpacity>
        <TouchableOpacity 
          style={{marginRight:-7}}
                onPress={()=> navigation.navigate("")}>
        <View className=" border border-white"  style={{
            backgroundColor:"#d9d9d9",
        marginTop:15,
        borderRadius: 10, // Köşe yuvarlaklığını belirleyin
        width:140,
        zIndex:2,
        height:140,
        marginBottom:0,
        }}>
            <View style={{flexDirection: 'row', marginTop:-10,marginLeft:-5}}>
            <Image source={require('../assets/images/target.png')} style={{zIndex:2,height:25,width:25,marginTop:60,marginLeft:30}} />
            <Image source={require('../assets/images/target.png')} style={{zIndex:2,height:25,width:25,marginTop:60,marginLeft:5}} />
            <Image source={require('../assets/images/target.png')} style={{zIndex:2,height:25,width:25,marginTop:60,marginLeft:5}} />
            </View>
            <Text style={{zIndex:2,color:"black",fontSize:15,marginTop:30,marginLeft:48}}>DİĞER</Text>
        </View>
        </TouchableOpacity>
          </View>
          </View>
           

            <View className="flex-row justify-center"style={{marginTop:40,marginRight:20}}>
          <TouchableOpacity 
          style={{marginRight:-7}}
                onPress={()=> navigation.goBack()}
                className="p-3 rounded-tr-2xl rounded-bl-2xl ml-4 py-9" >
                <Image source={require('../assets/icons/back.png')} 
                    className="w-4 h-8"  />
            </TouchableOpacity>
            <Text style={{marginTop:37,fontSize:22,color:"black",marginLeft:10}}>12-15</Text>
            <TouchableOpacity
            style={{marginLeft:5}}
            onPress={()=> navigation.navigate("Soru_12")}
            className="p-3 rounded-tr-2xl rounded-bl-2xl ml-4 py-9">
                <Image source={require('../assets/icons/ileriYesil.png')} 
                    className="w-4 h-8"  />
            </TouchableOpacity>
            
</View>
        </SafeAreaView> 
      </View> 
    </View>
    
    
    
   
   
    
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  top: {
  },
  bottom: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    bottom: 0,
    
  },
  box: {
    backgroundColor: '#213a59',
    height: 634,
    
  },
 
  
})