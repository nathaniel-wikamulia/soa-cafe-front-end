import axios from "axios";

export const apiSimpanPesanan = async (
  price,
  product_name,
  quantity
) => {
  try {
    const param = {
      price: parseInt(price),
      product_name: product_name,
      quantity: parseInt(quantity),
    };

    var config = {
      method: "POST",
      url: "http://ec2-3-88-45-13.compute-1.amazonaws.com:8080/createOrder",
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

export const apiGetMenuOrder = async () => {
  try {
    const param = {
    };

    var config = {
      method: "GET",
      url: "http://ec2-3-88-45-13.compute-1.amazonaws.com:8080/getOrder",
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
