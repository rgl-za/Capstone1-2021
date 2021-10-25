import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, Image, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SliderBox } from 'react-native-image-slider-box';
import { FontAwesome, FontAwesome5, Entypo, Iconicons, Feather } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import CardListScreen from './CardListScreen';
import CardItemDetails from './CardItemDetails';

function sliderTouch(index) {
    alert(index);
}

function MainScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <SliderBox
                images={[
                    "https://source.unsplash.com/collection/190727/1024x768",
                    "https://source.unsplash.com/collection/190727/1024x768"
                ]}
                sliderBoxHeight={180}
                // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={20}
                autoplay
                circleLoop
                resizeMethod={'resize'}
                resizeMode={'cover'}

                paginationBoxStyle={{
                    position: "absolute",
                    bottom: 0,
                    padding: 0,
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    paddingVertical: 10,
                }}

                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    padding: 0,
                    margin: 0,
                    backgroundColor: "rgba(128, 128, 128, 0.92)"
                }}

                ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 0 }}
                imageLoadingColor="#2196F3"

            />

            <View style={styles.categoryContainer}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('CardListScreen', { title: 'test1' })}>
                    <View style={styles.categoryIcon}>
                        <FontAwesome5 name="bread-slice" size={35} color="white" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>test1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('CardListScreen', { title: 'test2' })}>
                    <View style={styles.categoryIcon}>
                        <FontAwesome5 name="candy-cane" size={24} color="white" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>test2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('CardListScreen', { title: 'test3' })}>
                    <View style={styles.categoryIcon}>
                        <FontAwesome5 name="cheese" size={24} color="white" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>test3</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('CardListScreen', { title: 'test4' })}>
                    <View style={styles.categoryIcon}>
                        <FontAwesome5 name="coffee" size={35} color="white" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>test4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('CardListScreen', { title: 'test5' })}>
                    <View style={styles.categoryIcon}>
                        <FontAwesome5 name="cookie-bite" size={24} color="white" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>test5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('CardListScreen', { title: 'test6' })}>
                    <View style={styles.categoryIcon}>
                        <FontAwesome5 name="lemon" size={24} color="white" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>test6</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsWrapper}>
                <Text style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#333',
                }}>추천 영양 콘텐츠</Text>
                {/* <TouchableOpacity onPress={() => navigation.navigate('CardItemDetails')}> */}
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={{ uri: "https://source.unsplash.com/collection/190727/1024x768" }}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>test</Text>
                        <Text style={styles.cardDetails}>test</Text>
                    </View>
                </View>
                {/* </TouchableOpacity> */}

                {/* <TouchableOpacity onPress={() => navigation.navigate('details')}> */}
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={{ uri: "https://source.unsplash.com/collection/190727/1024x768" }}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>test</Text>
                        <Text style={styles.cardDetails}>test</Text>
                    </View>
                </View>
                {/* </TouchableOpacity> */}

                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={{ uri: "https://source.unsplash.com/collection/190727/1024x768" }}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>test</Text>
                        <Text style={styles.cardDetails}>test</Text>
                    </View>
                </View>
            </View>

        </ScrollView >

    );
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#f4511e',

                },
            }}>
            <Stack.Screen
                name="Main"
                component={MainScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#f4511e',

                    },
                    headerLeft: () => (
                        <View>
                            <Entypo.Button
                                name="menu"
                                backgroundColor="#f4511e"
                                size={27}
                                onPress={() => { }}>
                            </Entypo.Button>
                        </View>
                    ),
                    headerRight: () => (
                        <View>
                            <FontAwesome.Button
                                name="barcode"
                                backgroundColor="#f4511e"
                                size={27}
                                onPress={() => { }}>

                            </FontAwesome.Button>
                        </View>
                    ),
                }}
            />
            <Stack.Screen
                name="CardListScreen"
                component={CardListScreen}
                options={({ route }) => ({
                    title: route.params.title,
                    headerBackTitleVisible: false,
                })}
            />
            <Stack.Screen
                name="CardItemDetails"
                component={CardItemDetails}
                options={({ route }) => ({
                    // title:route.params.title,
                    headerBackTitleVisible: false,
                })}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'flex-start',
        // justifyContent: 'center',
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#f4511e',
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#de4f35'
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.0,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 9,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444'
    },
});
