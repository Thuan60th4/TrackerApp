import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://react-native-ba2bd-default-rtdb.asia-southeast1.firebasedatabase.app/",
});

instance.interceptors.response.use(
  function (res) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (res && res.data) {
      return res.data;
    }

    return res.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    throw error;
  }
);

export default instance;