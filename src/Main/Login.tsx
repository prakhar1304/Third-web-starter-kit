import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
import { CoinbaseWallet, ConnectWallet } from '@thirdweb-dev/react-native';
import color from '../utility/color';

type RadioOption = 'government' | 'contractor' | null;

const RadioButton = ({ selected, onPress, label }: { selected: boolean; onPress: () => void; label: string }) => (
  <TouchableOpacity style={styles.radioButton} onPress={onPress}>
    <View style={[styles.radio, selected && styles.radioSelected]} />
    <Text style={styles.radioLabel}>{label}</Text>
  </TouchableOpacity>
);

export default function Login() {
  const [selectedOption, setSelectedOption] = useState<RadioOption>(null);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (selectedOption === 'government') {
      navigation.navigate('GOV');
    } else if (selectedOption === 'contractor') {
      navigation.navigate('Contractor');
    } else {
      // Handle case when no option is selected
      console.log('Please select an option');
    }
  };

  const handleGuestLogin = () => {
    navigation.navigate('Contractor');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Login Type</Text>
      <View style = {styles.subContainer}>
        <View style={styles.radioGroup}>
          <RadioButton
            selected={selectedOption === 'government'}
            onPress={() => setSelectedOption('government')}
            label="Government"
          />
          <RadioButton
            selected={selectedOption === 'contractor'}
            onPress={() => setSelectedOption('contractor')}
            label="Contractor"
          />
        </View>
        
        <ConnectWallet />
      </View>

 
      <TouchableOpacity style={styles.guestButton}  onPress={handleLogin}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.guestButton} >
        <Text style={styles.buttonText}>Login as Guest</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: color.bg_white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: color.BLACK
  },
  subContainer:{
    backgroundColor:color.Least,
    height:350,
    width:300,
    borderRadius:20,
    elevation:2,
    justifyContent:"flex-start",
    alignItems:"center"
  },
  radioGroup: {
    marginBottom: 20,
    backgroundColor: color.Offwhite,
    height: "25%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection:"row",
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioSelected: {
    backgroundColor: '#000',
  },
  radioLabel: {
    fontSize: 16,
    color:color.GREY
  },
  loginButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  guestButton: {
    backgroundColor: '#34C759',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
