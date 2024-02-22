import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Input.style'

const Input = ({placeholder, value, onType, iconName, isSecure}) => {
  return(
    <View style={styles.container}>
      
      <TextInput 
              placeholder={placeholder}
              onChangeText={onTpye}  
              value={value}    
              secureTextEntry={isSecure}  
      />
      <Icon 
            name={iconName}
            size={25}
            color='gray'
            />
    </View>
  );
}

export default Input;