import axios from 'axios'

export class realClient{
    constructor(){
        this.apiClient = axios.create({
            baseURL : 'https://youtube.googleapis.com/youtube/v3/',
            params : { key :process.env.REACT_APP_YOUTUBE_API_KEY}
        })
    }

    async Search(params){
        return this.apiClient.get('search', params); 
    }

    async Popular(params){
        return this.apiClient.get('videos', params);
    }

    async Channel(params){
        return this.apiClient.get('channels', params);
    }

    async Related(params){
        return this.apiClient.get('search', params);
    }


}