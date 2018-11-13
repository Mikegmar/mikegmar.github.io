var goonies = null;
            
// Issue the XMLHttpRequest object to call webserver and retrieve ThegooniesList.html JSON file
function getJSONFile() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/JSON/ThegooniesList.html", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //Convert the JSON text back to an object
            goonies = JSON.parse(this.responseText);
            showGoonies();
        }
    }
    xhttp.send();   
}

//  Display all the goonies records in the JSON object array.
function showGoonies(){
    var result = ""; 
    
    for(var i = 0; i < goonies.records.length; i++){
          
        result += "<p><b>Name: </b>" + goonies.records[i].firstName + " " + goonies.records[i].lastName + ", <b>Phone: </b>" + goonies.records[i].cell + "</p>";
    }
    document.getElementById("div_goonies").innerHTML = result;
}

//  Add a new contact to the JSON object array.
function AddToJSONFile(){
    var l = new function(){
        this.firstName = document.getElementById('input_first_name').value;
        this.lastName = document.getElementById('input_last_name').value;
        this.cell = document.getElementById('input_cell').value;
    }
    
    goonies.records.push(l);
    showGoonies();
}
