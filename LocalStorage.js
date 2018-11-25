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
			case "president":
				doc.getElementById("chosenQuote").innerHTML = '"Within the covers of the Bible are the answers for all the problems men face." - Ronald W. Reagan';
				break;		
			case "goonie1":
				doc.getElementById("chosenQuote").innerHTML = '"Don't say that, never say that! Goonies never say die!." - Mikey';
				break;
			case "goonie2":
				doc.getElementById("chosenQuote").innerHTML = '"Pinchers of Peril! Hey guys, I'm saved by my Pinchers of Peril!." - Data';
				break;
			case "goonie3":
				doc.getElementById("chosenQuote").innerHTML = '"I like the dark. I love the dark. But I hate nature. I hate nature!." - Chunk';
				break;
			case "goonie4":
				doc.getElementById("chosenQuote").innerHTML = '"Ruth, Ruth, Ruth! Baby Ruth!." - Sloth';
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
