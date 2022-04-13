import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api/v1/restaurants",
  //baseURL: "http://localhost:5000/api/v1",
  //baseURL: "https://us-west-2.aws.data.mongodb-api.com/app/restaurant-roulette-ghuzh/endpoint/",
  headers: {
    "Content-type": "application/json"
  }
});