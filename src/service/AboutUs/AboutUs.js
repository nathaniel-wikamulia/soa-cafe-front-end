import axios from "axios";

export const apiGetAboutUs = async () => {
    try {
      const param = {
      };
  
      var config = {
        method: "get",
        url: "http://13.229.66.147:5000/aboutus/list",
        data: param,
        headers: {
        },
      };
      const { data } = await axios(config);
      console.log(data)
      return { data };
    } catch (error) {
      console.log(error);
      const { data } = await error.response;
      return { data };
    }
  };
