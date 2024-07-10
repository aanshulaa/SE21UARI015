const axios = require('axios');

const url = "http://20.244.56.144/test/register";
const data = {
    companyName: "Mahindra University",
    ownerName: "Anshula Killamsetty",
    ownerEmail: "se21uari015@mahindrauniversity.edu.in",
    accessCode: "CTxqiG",
    rollNo: "SE21UARI015"
};

axios.post(url, data, {
    headers: {
        "Content-Type": "application/json"
    }
})
.then(response => {
    console.log("Registration successful!", response.data);
})
.catch(error => {
    console.log("Registration failed:", error.response.status, error.response.data);
});
