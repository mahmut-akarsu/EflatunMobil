import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomBar from './BottomBar';
import { Audio } from 'expo-av';
import HeartButton3 from './HeartButton3';
import HeartButton2 from './HeartButton2';
import { baseApi } from '../config';

export default function PodcastTemplateScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [podcast, setPodcast] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const intervalRef = useRef(null);

  const { id } = route.params;

  useEffect(() => {
    if (id) {
      fetch(`${baseApi}/podcasts/${id}`)
        .then(response => response.json())
        .then(data => setPodcast(data))
        .catch(error => console.error('Error fetching podcast:', error));
    }
  }, [id]);

  useEffect(() => {
    if (sound) {
      const updatePosition = async () => {
        const status = await sound.getStatusAsync();
        if (status.isLoaded) {
          setCurrentTime(status.positionMillis);
          setDuration(status.durationMillis);
          setSliderValue(status.positionMillis / status.durationMillis);
        }
      };

      intervalRef.current = setInterval(updatePosition, 1000);

      return () => clearInterval(intervalRef.current);
    }
  }, [sound]);

  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const handlePlayPause = async () => {
    if (isPlaying) {
      await sound.pauseAsync();
      setIsPlaying(false);
    } else {
      if (!sound && podcast) {
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: podcast.source },
          { shouldPlay: true }
        );
        setSound(newSound);
        setIsPlaying(true);
      } else if (sound) {
        await sound.playAsync();
        setIsPlaying(true);
      }
    }
  };

  const handleSliderChange = async (value) => {
    if (sound) {
      const newPosition = value * duration;
      await sound.setPositionAsync(newPosition);
      setCurrentTime(newPosition);
    }
  };

  const handleRewind = async () => {
    if (sound) {
      const newPosition = Math.max(currentTime - 10000, 0); // 10 saniye geri git
      await sound.setPositionAsync(newPosition);
      setCurrentTime(newPosition);
      setSliderValue(newPosition / duration);
    }
  };

  const handleForward = async () => {
    if (sound) {
      const newPosition = Math.min(currentTime + 10000, duration); // 10 saniye ileri git
      await sound.setPositionAsync(newPosition);
      setCurrentTime(newPosition);
      setSliderValue(newPosition / duration);
    }
  };

  if (!podcast) {
    return (
      <View style={styles.container}>
        <Text>Yükleniyor...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../assets/icons/yukari.png')} style={styles.backButton} />
            </TouchableOpacity>
            <Image source={require('../assets/images/uygulama.png')} style={styles.logo} />
          </View>
        </SafeAreaView>

        <View style={[styles.imageGolge, { alignItems: 'center' }]}>
          <Image source={{ uri: podcast.imageUrl }} style={{
            width: 344,
            height: 240,
            marginTop: 5,
            marginHorizontal: 50,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }} />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.podcastTitle}>{podcast.title}</Text>
          <HeartButton3 contentId={id} contentType="podcast" />
        </View>

        <View style={styles.progressContainer}>
          <Slider
            style={styles.slider}
            value={sliderValue}
            onValueChange={handleSliderChange}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#afbf36"
            maximumTrackTintColor="#000000"
            thumbTintColor="#afbf36"
          />
          <View style={styles.timeContainer}>
            <Text>{formatTime(currentTime)}</Text>
            <Text>{formatTime(duration)}</Text>
          </View>
        </View>
        <View style={styles.controlsContainer}>
          <TouchableOpacity onPress={handleRewind}>
            <Icon name="replay-10" size={30} color='#213a59' />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePlayPause}>
            <View style={styles.playButton}>
              <Icon name={isPlaying ? 'pause' : 'play-arrow'} size={30} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForward}>
            <Icon name="forward-10" size={30} color='#213a59' />
          </TouchableOpacity>
        </View>

        <Text style={styles.descriptionText}>
          {podcast.description}
        </Text>
      </ScrollView>
      <View>
        <BottomBar />
      </View>
    </View>
  );
}

const formatTime = (milliseconds) => {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    marginHorizontal: 30,
    marginTop: 50,
    width: 32,
    height: 32,
  },
  logo: {
    height: 300,
    width: 300,
    marginHorizontal: 50,
    marginTop: -195,
  },
  imageGolge: {
    shadowColor: "#213a59",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    elevation: 4,
    marginTop: -80,
    marginHorizontal: 17,
    height: 250,
    width: 358,
    borderRadius: 10,
  },
  podcastImage: {
    width: 344,
    height: 240,
    marginHorizontal: 7,
    marginTop: 5,
    borderRadius: 10,
  },
  podcastTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 23,
    marginTop: 35,
    marginBottom: 25,
  },
  progressContainer: {
    alignItems: 'center',
  },
  slider: {
    width: 340,
    height: 40,
    marginVertical: 20,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 310,
    marginTop:-30,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -5,
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
  descriptionText: {
    color: "black",
    fontSize: 16,
    paddingTop: 40,
    marginHorizontal: 30,
    lineHeight: 22,
    marginBottom: 100,
    textAlign:"center",
    
  },
});
