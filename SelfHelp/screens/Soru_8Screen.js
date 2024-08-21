import React from 'react';
import { useMemo,Dimensions, StatusBar, StyleSheet, View ,Text, TouchableOpacity,Image,TextInput,Defs,Filter,FeGaussianBlur} from 'react-native';
import Svg, { Path } from 'react-native-svg';
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
            <View >
            <Image source={require('../assets/images/soru_8.png')} style={{height:500,width:500,marginTop:-80,marginLeft:-60}}/>
            </View>
            <Svg 
                height={400}
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
            <View>
            <Text className=" text-xl text-black-700 ml-3 "  style={{color:"white",fontSize:20,marginTop:-70,textAlign:"center", marginLeft:-10,paddingStart:60,paddingEnd:60,marginBottom:40}} >
                Şimdi bedenini taramanı istiyorum...?
                </Text>
                <Text style={{color:"white",fontSize:20,marginTop:5,textAlign:"center", marginLeft:-10,paddingStart:70,paddingEnd:70,marginBottom:40}}>Kollarını, bacaklarını, yüzünü, başını...</Text>
                
            </View>
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
            <Text style={{marginTop:37,fontSize:22,color:"black",marginLeft:10}}>8-15</Text>
            <TouchableOpacity
            style={{marginLeft:5}}
            onPress={()=> navigation.navigate("Soru_9")}
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