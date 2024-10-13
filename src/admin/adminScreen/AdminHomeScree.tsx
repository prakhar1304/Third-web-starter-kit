import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import color from '../../utility/color';

type Project = {
  id: string;
  name: string;
  contractor: string;
  location: string;
  startDate: string;
  budget: string;
  walletAddress: string;
};

export default function Dashboard() {
  const navigation = useNavigation();
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }: { item: Project }) => (
    <View style={styles.projectItem}>
      <Text style={styles.projectName}>{item.name}</Text>
      <Text>Contractor: {item.contractor}</Text>
      <Text>Location: {item.location}</Text>
      <Text>Start Date: {item.startDate}</Text>
      <Text>Budget: ${item.budget}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project Dashboard</Text>
      <TouchableOpacity
        style={styles.newProjectButton}
        onPress={() => navigation.navigate('NewProject' as never)}
      >
        <Text style={styles.buttonText}>New Project</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.searchInput}
        placeholder="Search projects..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredProjects}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: color.gold,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  newProjectButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  searchInput: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  list: {
    flex: 1,
  },
  projectItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});