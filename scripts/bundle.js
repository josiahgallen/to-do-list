(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

add.addEventListener('click', function () {
	listArray.push(newDo.value);
	console.log(newDo.value);
	newDo.value = '';
	console.log(listArray);
	render();
});

add.addEventListener('mouseout', function () {
	add.style.backgroundColor = 'rgba(0,33,66,1)';
	add.style.color = '#FFFFFF';
});

add.addEventListener('mouseover', function () {
	add.style.backgroundColor = '#2AAAF5';
	//add.style.color = 'rgba(0,33,66,1)'
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map