import React from 'react';
import { useMemo, Dimensions, StatusBar, StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors, laciColors, yesilColors } from '../theme'
import { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { RadioButton } from 'react-native-paper';
import HeartButton from './HeratButton';
import HeartButton2 from './HeartButton2';
import HeartButton3 from './HeartButton3';
import BottomBar from './BottomBar';
import { useEffect } from 'react';
import { baseApi } from '../config';


export default function PostTemplateScreen() {
    StatusBar.setHidden(true);
    const navigation = useNavigation();
    const [post, setPost] = useState(null);
    const route = useRoute();
    const { id } = route.params;

    useEffect(() => {
        if (id) {
            fetch(`${baseApi}/posts/${id}`)
                .then(response => response.json())
                .then(data => setPost(data))
                .catch(error => console.error('Error fetching post:', error));
        }
    }, [id]);

    if (!post) {
        return (
            <View style={styles.container}>
                <Text>Yükleniyor...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.top}>
                    <View style={styles.box}>
                        <View style={{ marginBottom: -30, marginHorizontal: 5 }}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 3, borderRadius: 10, marginLeft: 4, paddingVertical: 9 }}>
                                <Image source={require('../assets/icons/back.png')} style={{ width: 16, height: 32 }} />
                            </TouchableOpacity>
                            <Text style={{ marginTop: 30, fontSize: 20, color: "white", marginHorizontal: 5, marginLeft: 9 }}>
                                {post.title}
                            </Text>
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
                                d="M0,128L80,128C160,128,320,128,480,144C640,160,800,192,960,192C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
                        </Svg>
                    </View>
                </View>
            </SafeAreaView>

            <ScrollView>
                <View style={styles.imageGolge}>
                    <Image
                        source={{ uri: post.imageUrl }}
                        style={{
                            width: 260,
                            height: 200,
                            marginHorizontal: 10,
                            marginTop: 3,
                            marginBottom: 60,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                        }}
                    />
                </View>

                <View>
                    <HeartButton2 contentId={id} contentType="post" />
                </View>


                <Text style={{
                    color: "black",
                    fontSize: 15,
                    paddingTop: 25,
                    marginHorizontal: 50,
                    lineHeight: 22,
                    marginBottom: 100,
                }}>
                    {post.description}
                </Text>
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
    top: {

    },

    box: {
        backgroundColor: '#213a59',
        height: 90,


    },
    box2: {
        backgroundColor: 'yellow',
        height: 90,
        marginTop: 39,


    },
    bottom: {
        backgroundColor: '#213a59', // Renk isteğinize göre değiştirin
        height: 70, // Yüksekliği isteğinize göre ayarlayın
        justifyContent: 'center', // İçeriği ortalamak için
        alignItems: 'center', // İçeriği ortalamak için
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopLeftRadius: 10, borderTopRightRadius: 10,
    },
    imageGolge: {
        shadowColor: "#213a59",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.15,
        elevation: 4,
        marginTop: 70,
        marginHorizontal: 20,
        marginRight: 1,
        marginLeft: 54,
        height: 210,
        width: 280,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    imageGolge2: {
        shadowColor: "#213a59",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.15,
        elevation: 4,
        marginTop: 100,
        marginHorizontal: 8,
        height: 190,
        width: 180,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    textBox: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.4)', // Yarı saydam arka plan rengi
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 17,
        width: 142,
        height: 50,
        marginHorizontal: 8,
        marginBottom: -1,

    },
    textBox2: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#213a59', // Yarı saydam arka plan rengi
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 17,
        width: 160,
        height: 70,
        marginHorizontal: 9,
        marginBottom: 10,

    },


})