import React from 'react';
import { useMemo,Dimensions, StatusBar, StyleSheet, View ,Text, TouchableOpacity,Image,TextInput,ScrollView} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors,laciColors,yesilColors } from '../theme'
import { useState,useRef} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { RadioButton } from 'react-native-paper';
import HeartButton from './HeratButton';
import HeartButton2 from './HeartButton2';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Material Icons setini kullanacağız
import BottomBar from './BottomBar';





export default function AnaSayfaScreen() {
  StatusBar.setHidden(true);
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('first');
  const [selectedId, setSelectedId] = useState();

  
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const intervalRef = useRef(null);

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setCurrentTime(prevTime => prevTime + 1);
        }, 1000);
    };

    const stopTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying) {
            startTimer();
        } else {
            stopTimer();
        }}
    
  
  
  return(
    
    <View style={styles.container}>
        <ScrollView>{/*YUKARI-AŞAĞI KAYDIRMA BAŞLANGIÇ(TÜM EKRAN)*/}
      <SafeAreaView >
      <View >
              <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Image source={require('../assets/icons/yukari.png')} className="w-8 h-8" style={{
                    marginHorizontal:30,
                    marginTop:50,                  
                }}></Image>
              </TouchableOpacity>
              <Image source={require('../assets/images/uygulama.png')} style={{
                height:300,
                width:300,
                marginHorizontal:50,
                marginTop:-195,}} ></Image>
            </View>
      </SafeAreaView>

      <View style={styles.imageGolge}>
            <Image source={require('../assets/images/platonikAsk.jpg')} 
              style={{width:344,height:240,marginHorizontal:7,marginTop:5,
              borderTopLeftRadius: 10, borderTopRightRadius: 10,borderBottomLeftRadius:10,borderBottomRightRadius:10,}}/>
                
          </View>
          <View className="flex-row">
            <Text style={{fontWeight: 'bold',fontSize:20,marginHorizontal:23,marginTop:35,marginBottom:25,}}>Platonik Aşk</Text>
            <HeartButton2  />
          </View>

          
          <View style={styles.container}>
            <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                    <View style={[styles.progress, { width: `${(currentTime / 375) * 100}%` }]} />
                </View>
                <View style={styles.timeContainer}>
                    <Text>{(currentTime / 60).toFixed(2)}</Text>
                    <Text>6.35</Text>
                </View>
            </View>
            <View style={styles.controlsContainer}>
                <TouchableOpacity>
                    <Icon name="skip-previous" size={30} color='#213a59' />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePlayPause}>
                    <View style={styles.playButton}>
                        <Icon name={isPlaying ? 'pause' : 'play-arrow'} size={30} color="#fff" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="skip-next" size={30} color='#213a59' />
                </TouchableOpacity>
            </View>
        </View>

        <Text  style={{color:"black", fontSize:15,paddingTop:45,marginHorizontal:30,lineHeight:22,marginBottom:100,}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat enim, dapibus id massa eu, tincidunt feugiat felis. Nullam sollicitudin varius dolor, quis pellentesque nulla ultricies ut. Pellentesque scelerisque consectetur bibendum. Praesent vestibulum quis nunc ut iaculis. Vivamus facilisis metus ut faucibus tempus. Etiam accumsan magna mi, et gravida orci pulvinar ac. Etiam sed est urna. Vivamus non sollicitudin justo, vel facilisis nunc. Proin ultrices sit amet neque condimentum consequat. Maecenas at lorem volutpat ipsum ultrices consequat at non ligula. Proin condimentum, dui eget accumsan dictum, nisi mi feugiat mi, ac fringilla metus felis nec risus. Phasellus quis purus ac erat efficitur sagittis. Praesent aliquet, risus non hendrerit vulputate, massa odio fringilla magna, quis pulvinar sapien urna sed diam. Vivamus odio nunc, tincidunt sed odio non, faucibus elementum justo. In a justo sit amet nibh molestie viverra in sed nulla.
             </Text>
      
      
  




   
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
    marginTop:-80,
    marginHorizontal:4,
    marginRight:1, 
    marginLeft:8, 
    marginBottom:10,
    height:250,
    width:358,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    
  },
  progressContainer: {
    alignItems: 'center',
},
progressBar: {
    height: 10,
    width: 340,
    marginLeft:-10,
    marginTop:5,
    backgroundColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
},
progress: {
    height: '100%',
    backgroundColor: '#b3d233',
},
timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 340,
    marginLeft:-10,
    
},
controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -10,
},
playButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#213a59',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
},

  
  
  
  
})