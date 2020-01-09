import {Image} from 'react-native';
import React from "react";


interface IProps {
}


const Landing3: React.FC<IProps> = ({}) => {

  return (
    <>
      <Image source={require('../../assets/landing3.jpg')} style={{height: 300, width: 300}}/>
    </>
  );
};

export default Landing3;
