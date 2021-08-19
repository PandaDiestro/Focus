const focusarray = ['facebook', 'youtube', 'twitter', 'discord', 'messenger', 'instagram', 'reddit', 'fandom', 'meme', 'shitpost', 'twitch'];
const bodycall = document.getElementsByTagName('body')[0];
const headcall = document.getElementsByTagName('head')[0];
const htmlcall = document.getElementsByTagName('html')[0];
let htmlAttributesCall = htmlcall.getAttributeNames();
let bodyAttributesCall = bodycall.getAttributeNames();
var xhr = new XMLHttpRequest();
let yes;

focusarray.forEach(element => {
	if(window.location.href.search(element) != -1){
		
		window.onload = function(){
			alert("close this tab you procastinating dumbass");
			location.href = "https://pandadiestro.github.io/focus-page/";
		}
	}
});
