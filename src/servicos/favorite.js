import axios from "axios";

const favoriteAPI = axios.create({baseURL: "http://localhost:8000/favoritos"})

async function getFavoriteFromAPI(){
    const response = await favoriteAPI.get('/')
    return response.data
}

async function postFavoriteToAPI(id){
    await favoriteAPI.post(`/${id}`)
}

async function deleteFavoriteFromAPI(id){
    await favoriteAPI.delete(`/${id}`)
}

export {
    getFavoriteFromAPI, postFavoriteToAPI, deleteFavoriteFromAPI
}