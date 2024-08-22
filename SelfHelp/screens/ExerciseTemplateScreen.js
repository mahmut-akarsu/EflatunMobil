import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, ImageBackground, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BottomBar from './BottomBar';

export default function NefesEgzersiziScreen({ route }) {
    const { exerciseId } = route.params;
    const [exercise, setExercise] = useState(null);
    const [currentStep, setCurrentStep] = useState(1);
    const navigation = useNavigation();

    const totalSteps = Array.isArray(exercise?.exerciseSteps) ? exercise.exerciseSteps.length : 0;

    useEffect(() => {
        fetch(`http://192.168.1.2:3000/exercises/${exerciseId}`)
            .then((response) => response.json())
            .then((data) => setExercise(data))
            .catch((error) => console.error('Error fetching exercise data:', error));
    }, [exerciseId]);

    const handleNextStep = () => {
        setCurrentStep((prevStep) => (prevStep < totalSteps ? prevStep + 1 : 1));
    };

    if (!exercise) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.top}>
                    <ImageBackground
                        source={{ uri: exercise.imageUrl }}
                        style={styles.box}
                        imageStyle={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}
                    />
                </View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image style={styles.backIcon} source={require('../assets/icons/Beyaz-back.png')} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{exercise.name}</Text>
                </View>
                <TouchableOpacity
                    style={styles.gradientButton}
                    onPress={() => navigation.navigate('Sozlesme')}
                >
                    <LinearGradient
                        colors={['#213a59', '#213a59']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={styles.gradient}
                    >
                        <View style={styles.buttonContent}>
                            <Image source={require('../assets/icons/time.png')} style={styles.icon} />
                            <Text style={styles.buttonText}>5 dakika</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
                <View>
                    <Text style={styles.descriptionText}>{exercise.description}</Text>
                </View>
                <View style={styles.container2}>
                    <TouchableOpacity onPress={handleNextStep}>
                        <Image source={require('../assets/icons/ileriYesil.png')} style={styles.nextIcon} />
                    </TouchableOpacity>
                    {Array.isArray(exercise.exerciseSteps) && exercise.exerciseSteps.map((step, index) => (
                        currentStep === (index + 1) && (
                            <Text key={step.id} style={styles.stepText}>
                                {`${index + 1} - ${step.stepDescription}`}
                            </Text>
                        )
                    ))}
                </View>
                <View style={styles.indicatorContainer}>
                    {[...Array(totalSteps)].map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                currentStep === index + 1 && styles.activeIndicator
                            ]}
                        />
                    ))}
                </View>
            </ScrollView>
            <BottomBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {},
    box: {
        height: 250,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -250,
        marginHorizontal: 40,
    },
    backIcon: {
        marginHorizontal: -20,
        marginTop: 50,
        width: 24,
        height: 24,
    },
    title: {
        fontSize: 25,
        color: "white",
        marginTop: 50,
        marginHorizontal: 20,
    },
    gradientButton: {
        marginBottom: -50,
        marginTop: 120,
        marginHorizontal: 105,
        elevation: 4,
        shadowColor: '#213a59',
        shadowOffset: { width: 3, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 7.84,
        borderRadius: 9999,
        height: 75,
        width: 190,
        backgroundColor: 'transparent',
    },
    gradient: {
        borderRadius: 9999,
        height: 55,
        marginTop: 1,
    },
    buttonContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 28,
        height: 28,
        marginHorizontal: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        marginTop: 13,
    },
    descriptionText: {
        color: "black",
        fontSize: 15,
        paddingTop: 95,
        marginHorizontal: 55,
    },
    container2: {
        backgroundColor: '#213a59',
        height: 230,
        width: 340,
        marginHorizontal: 26,
        marginTop: -235,
        borderRadius: 11,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextIcon: {
        width: 24,
        height: 24,
        alignSelf: 'flex-end',
        marginHorizontal: 10,
        marginTop: 10,
    },
    stepText: {
        fontSize: 20,
        color: "white",
        textAlign: 'center',
        marginHorizontal: 20,
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    indicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
        marginTop: -100,
    },
    activeIndicator: {
        backgroundColor: '#afbf36',
    },
});
