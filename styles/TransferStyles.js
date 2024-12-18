import { StyleSheet } from 'react-native';

export const transferStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  toAccount: {
    fontSize: 16,
    color: '#00796B',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
  },
  currency: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
  },
  amountInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  balanceText: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  balanceAmount: {
    color: '#00796B',
    fontWeight: 'bold',
  },
  notesInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#19918F',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
