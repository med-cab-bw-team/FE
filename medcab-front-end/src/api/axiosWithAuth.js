import axios from "axios";


export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    console.log("axiosWithAuth Token:", token);
    return axios.create({
        baseURL: "https://med-cab-bw.herokuapp.com/",
        headers: {
            authorization: token
        }
    })
}

