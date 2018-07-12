import axios from "axios";

export default {

    localLogIn: (loginData) => {
        return axios.post("/api/user/locallogin", loginData);  
    },
    createAccount: (newUser)=> {
        return axios.post("/api/user/signup", newUser);
    },
    searchByEmail: (email) => {
        return axios.get("/api/user/" + email);
    },
    searchById: (id) => {
        // console.log("api", id)
        return axios.get("/api/user/get/" + id );
    },
    updateById: (id, object) => {
        return axios.post("/api/user/post/" + id, object);
    },
    addPost: (noteInfo) => {
        return axios.post("/api/post/", noteInfo);
    },
    deletePost: (id) => {
        return axios.delete("/api/post/" + id)
    },
    addItem:(recordInfo) => {
        return axios.post("/api/items/", recordInfo);
    },
    deleteItem: (id) => {
        return axios.delete("/api/items/" + id)
    },

}