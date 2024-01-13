let startTimer=document.getElementById("start");
let timersContainer=document.getElementById("timers_container");

let inputTimer=document.getElementById("input_timer")

startTimer.addEventListener("click",displaytimers)
let i=0;
let stop_count=0;
// add ring song here
const timerRing=document.getElementById("timer_tune")

function displaytimers(e){
e.preventDefault();
// inputTimer.reset()
    const H=Number(document.getElementById("H").value);
    const M=Number(document.getElementById("M").value);
    const S=Number(document.getElementById("S").value);
  if(S==0&&M==0&&H==0)
  {
    alert("please enter Secs");
    return;
  }
    let seconds=H*3600+M*60+S;
    const newtimer=document.createElement("div");
    newtimer.className="NewTimers";
    newtimer.innerHTML=`<div>${H}H:</div>
    <div>${M}M:</div><div>${S}S</div> <div class="Deltebtn" onclick="deltebtn(this)"> StopTimmer</div>
    `
    timersContainer.appendChild(newtimer);
    const mytimeupdate= setInterval(()=>{

        if(seconds==0){
            newtimer.id="NewTimers";
            newtimer.innerHTML=`<p>Timers Up!</p>
            <div class="StopBtn" onclick="deltebtn(this)"> Delete and stop</div>`
            // clearInterval(newtimer);
            timerRing.play();
            stop_count++;
            console.log(stop_count);
            
            
            clearInterval(mytimeupdate);
        }
        else
        {seconds--;
        const currH=parseInt(seconds/3600);
        const currM=parseInt((seconds-currH*3600)/60);
        const currS=seconds-currH*3600-currM*60;
        newtimer.innerHTML=`<div>${currH}H:</div>
        <div>${currM}M:</div><div>${currS}S:</div>
      `
    const deleltebutton=document.createElement("div");
    deleltebutton.innerText="StopTimmer"
    deleltebutton.className="Deltebtn";
    deleltebutton.addEventListener("click",(e)=>{
clearInterval(mytimeupdate);
 console.log(e);
    });
    newtimer.appendChild(deleltebutton);

    }
    },1000)
    inputTimer.reset()
    console.log(mytimeupdate)
    i=mytimeupdate;
  
}

function deltebtn(event){
    let deleltesome=event.parentNode;
    // console.log(deleltesome);
    deleltesome.remove();
    if(event.className==="StopBtn")
    {
        stop_count--;
    }
    if(stop_count===0)
    {
        timerRing.pause();
    }
  
    
 }
