'use strict';
var add = document.getElementById('add');
var list = document.getElementById('list');
var newDo = document.getElementById('new-do');
var listArray = [];

function render() {
		list.innerHTML = '';
	for (var i = 0; i < listArray.length; i++) {
		//var div = document.createElement('div');
		list.innerHTML += listArray[i] + '<br />';
	}
}

add.addEventListener('click', function() {
	listArray.push(newDo.value);
	console.log(newDo.value);
	newDo.value = '';
	console.log(listArray);
	render();
	
});

add.addEventListener('mouseout',function() {
	add.style.backgroundColor = 'rgba(0,33,66,1)';
	add.style.color = '#FFFFFF';
})

add.addEventListener('mouseover', function(){
	add.style.backgroundColor = '#2AAAF5';
	//add.style.color = 'rgba(0,33,66,1)'
})

