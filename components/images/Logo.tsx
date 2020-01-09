import React, { useEffect, useState } from 'react';
import {Image, StyleProp} from "react-native";

interface IProps {
  style?: StyleProp<any>
}


const Logo : React.FC<IProps> = ({style}) => {

  return (
    <>
      <Image source={require("../../assets/yagujango-logo.png")} style={{...style, maxWidth: 200,resizeMode:'contain'}}/>
    </>
  );
};

export default Logo;
