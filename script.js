let heart_btn=document.getElementsByClassName("heart_btn");
let plus_btn=document.getElementsByClassName("plus-btn");
let Quant=document.getElementsByClassName("Quant");
let minus_btn=document.getElementsByClassName("minus-btn");
let finalPrice=document.getElementById("finalPrice");
let delete_btn=document.getElementsByClassName("delete");
let Item=document.getElementsByClassName("Item");
let prices=[1379,176,249]
for(let i=0;i<heart_btn.length;i++){
    //heart bouton
    heart_btn[i].addEventListener("click",function(){
        if(heart_btn[i].style.color=="red"){
            heart_btn[i].style.color="black"
        }
        else{
            heart_btn[i].style.color="red"
        }
    })
    //plus bouton
    plus_btn[i].addEventListener("click",function(){
        Quant[i].value=Number(Quant[i].value)+1;
    })
    //minus button
    minus_btn[i].addEventListener("click",function(){
        if(Number(Quant[i].value)>=1){
        Quant[i].value=Number(Quant[i].value)-1;}
    })
    //delet button
   
    delete_btn[i].addEventListener("click",function(){
        finalPrice.value=Number(finalPrice.value)-(prices[i]*Number(Quant[i].value))
        Item[i].remove()

    })
   
}