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
          <View className="border border-white"  style={{
            backgroundColor:"#d9d9d9",
        marginHorizontal:48,
        marginTop:50,
        borderRadius: 10, // Köşe yuvarlaklığını belirleyin
        width:300,
        flexDirection: 'row',
        zIndex:2,
        height:150,
        marginBottom:-120,
        }}></View>
          <Text className=" text-xl text-black-700 ml-3 "  style={{color:"white",fontSize:15,marginTop:0,textAlign:"center", marginLeft:-10,paddingStart:60,paddingEnd:60,marginTop:160,marginBottom:0}} >
          Duygular bizim istediğimiz ve istemediğimiz şeylerle ilgili bilgiler verir. Örneğin başarısız olmaktan korkuyorum demek başarılı olma isteğinle ilişkili olabilir. İnsanlarla ilişkilerinde utanç hissetmen daha iyi ilişki kurmak istemen veya kendinle ilgili geliştirmek istediğin alanlar olmasına işaret edebilir.

Duygularını takip etmen hayatta istediğin şeylere ulaşma kapısını açan bir anahtardır
                </Text>
            <View >
            
   
            </View>
            <Svg 
                height={150}
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
          
          
          
            
           

            <View className="flex-row justify-center"style={{marginTop:100,marginRight:20}}>
          <TouchableOpacity 
          style={{marginRight:-7}}
                onPress={()=> navigation.goBack()}
                className="p-3 rounded-tr-2xl rounded-bl-2xl ml-4 py-9" >
                <Image source={require('../assets/icons/back.png')} 
                    className="w-4 h-8"  />
            </TouchableOpacity>
            <Text style={{marginTop:37,fontSize:22,color:"black",marginLeft:10}}>11-15</Text>
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
    height: 580,
    
  },
 
  
})