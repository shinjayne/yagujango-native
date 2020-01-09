import React from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {NavigationStackScreenComponent} from "react-navigation-stack";
import HeaderLogo from "../../components/HeaderLogo/HeaderLogo";
import {Card, CardHeader} from '@ui-kitten/components';
import HomeCard from "./HomeCard";
import Carousel from "react-native-snap-carousel";

interface IProps {
}


interface IParams {
}

interface ScreenProps {

}


const Home: NavigationStackScreenComponent<IParams, ScreenProps> = () => {

  const cardData = [1, 2, 3];

  return (
    <>
      <View style={styles.container}>
        <Text>오늘의 경기 일정</Text>
        <Carousel
          data={cardData}
          renderItem={({item, index}) => (<HomeCard/>)}
          sliderWidth={360}
          itemWidth={240}
        />

        <Text>이번주 경기 일정</Text>
        <ScrollView horizontal>
          <HomeCard/>
          <HomeCard/>
          <HomeCard/>
        </ScrollView>

      </View>
    </>
  );
};

Home.navigationOptions = {
  headerTitle: () => <HeaderLogo/>,

};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardHeader: {
    height: 60,
  },

  card: {
    width: 240,
    height: 280,
  },

  button: {
    backgroundColor: '#b70000',
    borderColor: '#b70000',
  },
  cardBody: {
    height: 220,
  },
});


export default Home;
