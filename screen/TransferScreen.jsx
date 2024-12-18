import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { transferStyles } from "../styles/TransferStyles";
import { transfer } from '../api/restApi';
import { SafeAreaView } from "react-native";

export default function TransferScreen() {
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');
  const toAccount = '940208'; // This can be turned into an input if needed

  // Move handleTransfer INSIDE the component so it has access to `toAccount`
  const handleTransfer = async () => {
    try {
      await transfer(toAccount, amount, notes);
      alert("Transfer successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={transferStyles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
    <View style={{marginRight: 20, marginLeft: 20}}>
      {/* Header */}
      <Text style={transferStyles.pageTitle}>Transfer</Text>
      <Text style={transferStyles.toAccount}>To: {toAccount}</Text>

      {/* Amount Input */}
      <View style={transferStyles.formGroup}>
        <Text style={transferStyles.label}>Amount</Text>
        <View style={transferStyles.inputContainer}>
          <Text style={transferStyles.currency}>IDR</Text>
          <TextInput
            style={transferStyles.amountInput}
            placeholder="Enter amount"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
        </View>
        <Text style={transferStyles.balanceText}>
          Balance:{" "}
          <Text style={transferStyles.balanceAmount}>IDR 10.000.000</Text>
        </Text>
      </View>

      {/* Notes Input */}
      <View style={transferStyles.formGroup}>
        <Text style={transferStyles.label}>Notes</Text>
        <TextInput
          style={transferStyles.notesInput}
          placeholder="Add a note"
          multiline
          value={notes}
          onChangeText={setNotes}
        />
      </View>

      {/* Transfer Button */}
      <TouchableOpacity
        style={transferStyles.submitButton}
        onPress={handleTransfer}
      >
        <Text style={transferStyles.submitButtonText}>Transfer</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}
