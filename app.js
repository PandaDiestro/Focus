const focusarray = ['facebook', 'youtube', 'twitter', 'discord', 'messenger', 'twitch', 'instagram', 'reddit', 'fandom', 'meme', 'shitpost'];
const bodycall = document.getElementsByTagName('body')[0];
const headcall = document.getElementsByTagName('head')[0];
const htmlcall = document.getElementsByTagName('html')[0];
let htmlAttributesCall = htmlcall.getAttributeNames()

focusarray.forEach(element => {
	if(window.location.hostname.search(element) != -1)
	{
		window.onload = function()
		{
			setInterval(function(){
				for (i = htmlAttributesCall.length; i >= 0; i -= 1)
				{
					htmlcall.removeAttribute(htmlAttributesCall[i])
				}
				headcall.innerHTML = '<title>CONCENTRATE</title><link rel="icon" href="https://1.bp.blogspot.com/-8ZU4kgImyJQ/YMI9huzZK5I/AAAAAAAABM8/e9z_hwNDzeYp5aUKrDNBU5PAqxuRYgB_gCLcBGAsYHQ/s0/focus.png">'; 
				bodycall.style.backgroundColor = 'black';
				bodycall.innerHTML = '<br><br><br><div onselectstart = "return false" style = "cursor: default; color: white; font-family: calibri; font-size: 50px; text-align: center;">CONCENTRATE<b>!</b></div><br><br><div style = "text-align: center;"><img alt = "no image ya dumbnuts" src = "https://lh3.googleusercontent.com/-rSxqjH019RU/YKBG3FaV4FI/AAAAAAAABK0/K_VuUIg3s9YO-pBihQdcIzDqF_H1XRWMACLcBGAsYHQ/focus%2B%25281%2529.png" draggable = "false">';
			},500);
		}
	}
});
