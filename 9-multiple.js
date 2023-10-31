//handle multiple requests for data
// in sequence .then().then().then()
// or at the same time - Promise.all() .race() .allSettled()

const jsonstr = 'https://random-data-api.com/api/v2/users?size=10';
const imgstr = 'https://picsum.photos/id/237/300/200';

export function getData() {
    let imgResponse;
    let jsonResponse;

    fetch(imgstr) //fetch img first
        .then(response => {
            if(!response.status) throw new Error ('Invalid')
            imgResponse =  response.blob(); //save the blob here
            return fetch(jsonstr) //call next fetch
        })
        .then(response => {
            if(!response.status) throw new Error ('Invalid')
            jsonResponse = response.json(); //extract json and put here
        return Promise.all([imgResponse, jsonResponse]) //wrap those two promises turnedinto a js object
        })
        .then(([blob, dataObj]) => { //get an array that has the blob and jsobject
            console.log(dataObj);
            console.log(blob);
        })
        .catch(console.warn)

        //Get all at the same time
        // Promise.all([fetch(imgstr), fetch(jsonstr)]) //fetch both at the same time
        //     .then(([imgRes, jsonRes]) => { //get responses
        //         return Promise.all([imgRes.blob(), jsonRes.json()]) //extract data at the same time
        //     })
        //     .then(([blob, jsonData]) => { //work with data at the same time
        //         console.log(blob);
        //         console.log(jsonData);
        //     })
 
}
