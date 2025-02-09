import axios from 'axios';

export default axios.create({
    baseURL: "https://rawg-video-games-database.p.rapidapi.com",
    params: {
        api_key: "e34eb4e3b2msh7049b810c7b3b31p15b583jsnd0b3a737a038",
    }
})