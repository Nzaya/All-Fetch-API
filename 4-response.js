// Response objects

const jsonstr = 'http://127.0.0.1:5500/local-sample.json'; // json file
const imgstr = 'https://picsum.photos/id/237/300/200'; // image file
const fontstr = 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Hw5aXp-p7K4KLg.woff2'; // font file
const htmlstr = 'http://127.0.0.1:5500/'; //html file

// HTTP Request  - HEAD, BODY
// HTTP Response - HEAD, BODY

let obj = {
    id: crypto.randomUUID(),
    name: 'the one who knocks',
    favouriteColor : 'pink'
};


export function getData() {
    //step 3:  lets read imgstr
    fetch(imgstr)
    .then((resp => {
        if(!resp.status) throw new Error ('Invalid Response')
        return resp.blob() //blob : binary large object ; it's an image, video,audio, fonts e.t.c

        resp.text() // for text, html, xml files, css, javascript 
        resp.json() //for json files

    }))
    .then((blob) =>{
        console.log(blob); //blob is a chunck of memory on users computer
        //try using the image in your file
        //create objectUrl
        let url = URL.createObjectURL(blob)
        //get reference of the image
        let img = document.getElementById('pic')
        img.src = url

    })
    .catch(console.warn)



    // step 1 : Create a new file from the obj
    let jsonstring = JSON.stringify(obj) // convert the object to a string
    console.log(jsonstring);
    //create a new file pass the json string to an array , filename, filetype
    let file = new File([jsonstring], 'mydata.json', {type: 'application.json'})

    //step 2: Build a new Response object
    let response = new Response (file, {
        status: 200,
        statusText: 'Say my name',
        headers: {
            'content-type': 'application/json',
            'content-length': file.size,
            'x-steve': 'custon headers have to start with a letter x'
        }
    })
    console.log(response.headers.get('content-type'));
    console.log(response.headers.get('content-length'));
}
