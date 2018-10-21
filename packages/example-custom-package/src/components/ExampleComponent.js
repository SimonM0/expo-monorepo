import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const ExampleComponent = ({ onPress }) => (
  <View>
    <Text
      style={styles.packageIsWorking}
      onPress={onPress}
    >
      This Component is imported from a symlinked custom package.
      {"\n\n"}
      <Text
        style={styles.redText}
      >
      PLEASE DON'T TAP ME 😁
      </Text>
    </Text>
  </View>
);

const styles = StyleSheet.create({
  packageIsWorking: {
    fontSize: 30,
    color: '#2e78b7',
    backgroundColor: '#00b7b1',
    margin: 20,
    padding: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  redText: {
    color: '#FF0000',
    fontWeight: 'bold',
    fontSize: 20
  }
});
