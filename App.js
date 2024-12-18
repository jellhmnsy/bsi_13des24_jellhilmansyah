// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   SafeAreaView,
//   TextInput,
// } from "react-native";
// import { ScrollView } from "react-native";
// import { dashboardStyles } from "./styles/DashboardStyles";
// import { topUpStyles } from "./styles/TopUpStyles";
// import { transferStyles } from "./styles/TransferStyles";
// import Dashboard from "./screen/Home";
// import LoginPage from "./screen/Login";
// import RegisterPage from "./screen/Register";
// import TopUpScreen from "./screen/TopUpScreen";
// import TransferScreen from "./screen/TransferScreen";
// const vec_matahari = require("./assets/vector_matahari.png");
// const matahari = require("./assets/matahari.png");
// const plus_button = require("./assets/PlusButton.png");
// const send_button = require("./assets/SendButton.png");

// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           tabBarIconStyle: { display: "none" }, // Menghilangkan ikon bawaan
//           headerShown: false,
//           tabBarStyle: {
//             flexDirection: "columns",
//             justifyContent: "space-around",
//             alignItems: "center",
//             backgroundColor: "#ffffff",
//             paddingVertical: 10,
//             borderTopWidth: 1,
//             borderTopColor: "#ddd",
//           },
//           tabBarLabelStyle: {
//             fontSize: 14,
//             color: "black",
//             fontWeight: 'bold',
//           },
//         }}
//       >
//         <Tab.Screen name="Home" component={Dashboard} />
//         <Tab.Screen name="Top Up" component={TopUpScreen} />
//         <Tab.Screen name="Transfer" component={TransferScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({});

// export default App;

import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./Navigations/AppNavigator.js";
import {
  useAuth,
  AuthProvider,
} from "./context/AuthContext.js";
import LoginPage from "./screen/Login";
import Dashboard from "./screen/Home.jsx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAvoidingView, Platform } from "react-native";

export default function App() {
  const auth = useAuth();
  const Stack = createStackNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem("userToken");
      setIsLoggedIn(!!token);
      setLoading(false);
    };
    checkLoginStatus();
  }, []);

  if (loading) return null; // Tampilkan splash screen jika diperlukan

  return (
    <AuthProvider>
      <KeyboardAvoidingView
  style={{ flex: 1 }}
  behavior={Platform.OS === "ios" ? "padding" : "height"}
  keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0} // 80 adalah tinggi tab bar atau header
>
      <NavigationContainer>
        {isLoggedIn ? (
          <AppNavigator>
            {auth ? (
              <Stack.Screen name="Home" component={Dashboard} />
            ) : (
              <>
                <Stack.Screen name="Login" component={LoginPage} />
              </>
            )}
          </AppNavigator>
        ) : (
          <LoginScreen />
        )}
      </NavigationContainer>
      </KeyboardAvoidingView>
    </AuthProvider>
  );
}
