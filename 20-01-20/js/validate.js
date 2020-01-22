function validate(element){	
	var input = element.value;
	var tag = document.getElementsByTagName("p");
	if(input == ""){
		
		var n = tag.length;
		for(var i = 0; i < tag.length;i++){
			if(tag[i].id == element.id){
					tag[i].style.display = "block";
					tag[i].style.color = "red";
					tag[i].style.fontSize = "10px";
					tag[i].style.marginLeft = "8px"	
			}
		
		}


	}else{
		for(var i = 0; i < tag.length;i++){
			if(tag[i].id == "email" && tag[i].id == element.id){

				var pattern =  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
				if(pattern.test(input)){
					console.log("OKAY");							
				}else{
					tag[i].style.display = "block";
					tag[i].style.color = "red";
					tag[i].style.fontSize = "10px";
					tag[i].style.marginLeft = "8px";				
					console.log("Email not oay");
				}
			}else if(tag[i].id == "zip" && tag[i].id == element.id){
				if(isNaN(input)){
					tag[i].innerHTML = "Please enter valid zip code.";
					tag[i].style.display = "block";
					tag[i].style.color = "red";
					tag[i].style.fontSize = "10px";
					tag[i].style.marginLeft = "8px";
				}
			}else if (tag[i].id == "ccnumber" && tag[i].id == element.id){
				if(isNaN(input)){
					tag[i].innerHTML = "Please enter valid credit card number";
					tag[i].style.display = "block";
					tag[i].style.color = "red";
					tag[i].style.fontSize = "10px";
					tag[i].style.marginLeft = "8px";	
				}else if(input.length <12 && input.length > 16){
					tag[i].innerHTML = "Credit Card Number must be of 16 digit";
					tag[i].style.display = "block";
					tag[i].style.color = "red";
					tag[i].style.fontSize = "10px";
					tag[i].style.marginLeft = "8px";
				}
			}else if(tag[i].id == "cvv" && tag[i].id == element.id){
				if(isNaN(input) || input.length > 3){
					tag[i].innerHTML = "Please enter valid Security Pin ";
					tag[i].style.display = "block";
					tag[i].style.color = "red";
					tag[i].style.fontSize = "10px";
					tag[i].style.marginLeft = "8px";	
				}
			}
		}
	}

}

function checkForAll(){
	var element = document.getElementsByTagName("input");
	var m = element.length;
	for(let i = 0; i < m;i++){
		var tag = document.getElementsByTagName("p");
		var input = element[i].value;
		if(input == ""){
			
			var n = tag.length;
			for(var j = 0; j < n;j++){
				if(tag[j].id == element[i].id){
					tag[j].style.display = "block";
					tag[j].style.color = "red";
					tag[j].style.fontSize = "10px";
					tag[j].style.marginLeft = "8px"

				}
		
			}			
		}else{
			var n = tag.length;
			for(var j = 0; j < n;j++){
				if(tag[j].id == "email" && tag[j].id == element[i].id){

				var pattern =  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
				if(pattern.test(input)){
					console.log("OKAY");							
				}else{
					tag[j].style.display = "block";
					tag[j].style.color = "red";
					tag[j].style.fontSize = "10px";
					tag[j].style.marginLeft = "8px"				}
			}else if(tag[j].id == "zip" && tag[j].id == element[i].id){
				if(isNaN(input)){
					tag[j].innerHTML = "Please enter valid zip code.";
					tag[j].style.display = "block";
					tag[j].style.color = "red";
					tag[j].style.fontSize = "10px";
					tag[j].style.marginLeft = "8px"
				}
			}else if (tag[j].id == "ccnumber" && tag[j].id == element[i].id){
				if(isNaN(input)){
					tag[j].innerHTML = "Please enter valid credit card number";
					tag[j].style.display = "block";
					tag[j].style.color = "red";
					tag[j].style.fontSize = "10px";
					tag[j].style.marginLeft = "8px";	
				}else if(input.length <12 && input.length > 16){
					tag[j].innerHTML = "Credit Card Number must be of 16 digit";
					tag[j].style.display = "block";
					tag[j].style.color = "red";
					tag[j].style.fontSize = "10px";
					tag[j].style.marginLeft = "8px";
				}
			}else if(tag[j].id == "cvv" && tag[j].id == element[i].id){
				if(isNaN(input) || input.length > 3){
					tag[j].innerHTML = "Please enter valid Security Pin ";
					tag[j].style.display = "block";
					tag[j].style.color = "red";
					tag[j].style.fontSize = "10px";
					tag[j].style.marginLeft = "8px";	
				}
			}	
		}
	  }
	}
}
