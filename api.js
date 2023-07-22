
import axios from 'axios';

const API_BASE_URL = 'https://your-api-base-http://20.244.56.144/train/register.com';
export const getTrainSchedule = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/train-schedule`);
    return response.data;
  } catch (error) {
    console.error('Error fetching train schedule:', error);
    return [];
  }
};

export const registerServer = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register-server`);
    return response.data;
  } catch (error) {
    console.error('Error registering server:', error);
    return { success: false, message: 'Server registration failed.' };
  }
};
