export class Youtube_API_Client{
    constructor(client){
        this.httpClient = client;
    }

    async Search(keyword){
        return this.httpClient.Search({params : {
            part : 'snippet',
            regionCode : 'KR',
            maxResults : 32,
            type:'video',
            q: keyword
        }}).then(res=>res.data.items.map(item=>({...item, id: item.id.videoId})));
    }

    async Popular(){
        return this.httpClient.Popular({ params:{
            part: 'snippet',
            chart: 'mostPopular',
            regionCode: 'KR',
            maxResults : 32,
    }}).then(res=>res.data.items);
    }

    async Channel(channelID){
        return this.httpClient.Channel({params :{
            part: 'snippet',
            id : channelID,
        }}).then(res=>res.data.items[0].snippet.thumbnails.medium.url);
    }

    async Related(videoID){
        return this.httpClient.Related({params : {
            part: 'snippet',
            relatedToVideoId : videoID,
            maxResults : 10,
            type: 'video'
        }}).then(res=>res.data.items.map(item=>({...item, id: item.id.videoId})))
    }
    

}