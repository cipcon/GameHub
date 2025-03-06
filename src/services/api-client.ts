import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6207ca82e6e04607811a52aebde398b5",
  },
});
