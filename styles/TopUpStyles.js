import { StyleSheet } from "react-native";

export const topUpStyles = StyleSheet.create ({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
      },
      header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        marginBottom: 10,
      },
      headerTitle:{
        fontSize: 16,
        fontWeight: 700,
      },
      button: {
        backgroundColor: '#1DB954',
        padding: 15,
        borderRadius: 8,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      topUpContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
      },
      formGroup: {
        marginBottom: 8,
        backgroundColor: "#fff"
      },
      label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
        marginLeft: 10,
        marginTop: 10,
        opacity: 0.65
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 0,
        paddingHorizontal: 10,
        height: 50,
      },
      currency: {
        fontSize: 14,
        color: '#666',
        marginRight: 10,
      },
      amountInput: {
        flex: 1,
        fontSize: 30,
        color: '#333',
      },
      dropdown: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        borderColor: '#ddd',
        height: 70,
        justifyContent: 'center',
        paddingHorizontal: 10,
      },
      dropdownText: {
        fontSize: 16,
        color: '#333',
      },
      notesInput: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderColor: '#ddd',
        height: 70,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#333',
      },
      submitButton: {
        backgroundColor: '#19918F',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginLeft: 20,
        marginRight : 20,
      },
      submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
    
});