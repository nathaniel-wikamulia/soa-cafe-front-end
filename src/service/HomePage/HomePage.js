import axios from "axios";

export const apiGetMenu = async () => {
    try {
        const param = {
        };

        var config = {
            method: "get",
            url: "http://13.229.66.147:5000/homepage/list",
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
