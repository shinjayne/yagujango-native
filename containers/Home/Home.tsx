import React from 'react';
import {ScrollView, StyleSheet, Text} from "react-native";
import HeaderLogo from "../../components/HeaderLogo/HeaderLogo";
import HomeCard from "./HomeCard";
import Carousel from "react-native-snap-carousel";
import StadiumLogoCard from "./StadiumLogoCard";

interface IProps {
}



interface ScreenProps {

}


const Home: React.FC<ScreenProps> = () => {

  const cardData = [1, 2, 3];

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>

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

          <Text>구장별 직관 View</Text>
          <ScrollView horizontal>
            <StadiumLogoCard/>
            <StadiumLogoCard/>
            <StadiumLogoCard/>
          </ScrollView>
      </ScrollView>
    </>
  );
};

// Home.navigationOptions = {
//   headerTitle: () => <HeaderLogo/>,
//
// };

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 60,
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
