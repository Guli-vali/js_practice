// ES6 classes

class ApiFetcher{
    constructor({ url }){
        this.apiEndpoint = url;
    }

    async getResponse() {
        const response = await fetch(this.apiEndpoint);
        const data = await response.json();
        return data;
    }

    async getParsedData(){
        const response = await this.getResponse()
        console.log(response)
    }
}


const apiRequester = new ApiFetcher({"url": "https://jsonplaceholder.typicode.com/todos/"});

let response = await apiRequester.getParsedData();
console.log(response);
