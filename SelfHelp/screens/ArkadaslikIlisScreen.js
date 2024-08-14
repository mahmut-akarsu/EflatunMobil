import React from 'react';
import { useMemo,ImageBackground,Dimensions, StatusBar, StyleSheet, View ,Text, TouchableOpacity,Image,TextInput,ScrollView} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors,laciColors,yesilColors } from '../theme'
import { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { RadioButton } from 'react-native-paper';
import HeartButton from './HeratButton';
import HeartButton2 from './HeartButton2';
import { LinearGradient } from 'expo-linear-gradient';
import BottomBar from './BottomBar';








export default function AnaSayfaScreen() {
  StatusBar.setHidden(true);
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(1);
  const [sectionUnlocked, setSectionUnlocked] = useState(false);

  const handleStepComplete = (step) => {
    setCurrentStep(step);
    if (step === 3) {
      setSectionUnlocked(true);
    }
  };

  
  
  return(
    
    <View style={styles.container}>
      <ScrollView>{/*YUKARI-AŞAĞI KAYDIRMA BAŞLANGIÇ(TÜM EKRAN)*/}
      <View style={styles.top}>
      <SafeAreaView >
      <ImageBackground 
            source={require('../assets/images/arkadaslik-iliski.jpg')} 
            style={styles.box}
            imageStyle={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}/>
            </SafeAreaView>
            </View>
            <View className="flex-row" style={{marginTop:-250,marginHorizontal:40,}}>
              <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Image source={require('../assets/icons/backlaci.png')} className="w-4 h-8"></Image>
              </TouchableOpacity>
              <Text style={{fontSize:25,color:"#213a59",marginTop:-2,}}> ARKADAŞLIK İLİŞKİSİ</Text>

            </View>
            
            <TouchableOpacity
                className="py-3  rounded-full  " style={{marginBottom:-50,
                  marginTop:175,
                  marginHorizontal:105,
                  elevation: 4, // Gölge yoğunluğunu ayarlayabilirsiniz
                shadowColor: '#213a59', // Gölge rengini belirleyebilirsiniz
                shadowOffset: { width:3,height:6 }, // Gölge konumunu belirleyebilirsiniz
                shadowOpacity: 1, // Gölge opaklığını ayarlayabilirsiniz
                shadowRadius: 7.84, // Gölge yarıçapını belirleyebilirsiniz
                borderRadius: 9999,
                height: 75,
                width:190,
                backgroundColor: 'transparent',
                }}
                onPress={()=> navigation.navigate('Sozlesme')}
            >
                    <LinearGradient
                        colors={['#213a59', '#213a59']} // Soldan sağa doğru geçiş yapılacak renkler
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={{borderRadius: 9999, height:55,marginTop:1}}>
                        <View className="flex-row">
                <View>
              <Image source={require('../assets/icons/time.png')} className="w-6 h-6 " style={{marginHorizontal:42,marginTop:8}} />
              <Text style={{color:"white",fontSize:10,marginHorizontal:39,marginTop:2}}>5.hafta</Text>
              </View>
              <View>
              <Image source={require('../assets/icons/clipboard.png')} className="w-7 h-7" style={{marginHorizontal:-1,marginTop:5}}/>
              <Text style={{color:"white",fontSize:10,marginHorizontal:-10,marginTop:1}}>20.etkinlik</Text>
              </View>
              </View>
                      </LinearGradient>
            </TouchableOpacity>
            



    <View>
    <Text style={{color:"black", fontSize:15,paddingTop:55,marginHorizontal:55}}>Lorem ipsum dolor sit amet, consecttetur adipiscing elit. Nunc vulputate libero et velit interdum, ac alipuet odio mattis.</Text>
    </View>
    <Text style={styles.stepText}>Adım {currentStep}/3</Text>
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarForeground, { width: `${(currentStep / 3) * 100}%` }]} />
      </View>

     <View style={styles.sectionContainer} >
        <Text style={styles.sectionTitle}>1.BÖLÜM</Text>
        <TouchableOpacity style={styles.iconContainer} onPress={() => handleStepComplete(currentStep)}>
          <Image source={require('../assets/icons/down-arrow.png')} className="w-4 h-8" style={styles.icon} />
        </TouchableOpacity>
        </View>
        <View style={styles.sectionContainer2}>
        <View style={styles.stepsContainer}>
          <TouchableOpacity style={styles.step} onPress={() => handleStepComplete(1)}>
            <Text style={styles.stepText}>1.Adım</Text>
            {currentStep >= 1 && <Text style={styles.checkmark}>✓</Text>}
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.step} onPress={() => handleStepComplete(2)}>
            <Text style={styles.stepText}>2.Adım</Text>
            {currentStep >= 2 && <Text style={styles.checkmark}>✓</Text>}
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.step} onPress={() => handleStepComplete(3)}>
            <Text style={styles.stepText}>3.Adım</Text>
            {currentStep >= 3 && <Text style={styles.checkmark}>✓</Text>}
            
          </TouchableOpacity>
        </View></View>
      

      <View style={styles.sectionContainer3} >
        <Text style={styles.sectionTitle}>2.BÖLÜM</Text>
        {sectionUnlocked ? (
          <View style={styles.unlockedContainer}>
            <Text>Bölüm Açıldı!</Text>
          </View>
          ) : (
            <View style={styles.lockedContainer}>
              <Image source={require('../assets/icons/lock.png')} className="w-4 h-8"git style={styles.lockIcon} />
            </View>
          )}
          </View>
        
</ScrollView>{/*YUKARI-AŞAĞI KAYDIRMA BİTİŞ(TÜM EKRAN)*/}

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
    height: 300,
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
    fontSize: 16,
    marginBottom: 10,
    marginHorizontal:55,
    marginTop:1,
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    marginHorizontal:40,
  },
  progressBarForeground: {
    height: 10,
    backgroundColor: '#afbf36',
    borderRadius: 5,
  },
  sectionContainer: {
    marginBottom: 20,
    marginTop:20,
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#213a59',
    width:350,
    marginHorizontal:20,
    
  },
  sectionContainer3: {
    marginBottom: 90,
    marginTop:20,
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#213a59',
    width:350,
    marginHorizontal:20,
    
  },
  sectionContainer2: {
    marginBottom: 20,
    marginTop:-20,
    padding: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#d5e7f3',
    width:350,
    marginHorizontal:20,
    
  },
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 7,
  },
  iconContainer: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  icon: {
    width: 25,
    height: 25,
    marginHorizontal:-30,
   
  },
  stepsContainer: {
    marginTop: 10,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkmark: {
    color: '#afbf36',
    marginLeft: -150,
    marginBottom: 9,
    
  },
  lockedContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    

  },
  lockIcon: {
    width: 25,
    height: 25,
    marginLeft:290,
    marginTop: -40
  },
  unlockedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  
  
  
  
  
  
})