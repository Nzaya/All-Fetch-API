//the simplest fetch you can use and still have error handling
const url = 'https://jsonplaceholder.typicode.com/users';

export function getData() {
    fetch(url)
    .then((res)=>{// returns a promise
        console.log(res);
        if(!res.status) throw new Error ('Invalid response') //if we fail to get the response 
        return res.json() //converts our json to object
    })
    .then((objData) =>{ // returns a promise
        console.log(objData);
    })
    .catch((err) =>{ // catch all errors
        console.error(err.message)
    })
}

