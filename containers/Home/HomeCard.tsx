import React from 'react';
import {Card, CardHeader} from "@ui-kitten/components";
import {StyleSheet, Text, View} from "react-native";

interface IProps {
}


const HomeCard : React.FC<IProps> = () => {

  return (
    <>
      <Card
        style={styles.card}
        header={()=> (
          <CardHeader style={styles.cardHeader} title={'두산 베어스 vs LG 트윈스'} description={'서울 잠실야구경기장'}/>
        )}
      >
        <View style={styles.cardBody}>
          <Text>오후 7:00</Text>
          <Text>오후 7:00</Text>
          <Text>오후 7:00</Text>
          <Text>오후 7:00</Text>
          <Text>오후 7:00</Text>
          <Text>오후 7:00</Text>
          <Text>오후 7:00</Text>
        </View>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardHeader: {
    height:60,
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

export default HomeCard;
