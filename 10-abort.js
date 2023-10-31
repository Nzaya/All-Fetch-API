// How to abort a fetch call

const url = 'https://picsum.photos/id/237/3000/2000';

//To stop a fetch call you need an abort controller object it has a property called signal
const controller = new AbortController();
const signal = controller.signal;


export function getData() {

    let abortBtn = document.getElementById('abort');
    abortBtn.addEventListener('click', (ev) => {
        controller.abort();
        console.log('aborted');
    })


    let request = new Request(url, {
        signal: signal
    })
    fetch(request)
        .then(response => {
            if(!response.status) throw new Error ('Invalid')
            return response.blob();
        })
        .then((blob) => {
            console.log('got the blob');
        })
        .catch(console.warn)

}
