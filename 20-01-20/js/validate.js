function validate(element){	
	var input = element.value;
	
	if(input == ""){
		var tag = document.getElementsByTagName("p");
		var n = tag.length;
		for(var i = 0; i < tag.length;i++){
			if(tag[i].id == element.id){
				tag[i].style.display = "block";
				tag[i].style.color = "red";
				tag[i].style.fontSize = "10px";
			}
		
		}

	}

}
