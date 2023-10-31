// API Keys, Authorization, Credentials, Content-Security-Policy

export function getData() {

    let str = 'http://127.0.0.1:3000/?name=value&steve=griffith'; //? starts query string
    let url = new URL(str) //url object
    let sp = url.searchParams;
    sp.append('hello', 'world')
    sp.append('api-key','kajshdfkahjsdfkjhsdfkahsdfkjksdjhfksjdh')

    let h = new Headers();
    // h.append('content-type','application/json')
    h.append('x-api-key','kajshdfkahjsdfkjhsdfkahsdfkjksdjhfksjdh') //API Key
    h.append('Authorization','Bearer kajshdfkahjsdfkjhsdfkahsdfkjksdjhfksjdh') //JWT 

    let request = new Request(url,{
        method: 'GET',
        headers:h,
        // cache:'default',
        // credentials:'same-origin' //omit, include
    } ) //request object

    fetch(request).then(response => {
        if(!response.status) throw new Error ('Invalid')
        return response.text()
    }).then((txt) => {
        console.log(txt);
    }).catch(console.warn)

}
