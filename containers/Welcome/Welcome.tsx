import React, {useState} from 'react';
import {Button, ViewPager} from "@ui-kitten/components";
import {StyleSheet, Text, View} from "react-native";
import Logo from "../../components/images/Logo";
import Landing from "../../components/images/Landing";
import Landing2 from "../../components/images/Landing2";
import Landing3 from "../../components/images/Landing3";
import { useNavigation } from '@react-navigation/native';

interface IProps {
}


const Welcome: React.FC<IProps> = () => {


  const [selectedIndex, setSelectedIndex] = useState(0);

  const navigation  = useNavigation();
  return (

    <View>
      <Logo style={styles.logo}/>

      <ViewPager
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}>
        <View style={styles.container}>
          <Landing/>
          <Text style={styles.desc}>야구장 좌석을 편하게 확인하세요</Text>
          <Button onPress={onButtonClick} style={styles.button}>
            다음 (1/3)
          </Button>
        </View>

        <View style={styles.container}>
          <Landing2/>
          <Text style={styles.desc}>친구들과 야구 직관을 기록하세요</Text>
          <Button onPress={onButtonClick} style={styles.button}>
            다음 (2/3)
          </Button>
        </View>

        <View style={styles.container}>
          <Landing3/>
          <Text style={styles.desc}>한국 최대 야구 커뮤니티에 참여해보세요</Text>
          <Button onPress={onStart} style={styles.button}>
            야구장고 시작하기
          </Button>
        </View>

      </ViewPager>
    </View>

  );


  function onButtonClick() {
    setSelectedIndex(selectedIndex + 1);
  }

  function onStart() {
    navigation.navigate('Home');
  }
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 16,
    marginLeft:16,
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  desc: {
    marginTop: 16,
  },

  button: {
    marginTop: 16,
    backgroundColor: '#b70000',
    borderColor: '#b70000',
  }
});

// Welcome.navigationOptions = {
//
// }


export default Welcome;
