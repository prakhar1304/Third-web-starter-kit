import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import color from '../../utility/color';

export default function NewProject() {
  const navigation = useNavigation();
  const [projectName, setProjectName] = useState('');
  const [contractor, setContractor] = useState('');
  const [location, setLocation] = useState('');
  const [projectDetail, setProjectDetail] = useState('');
  const [startingDate, setStartingDate] = useState('');
  const [budget, setBudget] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const handleSubmit = () => {
    // Here you would typically save the project data
    // For this example, we'll just go back to the dashboard
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>New Project</Text>
      <TextInput
        style={styles.input}
        placeholder="Project Name"
        value={projectName}
        onChangeText={setProjectName}
      />
      <TextInput
        style={styles.input}
        placeholder="Contractor Name"
        value={contractor}
        onChangeText={setContractor}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Project Detail"
        value={projectDetail}
        onChangeText={setProjectDetail}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Starting Date"
        value={startingDate}
        onChangeText={setStartingDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Decided Budget"
        value={budget}
        onChangeText={setBudget}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Contractor Wallet Address"
        value={walletAddress}
        onChangeText={setWalletAddress}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: color.Least,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: color.GREY,
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});