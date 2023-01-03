import axios from 'axios'

export class fakeClient{

    async Search(){
        return axios.get('/videos/popular.json'); 
    }
}