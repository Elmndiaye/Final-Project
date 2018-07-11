export function PostData(type, userData){

    let BaseUrl = 'http://locahost:3000/api/';

    return new Promise((resolve, reject) => {

        fetch(BaseUrl+type,{
        method:'POST',
        body: JSON.stringify(userData)
    })
    .then((response) => response.json())
    .then((responseJson) => {
        resolve(responseJson);
    })
    .catch((error) => {
        reject(error);
    });
});
}

