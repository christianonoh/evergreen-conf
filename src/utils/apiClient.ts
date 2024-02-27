const axios = require("axios");

const apiClient = axios.create({
  baseURL: "https://api.airtable.com/v0/appiCNYf0HbJ6yJ77",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer patvXmwlT7GiigTNL.08a39f658fb101551880e8ef06805cacf4c61733b44d7c7e5aede9d865f85404",
  },
});

export default apiClient;
