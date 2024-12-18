import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  SafeAreaView,
  Text,
  Button,
  View,
} from "react-native";

export default function FormComponent({ state, value, onChangeText, error }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {state === "fullname" && (
          <>
             <TextInput
              style={styles.input}
              placeholder="Fullname"
              value={value}
              onChangeText={onChangeText}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
          </>
        )}

        {state === "email" && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={value}
              onChangeText={onChangeText}
              autoCorrect={false}
              autoCapitalize="none"
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
          </>
        )}

        {state === "password" && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={value}
              onChangeText={onChangeText}
              secureTextEntry
              autoCorrect={false}
              autoCapitalize="none"
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
          </>
        )}

        {state === "re-input password" && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Re-type Password"
              value={value}
              onChangeText={onChangeText}
              secureTextEntry
              autoCorrect={false}
              autoCapitalize="none"
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
          </>
        )}

        {state === "phoneNumber" && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              inputMode="numeric"
              autoCorrect={false}
              autoCapitalize="none"
            />
            {errors.phoneNumber && (
              <Text style={styles.errorText}>{errors.phoneNumber}</Text>
            )}
          </>
        )}

        {state === "notes" && (
          <>
            <TextInput
              style={[styles.input, styles.notesInput]}
              placeholder="Notes"
              value={notes}
              multiline={true}
              numberOfLines={4}
              onChangeText={setNotes}
            />
            {errors.notes && (
              <Text style={styles.errorText}>{errors.notes}</Text>
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    backgroundColor: "#FAFBFD",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    height: 60,
    width: "100%",
    alignSelf: "center",
  },
  notesInput: {
    height: 100,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
});
