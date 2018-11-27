/************************************
    Sandbox: XMLHTTPRequest
************************************/


/************************************
    Happy Paths
************************************/
// Happy path(GET)
var my_get_request = new XMLHttpRequest();
my_get_request.onreadystatechange = function () {
    if (this.readyState == 4) {
        var json = JSON.parse(my_get_request.responseText);
        console.log("GET successful and the server returned a JSON formatted string.")
        console.log("JSON - Key: UserId & Value: " + json.userId);
        console.log("JSON - Key: id & Value: " + json.id);
        console.log("JSON - Key: title & Value: " + json.title);
        console.log("JSON - Key: body & Value: " + json.body);
    }
};
my_get_request.open("GET", "http://jsonplaceholder.typicode.com/posts/1", false);
my_get_request.send();

// Happy path (POST)
var my_post_request = new XMLHttpRequest();
my_post_request.onreadystatechange = function () {
    if (this.readyState == 4) {
        var json = JSON.parse(my_post_request.responseText);
        console.log("POST successful and the server returned a JSON formatted string.");
        console.log("JSON - Key: id & Value: " + json.id);
    }
};
my_post_request.open("POST", "http://jsonplaceholder.typicode.com/posts", false);
my_post_request.send();



/************************************   
************************************/
var request = new XMLHttpRequest();

request.onreadystatechange = function () {
    if (this.readyState == 4) {
        console.log(request.responseText);
    }
};

// (POST - API service doesn't take paremeters)
request.open("POST", "http://jsonplaceholder.typicode.com/posts", false);
request.setRequestHeader("Content-type", "application/json");
var jsonParameters = {
    "userId": 11,
    "id": 101,
    "title": "Some Title",
    "body": "Blah blah blah"
}
JSON.stringify(jsonParameters)
request.send(jsonParameters);

//  (opening request with one 'null' argument)
try {
    request.open(null);
    request.send();
}
catch (exception) {
    console.log(exception + " opening request with one 'null' argument")
}

//  (opening request with two 'null' arguments)
try {
    request.open(null, null);
    request.send();
}
catch (exception) {
    console.log(exception + " opening request with two 'null' arguments")
}

//  (opening request with three 'null' arguments)
try {
    request.open(null, null, null);
    request.send();
}
catch (exception) {
    console.log(exception + " opening request with three 'null' arguments")
}

// Nasty path (opening request with first argument 'null')
try {
    request.open(null, "http://jsonplaceholder.typicode.com/posts", false);
    request.send();
}
catch (exception) {
    console.log(exception + " opening request with first argument 'null'")
}

//  (opening request with first argument 'empty string')
try {
    request.open("", "http://jsonplaceholder.typicode.com/posts", false);
    request.send();
}
catch (exception) {
    console.log(exception + " opening request with first argument 'empty string'")
}

//  (opening request with first argument 'BLAH')
try {
    request.open("BLAH", "http://jsonplaceholder.typicode.com/posts", false);
    request.send();
}
catch (exception) {
    console.log(exception + " opening request with first argument 'BLAH'")
}

//  (opening request with first argument 'true')
try {
    request.open(true, "http://jsonplaceholder.typicode.com/posts", false);
    request.send();
}
catch (exception) {
    console.log(exception + " opening request with first argument 'true'")
}

// (opening request with first argument '1')
try {
    request.open(1, "http://jsonplaceholder.typicode.com/posts", false);
    request.send();
}
catch (exception) {
    console.log(exception + " opening request with first argument '1'")
}
