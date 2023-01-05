import axios from 'axios'

export class fakeClient{

    async Search(){
        return axios.get('/videos/search.json'); 
    }

    async Popular(){
        return axios.get('/videos/popular.json');
    }

    async Channel(){
        return axios.get('/videos/channel.json');
    }

    async Related(){
        return axios.get('/videos/related.json');
    }

}