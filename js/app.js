const http = new easyHTTP();

// GET POSTS
http.get('https://jsonplaceholder.typicode.com/posts', ( err, response )=> {
    // check for error
    if ( err ) {
        console.log(err);
    }
    else {
        console.log(response);
    }
});