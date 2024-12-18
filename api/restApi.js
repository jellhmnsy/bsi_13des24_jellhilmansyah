import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create axios instance
const api = axios.create({
  baseURL: 'http://54.254.164.127/api/v1',
  headers: {
    'Content-Type': 'application/json', Authorization : "Bearer " + AsyncStorage.getItem('userToken') 
  },
});

// Add a request interceptor to set the Authorization header dynamically
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('userToken'); // Get the token asynchronously
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Set the token in headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Function to register a new user
export const register = async (fullname, email, password) => {
    try {
      const response = await api.post('/auth/register', { 
        full_name: fullname, // Change "fullname" to "full_name"
        email,
        password
      });
      return response.data.data; // Return the response data
    } catch (error) {
      console.error("Registration Error:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  };
  

// Function to login a user
export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data.data; // Return the token/data if successful
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.error || 'Login failed');
  }
};


// Logout Function
export const logout = async () => {
  try {
    await AsyncStorage.removeItem('userToken'); // Hapus token
  } catch (error) {
    console.error("Logout Error:", error.message);
    throw new Error('Failed to logout');
  }
};


// Fetch posts example
export const fetchPosts = async () => {
  try {
    const response = await api.get('/users');
    return response.data.data;
  } catch (error) {
    console.error("Fetch Posts Error:", error.message);
    throw new Error('Failed to fetch posts');
  }
};

export const fetchBalance = async () => {
  try {
    const response = await api.get('/users/me'); // Endpoint sesuai API
    return response.data.data;
  } catch (error) {
    console.error("Fetch Balance Error:", error.message);
    throw new Error('Failed to fetch balance');
  }
};

export const fetchName = async () => {
  try {
    const response = await api.get('/users/me'); // Endpoint sesuai API
    return response.data.data;
  } catch (error) {
    console.error("Fetch Name Error:", error.message);
    throw new Error('Failed to fetch Name');
  }
};

export const fetchAccountNo = async () => {
  try {
    const response = await api.get('/users/me'); // Endpoint sesuai API
    return response.data.data;
  } catch (error) {
    console.error("Fetch Name Error:", error.message);
    throw new Error('Failed to fetch Name');
  }
};

export const topUp = async (amount, description, fromTo = "180387") => {
  try {
    const response = await api.post('/transactions/', {
      type: "c",           // Fixed as "c" for credit (top-up)
      from_to: fromTo,     // Default account number or recipient
      amount: Number(amount), // Ensure amount is sent as a number
      description,         // Use description instead of notes
    });
    return response.data.data;
  } catch (error) {
    console.error("Top Up Error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Top up failed");
  }
};


export const transfer = async (toAccount, amount, notes) => {
  try {
    const response = await api.post('/transactions/', {
      type: "d",               // "d" for debit (transfer)
      from_to: toAccount,      // Destination account number
      amount: Number(amount),  // Ensure it's a number
      description: notes,      // Rename 'notes' to 'description'
    });
    return response.data.data;
  } catch (error) {
    console.error("Transfer Error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Transfer failed');
  }
};


export const fetchTransactions = async () => {
  try {
    const response = await api.get(`/transactions`); // endpoint
    return response.data; // Periksa jika `response.data` langsung mengandung `success` dan `data`
  } catch (error) {
    console.error("Error fetching transactions:", error.message);
    throw error;
  }
};



export default api;
