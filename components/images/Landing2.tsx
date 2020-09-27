  import {Image} from 'react-native';
import React from "react";


interface IProps {
}


const Landing2: React.FC<IProps> = ({}) => {

  return (
    <>
      <Image source={require('../../assets/landing2.jpg')} style={{height: 300, width: 300}}/>
    </>
  );
};

export default Landing2;
