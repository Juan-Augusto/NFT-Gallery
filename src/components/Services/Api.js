import axios from "axios";

const apiNFTGallery = axios.create(
    {
        baseURL: 'https://database-nft-gallery.herokuapp.com/'
    }
);

export default apiNFTGallery;