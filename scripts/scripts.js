//Author:D. Howell
//Date:4/12/2020
//Version V 1.0




var pattern = "^[a-zA-Z0-9]+$";
var regularExpression = new RegExp(pattern);

//Document ready function

$(function(){
	$("#outputText").text("");
	$("#error").text("");
	$("#error").css("color", "yellow");
	$("#error").css("background-color", "Black");
	$("#inputText").attr("pattern", pattern);
	$("#inputText").attr("autofill", "off");
	
    });
	
	var enter = (text) => {
		var textLength = text.length;
	if (textLength > 0){
	//
	if(regularExpression.test(text) === true){
		$("#error").text("");
	text = text.toUpperCase();
	//Remove text
	$("#inputText").val("");
	
	//Output
	$("#outputText").text(text);
	}else if (regularExpression.test(text) === false){
		$("#error").text("Does not allow special characters.");
		$("#outputText").text("");
	}
			
	}else if(textLength == 0){
		$("#error").text("No blank input please!");
	}
	}
	
	$("#inputText").keypress(function(e){
		if(e.which == 13){
			var text = $("#inputText").val();
			enter(text);
		}
	});
	
	$("#clickThisInput").click(function(e){
		// action goes here!!
		e.preventDefault();
		// Get input
		var text = $("#inputText").val();
		enter(text);
}); 

	//clear text from input and output text
	$("#clearText").click(function(e){
		e.preventDefault();
		$("#inputText").val("");
		$("#outputText").text("");
	});
	
	
	
	


