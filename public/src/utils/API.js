import axios from "axios";
var BASEURL = "https://randomuser.me/api/?results=20&nat=us";

// eslint-disable-next-line
export default {
  search: function () {
    return axios.get(BASEURL);
  },
};
