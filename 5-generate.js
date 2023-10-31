// Create Webpage content from fetch results

const jsonstr = 'https://random-data-api.com/api/v2/users?size=10';
const imgstr = 'https://picsum.photos/id/237/300/200';
const textstr = 'http://127.0.0.1:3000/';

export function getData() {
    let list = document.getElementById('list'); //the <ul>
    let img = document.getElementById('pic'); //the <img>
    let header = document.querySelector('header');

    fetch(jsonstr)
    .then((resp) => {
        if(!resp.status) throw new Error('Invalid response')
        return resp.json()
    })
    .then((dataArray) =>{
        list.innerHTML = dataArray.map(({uid, first_name, last_name}) =>{
            return `<li class="listitem" data-uid="${uid}">  
            <p>${first_name}</p>
            <p>${last_name}</p>
          </li>`
        }).join('');
        console.log(dataArray);
    })
    .catch(console.warn)

    fetch(textstr)
    .then((resp) =>{
        if(!resp.status) throw new Error('Invalid response')
        return resp.text()
    })
    .then((txt)=>{
        header.innerHTML += `<h2>${txt}</h2>`

    })
    .catch(console.warn)

    fetch(imgstr)
    .then((resp)=> {
        if(!resp.status) throw new Error ('Invalid response')
        return resp.blob();
    })
    .then((blob) =>{
        let url = URL.createObjectURL(blob)
        console.log(url);
        let img = document.getElementById('pic')
        img.src = url
    })
    .catch(console.warn)
}
