import React from 'react';
import { useMemo, ImageBackground, Dimensions, StatusBar, StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors, laciColors, yesilColors } from '../theme'
import { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { RadioButton } from 'react-native-paper';
import HeartButton from './HeratButton';
import HeartButton2 from './HeartButton2';
import { LinearGradient } from 'expo-linear-gradient';
import BottomBar from './BottomBar';


export default function NefesEgzersiziScreen() {
  StatusBar.setHidden(true);
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3; // Toplam adım sayısı

  const handleNextStep = () => {
    setCurrentStep((prevStep) => (prevStep < totalSteps ? prevStep + 1 : 1));
  };


  return (

    <View style={styles.container}>
      <ScrollView>{/*YUKARI-AŞAĞI KAYDIRMA BAŞLANGIÇ(TÜM EKRAN)*/}
        <View style={styles.top}>
          <SafeAreaView >
            <ImageBackground
              source={require('../assets/images/egzersiz.jpg')}
              style={styles.box}
              imageStyle={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }} />
          </SafeAreaView>
        </View>
        <View className="flex-row" style={{ marginTop: -250, marginHorizontal: 40, }}>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={{ marginHorizontal: -20, marginTop: 50, }} source={require('../assets/icons/Beyaz-back.png')} className="w-4 h-8"></Image>
          </TouchableOpacity>
          <Text style={{ fontSize: 25, color: "white", marginTop: 50, marginHorizontal: 20, }}> NEFES EGZERSİZİ</Text>

        </View>

        <TouchableOpacity
          className="py-3  rounded-full  " style={{
            marginBottom: -50,
            marginTop: 120,
            marginHorizontal: 105,
            elevation: 4, // Gölge yoğunluğunu ayarlayabilirsiniz
            shadowColor: '#213a59', // Gölge rengini belirleyebilirsiniz
            shadowOffset: { width: 3, height: 6 }, // Gölge konumunu belirleyebilirsiniz
            shadowOpacity: 1, // Gölge opaklığını ayarlayabilirsiniz
            shadowRadius: 7.84, // Gölge yarıçapını belirleyebilirsiniz
            borderRadius: 9999,
            height: 75,
            width: 190,
            backgroundColor: 'transparent',
          }}
          onPress={() => navigation.navigate('Sozlesme')}
        >
          <LinearGradient
            colors={['#213a59', '#213a59']} // Soldan sağa doğru geçiş yapılacak renkler
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{ borderRadius: 9999, height: 55, marginTop: 1 }}>
            <View className="flex-row">
              <View>
                <Image source={require('../assets/icons/time.png')} className="w-7 h-7 " style={{ marginHorizontal: 40, marginTop: 13 }} />

              </View>
              <Text style={{ color: "white", fontSize: 20, marginHorizontal: -30, marginTop: 13 }}>5 dakika</Text>

            </View>
          </LinearGradient>
        </TouchableOpacity>
        <View>
          <Text style={{ color: "black", fontSize: 15, paddingTop: 95, marginHorizontal: 55 }}>Lorem ipsum dolor sit amet, consecttetur adipiscing elit. Nunc vulputate libero et velit interdum, ac alipuet odio mattis.</Text>
        </View>
        <View style={styles.imageGolge}></View>
        <View style={styles.container2}>

          <TouchableOpacity onPress={handleNextStep}>
            <Image source={require('../assets/icons/ileriYesil.png')} className="w-4 h-4" style={{ marginHorizontal: 305, marginTop: 20, }}></Image>
          </TouchableOpacity>
          {currentStep === 1 && (
            <Text style={styles.stepText}>1-Lorem ipsum dolor sit amet consectetur adipiscing elit.</Text>
          )}
          {currentStep === 2 && (
            <Text style={styles.stepText}>2-Lorem ipsum dolor sit amet consectetur adipiscing elit.</Text>
          )}
          {currentStep === 3 && (
            <Text style={styles.stepText}>3-Lorem ipsum dolor sit amet consectetur adipiscing elit.</Text>
          )}
        </View>
        {/* Gösterge Noktaları */}
        <View style={styles.indicatorContainer}>
          {[...Array(totalSteps)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentStep === index + 1 && styles.activeIndicator
              ]}
            />
          ))}
        </View>
      </ScrollView>
      {/*YUKARI-AŞAĞI KAYDIRMA BİTİŞ(TÜM EKRAN)*/}

      <View>
        <BottomBar/>
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
    height: 250,
    borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
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
  stepText: {
    fontSize: 26,
    marginBottom: 10,
    marginHorizontal: 85,
    marginTop: -10,
    color: "white",
  },
  container2: {
    backgroundColor: '#213a59',
    height: 230,
    width: 340,
    marginHorizontal: 26,
    marginTop: -235,
    borderRadius: 11,
    marginBottom: 10,
  },
  imageGolge: {
    shadowColor: "#213a59",

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    elevation: 4,
    marginTop: 20,
    marginHorizontal: 15,
    marginRight: -10,
    marginLeft: 17,
    height: 250,
    width: 360,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
    marginTop: -100,
  },
  activeIndicator: {
    backgroundColor: '#afbf36',
  },








})