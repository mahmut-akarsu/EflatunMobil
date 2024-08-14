import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeartButton2 = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <TouchableOpacity onPress={toggleLike} style={styles.button}>
      <Icon name="heart" size={25} color={liked ? 'red' : 'white'} style={{marginHorizontal:40,marginTop:-210,marginRight:-70}} />
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
