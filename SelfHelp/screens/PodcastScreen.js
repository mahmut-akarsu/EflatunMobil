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
              <Text style={{marginTop:37,fontSize:22,color:"white",marginHorizontal:5}}>Podcastler</Text>
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
  {/* ROMANTİK İLİŞKİLER*/}
  <View className="flex-row" style={{marginTop:20}}>
        <Text style={{marginTop:50,marginHorizontal:25,fontSize:17}}>Romantik İlişkiler</Text> 
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('PlatonikAsk')}>
            <View style={{
              marginHorizontal:15,
              marginTop:10,
              borderRadius: 10, // Köşe yuvarlaklığı
              width:350,
              flexDirection: 'row',
              height:40,
              backgroundColor:"#c4c4c4"}}>
               <Text style={{fontSize:16,marginTop:9,marginHorizontal:25,}}>Platonik Aşk </Text>
               <HeartButton />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Podcast')}>
            <View style={{
              marginHorizontal:15,
              marginTop:10,
              borderRadius: 10, // Köşe yuvarlaklığı
              width:350,
              flexDirection: 'row',
              height:40,
              backgroundColor:"#c4c4c4"}}>
                <Text style={{fontSize:16,marginTop:9,marginHorizontal:25}}>Lorem ipsum </Text>
                <HeartButton />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Podcast')}>
            <View style={{
              marginHorizontal:15,
              marginTop:10,
              marginBottom:80,
              borderRadius: 10, // Köşe yuvarlaklığı
              width:350,
              flexDirection: 'row',
              height:40,
              backgroundColor:"#c4c4c4"}}>
                <Text style={{fontSize:16,marginTop:9,marginHorizontal:25}}>Lorem ipsum </Text>
                <HeartButton />
            </View> 
            </TouchableOpacity>
       
  {/*RUHSAL BUNALIMLAR*/}  
  <View className="flex-row" style={{marginTop:-100}}>
        <Text style={{marginTop:50,marginHorizontal:25,fontSize:17}}>Ruhsal Bunalımlar</Text> 
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('Podcast')}>
            <View style={{
              marginHorizontal:15,
              marginTop:10,
              borderRadius: 10, // Köşe yuvarlaklığı
              width:350,
              flexDirection: 'row',
              height:40,
              backgroundColor:"#c4c4c4"}}>
               <Text style={{fontSize:16,marginTop:9,marginHorizontal:25}}>Lorem ipsum </Text>
               <HeartButton />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Podcast')}>
            <View style={{
              marginHorizontal:15,
              marginTop:10,
              borderRadius: 10, // Köşe yuvarlaklığı
              width:350,
              flexDirection: 'row',
              height:40,
              backgroundColor:"#c4c4c4"}}>
                <Text style={{fontSize:16,marginTop:9,marginHorizontal:25}}>Lorem ipsum </Text>
                <HeartButton />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Podcast')}>
            <View style={{
              marginHorizontal:15,
              marginTop:10,
              marginBottom:80,
              borderRadius: 10, // Köşe yuvarlaklığı
              width:350,
              flexDirection: 'row',
              height:40,
              backgroundColor:"#c4c4c4"}}>
                <Text style={{fontSize:16,marginTop:9,marginHorizontal:25}}>Lorem ipsum </Text>
                <HeartButton />
            </View> 
            </TouchableOpacity>
{/*RUHSAL BUNALIMLAR*/}
            <View className="flex-row" style={{marginTop:-100}}>
        <Text style={{marginTop:50,marginHorizontal:25,fontSize:17}}>Ruhsal Bunalımlar</Text>
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('Podcast')}>
            <View style={{
              marginHorizontal:15,
              marginTop:10,
              borderRadius: 10, // Köşe yuvarlaklığı
              width:350,
              flexDirection: 'row',
              height:40,
              backgroundColor:"#c4c4c4"}}>
               <Text style={{fontSize:16,marginTop:9,marginHorizontal:25}}>Lorem ipsum </Text>
               <HeartButton />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Podcast')}>
            <View style={{
              marginHorizontal:15,
              marginTop:10,
              borderRadius: 10, // Köşe yuvarlaklığı
              width:350,
              flexDirection: 'row',
              height:40,
              backgroundColor:"#c4c4c4"}}>
                <Text style={{fontSize:16,marginTop:9,marginHorizontal:25}}>Lorem ipsum </Text>
                <HeartButton />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Podcast')}>
            <View style={{
              marginHorizontal:15,
              marginTop:10,
              marginBottom:80,
              borderRadius: 10, // Köşe yuvarlaklığı
              width:350,
              flexDirection: 'row',
              height:40,
              backgroundColor:"#c4c4c4"}}>
                <Text style={{fontSize:16,marginTop:9,marginHorizontal:25}}>Lorem ipsum </Text>
                <HeartButton />
            </View> 
            </TouchableOpacity>



   
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
    marginRight:1, 
    marginLeft:24, 
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
    width:142,
    height:50,
    marginHorizontal:8,
    marginBottom:-1,
  
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