class EasyHTTP {

    // GET
    get( url ) {
        return fetch(url)
            .then(res => res.json())
            .then(data => data)
            .catch(err => err);
    }

    // POST
    post( url, data ) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => data)
        .catch(err => err);
    }
    
    // PUT
    put( url, data ) {
        return fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => data)
        .catch(err => err);
    }

    // DELETE
    delete( url ) {
        return fetch(url, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => data)
        .catch(err => err);
    }
}