import React from 'react';
import { Dimensions, StatusBar, StyleSheet, View ,Text, TouchableOpacity,Image,TextInput,} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors,laciColors,yesilColors } from '../theme'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';


export default function VaweScreen() {
  StatusBar.setHidden(true);
  const navigation = useNavigation();
  const [email,setEmail] = useState ('');
  
  return(
    <View style={styles.container}>
      <View style={styles.top}>
        <SafeAreaView >
          <View style={styles.box}>
            <TouchableOpacity onPress={()=> navigation.goBack()} className="p-3 rounded-tr-2xl rounded-bl-2xl ml-4 py-9">
              <Image source={require('../assets/icons/back.png')} className="w-4 h-8"/>
            </TouchableOpacity>
              <Svg 
                height={900}
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
            <Text className="p-9 text-xl px-5  py-5 " style={{color: yesilColors.bg, fontSize:30,fontWeight:"normal", marginTop:10,}}> Reset Passpword </Text>
            <Text className=" px-7 " style={{color:"#d5e7f3", fontSize:17,paddingTop:25}}>Enter your email adress and we'll send you a link to reset your password.</Text>
              <View className="px-8">
                <TextInput
                  className="p-2.5 px-6   text-white-600 rounded-full mb-3 border "
                  style={{color:"#778899", borderColor:"#778899", marginTop:35}}
                  value={email}
                  onChangeText={value => setEmail(value)}
                  placeholder='Email'
                  placeholderTextColor="white"></TextInput>
                <TouchableOpacity onPress={()=> navigation.navigate("Login")}
                  className="py-2.5  rounded-full"style={{marginTop:40,
                  elevation: 5, // Gölge yoğunluğunu ayarlayabilirsiniz
                  shadowColor: '#afbf36', // Gölge rengini belirleyebilirsiniz
                  shadowOffset: { width:3,height:6 }, // Gölge konumunu belirleyebilirsiniz
                  shadowOpacity: 1, // Gölge opaklığını ayarlayabilirsiniz
                  shadowRadius: 7.84, // Gölge yarıçapını belirleyebilirsiniz
                  borderRadius: 9999,
                  height: 60,
                  backgroundColor: 'transparent',}}>
                <LinearGradient
                  colors={['#afbf36', '#555d1b']} // Soldan sağa doğru geçiş yapılacak renkler
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={{borderRadius: 9999, height:50,marginTop:-7}}>
                </LinearGradient>
                  <Text className="text-xl  text-center text-white" style={{marginTop:-40}}> 
                    Send Reset Mail
                  </Text>
                </TouchableOpacity>
              </View>
            
              </Svg>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image  source={require('../assets/images/forgot.png')} style={{width: 450, height: 300,}} />
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
    height: 520,
    
  },
  
})