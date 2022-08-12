document.querySelector("#search").addEventListener('click', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest()
    const input=document.querySelector("#input-box").value;


    const url = `https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11`

    xhr.open('GET', url)

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const values = JSON.parse(xhr.responseText)
            console.log(values);
            const albums = values.filter(album => album.albumId ==input)
            console.log(albums);
            var output = ''
            for (let i = 0; i < albums.length; i++) {
                output += `
                
                
                <img id="img-box" src=${albums[i].url} />
                
            `
            }


            document.querySelector('#api-cont').innerHTML = output
        }
    }


    xhr.send()
}
)