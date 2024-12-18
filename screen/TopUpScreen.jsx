import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { topUpStyles } from "../styles/TopUpStyles";

import { topUp } from "../api/restApi";

export default function TopUpScreen() {
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("BYOND Pay"); // Default

  // Define handleTopUp inside the component
  const handleTopUp = async () => {
    try {
      await topUp(amount, notes); // notes will be sent as 'description'
      alert("Top-up successful!");
    } catch (error) {
      console.error("Top-up Error:", error.message);
      alert(error.message || "Top up failed");
    }
  };

  return (
    <SafeAreaView style={topUpStyles.topUpContainer}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={topUpStyles.header}>
          <View style={topUpStyles.profileSection}>
              <Text style={topUpStyles.headerTitle}>TOP UP</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Image
              source={{}}
              style={{ width: 30, height: 30, marginRight: 20 }}
            />
          </View>
        </View>

        <View style={{}}>
          <View style={topUpStyles.formGroup}>
            <Text style={topUpStyles.label}>Amount</Text>
            <View style={topUpStyles.inputContainer}>
              <Text style={topUpStyles.currency}>IDR</Text>
              <TextInput
                style={topUpStyles.amountInput}
                placeholder="100.000"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
              />
            </View>
          </View>
          <View style={topUpStyles.formGroup}>
            <TouchableOpacity style={topUpStyles.dropdown}>
              <Text style={topUpStyles.dropdownText}>BYOND Pay</Text>
            </TouchableOpacity>
          </View>
          <View style={topUpStyles.formGroup}>
            <Text style={topUpStyles.label}>Notes</Text>
            <TextInput
              style={topUpStyles.notesInput}
              placeholder="Write your notes here"
              value={notes}
              onChangeText={setNotes}
            />
          </View>
          <TouchableOpacity
            style={topUpStyles.submitButton}
            onPress={handleTopUp}
          >
            <Text style={topUpStyles.submitButtonText}>Top Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
