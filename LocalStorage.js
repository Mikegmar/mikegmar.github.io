var doc = document;

window.onload = function() {
	var toEatList = [];
	
		if (localStorage.getItem('toEatList')!==null) {
			toEatList = JSON.parse(localStorage['toEatList']);
			var result = 'You need to do the following today:<br>';
			for (var i = 0; i < toEatList.length; i++) {
				result += '- ' + toEatList[i] + "<br>";
			}		
			doc.getElementById('list').innerHTML = result;
		}
		
		if (localStorage.getItem('birthdayArray')!==null) {
			var birthdayArray = JSON.parse(localStorage['birthdayArray']);		
			var message = "Your birthday is " + birthdayArray.month +
			" " + birthdayArray.day + ", " + birthdayArray.year + ".";
			
			doc.getElementById('birthdayDisplay').innerHTML = message;
		}
		
		if (localStorage.getItem('userOptions')!==null) {
			var userOptions = JSON.parse(localStorage['userOptions']);
			applyOptions(userOptions);
		}
	
	doc.getElementById('addToList').onclick = function () {
		var toDo = doc.getElementById('whatToEat').value;
		toEatList.push(toDo);
		
		var result = '';
		for (var i = 0; i < toEatList.length; i++) {
			result += toEatList[i] + "<br>";
		}		
		doc.getElementById('list').innerHTML = result;
		doc.getElementById('whatToEat').value = '';
		
		localStorage['toEatList'] = JSON.stringify(toEatList);
	}
			
	doc.getElementById('removeList').onclick = function () {
		toEatList = [];
		doc.getElementById('list').innerHTML = '';
		localStorage.removeItem('toEatList');
	}
	
	doc.getElementById('saveBirthday').onclick = function () {
		var month = doc.getElementById("month");
		var day = doc.getElementById("day");
		var selectedMonth = month.options[month.selectedIndex].value;
		var selectedDay = day.options[day.selectedIndex].value; <!--doc.getElementById("day").value;-->
		var selectedYear = doc.getElementById("year").value;
		
		var birthdayArray = {'month': selectedMonth, 'day': selectedDay, 'year': selectedYear};
		localStorage['birthdayArray'] = JSON.stringify(birthdayArray);
		alert("Your birthday has been saved.");

	}
	
	doc.getElementById('clearBirthday').onclick = function () {
		localStorage.removeItem('birthdayArray');
		doc.getElementById('birthdayDisplay').innerHTML = '';
	}
		
	doc.getElementById('saveOptions').onclick = function () {
		var quote = doc.getElementById("quote");
		var selectedQuote = quote.options[quote.selectedIndex].value;
		var textSize = doc.getElementById("textSize");
		var selectedTextSize = textSize.options[textSize.selectedIndex].value;
        var textColor = doc.getElementById("textColor");
		var selectedTextColor = textColor.options[textColor.selectedIndex].value;
		
		if (selectedQuote == '' || selectedTextSize == '' || selectedTextColor == '') {
			alert("Please select all fields.");
			return;
		}
		
		var userOptions = new Object();
		userOptions.quote = selectedQuote;
		userOptions.size = selectedTextSize;
        userOptions.color = selectedTextColor;
		
		localStorage['userOptions'] = JSON.stringify(userOptions);
		alert("Your settings have been saved.");
	}
	
	doc.getElementById('clearOptions').onclick = function () {
		doc.getElementById('result').innerHTML = '';
		doc.getElementById("result").style.backgroundImage = "";
		localStorage.removeItem('userOptions');
	}
	
	function applyOptions(userOptions) {
		
		
		switch (userOptions.quote) {
		
			case "mikey":
				doc.getElementById("chosenQuote").innerHTML = '"Goonies never say die." - Mikey';
				break;
			case "chunk":
				doc.getElementById("chosenQuote").innerHTML = '"I love the dark, but I hate nature." - Chunk';
				break;
			case "sloth":
				doc.getElementById("chosenQuote").innerHTML = '"Ruth, Ruth, Baby Ruth." - Sloth';
				break;
			case "mouth":
				doc.getElementById("chosenQuote").innerHTML = '"Jerk alert." - Mouth';
				break;
			case "andy":
				doc.getElementById("chosenQuote").innerHTML = '"I hit a wrong not. I am not Liberace you know." - Andy';
				break;
			case "data":
				doc.getElementById("chosenQuote").innerHTML = '"Hey guys, I am saved by my Pinchers of Peril." - Data';
				break;
			case "stef":
				doc.getElementById("chosenQuote").innerHTML = '"This is ridiculous. I feel like I am babysitting, except I am not getting paid." - Stef';
				break;
			case "brand":
				doc.getElementById("chosenQuote").innerHTML = '"I am going to hit you so hard that when you wake up, your clothes will be out of style." - Brand';
				break;
		}
        		
		switch (userOptions.size) {
			case "small":
				doc.getElementById("chosenQuote").style.fontSize = "small";
				break;
			case "medium":
				doc.getElementById("chosenQuote").style.fontSize = "large";
				break;
			case "large":
				doc.getElementById("chosenQuote").style.fontSize = "xx-large";
				break;
		}
        
        switch (userOptions.color) {
			case "blue":
				doc.getElementById("chosenQuote").style.color = "blue";
				break;
			case "red":
				doc.getElementById("chosenQuote").style.color = "red";
				break;
			case "green":
				doc.getElementById("chosenQuote").style.color = "green";
				break;
		}
	}
	}

