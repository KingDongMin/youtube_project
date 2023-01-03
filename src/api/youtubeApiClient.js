export class Youtube_API_Client{
    constructor(client){
        this.httpClient = client;
    }

    async Search(){
        return this.httpClient.Search().then(res=>res.data.items);
    }
    

}