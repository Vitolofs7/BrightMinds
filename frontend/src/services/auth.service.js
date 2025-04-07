import api from './api';

export const registerUser = async (userData) => {
  try {
    console.log("📨 Sending data to register user:", userData);
    const response = await api.post('/auth/register', userData);
    console.log("✅ User registered successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error registering user:", error.response?.data || error.message);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const credentials = btoa(`${email}:${password}`);
    console.log("🔐 Sending login request for email:", email);
    console.log("🔐 Sending login request for password:", password);

    const response = await api.post('/auth/login', null, {
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    });

    console.log("✅ Login successful. Token received:", response.data.token);
    return response.data;
  } catch (error) {
    console.error("❌ Login error:", error.response?.data || error.message);
    throw error;
  }
};
