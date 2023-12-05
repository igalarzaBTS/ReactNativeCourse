import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const baseURL = "http://localhost:8080/api"

const cafeAPI = axios.create({ baseURL });

cafeAPI.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token')

    if (token) {
      config.headers['x-token'] = token
    }
    return config
  }
)

export default cafeAPI;