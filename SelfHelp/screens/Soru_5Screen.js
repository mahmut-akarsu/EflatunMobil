import React from 'react';
import { useMemo,Dimensions, StatusBar, StyleSheet, View ,Text, TouchableOpacity,Image,TextInput,} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';


export default function Soru1Screen() {
  const handleCheck = (item) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };
  StatusBar.setHidden(true);
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('first');
  const [checkedItems, setCheckedItems] = useState({
    bir: false,
    iki: false,
    uc: false,
    dort: false,
    bes: false,
  });
  
  

const [selectedId, setSelectedId] = useState();

  
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

        <Text style={{fontSize:20,marginTop:80,marginHorizontal:20,marginBottom:-10}}>Bu duyguları son zamanlarda ne sıklıkta hissediyorsun?</Text>
        <View className=" border border-black  "  style={{
          marginHorizontal:24,
          marginTop:60,
          borderRadius: 10, // Köşe yuvarlaklığını belirleyin
          width:350,
          flexDirection: 'row',
          
         }}>
          <Text style={{fontSize:17, marginTop:8,marginHorizontal:15,marginBottom:10,marginRight:220}}>Her gün</Text>
      <View  style={{ Color: checked === 'bir' ? '#afbf36' : 'transparent',marginTop:3}}>
      <RadioButton 
        
        value="bir"
        status={ checked === 'bir' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('bir')}
        color="#afbf36"
        
/></View>
</View>
      <View className="border border-black"  style={{
        marginHorizontal:24,
        marginTop:20,
        borderRadius: 10, // Köşe yuvarlaklığını belirleyin
        width:350,
        flexDirection: 'row',
        }}>
        <Text style={{fontSize:17, marginTop:8,marginHorizontal:15,marginRight:136,marginBottom:10}}>Haftada iki-üç kere</Text>
          
      <RadioButton
        value="iki"
        status={ checked === 'iki' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('iki')}
        color="#afbf36"
        
      /></View>
      <View className="border border-black"  style={{
        marginHorizontal:24,
        marginTop:20,
        borderRadius: 10, // Köşe yuvarlaklığını belirleyin
        width:350,
        flexDirection: 'row',
        }}>
        <Text style={{fontSize:17, marginTop:8,marginHorizontal:15,marginRight:157,marginBottom:10}}>Haftada bir kere</Text>
          
      <RadioButton
        value="uc"
        status={ checked === 'uc' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('uc')}
        color="#afbf36"
      /></View>
      <View className="border border-black"  style={{
        marginHorizontal:24,
        marginTop:20,
        borderRadius: 10, // Köşe yuvarlaklığını belirleyin
        width:350,
        flexDirection: 'row',
        }}>
          <Text style={{fontSize:17, marginTop:8,marginHorizontal:15,marginRight:153,marginBottom:10}}>Ayda birkaç kere</Text>
      <RadioButton
        value="dort"
        status={ checked === 'dort' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('dort')}
        color="#afbf36"
      /></View>
      <View className="border border-black"  style={{
        marginHorizontal:24,
        marginTop:20,
        borderRadius: 10, // Köşe yuvarlaklığını belirleyin
        width:350,
        flexDirection: 'row',
        }}>
          <Text style={{fontSize:17, marginTop:8,marginHorizontal:15,marginRight:42,marginBottom:10}}>Nadiren(Ayda bir veya daha az)</Text>
      <RadioButton
        value="bes"
        status={ checked === 'bes' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('bes')}
        color="#afbf36"
      /></View>

<View className="flex-row justify-center"style={{marginTop:100,marginRight:20}}>
          <TouchableOpacity 
          style={{marginRight:-7}}
                onPress={()=> navigation.goBack()}
                className="p-3 rounded-tr-2xl rounded-bl-2xl ml-4 py-9" >
                <Image source={require('../assets/icons/back.png')} 
                    className="w-4 h-8"  />
            </TouchableOpacity>
            <Text style={{marginTop:37,fontSize:22,color:"black",marginLeft:10}}>5-15</Text>
            <TouchableOpacity
            style={{marginLeft:5}}
            onPress={()=> navigation.navigate("Soru_6")}
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