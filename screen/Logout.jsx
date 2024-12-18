import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { logout } from "../api/restApi";
import { useNavigation } from "@react-navigation/native";
import { profileStyles } from "../styles/LogOutStyles";
import { Image } from "react-native";
const logoutImage = require ("../assets/logout.png")
 
export default function ProfileScreen() {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await logout(); // Panggil fungsi logout
      Alert.alert("Logout Successful", "You have been logged out.");
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }], // Kembali ke layar login
      });
    } catch (error) {
      Alert.alert("Logout Failed", error.message);
    }
  };

  return (
    <View>

      {/* Tombol Logout */}
      <TouchableOpacity style={profileStyles.logoutButton} onPress={handleLogout}>
        <Text style={profileStyles.logoutButtonText}>
          <Image source={logoutImage}></Image>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
