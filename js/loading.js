window.onload = function(){
	var oloadtext=document.getElementById("loadtext");
	var oload=document.getElementById("load");
	var oloadIco1=document.getElementById("loadIco1");
	var oloadIco2=document.getElementById("loadIco2");
	var iLength=0;
	var aUrl=["img/bird.jpg","img/e_logo.png","img/no.jpg"];
	for(var i=0;i<aUrl.length;i++)
	{
		var oImg=new Image();
		oImg.onload=function()
		{
			iLength++;
			oloadtext.innerHTML=parseInt(iLength/aUrl.length*100)+"%";
			if(iLength==aUrl.length)
			{
				window.location.href="guide.html";
				oload.style.WebkitAnimationPlayState="paused";	
				oloadIco1.style.WebkitAnimationPlayState="paused";	
				oloadIco2.style.WebkitAnimationPlayState="paused";	
			}
		};
		oImg.onerror=function()
		{
			iLength++;
			oloadtext.innerHTML=parseInt(iLength/aUrl.length*100)+"%";
			if(iLength==aUrl.length)
			{
				oload.style.WebkitAnimationPlayState="paused";	
				oloadIco1.style.WebkitAnimationPlayState="paused";	
				oloadIco2.style.WebkitAnimationPlayState="paused";	
			}
		};
		oImg.src=aUrl[i];
	}
};