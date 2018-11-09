function doubleHeight()
{
	document.getElementById('Chunk_Mikey_Mouth_Data').style.width = "75%";
}

function returnToNormal()
{
	document.getElementById('Chunk_Mikey_Mouth_Data').style.width = "50%";
	document.getElementById('Chunk_Mikey_Mouth_Data').style.borderRadius = "20px";
}

function changeRadius()
{
	document.getElementById('Chunk_Mikey_Mouth_Data').style.borderRadius = "100px";
}

function changeColor()
{
	var color = prompt("What color? (can be name, hex, or rgb)");
	var buttons = document.getElementsByClassName('myButtons');
	
	for(var i=0; i < buttons.length; i++)
    {
        buttons[i].style.color = color;
    }
}

function changeBorder()
{
	document.getElementById('Chunk_Mikey_Mouth_Data').style.border = "10px solid black";
	
}

function changeBorderBack()
{
	document.getElementById('Chunk_Mikey_Mouth_Data').style.border = "none";
	document.getElementById('Chunk_Mikey_Mouth_Data').style.borderRadius = "20px";

}
