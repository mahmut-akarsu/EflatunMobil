import React, { useEffect } from 'react';
import { useMemo, Dimensions, StatusBar, StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors, laciColors, yesilColors } from '../theme'
import { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { RadioButton } from 'react-native-paper';
import HeartButton from './HeratButton';
import HeartButton2 from './HeartButton2';
import { ScreenStackHeaderSearchBarView } from 'react-native-screens';
import { FontAwesome } from '@expo/vector-icons';
import BottomBar from './BottomBar';
import AsyncStorage from '@react-native-async-storage/async-storage';





export default function AnaSayfaScreen() {
  StatusBar.setHidden(true);
  const [isEditing, setEditing] = useState(null); // null, username, email veya password olabilir
  const [isEditingUsername, setEditingUsername] = useState(false);
  const [isEditingEmail, setEditingEmail] = useState(false);
  const [isEditingPassword, setEditingPassword] = useState(false);

  const navigation = useNavigation();
  const [userData, setUserData] = useState({
    username: 'username',
    email: 'martin_eden@domain.com',
    password: '********',
  });

 
  useEffect(() => {
    const getEmail = async () => {
      try {
        const user_mail = await AsyncStorage.getItem('email');
        if (user_mail) {
          setUserData(prevState => ({
            ...prevState, // mevcut state'i koru
            email: user_mail // sadece email'i güncelle
          }));
        }
      } catch (error) {
        console.error('Error fetching email:', error);
      }
    };

    getEmail();
  }, []);


  return (
    <View style={styles.container}>
      <SafeAreaView >
        <View style={styles.top}>

          <View style={styles.box}>
            <View className="flex-row" style={{ marginBottom: -30 }}>
              <TouchableOpacity onPress={() => navigation.goBack()} className="p-3 rounded-tr-2xl rounded-bl-2xl ml-4 py-9">
                <Image source={require('../assets/icons/backlaci.png')} className="w-4 h-9" />
              </TouchableOpacity>
            </View>
            <View>
              <Image source={require('../assets/images/profil.png')} style={{ height: 140, width: 140, borderRadius: 100, marginTop: 16, marginBottom: -90, zIndex: 20, marginHorizontal: 135 }} />
            </View>
            <Svg
              height={200}
              marginLeft={0.4}
              width={400}
              viewBox="0 0 1440 320"
              style={styles.topWavy}>
              <Path
                fill='#afbf36'
                fillOpacity="0.2"
                d="M0,192L60,160C120,128,240,64,360,80C480,96,600,192,720,202.7C840,213,960,139,1080,96C1200,53,1320,43,1380,37.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                transform="translate(0,40)" />
              <Path
                fill='#afbf36'
                d="M0,192L60,160C120,128,240,64,360,80C480,96,600,192,720,202.7C840,213,960,139,1080,96C1200,53,1320,43,1380,37.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
            </Svg>
          </View>

        </View>
      </SafeAreaView>
      <ScrollView>{/*YUKARI-AŞAĞI KAYDIRMA BAŞLANGIÇ(TÜM EKRAN)*/}


        <Text style={{ marginHorizontal: 155, marginTop: 65, fontSize: 20, fontWeight: "bold", marginLeft: 135, marginRight: 20, }}>..username..</Text>



        <View style={styles.userInfo}>
          <View style={styles.userItem}>
            <Image
              style={{ height: 35, width: 35, marginTop: 15, marginHorizontal: 25 }}
              source={require('../assets/icons/userlaci.png')}
            />
            {!isEditingUsername ? (
              <Text style={{ marginTop: -25, marginHorizontal: 70, fontSize: 17 }}>
                {userData.username}
              </Text>
            ) : (
              <TextInput
                value={userData.username}
                onChangeText={(text) => setUserData({ ...userData, username: text })}
                style={{ marginTop: -40, marginHorizontal: 70, borderWidth: 1, padding: 3, width: 200 }}
              />
            )}
            <TouchableOpacity onPress={() => setEditingUsername(!isEditingUsername)}>
              <Image
                style={{ height: 27, width: 27, marginHorizontal: 320, marginTop: -23 }}
                source={require('../assets/icons/pencil.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-2" style={styles.userInfo}>
          <View style={styles.userItem}>
            <Image
              style={{ height: 35, width: 35, marginTop: 15, marginHorizontal: 25 }}
              source={require('../assets/icons/email.png')}
            />
            {!isEditingEmail ? (
              <Text style={{ marginTop: -25, marginHorizontal: 70, fontSize: 17 }}>
                {userData.email}
              </Text>
            ) : (
              <TextInput
                value={userData.email}
                onChangeText={(text) => setUserData({ ...userData, email: text })}
                style={{ marginTop: -40, marginHorizontal: 70, borderWidth: 1, padding: 3, width: 200 }}
              />
            )}
            <TouchableOpacity onPress={() => setEditingEmail(!isEditingEmail)}>
              <Image
                style={{ height: 27, width: 27, marginHorizontal: 320, marginTop: -23 }}
                source={require('../assets/icons/pencil.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-2" style={styles.userInfo}>
          <View style={styles.userItem}>
            <Image
              style={{ height: 35, width: 35, marginTop: 15, marginHorizontal: 25 }}
              source={require('../assets/icons/sifre.png')}
            />
            {!isEditingPassword ? (
              <Text style={{ marginTop: -25, marginHorizontal: 70, fontSize: 17 }}>
                {/* Şifreyi yıldızlarla maskeleyerek göster */}
                {'*'.repeat(userData.password.length)}
              </Text>
            ) : (
              <TextInput
                value={userData.password}
                onChangeText={(text) => setUserData({ ...userData, password: text })}
                style={{ marginTop: -40, marginHorizontal: 70, borderWidth: 1, padding: 3, width: 200 }}
                // Şifre gizleme özelliğini aktifleştir
                secureTextEntry={true}
              />
            )}
            <TouchableOpacity onPress={() => setEditingPassword(!isEditingPassword)}>
              <Image
                style={{ height: 27, width: 27, marginHorizontal: 320, marginTop: -23 }}
                source={require('../assets/icons/pencil.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View className="mt-2">
            <TouchableOpacity onPress={() => navigation.navigate('AnaSayfa')}>
              <View className="flex-row">
                <Image style={{ height: 40, width: 40, marginHorizontal: 20, marginTop: 15 }} source={require('../assets/icons/clip-board-laci.png')} />
                <Text style={{ marginHorizontal: -10, marginTop: 24, fontSize: 17 }}>Terapilerim</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="mt-2">
            <TouchableOpacity onPress={() => navigation.navigate('Hakkimizda')}>
              <View className="flex-row">
                <Image style={{ height: 35, width: 35, marginHorizontal: 23, marginTop: 15 }} source={require('../assets/icons/info.png')} />
                <Text style={{ marginHorizontal: -10, marginTop: 20, fontSize: 17 }}>Hakkımızda</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="mt-2">
            <TouchableOpacity onPress={() => navigation.navigate('AnaSayfa')}>
              <View className="flex-row">
                <Image style={{ height: 35, width: 35, marginHorizontal: 23, marginTop: 15 }} source={require('../assets/icons/setting.png')} />
                <Text style={{ marginHorizontal: -10, marginTop: 20, fontSize: 17 }}>Ayarlar</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="mt-2">
            <TouchableOpacity onPress={() => navigation.navigate('iletisim')}>
              <View className="flex-row">
                <Image style={{ height: 35, width: 35, marginHorizontal: 23, marginTop: 15 }} source={require('../assets/icons/phone.png')} />
                <Text style={{ marginHorizontal: -10, marginTop: 20, fontSize: 17 }}>Bizimle İletişime Geç</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>{/*YUKARI-AŞAĞI KAYDIRMA BİTİŞ(TÜM EKRAN)*/}



      {/*BOTTOM BAR*/}
      <View>
        <BottomBar />
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

  box: {
    backgroundColor: '#afbf36',
    height: 200,

  },
  bottom: {
    backgroundColor: '#213a59', // Renk isteğinize göre değiştirin
    height: 70, // Yüksekliği isteğinize göre ayarlayın
    justifyContent: 'center', // İçeriği ortalamak için
    alignItems: 'center', // İçeriği ortalamak için
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 10, borderTopRightRadius: 10,
  },
  imageGolge: {
    shadowColor: "#213a59",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    elevation: 4,
    marginTop: 100,
    marginHorizontal: 18,
    marginRight: -10,
    marginLeft: 24,
    height: 165,
    width: 165,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

  },

  textBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // Yarı saydam arka plan rengi
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 17,
    width: 151,
    height: 60,
    marginHorizontal: 8,
    marginBottom: 40,

  },




})