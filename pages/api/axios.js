import axios from "axios";

export default axios.create({
  baseURL: "https://musanzi-wilfried.me",

  headers: {
    "Content-Type": "application/json",
  },
});
