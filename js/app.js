const http = new EasyHTTP();

// GET POSTS
http.get('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data))
    .catch(err => console.log(err));

// TESTING DATA
const data = {
    title : 'Custom Post',
    body: 'Cusom post Body'
};

// POST Request
http.post('https://jsonplaceholder.typicode.com/posts', data)
    .then(res => console.log(res))
    .catch(err => console.log(err));

// PUT Request
http.put('https://jsonplaceholder.typicode.com/posts/1', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// DELETE Request
http.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log(data))
    .catch(err => console.log(err));