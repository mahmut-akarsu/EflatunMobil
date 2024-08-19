import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // useNavigation hook'unu ekleyin
import BottomBar from './BottomBar';

export default function FavorilerScreen() {
    const navigation = useNavigation();
    
    // Örnek veriler, gerçek verileri state ya da API'den alabilirsiniz
    const favoriler = {
      selfTerapiler: [
        { id: '1', title: 'Arkadaşlık İlişkileri', image: require('../assets/images/arkadaslik.jpg') },
        // Diğer self terapiler
      ],
      egzersizler: [
        { id: '1', title: 'Nefes Egzersizi', image: require('../assets/images/egzersiz.jpg') },
        // Diğer egzersizler
      ],
      podcastler: [
        { id: '1', title: 'Platonik Aşk' },
        // Diğer podcastler
      ],
      guncelYazilar: [
        { id: '1', title: 'Arkadaşlık İlişkilerinin Duygular Üzerindeki Etkisi', image: require('../assets/images/güncelYazilar.jpg') },
        // Diğer güncel yazılar
      ]
    };
  
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.section}>
            <Text style={styles.title}>Self Terapiler</Text>
            {favoriler.selfTerapiler.map(item => (
              <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Detail', { id: item.id })}>
                <View style={styles.item}>
                  <Image source={item.image} style={styles.image} />
                  <Text style={styles.itemText}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          
          <View style={styles.section}>
            <Text style={styles.title}>Egzersizler</Text>
            {favoriler.egzersizler.map(item => (
              <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Detail', { id: item.id })}>
                <View style={styles.item}>
                  <Image source={item.image} style={styles.image} />
                  <Text style={styles.itemText}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          
          <View style={styles.section}>
            <Text style={styles.title}>Podcastler</Text>
            {favoriler.podcastler.map(item => (
              <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Detail', { id: item.id })}>
                <View style={styles.item}>
                  <Image source={item.image} style={styles.image} />
                  <Text style={styles.itemText}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          
          <View style={styles.section}>
            <Text style={styles.title}>Güncel Yazılar</Text>
            {favoriler.guncelYazilar.map(item => (
              <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Detail', { id: item.id })}>
                <View style={styles.item}>
                  <Image source={item.image} style={styles.image} />
                  <Text style={styles.itemText}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <View>
        <BottomBar />
        </View>
        
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
    },
    section: {
      marginVertical: 10,
      marginHorizontal: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
    itemText: {
      marginLeft: 10,
      fontSize: 16,
      color: '#333',
    },
  });
  