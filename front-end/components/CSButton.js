import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';

function CSButton(props) {
  const {onPress, label, color, loader, bgcolor, fs, fw} = props;
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        disabled={loader}
        style={{backgroundColor: bgcolor, padding: 10, borderRadius: 30}}>
        <View
          style={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: color,
              fontWeight: fw,
              fontSize: fs,
              textAlign: 'center',
              marginRight: 11,
            }}>
            {label}
          </Text>
          <ActivityIndicator animating={loader} color={color} size="small" />
        </View>
      </TouchableOpacity>
    </>
  );
}

export default CSButton;