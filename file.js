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
    let h = b*b*((Math.sin(ar))*Math.sin(ar))/(9.80665*2);
    document.getElementById("h").innerHTML = h.toFixed(3);
    console.log(h);
    let l = b*b*2*Math.sin(ar)*Math.cos(ar)/9.80665;
    document.getElementById("l").innerHTML = l.toFixed(3);
    console.log(l);
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
var m = 1;


function drawgraph() {
    if(ar<=30 && b<10){
        m=23;
        d=0.17;
    }
    else{
        if(ar<=30 && b>=10 && b<=20){
            m=15;
            d=0.7;
        }
        else{
            if(ar<=30 && b>20 && b<=30){
                m=13;
                d=1.2;
            }
            else{
                if(ar<=30 && b>30 && b<=40){
                    m=12;
                    d=2;
                }
                else{
                    if(ar<=30 && b>40 && b<=50){
                        m=9;
                        d=3.9;
                    }
                    else{
                        if(ar<=30 && b>50 && b<=70){
                            m=6;
                            d=6;
                        }
                        else{
                            if(ar<=30 && b>70 && b<=90){
                                m=5;
                                d=9;
                            }
                            else{
                                if(ar<=30 && b>90){
                                    m=4;
                                    d=14;
                                }
                                else{
                                    if(ar>=45 && b<30){
                                        m=10;
                                        d=10;
                                    }
                                    else{
                                        d=14;
                                        m=8;
                                    }

                                }
                            }
                        }
                    }
                }
            }
        }
    }
	y = 500-(((b*(Math.sin(ar)))*x)-(x*x/3))/d;
	if (y>500){
		return;
	}
	else {
		x=x+0.1;
	}
	ctx.fillRect(m*x,y, 2,2);
	timer = setTimeout(drawgraph, 0.4);
}
