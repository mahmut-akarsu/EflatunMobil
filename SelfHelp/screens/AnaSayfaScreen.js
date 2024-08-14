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
import BottomBar from './BottomBar';





export default function AnaSayfaScreen() {
  StatusBar.setHidden(true);
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('first');
  const [selectedId, setSelectedId] = useState();
  
  
  return(
    <View style={styles.container}>
      <View style={styles.top}>
        <SafeAreaView >
          <View style={styles.box}>
            <View className="flex-row"style={{marginBottom:-30}}>
              <TouchableOpacity onPress={()=> navigation.goBack()}className="p-3 rounded-tr-2xl rounded-bl-2xl ml-4 py-9">
                  <Image source={require('../assets/icons/back.png')} className="w-4 h-8"  />
              </TouchableOpacity>
              <Text style={{marginTop:37,fontSize:22,color:"white",marginHorizontal:5}}>Günaydın</Text>
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
        </SafeAreaView>
      </View>
      <ScrollView>{/*YUKARI-AŞAĞI KAYDIRMA BAŞLANGIÇ(TÜM EKRAN)*/}
  {/*SELF TERAPİLER*/}
      <View className="flex-row" >
        <Text style={{marginTop:50,marginHorizontal:25,fontSize:17}}>Self Terapiler</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('SelfTerapiler')}>
            <Text style={{marginTop:50,marginHorizontal:178,textDecorationLine: 'underline',fontSize:12,}}>Tümü</Text>
          </TouchableOpacity> 
      </View>
      <ScrollView horizontal={true} style={styles.scrollView}>{/*SAĞA-SOLA KAYDIRMA BAŞLANGIÇ(SELF TERAPİLER) */}
        <View className="flex-row" style={{marginTop:-90,marginBottom:10}} >
        <TouchableOpacity onPress={()=> navigation.navigate('ArkadaslikIliskileri')}>
          <View style={styles.imageGolge}>
            <Image source={require('../assets/images/arkadaslik.jpg')} 
              style={{width:140,height:180,marginHorizontal:9,marginTop:6,
              borderTopLeftRadius: 20, borderTopRightRadius: 20,borderBottomLeftRadius:20,borderBottomRightRadius:20,}}/>
                <View style={styles.textBox}>
                  <Text style={{fontSize:12,justifyContent:"center"}}>Arkadaşlık İlişkileri</Text>
                </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('ArkadaslikIliskileri')}>
          <View style={styles.imageGolge}>
            <Image source={require('../assets/images/arkadaslik.jpg')} 
              style={{width:140,height:180,marginHorizontal:9,marginTop:6,
              borderTopLeftRadius: 20, borderTopRightRadius: 20,borderBottomLeftRadius:20,borderBottomRightRadius:20,}}/>
                <View style={styles.textBox}>
                  <Text style={{fontSize:12,justifyContent:"center"}}>Aile İlişkileri</Text>
                </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('ArkadaslikIliskileri')}>
          <View style={styles.imageGolge}>
            <Image source={require('../assets/images/arkadaslik.jpg')} 
              style={{width:140,height:180,marginHorizontal:9,marginTop:6,
              borderTopLeftRadius: 20, borderTopRightRadius: 20,borderBottomLeftRadius:20,borderBottomRightRadius:20,}}/>
                <View style={styles.textBox}>
                  <Text style={{fontSize:12,justifyContent:"center"}}>Romantik İlişkileri</Text>
                </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('ArkadaslikIliskileri')}>
          <View style={styles.imageGolge}>
            <Image source={require('../assets/images/arkadaslik.jpg')} 
              style={{width:140,height:180,marginHorizontal:9,marginTop:6,
              borderTopLeftRadius: 20, borderTopRightRadius: 20,borderBottomLeftRadius:20,borderBottomRightRadius:20,}}/>
                <View style={styles.textBox}>
                  <Text style={{fontSize:12,justifyContent:"center"}}>Mesleki İlişkileri</Text>
                </View>
          </View>
          </TouchableOpacity>
        </View>     
      </ScrollView>{/*SAĞA-SOLA KAYDIRMA BİTİŞ(SELF TERAPİLER)*/}
  {/*EGZERSİZLER*/}    
      <View className="flex-row" style={{marginTop:-40}}>
        <Text style={{marginTop:50,marginHorizontal:25,fontSize:17}}>Egzersizler</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Egzersizler')}>
            <Text style={{marginTop:60,marginHorizontal:178,textDecorationLine: 'underline',fontSize:12,}}>Tümü</Text>
          </TouchableOpacity> 
      </View>
      <ScrollView horizontal={true}>{/*SAĞA-SOLA KAYDIRMA BAŞLANGIÇ(EĞZERSİZLER)*/}
        <View className="flex-row" style={{marginTop:-90,marginBottom:10}} >
        <TouchableOpacity onPress={()=> navigation.navigate('AnaSayfa')}>
          <View style={styles.imageGolge}>
            <Image source={require('../assets/images/egzersiz.jpg')} 
              style={{width:140,height:180,marginHorizontal:9,marginTop:6,
              borderTopLeftRadius: 20, borderTopRightRadius: 20,borderBottomLeftRadius:20,borderBottomRightRadius:20,}}/>
                <View style={styles.textBox}>
                  <Text style={{fontSize:12,justifyContent:"center",color:"white",marginHorizontal:10}}>Nefes Egzersizi</Text>
                </View>     
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('AnaSayfa')}>
          <View style={styles.imageGolge}>
      
            <Image source={require('../assets/images/egzersiz.jpg')} 
              style={{width:140,height:180,marginHorizontal:9,marginTop:6,
              borderTopLeftRadius: 20, borderTopRightRadius: 20,borderBottomLeftRadius:20,borderBottomRightRadius:20,}}
              />
                
                <View style={styles.textBox}>
                  <Text style={{fontSize:12,justifyContent:"center",color:"white",marginHorizontal:10}}>Nefes Egzersizi</Text>
                </View>
            
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('AnaSayfa')}>
          <View style={styles.imageGolge}>
            <Image source={require('../assets/images/egzersiz.jpg')} 
              style={{width:140,height:180,marginHorizontal:9,marginTop:6,
              borderTopLeftRadius: 20, borderTopRightRadius: 20,borderBottomLeftRadius:20,borderBottomRightRadius:20,}}/>
                <View style={styles.textBox}>
                  <Text style={{fontSize:12,justifyContent:"center",color:"white",marginHorizontal:10}}>Nefes Egzersizi</Text>
                </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('AnaSayfa')}>
          <View style={styles.imageGolge}>
            <Image source={require('../assets/images/egzersiz.jpg')} 
              style={{width:140,height:180,marginHorizontal:9,marginTop:6,
              borderTopLeftRadius: 20, borderTopRightRadius: 20,borderBottomLeftRadius:20,borderBottomRightRadius:20,}}/>
                <View style={styles.textBox}>
                  <Text style={{fontSize:12,justifyContent:"center",color:"white",marginHorizontal:10}}>Nefes Egzersizi</Text>
                </View>
          </View>
          </TouchableOpacity>
        </View>     
      </ScrollView>{/*SAĞA-SOLA KAYDIRMA BİTİŞ(EĞZERSİZLER)*/}
      {/*PODCASTLAR*/}    
      <View className="flex-row" style={{marginTop:-30}}>
        <Text style={{marginTop:50,marginHorizontal:25,fontSize:17}}>Podcastlar</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Podcast')}>
            <Text style={{marginTop:60,marginHorizontal:178,textDecorationLine: 'underline',fontSize:12,}}>Tümü</Text>
          </TouchableOpacity> 
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('PlatonikAsk')}>
            <View style={{
              marginHorizontal:24,
              marginTop:10,
              borderRadius: 10, // Köşe yuvarlaklığı
              width:350,
              flexDirection: 'row',
              height:40,
              backgroundColor:"#c4c4c4"}}>
               <Text style={{fontSize:16,marginTop:9,marginHorizontal:25}}>Platonik Aşk </Text>
               <HeartButton />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('PlatonikAsk')}>
            <View style={{
              marginHorizontal:24,
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
            <TouchableOpacity onPress={()=> navigation.navigate('PlatonikAsk')}>
            <View style={{
              marginHorizontal:24,
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
           
      {/*GÜNCEL YAZILAR*/}  
            <View className="flex-row" style={{marginTop:-110}}>
        <Text style={{marginTop:50,marginHorizontal:25,fontSize:17}}>Güncel Yazılar</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('GuncelYazilar')}>
            <Text style={{marginTop:60,marginHorizontal:178,textDecorationLine: 'underline',fontSize:12,}}>Tümü</Text>
          </TouchableOpacity> 
      </View>
      <ScrollView horizontal={true}>{/*SAĞA-SOLA KAYDIRMA BAŞLANGIÇ(GÜNCEL YAZILAR)*/}
        <View className="flex-row" style={{marginTop:-90,marginBottom:100}} >
        <TouchableOpacity onPress={()=> navigation.navigate('ArkilşDuyEtkisi')}>
          <View style={styles.imageGolge2}>
            <Image source={require('../assets/images/güncelYazilar.jpg')} 
              style={{width:210,height:180,marginHorizontal:9,marginTop:6,
              borderTopLeftRadius: 20, borderTopRightRadius: 20,borderBottomLeftRadius:20,borderBottomRightRadius:20,}}/>
                <View style={styles.textBox2}>
          
                  <Text style={{fontSize:12,justifyContent:"center",color:"white",marginHorizontal:10}}>Arkadaşlık İlişkilerinin Duygular Üzerindeki Etkisi</Text>
                </View>     
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('ArkilşDuyEtkisi')}>
          <View style={styles.imageGolge2}>
            <Image source={require('../assets/images/güncelYazilar.jpg')} 
              style={{width:210,height:180,marginHorizontal:9,marginTop:6,
              borderTopLeftRadius: 20, borderTopRightRadius: 20,borderBottomLeftRadius:20,borderBottomRightRadius:20,}}/>
                <View style={styles.textBox2}>
                  <Text style={{fontSize:12,justifyContent:"center",color:"white",marginHorizontal:10}}>Arkadaşlık İlişkilerinin Duygular Üzerindeki Etkisi</Text>
                </View>
          </View>
          </TouchableOpacity>      
        </View>     
      </ScrollView>{/*SAĞA-SOLA KAYDIRMA BİTİŞ(GÜNCEL YAZILAR)*/}
  </ScrollView>{/*YUKARI-AŞAĞI KAYDIRMA BİTİŞ(TÜM EKRAN)*/}
            <View >
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