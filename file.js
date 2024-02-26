document.querySelector('.button').onclick = myClick;

function myClick() {
    let a = document.querySelector('.i-1').value;
    console.log(a);
    ar = (a*Math.PI)/180;
}
let ar;
document.querySelector('.button2').onclick = myClick2;

function myClick2() {
    b = document.querySelector('.i-2').value;
    console.log(b);
    let t = ((Math.sin(ar))*2*b)/9.80665;
    document.getElementById("t").innerHTML = t.toFixed(3);
    let h = b*b*Math.sin(ar)*Math.sin(ar)/9.80665*2;
    document.getElementById("h").innerHTML = h.toFixed(3);
    let l = b*b*2*Math.sin(ar)*Math.cos(ar)/9.80665;
    document.getElementById("l").innerHTML = l.toFixed(3);
}
let b;
var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');

function clearCanvas(){
    window.location.reload();
} 

var x = 0;
var timer;
document.querySelector('.button3').onclick = drawgraph;
var d = 1;
var m = 1


function drawgraph() {
    if(ar<45){
        m=2;
    }
    else{
        m=1.5;
    }
    if(b>=150){
        d=50;
    }
    else{
        if(b>=100 && b<150){
            d=20;
        }
        else{
            if(b>=50 && b<100){
                d=10;
            }
            else{
                d=2;
            }
        }
    }
	y = 500-(((b*(Math.sin(ar)))*x)-(x*x/3))/d;
	if (y>500){
		return;
	}
	else {
		x=x+0.3;
	}
	ctx.fillRect(m*x,y, 2,2);
	timer = setTimeout(drawgraph, 0.4);
}
