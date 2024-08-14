import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" >
        <SafeAreaView  className="flex" >
        </SafeAreaView>
          <View>
            <Image source={require('../assets/images/welcome.jpg')} 
              style={{width: 400, height: 550, marginTop:-140,marginLeft:-7}} />
            <Text className=" text-center font-semibold  py-1 " style={{color: "black", fontSize:20,marginTop:-40}}> LOREM İPSUM DOLOR</Text>
            <Text className="  text-center py-9 ml-0 " style={{marginBottom:15, fontSize:15}}>Lorem ipsum dolor sit amet, consectetur,</Text>
          </View>
          <View>
            <TouchableOpacity  onPress={()=> navigation.navigate('Login')}
              className="py-3  rounded-full mx-14"
              style={{marginTop:20,
              elevation: 4, // Gölge yoğunluğu
              shadowColor: '#555d1b', // Gölge rengi
              shadowOffset: { width:3,height:6 }, // Gölge konumu
              shadowOpacity: 1, // Gölge opaklığı
              shadowRadius: 7.84, // Gölge yarıçapı
              borderRadius: 9999,
              height: 60,
              backgroundColor: 'transparent'}}>
            <LinearGradient
              colors={['#afbf36', '#555d1b']} // Soldan sağa doğru geçiş yapılacak renkler
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={{borderRadius: 9999, height:60,marginTop:-25}}>
                <Text className="  font-xl  text-center text-white" style={{fontSize:20,marginTop:14}}> 
                  GET STARTED
                </Text>
            </LinearGradient>
            </TouchableOpacity>
          <View  className="flex-row justify-center">
            <Image  source={require('../assets/images/uygulama.png')} 
            className="flex-row justify-center"
            style={{width: 500, height: 300, marginTop:-105,marginLeft:15}} />
          </View>
        </View>
    </View>
    )}