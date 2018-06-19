const http = new EasyHTTP();

// GET POSTS
http.get('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data))
    .catch(err => console.log(err));


// POST Request
const data = {
    title : 'Custom Post',
    body: 'Cusom post Body'
};

http.post('https://jsonplaceholder.typicode.com/posts', data)
    .then(res => console.log(res))
    .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, ( err, response ) => {
//     if ( err ) {
//         console.log(err);
//     }
//     else {
//         console.log(response);
//     }
// });

// http.delete('https://jsonplaceholder.typicode.com/posts/1', ( err, response ) => {
//     if ( err ) {
//         console.log(err);
//     }
//     else {
//         console.log(response);
//     }
// });