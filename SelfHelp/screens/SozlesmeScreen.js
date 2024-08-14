import { View, Text ,TouchableOpacity,Image,Dimensions,StatusBar, StyleSheet,} from 'react-native'
import { useState } from 'react';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { laciColors, themeColors,yesilColors } from '../theme'
import { Checkbox } from 'react-native-paper'
import Svg, { Path } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';






export default function Sozlesmecreen() {

  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <SafeAreaView className="flex "  >
          <View style={styles.box}>
           <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="p-2 rounded-tr-2xl rounded-bl-2xl ml-4" >
                <Image source={require('../assets/icons/backlaci.png')} 
                    style={{marginTop:10}}
                    className="w-5 h-10"  />
            </TouchableOpacity>
             <Svg 
            height={90}
            marginLeft= {0.4}
            width={400}
            viewBox="0 0 1440 320"
            style={styles.topWavy}>
            
            <Path
              fill="#c4c4c4"
              d="M0,128L80,128C160,128,320,128,480,144C640,160,800,192,960,192C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            /></Svg>
            </View>
            
        </SafeAreaView>
        
        </View>
        <Text style={{paddingHorizontal:30,paddingTop:50 , fontSize:17,textAlign: 'justify',fontWeight:"bold"}}>Açık Arıza Metni</Text>
        <Text className="text-black  text-3x1 text-center" style={{paddingHorizontal: 30,paddingTop:15 , fontSize:14,textAlign: 'justify'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque eu condimentum ante, eget commodo ante.Fusce aliquet, neque vitae luctus commodo, ante tortor tempor odio, eu tempor dui ipsum id sapien. Morbi ut lorem ut elit auctor hendrerit. Cras in purus nec arcu accumsan accumsan id non felis. Nullam vulputate magna vitae luctus pellentesque. Phasellus non sapien in turpis efficitur commodo. 
        </Text>
      <View className="flex-row  space-x-1 px-7 pt-8">
          <Checkbox 
          status={checked1 ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked1(!checked1);
          }}
      
          />
        <Text style={{fontSize:17 ,paddingTop:5}} >
          Açık Arıza metnini onaylıyorum
        </Text>
      </View>
      
    <View className="flex-row  space-x-1 px-7 pt-8">
        <Checkbox
      status={checked2 ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked2(!checked2);
      }}
      
        />
    
    <TouchableOpacity onPress={()=> navigation.navigate("KullaniciSoz")} >
        <Text style={{fontSize:17 ,paddingTop:5, textDecorationLine: 'underline'}} >
          Kullanıcı Sözleşmesi
        </Text>
     </TouchableOpacity>
    </View>
      
    <View className="flex-row  space-x-1 px-7 pt-8">
        <Checkbox
      status={checked3 ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked3(!checked3);
      }}
        />
      <TouchableOpacity onPress={()=> navigation.navigate("KVKK")} >
        <Text style={{fontSize:17 ,paddingTop:5, textDecorationLine: 'underline'}} >
          KVKK
        </Text>
      </TouchableOpacity>
    </View>


        <TouchableOpacity onPress={()=> navigation.navigate("Soru1")}
                className="py-2.5 bg-blue-500 rounded-full mx-8  " style={{backgroundColor: laciColors.bg, marginTop:70,
                  elevation: 5, // Gölge yoğunluğunu ayarlayabilirsiniz
                  shadowColor: '#213a59', // Gölge rengini belirleyebilirsiniz
                  shadowOffset: { width:3,height:6 }, // Gölge konumunu belirleyebilirsiniz
                  shadowOpacity: 1, // Gölge opaklığını ayarlayabilirsiniz
                  shadowRadius: 7.84, // Gölge yarıçapını belirleyebilirsiniz
                  borderRadius: 9999,
                  height: 50,
                  backgroundColor: 'transparent',
                }}
            >
              <LinearGradient
               colors={['#213a59', '#213a59']} // Soldan sağa doğru geçiş yapılacak renkler
               start={{ x: 0, y: 0.5 }}
               end={{ x: 1, y: 0.5 }}
               style={{borderRadius: 9999, height:50,marginTop:-17}}></LinearGradient>
                <Text className="  font-xl text-center text-white" style={{fontSize:20,marginTop:-40
                }}> 
                    Create Account
                </Text>
            </TouchableOpacity>
            <Image  source={require('../assets/images/uygulama.png')} 
            className="flex-row justify-center"
          style={{width: 350, height: 200, marginTop:-15,marginHorizontal:25
          }} />
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
    backgroundColor: '#c4c4c4',
    height: 67,
    
  },
  
})