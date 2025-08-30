import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Pressable, ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';


export default function SignupScreen() {

  const [image, setImage] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState('');
  const cities = ['Colombo', 'Anuradhapura', 'Gampaha', 'Mathara', 'Kalutara'];

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    var result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollcontent}>
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Create Account</Text>
        <Text style={styles.subTitle}>Fill in the information below to create your account.</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.imageContainer}>
          <Pressable style={styles.imageUploader} onPress={pickImage}>
            {image ? (
              <Image source={{ uri: image }} style={styles.profileImage} />
            ) : (
              <View style={styles.imagePlaceholder}>
                <Text style={styles.imageText}>+</Text>
                <Text style={styles.imageLabel}>Add Image</Text>
              </View>
            )}
          </Pressable>
                  </View>
 
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput placeholder="Insert your full name" style={styles.input} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput placeholder="Insert your username" style={styles.input} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput placeholder="Insert your email" style={styles.input} keyboardType="email-address" />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput placeholder="Insert your password" style={styles.input} secureTextEntry={true} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput placeholder="Confirm your password" style={styles.input} secureTextEntry={true} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>City</Text>
            <Picker
              selectedValue={selectedCity}
              onValueChange={(itemValue) => setSelectedCity(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select a city" value="" />
              {cities.map((city) => (
                <Picker.Item key={city} label={city} value={city} />
              ))}
            </Picker>
          </View>
 
 
        </View>
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollcontent: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 10,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
  },
  form: {
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  imageUploader: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#ddd",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  profileImage: {
    width: 116,
    height: 116,
    borderRadius: 58,
  },
  imagePlaceholder: {
    alignItems: "center",
  },
  imageText: {
    fontSize: 32,
    color: "#999",
    marginBottom: 5,
  },
  imageLabel: {
    fontSize: 14,
    color: "#666",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: 4,
  },
});