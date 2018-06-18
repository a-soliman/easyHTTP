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
http.get('https://jsonplaceholder.typicode.com/posts/1', ( err, post ) => {
    //check for err
    if ( err ) {
        console.log(err);
    }
    else {
        console.log(post);
    }
});