import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";
import { loginStyles } from "../styles/LoginPageStyles";
import FormComponent from "../components/Form";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { login } from "../api/restApi";
import { useAuth } from "../context/AuthContext";
const walled_logo = require("../assets/WalledLogo.png");

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();
  const { login: setLoginState } = useAuth();

  const handleLogin = () => {
    let newErrors = {};

    // Email Validation
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!validEmail) {
      newErrors.email = "Invalid email format.";
    }

    // Password Validation
    if (!password.trim()) {
      newErrors.password = "Password is required.";
    } else if (password.length < 7) {
      newErrors.password = "Password must be at least 7 characters.";
    }

    // Update errors
    setErrors(newErrors);

    // If no errors, navigate
    if (Object.keys(newErrors).length === 0) {
      handleSubmit(email, password);
    }
  };

  const handleSubmit = async (email, password) => {
    try {
      const { token } = await login(email, password);
      setLoginState(token);
      alert("Login Success");
      navigation.navigate("MainApp");
    } catch (error) {
      alert("Error: salah");
    }
  };

  const handleRegister = () => {
    // Logic for navigating to the Register Page
    navigation.navigate("Register");
    console.log("Navigate to Register Page");
  };

  return (
    <SafeAreaProvider style={{ backgroundColor: "white", flex: 1 }}>
      <SafeAreaView style={loginStyles.container}>
        <Image source={walled_logo} style={loginStyles.walledLogo} />

        <View style={{ width: 333 }}>
          {/* Pass props for email */}
          <FormComponent
            state="email"
            value={email}
            onChangeText={setEmail}
            error={errors.email || ""} // Ensure it's always a string
          />
          <FormComponent
            state="password"
            value={password}
            onChangeText={setPassword}
            error={errors.password || ""} // Ensure it's always a string
          />
        </View>

        <View>
          <TouchableOpacity
            style={loginStyles.loginButton}
            onPress={handleLogin}
          >
            <Text style={loginStyles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={loginStyles.registerPrompt}>
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={handleRegister}>
              <Text style={loginStyles.registerLink}>Register here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
