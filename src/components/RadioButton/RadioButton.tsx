import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface RadioButtonProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, selected, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={[styles.circle, selected && styles.selectedCircle]} />
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  circle: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#0057FF', marginRight: 10 },
  selectedCircle: { backgroundColor: '#0057FF' },
  label: { fontSize: 16, color: '#000000' },
});

export default RadioButton;