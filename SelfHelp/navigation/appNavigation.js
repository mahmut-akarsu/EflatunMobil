import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import useAuth from '../hooks/useAuth';
import KayitOlScreen from '../screens/KayitOlScreen';
import SozlesmeScreen from '../screens/SozlesmeScreen';
import KullaniciSozScreen from '../screens/KullaniciSozScreen';
import KVKKScreen from '../screens/KVKKScreen';
import ForgotScreen from '../screens/ForgotScreen';
import Soru_5Screen from '../screens/Soru_5Screen';
import AnaSayfaScreen from '../screens/AnaSayfaScreen';
import SelfTerapScreen from '../screens/SelfTerapScreen';
import ArkadaslikIlisScreen from '../screens/ArkadaslikIlisScreen';
import PodcastScreen from '../screens/PodcastScreen';
import PlatonikAskScreen from '../screens/PlatonikAskScreen';
import GuncelYazilarScreen from '../screens/GuncelYazilarScreen';
import ArkilşDuyEtkisiScreen from '../screens/ArkilşDuyEtkisiScreen';
import EgzersizlerScreen from '../screens/EgzersizlerScreen';
import NefesEgzersiziScreen from '../screens/NefesEgzersiziScreen';
import ProfilScreen from '../screens/ProfilScreen';
import HakkimizdaScreen from '../screens/HakkimizdaScreen';
import iletisimScreen from '../screens/iletisimScreen';
import AdSoyadScreen from '../screens/AdSoyadScreen';
import FavorilerScreen from '../screens/FavorilerScreen';
import Soru_2Screen from '../screens/Soru_2Screen';
import Soru_1Screen from '../screens/Soru_1Screen';
import Soru_3Screen from '../screens/Soru_3Screen';
import Soru_4Screen from '../screens/Soru_4Screen';
import Soru_6Screen from '../screens/Soru_6Screen';
import Soru_7Screen from '../screens/Soru_7Screen';
import Soru_8Screen from '../screens/Soru_8Screen';
import Soru_9Screen from '../screens/Soru_9Screen';
import Soru_10Screen from '../screens/Soru_10Screen';
import Soru_11Screen from '../screens/Soru_11Screen';
import Soru_12Screen from '../screens/Soru_12Screen';












const Stack = createNativeStackNavigator();




export default function AppNavigation() {
  const { user } = useAuth();
  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        </Stack.Navigator>

      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
          <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
          <Stack.Screen name="KayitOl" options={{headerShown: false}} component={KayitOlScreen} />
          <Stack.Screen name="Sozlesme" options={{headerShown: false}} component={SozlesmeScreen} />
          <Stack.Screen name="KullaniciSoz" options={{headerShown: false}} component={KullaniciSozScreen} />
          <Stack.Screen name="KVKK" options={{headerShown: false}} component={KVKKScreen} />
          <Stack.Screen name="Forgot" options={{headerShown: false}} component={ForgotScreen} />
          <Stack.Screen name="Soru_5" options={{headerShown: false}} component={Soru_5Screen} />
          <Stack.Screen name="AnaSayfa" options={{headerShown: false}} component={AnaSayfaScreen} />
          <Stack.Screen name="SelfTerapiler" options={{headerShown: false}} component={SelfTerapScreen} />
          <Stack.Screen name="ArkadaslikIliskileri" options={{headerShown: false}} component={ArkadaslikIlisScreen} />
          <Stack.Screen name="Podcast" options={{headerShown: false}} component={PodcastScreen} />
          <Stack.Screen name="PlatonikAsk" options={{headerShown: false}} component={PlatonikAskScreen} />
          <Stack.Screen name="GuncelYazilar" options={{headerShown: false}} component={GuncelYazilarScreen} />
          <Stack.Screen name="ArkilşDuyEtkisi" options={{headerShown: false}} component={ArkilşDuyEtkisiScreen} />
          <Stack.Screen name="Egzersizler" options={{headerShown: false}} component={EgzersizlerScreen} />
          <Stack.Screen name="NefesEgzersizi" options={{headerShown: false}} component={NefesEgzersiziScreen} />
          <Stack.Screen name="Profil" options={{headerShown: false}} component={ProfilScreen} />
          <Stack.Screen name="Hakkimizda" options={{headerShown: false}} component={HakkimizdaScreen} />
          <Stack.Screen name="iletisim" options={{headerShown: false}} component={iletisimScreen} />
          <Stack.Screen name="AdSoyad" options={{headerShown: false}} component={AdSoyadScreen} />
          <Stack.Screen name="Favoriler" options={{headerShown: false}} component={FavorilerScreen} />
          <Stack.Screen name="Soru_2" options={{headerShown: false}} component={Soru_2Screen} />
          <Stack.Screen name="Soru_1" options={{headerShown: false}} component={Soru_1Screen} />
          <Stack.Screen name="Soru_3" options={{headerShown: false}} component={Soru_3Screen} />
          <Stack.Screen name="Soru_4" options={{headerShown: false}} component={Soru_4Screen} />
          <Stack.Screen name="Soru_6" options={{headerShown: false}} component={Soru_6Screen} />
          <Stack.Screen name="Soru_7" options={{headerShown: false}} component={Soru_7Screen} />
          <Stack.Screen name="Soru_8" options={{headerShown: false}} component={Soru_8Screen} />
          <Stack.Screen name="Soru_9" options={{headerShown: false}} component={Soru_9Screen} />
          <Stack.Screen name="Soru_10" options={{headerShown: false}} component={Soru_10Screen} />
          <Stack.Screen name="Soru_11" options={{headerShown: false}} component={Soru_11Screen} />
          <Stack.Screen name="Soru_12" options={{headerShown: false}} component={Soru_12Screen} />


        </Stack.Navigator>
      </NavigationContainer>
    )
  }



}