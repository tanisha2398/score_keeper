var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var p1display=document.getElementById("p1display");
var p2display=document.getElementById("p2display");
var event=document.getElementById("event");
var reset=document.querySelector("#reset");
var p1score=0;
var p2score=0;
var winningscore=7;
var gameover=false;
var input=document.querySelector("input")
console.log(p1display);

p1.addEventListener("click",function()
	{
		if(!gameover)
		{
			p1score++;
			if(p1score === winningscore)
			{	
				p1display.classList.add("winner");
				gameover=true;

			}
				p1display.textContent=p1score;
			
		}
		console.log("Player1 score is : "+p1score);
	});


p2.addEventListener("click",function()
	{
		if(!gameover)
		{
		p2score++;
		if(p2score===winningscore)
		{
			p2display.classList.add("winner");
			gameover=true;}
				p2display.textContent=p2score;
		
		}
	});
reset.addEventListener("click",function(){

	gameover=false;
	p2score=0;
	p1score=0;

	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	p1display.textContent=p1score;
	p2display.textContent=p2score;
});
input.addEventListener("change",function()
{
event.textContent=input.value;
winningscore=Number(input.value);
});