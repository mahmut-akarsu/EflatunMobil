import React from 'react';
import { useMemo,Dimensions, StatusBar, StyleSheet, View ,Text, TouchableOpacity,Image,TextInput,Defs,Filter,FeGaussianBlur} from 'react-native';
import Svg, { Path ,Line,} from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors,laciColors,yesilColors } from '../theme'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { RadioButton } from 'react-native-paper';
import RadioGroup from 'react-native-radio-buttons-group';



export default function VaweScreen() {
  StatusBar.setHidden(true);
  const navigation = useNavigation();
  const [email,setEmail] = useState ('');
  const [checked, setChecked] = React.useState('first');
  

const [selectedId, setSelectedId] = useState();
  
  return(
    <View style={styles.container}>
      <View style={styles.top}>
        <SafeAreaView >
          <View style={styles.box}>
          <Text className=" text-xl text-black-700 ml-3 "  style={{color:"white",fontSize:20,marginTop:70,textAlign:"center", marginLeft:-10,paddingStart:60,paddingEnd:60,marginBottom:40,marginBottom:-70}} >
          Bu duyguları bedeninde nerede hissediyorsun, bana gösterebilir misin?
                </Text>
            <View >
            <Image source={require('../assets/images/soru_9.png')} style={{height:500,width:500,marginTop:45,marginLeft:-50,marginBottom:-180,zIndex:2}}/>
    <View style={{zIndex:2,marginTop:-380,marginLeft:20,marginBottom:-820}}>
      <Svg height="1200" width="1200" style={{zIndex:2}}>
        {/* Başa giden çizgi */}
        <Line x1="210" y1="100" x2="190" y2="120" stroke="white" strokeWidth="1"/>
        <Line x1="210" y1="100" x2="260" y2="100" stroke="white" strokeWidth="1"/>
        <TouchableOpacity  onPress={()=> navigation.navigate("Soru_8")} style={{zIndex:1}}>
        <Text style={{marginTop:82,marginLeft:215,color:"white",marginBottom:0}} >Baş</Text></TouchableOpacity>
        
        
        {/* Kola giden çizgi */}
        <Line x1="245" y1="200" x2="225" y2="220" stroke="white" strokeWidth="1"/>
        <Line x1="245" y1="200" x2="295" y2="200" stroke="white" strokeWidth="1"/><TouchableOpacity  onPress={()=> navigation.navigate("Soru_8")} style={{zIndex:1}}>
        <Text style={{marginTop:80,marginLeft:257,color:"white",marginBottom:0}} >Kol</Text></TouchableOpacity>
        

        {/* Bele giden çizgi */}
        <Line x1="245" y1="250" x2="205" y2="270" stroke="white" strokeWidth="1"/>
        <Line x1="245" y1="250" x2="295" y2="250" stroke="white" strokeWidth="1"/><TouchableOpacity  onPress={()=> navigation.navigate("Soru_8")} style={{zIndex:1}}>
        <Text style={{marginTop:32,marginLeft:258,color:"white",marginBottom:0}} >Bel</Text></TouchableOpacity>
        

        {/* Bacağa giden çizgi */}
        <Line x1="225" y1="400" x2="200" y2="420" stroke="white" strokeWidth="1"/>
        <Line x1="225" y1="400" x2="275" y2="400" stroke="white" strokeWidth="1"/><TouchableOpacity  onPress={()=> navigation.navigate("Soru_8")} style={{zIndex:1}}>
        <Text style={{marginTop:130,marginLeft:230,color:"white",marginBottom:0}} >Bacak</Text></TouchableOpacity>
        
        {/* Göğüse giden çizgi */}
        <Line x1="150" y1="200" x2="90" y2="150" stroke="white" strokeWidth="1" style={{zIndex:2}}/>
        <Line x1="90" y1="150" x2="40" y2="150" stroke="white" strokeWidth="1"/>
        <TouchableOpacity  onPress={()=> navigation.navigate("Soru_8")} style={{zIndex:1}}>
        <Text style={{marginTop:-270,marginLeft:43,color:"white"}}>Göğüs</Text>
        </TouchableOpacity>

        {/* Karına giden çizgi */}
        <Line x1="160" y1="250" x2="80" y2="200" stroke="white" strokeWidth="1" style={{zIndex:2}}/>
        <Line x1="80" y1="200" x2="30" y2="200" stroke="white" strokeWidth="1"/>
        <TouchableOpacity  onPress={()=> navigation.navigate("Soru_8")} style={{zIndex:1}}>
        <Text style={{marginTop:-220,marginLeft:36,color:"white",marginBottom:0}}>Karın</Text>
        </TouchableOpacity>

        
       {/* Ele giden çizgi */}
       <Line x1="110" y1="320" x2="60" y2="290" stroke="white" strokeWidth="1"/>
        <Line x1="60" y1="290" x2="10" y2="290" stroke="white" strokeWidth="1"/>
        <TouchableOpacity  onPress={()=> navigation.navigate("Soru_8")} style={{zIndex:1}}>
        <Text style={{marginTop:-132,marginLeft:29,color:"white",marginBottom:0}}>El</Text>
        </TouchableOpacity>
      
        {/* Ayağa giden çizgi */}
        <Line x1="150" y1="480" x2="100" y2="450" stroke="white" strokeWidth="1"/>
        <Line x1="100" y1="450" x2="50" y2="450" stroke="white" strokeWidth="1"/>
        <TouchableOpacity  onPress={()=> navigation.navigate("Soru_8")} style={{zIndex:1}}>
        <Text style={{marginTop:30,marginLeft:58,color:"white",marginBottom:0}}>Ayak</Text>
        </TouchableOpacity>
      </Svg>
    </View>
            </View>
            <Svg 
                height={350}
                marginLeft= {0.4}
                width={400}
                viewBox="0 0 1440 320"
                style={styles.topWavy}> 
              <Path
                fill="#213a59"
                fillOpacity="0.2"
                d="M0,128L60,154.7C120,181,240,235,360,218.7C480,203,600,117,720,101.3C840,85,960,139,1080,144C1200,149,1320,107,1380,85.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                transform="translate(0,40)"/>
              <Path
                fill="#213a59"
                d='M0,128L60,154.7C120,181,240,235,360,218.7C480,203,600,117,720,101.3C840,85,960,139,1080,144C1200,149,1320,107,1380,85.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'/>    
            
              </Svg>
          </View>
          
          
          
            
           

            <View className="flex-row justify-center"style={{marginTop:100,marginRight:20}}>
          <TouchableOpacity 
          style={{marginRight:-7}}
                onPress={()=> navigation.goBack()}
                className="p-3 rounded-tr-2xl rounded-bl-2xl ml-4 py-9" >
                <Image source={require('../assets/icons/back.png')} 
                    className="w-4 h-8"  />
            </TouchableOpacity>
            <Text style={{marginTop:37,fontSize:22,color:"black",marginLeft:10}}>9-15</Text>
            <TouchableOpacity
            style={{marginLeft:5}}
            onPress={()=> navigation.navigate("Soru_10")}
            className="p-3 rounded-tr-2xl rounded-bl-2xl ml-4 py-9">
                <Image source={require('../assets/icons/ileriYesil.png')} 
                    className="w-4 h-8"  />
            </TouchableOpacity>
            
</View>
        </SafeAreaView> 
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
  bottom: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    bottom: 0,
    
  },
  box: {
    backgroundColor: '#213a59',
    height: 580,
    
  },
 
  
})