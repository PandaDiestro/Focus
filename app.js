const focusarray = ['facebook', 'youtube', 'twitter', 'discord', 'messenger', 'instagram', 'reddit', 'fandom', 'meme', 'shitpost', 'twitch'];

focusarray.forEach(element => {
	if(window.location.href.search(element) != -1){
		
		window.onload = function(){
			alert("close this tab you procastinating dumbass");
			location.href = "https://pandadiestro.github.io/focus-page/";
		}
	}
});
