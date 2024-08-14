import { View, Text ,TouchableOpacity,Image,ScrollView} from 'react-native'
import { useState } from 'react';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { laciColors, themeColors,yesilColors } from '../theme'
import { Checkbox } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';


export default function KVKKScreen() {

  const navigation = useNavigation();

  return (
    <ScrollView>
        <View className="flex-1 bg-white" >
      <SafeAreaView className="flex "  >
        
        <View className="flex-row justify-start" >
        <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="p-2 rounded-tr-2xl rounded-bl-2xl ml-4" >
                <Image source={require('../assets/icons/backlaci.png')} 
                    className="w-5 h-10" style={{marginTop:20}}  />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center" style={{marginBottom:30}}>
        <Image source={require('../assets/images/uygulama.png')} 
          className="flex-row justify-center"
          style={{width: 300, height: 200, marginTop:-130,marginBottom:-40}} />
        </View>

         </SafeAreaView>

      <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 30, borderTopRightRadius: 30,backgroundColor: laciColors.bg}} >
        <View className="form space-y-1">

        <Text className=" text-xl text-black-700 font-bold py-1 ml-0 " style={{color: "#d5e7f3", fontSize:25,fontWeight:"normal", paddingBottom:16}}> KVKK </Text>
            <Text style={{color:"#d5e7f3", fontSize:15,paddingTop:5}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat enim, dapibus id massa eu, tincidunt feugiat felis. Nullam sollicitudin varius dolor, quis pellentesque nulla ultricies ut. Pellentesque scelerisque consectetur bibendum. Praesent vestibulum quis nunc ut iaculis. Vivamus facilisis metus ut faucibus tempus. Etiam accumsan magna mi, et gravida orci pulvinar ac. Etiam sed est urna. Vivamus non sollicitudin justo, vel facilisis nunc. Proin ultrices sit amet neque condimentum consequat.
             </Text>
             <Text style={{color:"#d5e7f3", fontSize:15 ,paddingTop:20}} >Nunc id quam nisi. Proin volutpat justo sed lorem mollis eleifend. Aenean et lacinia felis. Curabitur pretium dictum diam. Integer sed sapien non nisi cursus placerat. Pellentesque mollis risus purus, a sollicitudin arcu imperdiet nec. Vivamus turpis purus, faucibus et tortor at, scelerisque viverra tellus. 
            </Text>     
            <Text style={{color:"#d5e7f3", fontSize:15,paddingTop:20}}>
            Maecenas at lorem volutpat ipsum ultrices consequat at non ligula. Proin condimentum, dui eget accumsan dictum, nisi mi feugiat mi, ac fringilla metus felis nec risus. Phasellus quis purus ac erat efficitur sagittis. Praesent aliquet, risus non hendrerit vulputate, massa odio fringilla magna, quis pulvinar sapien urna sed diam. Vivamus odio nunc, tincidunt sed odio non, faucibus elementum justo. In a justo sit amet nibh molestie viverra in sed nulla.
            </Text>
            <Text style={{color:"#d5e7f3", fontSize:15,paddingTop:20}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat enim, dapibus id massa eu, tincidunt feugiat felis. Nullam sollicitudin varius dolor, quis pellentesque nulla ultricies ut. Pellentesque scelerisque consectetur bibendum. Praesent vestibulum quis nunc ut iaculis. Vivamus facilisis metus ut faucibus tempus. Etiam accumsan magna mi, et gravida orci pulvinar ac. Etiam sed est urna. Vivamus non sollicitudin justo, vel facilisis nunc. Proin ultrices sit amet neque condimentum consequat.
             </Text>
             <Text style={{color:"#d5e7f3", fontSize:15,paddingTop:20,paddingBottom:25}} >Nunc id quam nisi. Proin volutpat justo sed lorem mollis eleifend. Aenean et lacinia felis. Curabitur pretium dictum diam. Integer sed sapien non nisi cursus placerat. Pellentesque mollis risus purus, a sollicitudin arcu imperdiet nec. Vivamus turpis purus, faucibus et tortor at, scelerisque viverra tellus. 
            </Text>
            

            <TouchableOpacity
                className="py-2.5 bg-blue-500 rounded-full mx-14" style={{backgroundColor: yesilColors.bg,
                elevation: 5, // Gölge yoğunluğunu ayarlayabilirsiniz
                shadowColor: '#afbf36', // Gölge rengini belirleyebilirsiniz
                shadowOffset: { width:3,height:6 }, // Gölge konumunu belirleyebilirsiniz
                shadowOpacity: 1, // Gölge opaklığını ayarlayabilirsiniz
                shadowRadius: 7.84, // Gölge yarıçapını belirleyebilirsiniz
                borderRadius: 9999,
                height: 60,
                backgroundColor: 'transparent',
                marginBottom:30,
                }}
                onPress={()=> navigation.navigate('Sozlesme')}
            >
              <LinearGradient
               colors={['#afbf36', '#555d1b']} // Soldan sağa doğru geçiş yapılacak renkler
               start={{ x: 0, y: 0.5 }}
               end={{ x: 1, y: 0.5 }}
               style={{borderRadius: 9999, height:50,marginTop:-5}}></LinearGradient>
                <Text className="  font-xl  text-center text-white" style={{fontSize:20,marginTop:-40}}> 
                    Kabul Ediyorum
                </Text>
            </TouchableOpacity>
        </View>
        
        
        <View className="flex-row justify-center mt-1">   
        </View>
      </View>
    </View>
    </ScrollView>
  )
}