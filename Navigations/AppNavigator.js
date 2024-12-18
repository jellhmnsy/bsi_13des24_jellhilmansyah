
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from "../screen/Login";
import RegisterPage from "../screen/Register";
import ProfileScreen from "../screen/Logout";
import Dashboard from "../screen/Home";
import TopUpScreen from "../screen/TopUpScreen";
import TransferScreen from "../screen/TransferScreen";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator intialRouteName='Login'>
            <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}} />
            <Stack.Screen name="Register" component={RegisterPage} options={{headerShown: false}} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
            <Stack.Screen name="Topup" component={TopUpScreen} options={{headerShown: false}} />            
            <Stack.Screen name="Transfer" component={TransferScreen} options={{headerShown: false}} />
            <Stack.Screen
          name="MainApp" // Tab Navigator akan diakses sebagai MainApp
          component={TabNavigator}
          options={{ headerShown: false }} // Hilangkan header untuk TabNavigator
        />
        </Stack.Navigator>
    )
}