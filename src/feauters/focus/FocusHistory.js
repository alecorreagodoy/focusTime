import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

import { fontSizes, spacing } from '../../utils/Sizes';
import { RoundedButton } from '../../components/RoundedButton';
import { colors } from '../../utils/Colors';

const HistoryItem = ({ item, index }) => {
  console.log(item);
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };
  return (
    <>
      <SafeAreaView style={  { flex: 0.5, alignItems: 'center' }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things we ve focus on </Text>

            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1,  alignItems: 'center' }}
              data={focusHistory} //array of date [1,2,3,4]
              renderItem={HistoryItem}
            />

            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: fontSizes.lg,
  },

  historyItem: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: fontSizes.md,
  }),

  clearContainer: {
    alignItems: 'center',
    padding: spacing.md,
  }
 
});
