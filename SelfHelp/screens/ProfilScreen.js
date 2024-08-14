import React from 'react';
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





export default function AnaSayfaScreen() {
  StatusBar.setHidden(true);
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('first');
  const [selectedId, setSelectedId] = useState();
  const [isEditing, setIsEditing] = useState({
    username: false,
    email: false,
    password: false,
  });

  const [profile, setProfile] = useState({
    username: 'Username',
    email: 'martin_eden@domain.com',
    password: '**********',
  });

  const handleEdit = (field) => {
    setIsEditing((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleChange = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  }


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
            <Svg
              height={300}
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

        <Text style={{ marginHorizontal: 155, marginTop: 65, fontSize: 20, fontWeight: "bold", marginLeft: 135, marginRight: 20, }}>..USERNAME..</Text>

        <TouchableOpacity onPress={() => navigation.navigate('AnaSayfa')}>
          <View className="flex-row">
            <Image style={{ height: 35, width: 35, marginHorizontal: 20, marginTop: 15 }} source={require('../assets/icons/clip-board-laci.png')} />
            <Text style={{ marginHorizontal: -10, marginTop: 18, fontSize: 17 }}>Terapilerim</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AnaSayfa')}>
          <View className="flex-row">
            <Image style={{ height: 29, width: 29,marginHorizontal: 23, marginTop: 15 }} source={require('../assets/icons/info.png')} />
            <Text style={{ marginHorizontal: -10, marginTop: 17, fontSize: 17 }}>Hakkımızda</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AnaSayfa')}>
          <View className="flex-row">
            <Image style={{ height: 35, width: 35, marginHorizontal: 20, marginTop: 15 }} source={require('../assets/icons/setting.png')} />
            <Text style={{ marginHorizontal: -10, marginTop: 24, fontSize: 20 }}>Ayarlar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AnaSayfa')}>
          <View className="flex-row">
            <Image style={{ height: 35, width: 35, marginHorizontal: 20, marginTop: 15 }} source={require('../assets/icons/phone.png')} />
            <Text style={{ marginHorizontal: -10, marginTop: 24, fontSize: 20 }}>Bizimle iletişime Geç</Text>
          </View>
        </TouchableOpacity>




      </ScrollView>{/*YUKARI-AŞAĞI KAYDIRMA BİTİŞ(TÜM EKRAN)*/}



      {/*BOTTOM BAR*/}
      <View style={styles.bottom}>
        <View className="flex-row">
          {/*ANA SAYFA*/}
          <TouchableOpacity onPress={() => navigation.navigate('AnaSayfa')}>
            <View style={{ marginHorizontal: -6 }}>
              <Image source={require('../assets/icons/home.png')} style={{ width: 30, height: 30, marginHorizontal: 20 }} />
              <Text style={{ color: "white", marginRight: 15, marginHorizontal: 5 }}>Ana Sayfa </Text>
            </View>
          </TouchableOpacity>
          {/*FAVORİLER*/}
          <TouchableOpacity onPress={() => navigation.navigate('AnaSayfa')}>
            <View>
              <Image source={require('../assets/icons/heart.png')} style={{ width: 30, height: 30, marginHorizontal: 20 }} />
              <Text style={{ color: "white", marginRight: 15, marginHorizontal: 3 }}>Favorilerim </Text>
            </View>
          </TouchableOpacity>
          {/*CHATBOT*/}
          <TouchableOpacity onPress={() => navigation.navigate('AnaSayfa')}>
            <View>
              <Image source={require('../assets/icons/message.png')} style={{ width: 30, height: 30, marginHorizontal: 10 }} />
              <Text style={{ color: "white" }}>Chatbot </Text>
            </View>
          </TouchableOpacity>
          {/*TAKVİMİM*/}
          <TouchableOpacity onPress={() => navigation.navigate('AnaSayfa')}>
            <View style={{ marginRight: -5 }}>
              <Image source={require('../assets/icons/calendar.png')} style={{ width: 30, height: 30, marginHorizontal: 25 }} />
              <Text style={{ color: "white", marginHorizontal: 10 }}>Takvimim </Text>
            </View>
          </TouchableOpacity>
          {/*PROFİLİM*/}
          <TouchableOpacity onPress={() => navigation.navigate('AnaSayfa')}>
            <View style={{ marginRight: -13 }}>
              <Image source={require('../assets/icons/user.png')} style={{ width: 30, height: 30, marginHorizontal: 20 }} />
              <Text style={{ color: "white", marginHorizontal: 10 }}>Profilim </Text>
            </View>
          </TouchableOpacity>
        </View>
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
    height: 190,

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