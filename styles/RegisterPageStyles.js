import { StyleSheet } from "react-native";

export const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  walledLogo: {
    width: 233,
    height: 57,
    marginBottom: 20,
  },
  form: {

  },
  registerButton: {
    backgroundColor: "#19918F",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginTop: 30,
  },

  registerButtonText: {
    fontWeight: "700",
    fontSize: 16,
    color: "white",
  },

  loginContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  loginPrompt: {
    fontSize: 16,
    fontWeight: "400",
    color: "black",
  },
  loginLink: {
    fontSize: 16,
    fontWeight: "500",
    color: "#19918F",
  },
  containerCheckbox : {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  sectionCheckBox : {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCheckbox :{
    margin: 8,
  },
  paragraphCheckbox : {
    fontSize: 15,
  },
});
