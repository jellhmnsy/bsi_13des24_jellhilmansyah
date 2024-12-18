import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect } from "react";
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
  ActivityIndicator,
} from "react-native";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { dashboardStyles } from "../styles/DashboardStyles";
import { useNavigation } from "@react-navigation/native";
import { fetchAccountNo, fetchBalance, fetchName } from "../api/restApi";
import { fetchTransactions } from "../api/restApi";
import ProfileScreen from "./Logout";
const vec_matahari = require("../assets/vector_matahari.png");
const matahari = require("../assets/matahari.png");
const plus_button = require("../assets/PlusButton.png");
const send_button = require("../assets/SendButton.png");
const eyes_show = require("../assets/eyes_show.png");
const eyes_hide = require("../assets/eyes_invisible.png");

export default function Dashboard() {
  const [showBalance, setShowBalance] = useState(true);
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [balance, setBalance] = useState(0);
  const [fullname, setFullname] = useState("");
  const [accountNo, setAccountNo] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const toggleBalanceVisibility = () => setShowBalance(!showBalance);

  const getBalance = async () => {
    try {
      const balanceData = await fetchBalance();
      setBalance(balanceData.balance); // Asumsikan API return { balance: number }
    } catch (error) {
      console.error(error.message);
    }
  };

  const getName = async () => {
    try {
      const fullnameData = await fetchName();
      setFullname(fullnameData.full_name);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getAccountNo = async () => {
    try {
      const accountNoData = await fetchAccountNo();
      setAccountNo(accountNoData.account_no);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getTransactions = async () => {
    try {
      const response = await fetchTransactions();
      console.log("API Response:", response); // Debug: tampilkan semua respons
      if (response.success) {
        const formattedTransactions = response.data.map((item) => ({
          id: item.id.toString(),
          name: item.from_to,
          type: item.type === "c" ? "Topup" : "Transfer",
          amount: item.type === "c" ? item.amount : -item.amount,
          date: new Date(item.created_at).toLocaleDateString("id-ID"),
        }));
        setTransactions(formattedTransactions);
      } else {
        setError("Failed to fetch transactions");
      }
    } catch (error) {
      console.error("Fetch Transactions Error:", error.message);
      setError("Error fetching transactions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBalance();
    getName();
    getAccountNo();
    getTransactions();
  }, []);

  const renderTransaction = ({ item }) => (
    <View style={dashboardStyles.transactionItem}>
      <View style={dashboardStyles.transactionDetail}>
        <Text style={dashboardStyles.transactionName}>{item.name}</Text>
        <Text style={dashboardStyles.transactionType}>{item.type}</Text>
        <Text style={dashboardStyles.transactionDate}>{item.date}</Text>
      </View>
      <Text
        style={[
          dashboardStyles.transactionAmount,
          item.amount > 0 ? dashboardStyles.positive : dashboardStyles.negative,
        ]}
      >
        {item.amount > 0
          ? `+ ${item.amount.toLocaleString()}`
          : `- ${Math.abs(item.amount).toLocaleString()}`}
      </Text>
    </View>
  );

  return (
  
    <SafeAreaView style={dashboardStyles.container}>
      <View style={dashboardStyles.header}>
        <View style={dashboardStyles.profileSection}>
          <Image source={{}} style={dashboardStyles.profileImage} />
          <View>
            <Text style={dashboardStyles.accountName}>{`${fullname}`}</Text>
            <Text style={dashboardStyles.accountType}>Personal Account</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Image
            source={vec_matahari}
            style={{ width: 30, height: 30, marginRight: 20 }}
          />
          <ProfileScreen />
        </View>
      </View>
      <View style={dashboardStyles.greeting}>
        <View>
          <Text
            style={dashboardStyles.goodMorning}
          >{`Good Morning, ${fullname}`}</Text>
          <Text style={{ fontWeight: 400, fontSize: 16, marginTop: 5 }}>
            Check all your incoming and outgoing transactions here
          </Text>
        </View>
        <View>
          <Image source={matahari} style={{ width: 81.45, height: 77 }}></Image>
        </View>
      </View>

      <View style={dashboardStyles.accountNo}>
        <Text style={dashboardStyles.label}>Account No.</Text>
        <Text style={dashboardStyles.accountNumber}>{accountNo}</Text>
      </View>

      <View style={dashboardStyles.accountDetails}>
        <View style={{ justifyContent: "center" }}>
          <Text style={{ color: "black", fontSize: 14, fontWeight: 400 }}>
            Balance
          </Text>
          <View style={dashboardStyles.balanceDisplay}>
            <Text style={dashboardStyles.balance}>
              {showBalance ? `Rp ${balance.toLocaleString()}` : "**********"}
            </Text>

            <TouchableOpacity onPress={toggleBalanceVisibility}>
              <Text style={dashboardStyles.toggleVisibility}>
                {showBalance ? (
                  <Image source={eyes_hide} />
                ) : (
                  <Image source={eyes_show} />
                )}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={dashboardStyles.actionButtons}>
          <TouchableOpacity
            style={dashboardStyles.actionButton}
            onPress={() => navigation.navigate("Topup")}
          >
            <Text style={dashboardStyles.actionButtonText}>
              <Image source={plus_button} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={dashboardStyles.actionButton}
            onPress={() => navigation.navigate("Transfer")}
          >
            <Text style={dashboardStyles.actionButtonText}>
              <Image source={send_button} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={dashboardStyles.transactionHistory}>
        <Text style={dashboardStyles.sectionTitle}>Transaction History</Text>
        <FlatList
          data={transactions} // Data diambil dari state
          renderItem={renderTransaction}
          keyExtractor={(item) => item.id}
        />
        /
      </View>
    </SafeAreaView>
  );
}
