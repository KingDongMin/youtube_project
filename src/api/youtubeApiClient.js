export class Youtube_API_Client{
    constructor(client){
        this.httpClient = client;
    }

    async Search(keyword){
        return this.httpClient.Search(keyword).then(res=>res.data.items.map(item=>({...item, id: item.id.videoId})));
    }

    async Popular(){
        return this.httpClient.Popular().then(res=>res.data.items)
    }
    

}