function randomArrange(){
	var max = 9;
var random =[];
for (var i =0; i <max; i++) 
	{var temp =Math.floor(Math.random()*max)+1 ;
		
		if(random.indexOf(temp)==-1){
			random.push(temp);
		}

	else
		i--;


}
var currentId, newId;
for( var j=1; j <=9; j++){
	
	currentId: "img-".concat(j);
	newId= "img-".concat( random[j-1]);
	document.getElementById(currentId).Id =newId;


}