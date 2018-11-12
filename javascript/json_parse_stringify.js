var goonies = null;
            
// Create an AJAX object based on the various browser methods.
function createAJAXObj() {
    
    //create our variable to hold the ajax object within the function
    var xmlHttp;
    
    try {
        // Chrome, Edge, Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    }
    catch (e) {
        // Internet Explorer. this will cover all versions of Microsoft
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
                return false;
            }
        }
    }
    return xmlHttp;
}

// Issue the XMLHttpRequest object to call webserver and retrieve gooniesList.html JSON file
function getJSONFile() {
    var xhttp = createAJAXObj();
    xhttp.open("GET", "/JSON/gooniesList.html", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //Convert the JSON text back to an object
            goonies = JSON.parse(this.responseText);
            buildGoonies();
        }
    }
    xhttp.send();   
}

//  Display all the goonies records in the JSON object array.
function showGoonies(i){
    var result = "<h4>You Selected Goonies #" + i + "</h4><p><b>Name: </b>" + goonies.records[i-1].firstName + " " + goonies.records[i-1].lastName + "</p><p><b>Phone: </b>" + goonies.records[i-1].cell + "</p>";
    document.getElementById("div_goonies_details").innerHTML = result;
}

// Generate the select goonies drop down element with all the data
// from the goonies object
function buildGoonies(){
    var result = "<br><select id=\"select_goonies\" onchange=\"showGoonies(this.selectedIndex)\"><option value=\"-1\">Please Select a Goonies Name...</option>"; 
    for(var i = 0; i < goonies.records.length; i++){
        result += "<option value=\"0\">" + goonies.records[i].firstName + " " + goonies.records[i].lastName + "</option>";
    }
    document.getElementById("div_goonies").innerHTML = result + "</select>";
}
