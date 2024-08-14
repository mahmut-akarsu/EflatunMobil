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
import HeartButton3 from './HeartButton3';





export default function BottomBar() {
  StatusBar.setHidden(true);
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('first');
  const [selectedId, setSelectedId] = useState();
  
  
  return(
    <View style={styles.container}>
      <View style={styles.top}>
      </View>



  {/*BOTTOM BAR*/}
          <View style={styles.bottom}> 
            <View className="flex-row"> 
              {/*ANA SAYFA*/}
              <TouchableOpacity onPress={()=> navigation.navigate('AnaSayfa')}>
                <View style={{marginHorizontal:-6}}>
                  <Image source={require('../assets/icons/home.png')} style={{width:30,height:30,marginHorizontal:20}}  />
                  <Text style={{color:"white", marginRight:15,marginHorizontal:5}}>Ana Sayfa </Text>
                </View>
              </TouchableOpacity>
              {/*FAVORİLER*/}
              <TouchableOpacity onPress={()=> navigation.navigate('AnaSayfa')}>
                <View>
                  <Image source={require('../assets/icons/heart.png')} style={{width:30,height:30,marginHorizontal:20}}  />
                  <Text style={{color:"white",marginRight:15,marginHorizontal:3}}>Favorilerim </Text>
                </View>
              </TouchableOpacity>
              {/*CHATBOT*/}
              <TouchableOpacity onPress={()=> navigation.navigate('AnaSayfa')}>
                <View>
                  <Image source={require('../assets/icons/message.png')} style={{width:30,height:30,marginHorizontal:10}}  />
                  <Text style={{color:"white"}}>Chatbot </Text>
                </View>
              </TouchableOpacity>
              {/*TAKVİMİM*/}
              <TouchableOpacity onPress={()=> navigation.navigate('AnaSayfa')}>
                <View style={{marginRight:-5}}>
                  <Image source={require('../assets/icons/calendar.png')} style={{width:30,height:30,marginHorizontal:25}}  />
                  <Text style={{color:"white",marginHorizontal:10}}>Takvimim </Text>
                </View>
              </TouchableOpacity>
              {/*PROFİLİM*/}
              <TouchableOpacity onPress={()=> navigation.navigate('Profil')}>
                <View style={{marginRight:-13}}>
                  <Image source={require('../assets/icons/user.png')} style={{width:30,height:30,marginHorizontal:20}}/>
                  <Text style={{color:"white",marginHorizontal:10}}>Profilim </Text>
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
    marginHorizontal:1,  
    height:193,
    width:160,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    
  },
  imageGolge2: {
    shadowColor: "#213a59",
    shadowOffset: {
	  width: 0,
	  height: 6,},
    shadowOpacity: 0.15,
    elevation: 4,
    marginTop:100,
    marginHorizontal:8,  
    height:250,
    width:230,
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
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 17,
    width:140,
    height:50,
    marginHorizontal:9,
    marginBottom:7,
  
  },
  textBox2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#213a59', // Yarı saydam arka plan rengi
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 17,
    width:210,
    marginHorizontal:9,
    marginBottom:10,
  
  },
  
  
})