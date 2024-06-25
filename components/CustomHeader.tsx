import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

const CustomHeader = () => {
  return (
    <SafeAreaView>
      <Text>CustomHeader</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomHeader;
