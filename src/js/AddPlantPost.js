// // import axios from "axios";
// // export default axios.create()
//
//
// import {monthsDataMineral, monthsDataOrganic} from "./months";
//
// const API = "http://localhost:3000";
//
// const data = {
//     name: "",
//     stand: "",
//     soil: "",
//     additional_Info: "",
//     id: "",
//     image_url: "",
//     fertilization_mineral: monthsDataMineral,
//     fertilization_organic: monthsDataOrganic,
//     fertilizer_organic: ,
//     fertilizer_mineral: "",
//
//
// };
//
// fetch(`${API}/plants`, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//         "Content-Type": "application/json"
//     }
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });