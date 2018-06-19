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
}




// function easyHTTP() {
//     this.http = new XMLHttpRequest();
// }

// // GET 
// easyHTTP.prototype.get = function( url, callback ) {
//     this.http.open('GET', url, true);

//     const self = this;
//     this.http.onload = function() {
//         if ( self.http.status === 200 ) {
//             callback(null, self.http.responseText);
//         } else {
//             callback('Error: ' + self.http.status);
//         }
//     };

//     this.http.send();
// };
// // POST
// easyHTTP.prototype.post = function( url, data, callback ) {
//     this.http.open('POST', url, true);
//     this.http.setRequestHeader('Content-Type', 'application/josn');
//     const self = this;
//     this.http.onload = function() {
//         callback(null, self.http.responseText);
//     };

//     this.http.send(JSON.stringify(data));
// };

// // PUT
// easyHTTP.prototype.put = function( url, data, callback ) {
//     this.http.open('PUT', url, true);
//     this.http.setRequestHeader('Content-Type', 'application/json');
//     const self = this;
//     this.http.onload = function() {
//         callback(null, self.http.responseText);
//     };

//     this.http.send(JSON.stringify(data));
// };

// // DELETE
// easyHTTP.prototype.delete = function( url, callback ) {
//     this.http.open('DELETE', url, true);
//     const self = this;
//     this.http.onload = function() {
//         if ( self.http.status == 200 ) {
//             callback(null, self.http.responseText);
//         }
//         else {
//             callback('Error: ' + self.http.status);
//         }
//     };

//     this.http.send();
// };