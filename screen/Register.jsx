import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Alert
} from "react-native";

import FormComponent from "../components/Form";
import ModalComponent from "../components/Modal";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { registerStyles } from "../styles/RegisterPageStyles";
import { register } from "../api/restApi";
import { useAuth } from "../context/AuthContext";
const walled_logo = require("../assets/WalledLogo.png");

export default function RegisterPage() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isSelected, setIsSelected] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const validateInputs = () => {
    let newErrors = {};

    // Name Validation
    if (!fullname.trim()) {
      newErrors.fullname = "Name is required.";
    } else if (fullname.length < 3) {
      newErrors.fullname = "Name must be at least 3 characters.";
    }

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

    // Repassword Validation
    if (!repassword.trim()) {
      newErrors.repassword = "Please retype your password.";
    } else if (repassword !== password) {
      newErrors.repassword = "Passwords do not match.";
    }

    // Terms and Conditions
    if (!isSelected) {
      newErrors.terms = "You must agree to the terms and conditions.";
    }

    return newErrors;
  };

  const handleRegister = () => {
    const newErrors = validateInputs();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {

      handleSubmit(fullname, email, password);


    }
    
  };

    const handleSubmit = async (fullname, email, password) => {
      try {
        const token = await register(fullname, email, password);
        if (token) {
          console.log(token)
          Alert.alert("Success", "Registration completed successfully!", [
            { text: "OK", onPress: () => navigation.replace("Login") },
          ]);
          console.log("Registration successful!");
          setErrors({})
        }
        
        } catch (error) {
        alert('errorrrrrrrr');
      }
    };

  return (
    <SafeAreaProvider style={{ backgroundColor: "white", flex: 1 }}>
      <SafeAreaView style={registerStyles.container}>
        <Image source={walled_logo} style={registerStyles.walledLogo} />

        <View style={{ marginTop: 50, width: 333 }}>
          <FormComponent
            state="fullname"
            value={fullname}
            onChangeText={setFullname}
            error={errors.fullname}
          />
          <FormComponent
            state="email"
            value={email}
            onChangeText={setEmail}
            error={errors.email}
          />
          <FormComponent
            state="password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            error={errors.password}
          />
          <FormComponent
            state="re-input password"
            secureTextEntry
            value={repassword}
            onChangeText={setRepassword}
            error={errors.repassword}
          />
        </View>
        <View
          style={{ flexDirection: "row", justifyContent: "center", width: 233 }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              gap: 2,
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => setIsSelected(!isSelected)}
            >
              <View
                style={[styles.checkbox, isSelected && styles.checkedCheckbox]}
              />
            </TouchableOpacity>//
            <Text style={{ fontSize: 16 }}>I agree to the</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={{ color: "#19918F", fontSize: 16 }}>
                Terms and Conditions
              </Text>
            </TouchableOpacity>
            <Text style={{color: "red", fontSize: 16}}>*</Text>
          </View>
          <ModalComponent
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          ></ModalComponent>
        </View> 
        {errors.terms && (
          <Text style={{ color: "red", textAlign: "center", marginTop: 5 }}>
            {errors.terms}
          </Text>
        )}
        <View>
          <TouchableOpacity
            style={registerStyles.registerButton}
            onPress={handleRegister}
          >
            <Text style={registerStyles.registerButtonText}>Register</Text>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <Text style={registerStyles.loginPrompt}>
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={registerStyles.loginLink}>Login here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    height: 24,
    width: 24,
    borderWidth: 2,
    borderColor: "#000",
    marginRight: 8,
  },
  checkedCheckbox: {
    backgroundColor: "#4CAF50",
  },
});
