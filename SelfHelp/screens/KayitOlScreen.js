import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView ,Dimensions} from 'react-native'
import React, { useMemo, useState } from 'react'
import { laciColors, themeColors,yesilColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import RadioGroup from 'react-native-radio-buttons-group';
import Svg, { Path } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

export default function KayitOlScreen() {

    const [isChecked, setChecked] = useState(false);
    const [selectedId, setSelectedId] = useState();
    const navigation = useNavigation();
    const [email,setEmail] = useState ('');
    const[username,setUsername]=useState('');
    const [password,setPassword] = useState ('');
    const [error, setError] = useState('');

    const handleSubmit = async () => {
      try {
        if(username==''){
          setError("lütfen bir kullanıcı adı girin")
          console.log(error);
          return
        }
        if(password==''){
          setError("lütfen bir şifre girin")
          console.log(error);
          return
        }
        const response = await axios.post('http://192.168.1.4:3000/auth/register', {
          username,
          password,
        });
        navigation.navigate('Sozlesme');
      } catch (e) {
        console.log(`username: ${username} \n şifre: ${password}`);
        console.log("işlem başarısız: "+e);
        setError(e.response?.data?.message);
      }
    };
  return (
    <ScrollView>
    <View className="flex-1 bg-white" >
      <SafeAreaView className="flex "  >
        <View className="flex-row justify-start" >
        <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="p-2 rounded-tr-2xl rounded-bl-2xl ml-4" >
                <Image source={require('../assets/icons/back.png')} 
                    className="w-5 h-7" style={{marginTop:15}} />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center" style={{marginBottom:4}}>
        <Image source={require('../assets/images/uygulama.png')} 
          className="flex-row justify-center"
          style={{width: 300, height: 200, marginTop:-100,
          }} />
          
        </View>
        <View  className="flex-row justify-center">
            <Image source={require('../assets/images/kayit.png')} 
          style={{width: 350, height: 200,alignItems: 'center',marginTop:-60,marginBottom:-20}} />
        </View>
         </SafeAreaView>
         <View style={styles.bottom}>
         <View style={styles.box}>
        <Svg
            height={90}
            width={400}
            viewBox="0 0 1440 320"
            style={styles.bottomWavy}
            marginTop={-88}
            marginLeft= {0.4}>
          <Path
              fill="#213a59"
              d="M0,160L48,165.3C96,171,192,181,288,208C384,235,480,277,576,293.3C672,309,768,299,864,266.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
        </Svg>
        {/* <Text >{error}</Text> 
        burada örnek bir error ui ilişkisi var. 
        error state'indeki değer ui de gösterilebilir*/}
      <View className="flex-1 bg-white px-8 pt-8" style={{backgroundColor:laciColors.bg}}>
        <View className="form space-y-1">
            <Text className=" text-xl font-semibold text-black-700  py-1 " style={{color: yesilColors.bg, fontSize:25,fontWeight:"normal",marginTop:-40}}> Sign Up </Text>
            <Text className="text-white-700 ml-1" style={{color: "white"}} >Username</Text>
            <TextInput
                className="p-2.5  text-white-600 rounded-full mb-3 border "
                style={{color:"white",borderColor:"#294666"}}
                value={username}
                onChangeText={value => setUsername(value)}
                placeholder='martin_eden'
                placeholderTextColor="#778899"
            />
            <Text className="text-white-700 ml-1" style={{color: "white"}}>Email </Text>
            <TextInput
                className="p-2.5  text-white-700 rounded-full mb-3 border "
                style={{color:"white",borderColor:"#294666"}}
                value={email}
                onChangeText={value => setEmail(value)}
                placeholder='martin_eden@domain.com'
                placeholderTextColor="#778899"
            />
            <Text className="text-gray-700 ml-1 " style={{color: "white"}}>Password</Text>
            <TextInput
                className="p-2.5  text-gray-700 rounded-full mb-7 border "
                style={{color:"white",borderColor:"#294666"}}
                secureTextEntry
                value={password}
                onChangeText={value => setPassword(value)}               
            />

            <TouchableOpacity
                className="py-3  rounded-full " style={{marginBottom:-20,
                  elevation: 5, // Gölge yoğunluğunu ayarlayabilirsiniz
                shadowColor: '#afbf36', // Gölge rengini belirleyebilirsiniz
                shadowOffset: { width:3,height:6 }, // Gölge konumunu belirleyebilirsiniz
                shadowOpacity: 1, // Gölge opaklığını ayarlayabilirsiniz
                shadowRadius: 7.84, // Gölge yarıçapını belirleyebilirsiniz
                borderRadius: 9999,
                height: 60,
                backgroundColor: 'transparent',
                }}
                onPress={handleSubmit}
            >
              <LinearGradient
               colors={['#afbf36', '#555d1b']} // Soldan sağa doğru geçiş yapılacak renkler
               start={{ x: 0, y: 0.5 }}
               end={{ x: 1, y: 0.5 }}
               style={{borderRadius: 9999, height:50,marginTop:-10}}>
                <Text className="  font-xl  text-center text-white" style={{fontSize:20,marginTop:10}}> 
                    Create Account
                </Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-500  text-center py-5">
            or sign up with
        </Text>
        <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2  rounded-2xl">
                <Image source={require('../assets/icons/google.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2  rounded-2xl">
                <Image source={require('../assets/icons/twitter.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity> 
        </View>
        <View className="flex-row justify-center mt-9">   
        </View>
      </View>
      </View>
      </View>
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    top: {
    },
    bottom: {
      
      width: Dimensions.get('screen').width,
      bottom: -6,
      
    },
    box: {
      backgroundColor: '#213a59',
      height: 550,
      
    },
    
  })

