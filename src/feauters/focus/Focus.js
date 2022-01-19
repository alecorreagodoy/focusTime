import React, {useState}from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { TextInput } from 'react-native-paper';

import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes,spacing } from "../../utils/Sizes";

export const Focus = ({ addSubject }) => {
  const [tmpItem, setTmpItem] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: spacing.md }}
            onSubmitEditing={({ nativeEvent }) => {
              setTmpItem (nativeEvent.text);
            }}
          />
          <RoundedButton size={50} title="+" onPress={() => {addSubject(tmpItem)}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'blod',
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
