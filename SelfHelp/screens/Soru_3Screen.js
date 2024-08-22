import React from 'react';
import { useMemo,Dimensions, StatusBar, StyleSheet, View ,Text, TouchableOpacity,Image,TextInput,} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors,laciColors,yesilColors } from '../theme'
import { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { RadioButton } from 'react-native-paper';


export default function Soru1Screen() {
  StatusBar.setHidden(true);
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('first');
  const [bgColor, setBgColor] = useState('transparent'); 
  const [bgColor2, setBgColor2] = useState('transparent');
  const [bgColor3, setBgColor3] = useState('transparent');
  const [bgColor4, setBgColor4] = useState('transparent');
  const [bgColor5, setBgColor5] = useState('transparent');
  const [bgColor6, setBgColor6] = useState('transparent');
  const [bgColor7, setBgColor7] = useState('transparent');
  const [bgColor8, setBgColor8] = useState('tr8nsparent');


const [sel7ctedId, setSelectedId] =useState();

  return(
    
    
    <View style={styles.container}>
      <View style={styles.top}>
      <SafeAreaView >

        <View style={styles.box}>
            <View className="flex-row"style={{marginBottom:-30}}>
          <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="p-3 rounded-tr-2xl rounded-bl-2xl ml-4 py-9" >
                <Image source={require('../assets/icons/back.png')} 
                    className="w-4 h-8"  />
            </TouchableOpacity>
           
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
              d='M0,128L80,128C160,128,320,128,480,144C640,160,800,192,960,192C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
            />
            
          </Svg>
        </View>
        </SafeAreaView>

                <Text className=" text-xl text-black-700 ml-3 "  style={{color:"black",fontSize:20,marginTop:100,textAlign:"center", marginLeft:-10,paddingStart:40,paddingEnd:40,marginBottom:50}} >
                    Peki bu duyguya eşlik eden başka duygular da var mı?
                </Text>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity
      onPress={() => setBgColor(bgColor === 'transparent' ? "#afbf36" : 'transparent')} // Tıklama durumunda rengi değiştir
    >
                <View className="border border-black"  style={{
                     marginHorizontal:24,
                     marginTop:20,
                     borderRadius: 10, // Köşe yuvarlaklığını belirleyin
                     width:160,
                     height:50,
                     flexDirection: 'row',
                     backgroundColor: bgColor, }}>
                    <Image source={require('../assets/icons/happy.png')} style={{width:35,height:35,marginHorizontal:10,marginTop:6}} />
                    <Text style={{fontSize:20,marginTop:9,marginHorizontal:6,}}>Mutlu</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setBgColor2(bgColor2 === 'transparent' ? "#afbf36" : 'transparent')}> 
                <View className="border border-black"  style={{
                    
                     marginTop:20,
                     borderRadius: 10, // Köşe yuvarlaklığını belirleyin
                     width:160,
                     height:50,
                     flexDirection: 'row',
                     backgroundColor: bgColor2,}}>
                        <Image source={require('../assets/icons/sad-face.png')} style={{width:35,height:35,marginHorizontal:10,marginTop:6}} />
                        <Text style={{fontSize:20,marginTop:9,marginHorizontal:6,}}>Üzgün</Text>
                    
                </View></TouchableOpacity>
                </View>
                
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                  onPress={() => setBgColor3(bgColor3 === 'transparent' ? "#afbf36" : 'transparent')}> 
                <View className="border border-black"  style={{
                     marginHorizontal:24,
                     marginTop:20,
                     borderRadius: 10, // Köşe yuvarlaklığını belirleyin
                     width:160,
                     height:50,
                     flexDirection: 'row',
                     backgroundColor: bgColor3,}}>
                        <Image source={require('../assets/icons/sad.png')} style={{width:35,height:35,marginHorizontal:10,marginTop:6}} />
                        <Text style={{fontSize:20,marginTop:9,marginHorizontal:6,}}>Kötü</Text>
                    
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setBgColor4(bgColor4 === 'transparent' ? "#afbf36" : 'transparent')}> 
                <View className="border border-black"  style={{
                    
                     marginTop:20,
                     borderRadius: 10, // Köşe yuvarlaklığını belirleyin
                     width:160,
                     height:50,
                     flexDirection: 'row',
                     backgroundColor: bgColor4,}}>
                        <Image source={require('../assets/icons/cool.png')} style={{width:35,height:35,marginHorizontal:10,marginTop:6}} />
                        <Text style={{fontSize:20,marginTop:9,marginHorizontal:6,}}>Havalı</Text>
                    
                </View>
                </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                  onPress={() => setBgColor5(bgColor5 === 'transparent' ? "#afbf36" : 'transparent')}> 
                <View className="border border-black"  style={{
                     marginHorizontal:24,
                     marginTop:20,
                     borderRadius: 10, // Köşe yuvarlaklığını belirleyin
                     width:160,
                     height:50,
                     flexDirection: 'row',
                     backgroundColor: bgColor5,}}>
                    
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setBgColor6(bgColor6 === 'transparent' ? "#afbf36" : 'transparent')}> 
                <View className="border border-black"  style={{
                    
                     marginTop:20,
                     borderRadius: 10, // Köşe yuvarlaklığını belirleyin
                     width:160,
                     height:50,
                     flexDirection: 'row',
                     backgroundColor: bgColor6,}}>
                    
                </View>
                </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                  onPress={() => setBgColor7(bgColor7 === 'transparent' ? "#afbf36" : 'transparent')}> 
                <View className="border border-black"  style={{
                     marginHorizontal:24,
                     marginTop:20,
                     borderRadius: 10, // Köşe yuvarlaklığını belirleyin
                     width:160,
                     height:50,
                     flexDirection: 'row',
                     backgroundColor: bgColor7,}}>
                    
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setBgColor8(bgColor8 === 'transparent' ? "#afbf36" : 'transparent')}> 
                <View className="border border-black"  style={{
                    
                     marginTop:20,
                     borderRadius: 10, // Köşe yuvarlaklığını belirleyin
                     width:160,
                     height:50,
                     flexDirection: 'row',
                     backgroundColor: bgColor8,}}>
                    
                </View>
                </TouchableOpacity>
                </View>
                <View className="flex-row justify-center"style={{marginTop:100,marginRight:20}}>
          <TouchableOpacity 
          style={{marginRight:-7}}
                onPress={()=> navigation.goBack()}
                className="p-3 rounded-tr-2xl rounded-bl-2xl ml-4 py-9" >
                <Image source={require('../assets/icons/back.png')} 
                    className="w-4 h-8"  />
            </TouchableOpacity>
            <Text style={{marginTop:37,fontSize:22,color:"black",marginLeft:10}}>3-15</Text>
            <TouchableOpacity
            style={{marginLeft:5}}
            onPress={()=> navigation.navigate("Soru_4")}
            className="p-3 rounded-tr-2xl rounded-bl-2xl ml-4 py-9">
                <Image source={require('../assets/icons/ileriYesil.png')} 
                    className="w-4 h-8"  />
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
  
})