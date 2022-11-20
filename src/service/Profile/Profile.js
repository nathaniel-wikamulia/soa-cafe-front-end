import axios from "axios";

export const apiGetProfileData = async () => {
  try {
    const param = {
    };

    var config = {
      method: "get",
      url: "https://soacafe.herokuapp.com/api/",
      data: param,
      headers: {
        "content-type": "application/json",
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
