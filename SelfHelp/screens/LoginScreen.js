import { View, ScrollView, Text, TouchableOpacity, Image, TextInput, Dimensions, StatusBar, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { laciColors, themeColors, yesilColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import Svg, { Path } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { baseApi } from '../config'



export default function LoginScreen() {
  StatusBar.setHidden(true);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Hata", "Email ve şifre alanları boş bırakılamaz! Lütfen bu alanlari doldurarak tekrar deneyiniz.");
      return;
    }

    try {
      const response = await fetch(`${baseApi}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Token'ı AsyncStorage'a kaydet
        await AsyncStorage.setItem('token', data.data.token);
        //emaili al
        await AsyncStorage.setItem('email', email);

        
        navigation.navigate("DenemeAnasayfa");
      } else {
        Alert.alert("Hata", data.message || "Giriş başarısız!");
        console.log(response.status);
      }
    } catch (error) {
      console.log("sıkıntı var:" + error);
      console.log(baseApi);
      Alert.alert("Hata", "Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };


  return (
    <ScrollView>
      <View className="flex-1 bg-white" >
        <SafeAreaView className="flex" >
          <View className="flex-row justify-start">
            <TouchableOpacity onPress={() => navigation.goBack()}
              className="p-2 rounded-tr-2xl rounded-bl-2xl ml-4" >
              <Image source={require('../assets/icons/back.png')}
                className="w-5 h-7" style={{ marginTop: 15 }} />
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
              <Image source={require('../assets/images/uygulama.png')}
                className="flex-row justify-center"
                style={{ width: 300, height: 200, marginTop: -50 }} />
              <Image source={require('../assets/images/giris.png')}
                style={{ width: 280, height: 200, alignItems: 'center', marginTop: -60, marginBottom: -20 }} />
            </View>
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
              marginLeft={0.4}>
              <Path
                fill="#213a59"
                fillOpacity="0.2"
                d="M0,160L48,165.3C96,171,192,181,288,208C384,235,480,277,576,293.3C672,309,768,299,864,266.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                transform="translate(0,40)" />
              <Path
                fill="#213a59"
                d="M0,160L48,165.3C96,171,192,181,288,208C384,235,480,277,576,293.3C672,309,768,299,864,266.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
            </Svg>
            <View className="px-8">
              <Text className=" text-xl font-semibold font-bold py-1 " style={{ color: yesilColors.bg, fontSize: 25, fontWeight: "normal", marginBottom: 5, }}> Giriş Yap </Text>
              <View className="form space-y-2">
                <Text className=" ml-1" style={{ color: "white" }}> E-posta </Text>
                <TextInput
                  className="p-2.5 bg-gray-100  rounded-full mb-3 border " style={{ backgroundColor: laciColors.bg, borderColor: "#294666",color:"white" }}
                  placeholder="martin_eden"
                  placeholderTextColor="#778899"
                  value={email}
                  onChangeText={setEmail}
                />
                <TouchableOpacity onPress={() => navigation.navigate("Forgot")} className="flex mt-7">
                  <Text className=" text-right" style={{ color: "white", textDecorationLine: 'underline', marginBottom: -20, marginTop: -4 }}>Şifremi Unuttum?</Text>
                </TouchableOpacity>
                <Text className="text-gray-700 ml-1" style={{ color: "white" }}>Şifre</Text>
                <TextInput
                  className="p-2.5 bg-gray-100  rounded-full border " style={{ backgroundColor: laciColors.bg, marginBottom: 20, borderColor: "#294666",color:"white" }}
                  secureTextEntry
                  placeholder=""
                  placeholderTextColor="#778899"
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={handleSignIn}
                  className="py-2.5  rounded-full"
                  style={{
                    elevation: 5,
                    shadowColor: '#afbf36',
                    shadowOffset: { width: 3, height: 6 },
                    shadowOpacity: 1,
                    shadowRadius: 7.84,
                    borderRadius: 9999,
                    height: 60,
                    backgroundColor: 'transparent'
                  }}>
                  <LinearGradient
                    colors={['#afbf36', '#555d1b']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={{ borderRadius: 9999, height: 50, marginTop: -7 }}>
                    <Text className="text-xl  text-center text-white" style={{ marginTop: 9, marginLeft: -10 }}>
                      Giriş Yap
                    </Text>
                  </LinearGradient>
                </TouchableOpacity >
                
                <View className="flex-row justify-center mt-7 " >
                  <Text className=" " style={{ color: "white", marginTop: 25 }}>
                    Henüz hesabın yok mu?
                  </Text>
                  <TouchableOpacity onPress={() => navigation.navigate("KayitOl")}>
                    <Text className="font-semibold " style={{ color: "white", textDecorationLine: 'underline', marginBottom: 40, marginTop: 25 }}>Üye ol</Text>
                  </TouchableOpacity>
                </View>
                <View className="flex-row justify-center space-x-12" >
                  <TouchableOpacity className="p-2  ">
                    <Image source={require('../assets/icons/google.png')} className="w-10 h-10" />
                  </TouchableOpacity>
                  <TouchableOpacity className="p-2 ">
                    <Image source={require('../assets/icons/twitter.png')} className="w-10 h-10" />
                  </TouchableOpacity>
                  <TouchableOpacity className="p-2 " >
                    <Image source={require("../assets/icons/instagram.png")} className="w-10 h-10" />
                  </TouchableOpacity>
                </View>
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
    bottom: -10,
  },
  box: {
    backgroundColor: '#213a59',
    height: 550,
  },
})