const focusarray = ['facebook', 'youtube', 'twitter', 'discord', 'messenger', 'instagram', 'reddit', 'fandom', 'meme', 'shitpost'];
const bodycall = document.getElementsByTagName('body')[0];
const headcall = document.getElementsByTagName('head')[0];
const htmlcall = document.getElementsByTagName('html')[0];
let htmlAttributesCall = htmlcall.getAttributeNames()

focusarray.forEach(element => {
	if(window.location.href.search(element) != -1){
		window.onload = function(){
			setInterval(function(){
				for (i = htmlAttributesCall.length; i >= 0; i -= 1){
					htmlcall.removeAttribute(htmlAttributesCall[i])
				}
				headcall.innerHTML = '<title>CONCENTRATE</title><link rel="icon" href="https://raw.githubusercontent.com/PandaDiestro/Focus/main/icons/focus.ico">' 
				bodycall.style.backgroundColor = 'black';
				bodycall.innerHTML = '<br><br><br><div onselectstart = "return false" style = "cursor: default; color: white; font-family: calibri; font-size: 50px; text-align: center;">CONCENTRATE<b>!</b></div><br><br><div style = "text-align: center;"><img alt = "no image ya dumbnuts" src = "https://raw.githubusercontent.com/PandaDiestro/Focus/main/focus-clean.png" draggable = "false">';
			}, 600);
			alert("close this tab you procastinating dumbass");
		}
	}
});
