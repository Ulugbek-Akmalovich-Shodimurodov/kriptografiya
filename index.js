let Btn = document.querySelector("#ok")
let Btn_trap = document.querySelector("#ok_trap")
let Btn_simson = document.querySelector("#ok_simson")

let Natija = document.querySelector(".natija")
let table  = document.querySelector(".tabletsiya_turt")

let son16 = document.querySelector(".a")
let son10 = document.querySelector(".b")
let son8 = document.querySelector(".c")
let son2 = document.querySelector(".d")

let arr16 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']



son16.addEventListener("input", (e)=>{
    e.preventDefault();
    let num16 = son16.value;

    // 10lik uchun

    let sum = 0;
    let k = num16.length - 1

    for(let n = 0 ; n < num16.length; n++){
        for(let i = 0; i<16; i++){
            if(num16[n] == arr16[i]){
                sum +=i*Math.pow(16, k)
            }
        }
        --k;
    }

    son10.value = sum;

    son8.value = sum.toString(8)
    son2.value = sum.toString(2)
 
})

son10.addEventListener("input", (e)=>{
    e.preventDefault();
    let num10 = son10.value - 0;


    son16.value = num10.toString(16).toUpperCase()
    son8.value = num10.toString(8)
    son2.value = num10.toString(2)

    
})

son8.addEventListener("input", (e)=>{
    e.preventDefault();
    let num8 = son8.value;

    // 10lik uchun

    let sum = 0;
    let k = num8.length - 1

    for(let n = 0 ; n < num8.length; n++){
        sum +=num8[n]*Math.pow(8, k)
            
        --k;
    }

    son10.value = sum;

    son16.value = sum.toString(16).toUpperCase()
    son8.value = sum.toString(8)
    son2.value = sum.toString(2)
 
})

son2.addEventListener("input", (e)=>{
    e.preventDefault();
    let num2 = son2.value;

    // 10lik uchun

    let sum = 0;
    let k = num2.length - 1

    for(let n = 0 ; n < num2.length; n++){
        sum +=num2[n]*Math.pow(2, k)
            
        --k;
    }

    son10.value = sum;

    son16.value = sum.toString(16).toUpperCase()
    son8.value = sum.toString(8)
    son2.value = sum.toString(2)
 
})