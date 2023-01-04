import axios from 'axios'

export class fakeClient{

    async Search(){
        return axios.get('/videos/search.json'); 
    }

    async Popular(){
        return axios.get('/videos/popular.json');
    }


}