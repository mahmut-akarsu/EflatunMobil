import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomBar from './BottomBar';
import { baseApi } from '../config';

export default function FavorilerScreen() {
  const navigation = useNavigation();
  const [favoriler, setFavoriler] = useState({
    selfTerapiler: [],
    egzersizler: [],
    podcastler: [],
    guncelYazilar: []
  });

  useEffect(() => {
    const fetchFavorites = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        try {
          const response = await fetch(`${baseApi}/favorites/list?token=${token}`);
          const data = await response.json();
          console.log(data); // API yanıtını kontrol etmek için ekledik

          // data.favorites içinde dizi olduğu varsayılıyor
          const favorites = data.favorites || [];

          // Her favori öğe için uygun endpoint'e istek gönderiyoruz
          const fetchDetails = async (item) => {
            let endpoint = '';
            switch (item.contentType) {
              case 'podcast':
                endpoint = `podcasts/${item.contentId}`;
                break;
              case 'therapy':
                endpoint = `therapies/${item.contentId}`;
                break;
              case 'exercise':
                endpoint = `exercises/${item.contentId}`;
                break;
              case 'post':
                endpoint = `posts/${item.contentId}`;
                break;
              default:
                return null;
            }

            try {
              const detailResponse = await fetch(`http://192.168.1.4:3000/${endpoint}`);
              return await detailResponse.json();
            } catch (error) {
              console.error('Error fetching details:', error);
              return null;
            }
          };

          // Favorilere göre verileri çekiyoruz
          const fetchAllDetails = async () => {
            const promises = favorites.map(async (item) => {
              const details = await fetchDetails(item);
              return { ...item, ...details };
            });

            const detailedFavorites = await Promise.all(promises);

            const selfTerapiler = detailedFavorites.filter(item => item.contentType === 'therapy');
            const egzersizler = detailedFavorites.filter(item => item.contentType === 'exercise');
            const podcastler = detailedFavorites.filter(item => item.contentType === 'podcast');
            const guncelYazilar = detailedFavorites.filter(item => item.contentType === 'post');

            setFavoriler({
              selfTerapiler: selfTerapiler,
              egzersizler: egzersizler,
              podcastler: podcastler,
              guncelYazilar: guncelYazilar
            });
          };

          fetchAllDetails();
        } catch (error) {
          console.error('Error fetching favorites:', error);
        }
      }
    };

    fetchFavorites();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.title}>Self Terapiler</Text>
          {favoriler.selfTerapiler.map(item => (
            <TouchableOpacity key={item.contentId} onPress={() => navigation.navigate('SelfTherapyTemplateScreen', { id: item.contentId })}>
              <View style={styles.item}>
                <Image source={{ uri: item.imageUrl }} style={styles.image} />
                <Text style={styles.itemText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Egzersizler</Text>
          {favoriler.egzersizler.map(item => (
            <TouchableOpacity key={item.contentId} onPress={() => navigation.navigate('Detail', { id: item.contentId })}>
              <View style={styles.item}>
                <Image source={{ uri: item.imageUrl }} style={styles.image} />
                <Text style={styles.itemText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Podcastler</Text>
          {favoriler.podcastler.map(item => (
            <TouchableOpacity key={item.contentId} onPress={() => navigation.navigate('PodcastTemplateScreen', { id: item.contentId })}>
              <View style={styles.item}>
                <Image source={{ uri: item.cardImageUrl }} style={styles.image} />
                <Text style={styles.itemText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Güncel Yazılar</Text>
          {favoriler.guncelYazilar.map(item => (
            <TouchableOpacity key={item.contentId} onPress={() => navigation.navigate('PostTemplateScreen', { id: item.contentId })}>
              <View style={styles.item}>
                <Image source={{ uri: item.imageUrl }} style={styles.image} />
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
}

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
