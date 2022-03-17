import React from 'react';
import { View , Text } from 'react-native';
import tailwind from 'twrnc';

export default function Container({ children }) {
  return (
    <View style={tailwind.style('flex-1 justify-center items-center text-center bg-teal-600')}>
        {children}
    </View>
  );
}
