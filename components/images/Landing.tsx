import {Image} from 'react-native';
import React from "react";


interface IProps {
}


const Landing: React.FC<IProps> = ({}) => {

  return (
    <>
      <Image source={require('../../assets/landing.jpg')} style={{height: 300, width: 300}}/>
    </>
  );
};

export default Landing;
