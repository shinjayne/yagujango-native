import React, {useEffect, useState} from 'react';
import {Card, CardHeader} from "@ui-kitten/components";
import {StyleSheet, Text, View, Image} from "react-native";

interface IProps {
}


const StadiumLogoCard: React.FC<IProps> = () => {

  return (
    <>
      <Card
        style={styles.card}
        header={() => (
          <CardHeader style={styles.cardHeader} title={'서울 잠실야구 경기장'} description={'KIA Tigers'}/>
        )}
      >
        <Image source={require("../../assets/kia.jpg")} style={{width: 200, resizeMode: 'center'}}/>
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

export default StadiumLogoCard;
