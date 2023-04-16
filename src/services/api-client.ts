import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6ff118cc41f741d2a7a9ae7a51fb2947",
  },
});
