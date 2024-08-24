import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import BottomBar from './BottomBar';
import HeartButton2 from './HeartButton2';
import { baseApi } from '../config';

export default function SelfTherapyTemplateScreen() {
    StatusBar.setHidden(true);
    const navigation = useNavigation();
    const [therapy, setTherapy] = useState(null);
    const [currentStep, setCurrentStep] = useState(0); // Adım sayısını 0'dan başlatıyoruz
    const [totalSteps, setTotalSteps] = useState(0);
    const [collapsedSections, setCollapsedSections] = useState({});
    const [currentSection, setCurrentSection] = useState(1);
    const [completedSteps, setCompletedSteps] = useState(new Set()); // Tamamlanmış adımları takip etmek için Set

    const route = useRoute();
    const { id } = route.params;



    const toggleSection = (sectionId) => {
        setCollapsedSections(prevState => ({
            ...prevState,
            [sectionId]: !prevState[sectionId],
        }));
    };

    useEffect(() => {
        if (id) {
            // API'den terapi detayını almak için fetch işlemi
            fetch(`${baseApi}/therapies/${id}`)
                .then(response => response.json())
                .then(data => {
                    setTherapy(data);

                    // Toplam adım sayısını hesapla
                    const total = data.sections.reduce((acc, section) => acc + section.steps.length, 0);
                    setTotalSteps(total);

                    // İlk bölümü açık yap
                    setCollapsedSections(prevState => ({
                        ...prevState,
                        [data.sections[0].id]: false,
                    }));
                })
                .catch(error => console.error('Error fetching therapy details:', error));
        }
    }, [id]); // id bağımlılık olarak eklendi

    const handleStepComplete = (stepId, sectionIndex) => {
        // Adım tamamlandıysa ve henüz tamamlanmamışsa
        if (!completedSteps.has(stepId)) {
            // Adım sayısını artır
            setCurrentStep(prevStep => prevStep + 1);

            // Tamamlanmış adımı ekle
            setCompletedSteps(prevSteps => new Set(prevSteps).add(stepId));

            // Eğer adım tamamlandıysa ve bu bölüm son adımda ise
            const section = therapy.sections[sectionIndex];
            const isLastStep = section.steps.length === completedSteps.size + 1;
            if (isLastStep && sectionIndex + 1 === currentSection) {
                // Bir sonraki bölümü aç
                setCurrentSection(prevSection => prevSection + 1);
            }
        }
    };

    const isStepDisabled = (stepId) => {
        return completedSteps.has(stepId);
    };

    if (!therapy) {
        return <View style={styles.container}><Text>Loading...</Text></View>;
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.top}>
                    <SafeAreaView>
                        <ImageBackground
                            source={{ uri: therapy.imageUrl }}
                            style={styles.box}
                            imageStyle={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }} />
                    </SafeAreaView>
                </View>
                <View style={{ marginTop: -250, marginHorizontal: 40, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/icons/backlaci.png')} style={{ width: 16, height: 32 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 25, color: "#213a59", marginTop: -2 }}>{therapy.title}</Text>
                </View>

                <TouchableOpacity
                    style={{
                        marginBottom: -50,
                        marginTop: 175,
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
                    }}
                    onPress={() => navigation.navigate('Sozlesme')}
                >
                    <LinearGradient
                        colors={['#213a59', '#213a59']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={{ borderRadius: 9999, height: 55, marginTop: 1 }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Image source={require('../assets/icons/time.png')} style={{ width: 24, height: 24, marginHorizontal: 42, marginTop: 8 }} />
                                <Text style={{ color: "white", fontSize: 10, marginHorizontal: 39, marginTop: 2 }}>5.Etkinlik</Text>
                            </View>
                            {/* <View>
                                <Image source={require('../assets/icons/clipboard.png')} style={{ width: 28, height: 28, marginHorizontal: -1, marginTop: 5 }} />
                                <Text style={{ color: "white", fontSize: 10, marginHorizontal: -10, marginTop: 1 }}>20. Ornek</Text>
                            </View> */}
                            <View>
                            <HeartButton2 contentId={id} contentType="therapy" />
                            </View>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>

                <View>
                    <Text style={{ color: "black", fontSize: 15, paddingTop: 55, marginHorizontal: 55 }}>{therapy.description}</Text>
                </View>

                <Text style={styles.stepText}>Adım {currentStep}/{totalSteps}</Text>
                <View style={styles.progressBarBackground}>
                    <View style={[styles.progressBarForeground, { width: `${(currentStep / totalSteps) * 100}%` }]} />
                </View>

                {therapy.sections.map((section, sectionIndex) => (
                    <View key={section.id} style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>{sectionIndex + 1}. BÖLÜM</Text>
                        {sectionIndex + 1 <= currentSection ? (
                            <>
                                <TouchableOpacity style={styles.iconContainer} onPress={() => toggleSection(section.id)}>
                                    <Image source={require('../assets/icons/down-arrow.png')} style={styles.icon} />
                                </TouchableOpacity>
                                {!collapsedSections[section.id] && (
                                    <View style={styles.stepsBackground}>
                                        <View style={styles.stepsContainer}>
                                            {section.steps.map((step) => (
                                                <TouchableOpacity
                                                    key={step.id}
                                                    style={styles.step}
                                                    onPress={() => !isStepDisabled(step.id) && handleStepComplete(step.id, sectionIndex)}
                                                    disabled={isStepDisabled(step.id)}
                                                >
                                                    <Text style={styles.checkmark}>{isStepDisabled(step.id) ? '✓' : ''}</Text>
                                                    <Text style={styles.stepText}>{step.title}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                    </View>
                                )}
                            </>
                        ) : (
                            <View style={styles.lockedContainer}>
                                <Image source={require('../assets/icons/lock.png')} style={styles.lockIcon} />
                            </View>
                        )}
                    </View>
                ))}

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>N.BÖLÜM</Text>
                    <View style={styles.lockedContainer}>
                        <Image source={require('../assets/icons/lock.png')} style={styles.lockIcon} />
                    </View>
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
    top: {},
    box: {
        height: 300,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    stepText: {
        fontSize: 16,
        marginBottom: 10,
        marginHorizontal: 55,
        marginTop: 1,
    },
    progressBarBackground: {
        height: 10,
        backgroundColor: '#ccc',
        borderRadius: 5,
        marginBottom: 20,
        marginHorizontal: 40,
    },
    progressBarForeground: {
        height: 10,
        backgroundColor: '#afbf36',
        borderRadius: 5,
    },
    sectionContainer: {
        marginBottom: 20,
        marginTop: 20,
        padding: 15,
        borderRadius: 20,
        backgroundColor: '#213a59',
        width: 350,
        marginHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 7,
    },
    iconContainer: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
    icon: {
        width: 25,
        height: 25,
    },
    stepsBackground: {
        backgroundColor: '#d5e7f3',
        padding: 15,
        borderRadius: 20,
        marginTop: 10,
    },
    stepsContainer: {
        marginTop: 0,
    },
    step: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkmark: {
        color: '#afbf36',
        marginLeft: 10,
    },
    lockedContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lockIcon: {
        width: 25,
        height: 25,
        marginLeft: 290,
        marginTop: -40,
    },
    unlockedContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }

});
