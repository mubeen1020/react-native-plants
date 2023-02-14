import React from 'react';
import {TextInput} from 'react-native';

function CSTextField(props) {
  const {placeholder, disable, imageleft, inlineImagePadding,keyboardType,multiline,onBlur,onChangeText,placeholderTextColor} = props;
  return (
    <>
      <TextInput
        placeholder={placeholder}
        editable={!disable}
        inlineImageLeft={imageleft}
        inlineImagePadding={inlineImagePadding}
        keyboardType={keyboardType}
        multiline={multiline}
        onBlur={onBlur}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        // keyboardType='phone-pad'
        style={{borderColor:'white',borderWidth:2,borderRadius:17,paddingLeft:20,color:'white'}}
        
      />
    </>
  );
}

export default CSTextField;