import axios from "axios";
const BASEURL = "https://randomapi.com/";
const APIKEY = "P2HJ-C2JD-M96E-4KR8";

export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
};
