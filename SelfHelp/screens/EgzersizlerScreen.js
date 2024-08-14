import React from 'react';
import { useMemo,Dimensions, StatusBar, StyleSheet, View ,Text, TouchableOpacity,Image,TextInput,ScrollView} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors,laciColors,yesilColors } from '../theme'
import { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { RadioButton } from 'react-native-paper';
import HeartButton from './HeratButton';
import HeartButton2 from './HeartButton2';
import { ScreenStackHeaderSearchBarView } from 'react-native-screens';
import BottomBar from './BottomBar';





export default function AnaSayfaScreen() {
  StatusBar.setHidden(true);
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('first');
  const [selectedId, setSelectedId] = useState();
  
  
  return(
    <View style={styles.container}>
      <SafeAreaView >
      <View style={styles.top}>
        
          <View style={styles.box}>
            <View className="flex-row"style={{marginBottom:-30}}>
              <TouchableOpacity onPress={()=> navigation.goBack()}className="p-3 rounded-tr-2xl rounded-bl-2xl ml-4 py-9">
                  <Image source={require('../assets/icons/back.png')} className="w-4 h-8"  />
              </TouchableOpacity>
              <Text style={{marginTop:37,fontSize:22,color:"white",marginHorizontal:5}}>Egzersizler</Text>
            </View>
            <Svg 
              height={90}
              marginLeft= {0.4}
              width={400}
              viewBox="0 0 1440 320"
              style={styles.topWavy}>
              <Path   
                fill="#213a59" 
                fillOpacity="0.2"
                d="M0,128L80,128C160,128,320,128,480,144C640,160,800,192,960,192C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                transform="translate(0,40)"/>
              <Path
                fill="#213a59"
                d='M0,128L80,128C160,128,320,128,480,144C640,160,800,192,960,192C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'/>
            </Svg>
          </View>
        
      </View>
      </SafeAreaView>
      <ScrollView>{/*YUKARI-AŞAĞI KAYDIRMA BAŞLANGIÇ(TÜM EKRAN)*/}
  {/*İLİŞKİLER*/}
      
        <View className="flex-row" style={{marginTop:-30}} >
        
          <View style={styles.imageGolge}>
          <TouchableOpacity onPress={()=> navigation.navigate('NefesEgzersizi')}>
            <Image source={require('../assets/images/egzersiz.jpg')} 
              style={{width:150,height:150,marginHorizontal:9,marginTop:6,
              borderTopLeftRadius: 10, borderTopRightRadius: 10,borderBottomLeftRadius:10,borderBottomRightRadius:10,}}/>
                <View style={styles.textBox}>
                  <Text style={{fontSize:15,justifyContent:"center",marginBottom:-20,marginTop:-7,marginHorizontal:19,color:"white"}}>NEFES EGZERSİZİ</Text>
                </View>
                </TouchableOpacity>
          </View>
        
        
          <View style={styles.imageGolge}>
          <TouchableOpacity onPress={()=> navigation.navigate('Egzersizler')}>
            <Image source={require('../assets/images/egzersiz.jpg')} 
              style={{width:150,height:150,marginHorizontal:10,marginTop:6,
              borderTopLeftRadius: 10, borderTopRightRadius: 10,borderBottomLeftRadius:10,borderBottomRightRadius:10,}}/>


                </TouchableOpacity>
          </View>
          
        </View>    
        <View className="flex-row" style={{marginTop:-90}} >
        
          <View style={styles.imageGolge}>
          <TouchableOpacity onPress={()=> navigation.navigate('Egzersizler')}>
            <Image source={require('../assets/images/egzersiz.jpg')} 
              style={{width:150,height:150,marginHorizontal:9,marginTop:6,
              borderTopLeftRadius: 10, borderTopRightRadius: 10,borderBottomLeftRadius:10,borderBottomRightRadius:10,}}/>
               
                </TouchableOpacity>
          </View>
         
          
          <View style={styles.imageGolge}>
          <TouchableOpacity onPress={()=> navigation.navigate('Egzersizler')}>
            
                </TouchableOpacity>
          </View>

          
          
        </View> 

        <View className="flex-row" style={{marginTop:-90}} >
        
          <View style={styles.imageGolge}>
          <TouchableOpacity onPress={()=> navigation.navigate('Egzersizler')}>
            
                </TouchableOpacity>
          </View>
         
          <View style={{marginBottom:50}}>
          <View style={styles.imageGolge}>
          <TouchableOpacity onPress={()=> navigation.navigate('Egzersizler')}>
            
                </TouchableOpacity>
          </View></View>
          
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
    backgroundColor: '#213a59',
    height: 90,
    
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
	  height: 6,},
    shadowOpacity: 0.15,
    elevation: 4,
    marginTop:100,
    marginHorizontal:18,
    marginRight:-10, 
    marginLeft:24, 
    height:165,
    width:165,
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
    width:151,
    height:60,
    marginHorizontal:8,
    marginBottom:40,
  
  },
  
  
  
})