const http = new easyHTTP();

// GET POSTS
// http.get('https://jsonplaceholder.typicode.com/posts', ( err, response )=> {
//     // check for error
//     if ( err ) {
//         console.log(err);
//     }
//     else {
//         console.log(response);
//     }
// });


// GET single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', ( err, post ) => {
//     //check for err
//     if ( err ) {
//         console.log(err);
//     }
//     else {
//         console.log(post);
//     }
// });

// POST Request
const data = {
    title : 'Custom Post',
    body: 'Cusom post Body'
};

// http.post('https://jsonplaceholder.typicode.com/posts', data, ( err, response) => {
//     if ( err ) {
//         console.log(err);
//     }
//     else {
//         console.log(response);
//     }
// });

http.put('https://jsonplaceholder.typicode.com/posts/1', data, ( err, response ) => {
    if ( err ) {
        console.log(err);
    }
    else {
        console.log(response);
    }
});