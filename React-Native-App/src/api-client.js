const URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=44e65b1b25ee072cf43ef7f757404a7c&format=json';

function getMusicInfo() {
    return fetch(`${URL}`, {
        method: 'GET',
        headers: {
            Accept: 'applicaction/json',
            'Content-Type': 'applicaction/json'
        }
    })
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist => {
        return {
            id: artist.mbid,
            name: artist.name,
            image: artist.image[3]['#text']
        }
    }))
}


export  {getMusicInfo};