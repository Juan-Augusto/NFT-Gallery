import axios from "axios";

const apiNFTGallery = axios.create(
    {
        baseURL: 'http://localhost:3500'
    }
);

export default apiNFTGallery;