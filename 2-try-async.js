// using async and await instead of chaining then()
// still needs error handling with try..catch
const url = 'https://jsonplaceholder.typicode.com/users';

export async function getData() {
    try{
        let response = await fetch(url)
        console.log(response);
        if(!response.status) throw new Error ('Invalid response') 
        let dataobj = await response.json()
        console.log(dataobj);
    } catch (error) {
        console.warn(error.message)
    }

}
