import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomBar from './BottomBar';
import { baseApi } from '../config';

export default function DenemeAnasayfaScreen() {
  StatusBar.setHidden(true);
  const navigation = useNavigation();

  const [therapies, setTherapies] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [therapyResponse, exerciseResponse, podcastResponse, postResponse] = await Promise.all([
          fetch(`${baseApi}/therapies`),
          fetch(`${baseApi}/exercises`),
          fetch(`${baseApi}/podcasts`),
          fetch(`${baseApi}/posts`)
        ]);

        const therapiesData = await therapyResponse.json();
        const exercisesData = await exerciseResponse.json();
        const podcastsData = await podcastResponse.json();
        const postsData = await postResponse.json();

        setTherapies(therapiesData);
        setExercises(exercisesData);
        setPodcasts(podcastsData);
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <SafeAreaView>
          <View style={styles.box}>
            <View style={styles.topRow}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Image source={require('../assets/icons/back.png')} style={styles.backImage} />
              </TouchableOpacity>
              <Text style={styles.greetingText}>Günaydın</Text>
            </View>
            <Svg
              height={90}
              width={400}
              viewBox="0 0 1440 320"
              style={styles.topWavy}>
              <Path
                fill="#213a59"
                fillOpacity="0.2"
                d="M0,128L80,128C160,128,320,128,480,144C640,160,800,192,960,192C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                transform="translate(0,40)" />
              <Path
                fill="#213a59"
                d='M0,128L80,128C160,128,320,128,480,144C640,160,800,192,960,192C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z' />
            </Svg>
          </View>
        </SafeAreaView>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* SELF THERAPIES */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Self Terapiler</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SelfTerapiler')}>
            <Text style={styles.seeAllText}>Tümü</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} contentContainerStyle={styles.horizontalScrollView}>
          <View style={styles.cardsContainer}>
            {therapies.map((therapy) => (
              <TouchableOpacity key={therapy.id} onPress={() => navigation.navigate('SelfTherapyTemplateScreen', { id: therapy.id })}>
                <View style={styles.imageGolge}>
                  <Image
                    source={{ uri: therapy.cardImageUrl }}
                    style={styles.therapyImage}
                  />
                  <View style={styles.textBox}>
                    <Text style={styles.therapyText}>{therapy.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* EXERCISES */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Egzersizler</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Exercises')}>
            <Text style={styles.seeAllText}>Tümü</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} contentContainerStyle={styles.horizontalScrollView}>
          <View style={styles.cardsContainer}>
            {exercises.map((exercise) => (
              <TouchableOpacity key={exercise.id} onPress={() => navigation.navigate('ExerciseTemplateScreen', { exerciseId: exercise.id })}>
                <View style={styles.imageGolge}>
                  <Image
                    source={{ uri: exercise.imageUrl }}
                    style={styles.therapyImage}
                  />
                  <View style={styles.textBox}>
                    <Text style={styles.therapyText}>{exercise.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* PODCASTS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Podcastler</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Podcasts')}>
            <Text style={styles.seeAllText}>Tümü</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} contentContainerStyle={styles.horizontalScrollView}>
          <View style={styles.cardsContainer}>
            {podcasts.map((podcast) => (
              <TouchableOpacity key={podcast.id} onPress={() => navigation.navigate('PodcastTemplateScreen', { id: podcast.id })}>
                <View style={styles.imageGolge}>
                  <Image
                    source={{ uri: podcast.cardImageUrl }}
                    style={styles.therapyImage}
                  />
                  <View style={styles.textBox}>
                    <Text style={styles.therapyText}>{podcast.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* POSTS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Güncel Yazılar</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Posts')}>
            <Text style={styles.seeAllText}>Tümü</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} contentContainerStyle={styles.horizontalScrollView}>
          <View style={styles.cardsContainer}>
            {posts.map((post) => (
              <TouchableOpacity key={post.id} onPress={() => navigation.navigate('PostTemplateScreen', { id: post.id })}>
                <View style={styles.imageGolge}>
                  <Image
                    source={{ uri: post.imageUrl }}
                    style={styles.therapyImage}
                  />
                  <View style={styles.textBox}>
                    <Text style={styles.therapyText}>{post.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    position: 'relative',
    zIndex: 1,
  },
  box: {
    backgroundColor: '#213a59',
    paddingBottom: 50,
    paddingHorizontal: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  backButton: {
    marginRight: 16,
    padding: 4,
    borderRadius: 8,
    backgroundColor: 'transparent',
    zIndex: 2,
  },
  backImage: {
    width: 20,
    height: 20,
  },
  greetingText: {
    fontSize: 22,
    color: 'white',
    flex: 1,
    textAlign: 'center',
    zIndex: 1,
  },
  topWavy: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#213a59',
    zIndex: -1,
  },
  scrollViewContainer: {
    paddingTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 17,
    paddingTop: 20,
    paddingBottom: -20,
  },
  seeAllText: {
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  horizontalScrollView: {
    marginTop: 10,
    paddingBottom: 50, // Alt boşluk ekleyin
    paddingTop: 0
  },
  cardsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  imageGolge: {
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    marginHorizontal: 9,
  },
  therapyImage: {
    width: 140,
    height: 180
  },
  textBox: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    padding: 5,
    alignItems: 'center',
  },
  therapyText: {
    fontSize: 12,
    color: 'white',
  },
});