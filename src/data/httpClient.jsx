const API = 'https://api.themoviedb.org/3'
export function get(path) {
    const url=API+path;
    //console.log('URL: ' + url);
    return fetch(url, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmU3OTE5ZjQxZDM3MWQxZjk5MzVlOWI3MDM5YzliYiIsInN1YiI6IjYzNmQzNzIwZDdmYmRhMDBiYjhmNDVkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xEOAvgiGhuaoNAvrlqEmXNsttMvmx5kBSKEs9bnaWJY",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((response) => response.json());
}