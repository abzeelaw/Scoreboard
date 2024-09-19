let num0=0
// let num1=1
// let num2=2
// let num3=3
document.getElementById("home-display").textContent=num0

document.getElementById("guest-display").textContent=num0

let plusone= document.getElementById("home-display")

// let plusone= document.getElementById("guest-display")

let count = 0

function addonehome(){
    count=count+1
    plusone.innerText=count
    
}

function addtwohome(){
    count=count+2
    plusone.innerText=count

}

function addthreehome(){
    count=count+3
    plusone.innerText=count

}

function minusonehome(){
    count=count-1
    plusone.innerText=count
    
}

function minustwohome(){
    count=count-2
    plusone.innerText=count

}

function minusthreehome(){
    count=count-3
    plusone.innerText=count

}



let plusoneguest= document.getElementById("guest-display")

// let plusone= document.getElementById("guest-display")

let countguest = 0

function addoneguest(){
    countguest=countguest+1
    plusoneguest.innerText=countguest

}

function addtwoguest(){
    countguest=countguest+2
    plusoneguest.innerText=countguest

}

function addthreeguest(){
    countguest=countguest+3
    plusoneguest.innerText=countguest

}

function minusoneguest(){
    countguest=countguest-1
    plusoneguest.innerText=countguest
    
}

function minustwoguest(){
    countguest=countguest-2
    plusoneguest.innerText=countguest

}

function minusthreeguest(){
    countguest=countguest-3
    plusoneguest.innerText=countguest

}



let num1 =0

document.getElementById("foul-display").textContent=num1


let plusonefoul= document.getElementById("foul-display")

// let plusone= document.getElementById("guest-display")

let countfoul = 0

function addonefoul(){
    countfoul=countfoul+1
    plusonefoul.innerText=countfoul

}

let num2 =0

document.getElementById("period-display").textContent=num2


let plusoneperiod= document.getElementById("period-display")

// let plusone= document.getElementById("guest-display")

let countperiod = 0

function addoneperiod(){
    countperiod=countperiod+1
    plusoneperiod.innerText=countperiod

}