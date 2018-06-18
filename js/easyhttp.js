function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// GET 
easyHTTP.prototype.get = function( url, callback ) {
    this.http.open('GET', url, true);

    const self = this;
    this.http.onload = function() {
        if ( self.http.status === 200 ) {
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    };

    this.http.send();
};
// POST
easyHTTP.prototype.post = function( url, data, callback ) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-Type', 'application/josn');
    const self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText);
    };


    this.send(JSON.stringify(data));
};

// PUT

// DELETE