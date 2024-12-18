import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  walledLogo: {
    width: 233,
    height: 57,
    marginBottom: 100,
  },
  loginButton: {
    backgroundColor: "#19918F",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },

  loginButtonText: {
    fontWeight: "700",
    fontSize: 16,
    color: "white",
  },

  registerContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  registerPrompt: {
    fontSize: 16,
    fontWeight: "400",
    color: "black",
  },
  registerLink: {
    fontSize: 16,
    fontWeight: "500",
    color: "#19918F",
  },
  
});
