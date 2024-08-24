import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage'ı import edin
import { baseApi } from '../config';

const HeartButton2 = ({ contentId, contentType }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const checkIfFavorited = async () => {
      try {
        // Token'ı AsyncStorage'dan al
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get(`${baseApi}/favorites/list`, {
          params: { token },
        });
        const favorites = response.data.favorites;
        const isFavorited = favorites.some(fav => fav.contentId === contentId && fav.contentType === contentType);
        setLiked(isFavorited);
      } catch (error) {
        console.error('Error checking favorite status', error);
      }
    };

    checkIfFavorited();
  }, [contentId, contentType]);

  const toggleLike = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (liked) {
        await axios.post('http://192.168.1.4:3000/favorites/remove', { token, contentId, contentType });
      } else {
        await axios.post('http://192.168.1.4:3000/favorites/add', { token, contentId, contentType });
      }
      setLiked(!liked);
    } catch (error) {
      console.error('Error toggling favorite status', error);
    }
  };

  return (
    <TouchableOpacity onPress={toggleLike} style={styles.button}>
      <Icon name="heart" size={25} color={liked ? 'red' : 'black'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default HeartButton2;
