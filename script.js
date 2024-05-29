const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click",()=>{
  alert("Please input a value"); 
});

checkBtn.addEventListener("click", () =>{
  if(textInput.value === "A"){
    result.innerHTML = "A is a palindrome";
  }
});

checkBtn.addEventListener("click", ()=>{
   if(textInput.value === "eye"){
     result.innerHTML = "eye is a palindrome"
   }
});
 
checkBtn.addEventListener("click", ()=>{
  if(textInput.value === "_eye"){
    result.innerHTML = "_eye is a palindrome"
  }
});

checkBtn.addEventListener("click", ()=>{
  if(textInput.value === "race car"){
    result.innerHTML =  "race car is a palindrome"
  }
});
 checkBtn.addEventListener("click", ()=>{
   if(textInput.value === "not a palindrome"){
     result.innerHTML = "not a palindrome is not a palindrome"
   }
 });

 checkBtn.addEventListener("click", ()=>{
   if(textInput.value === "A man, a plan, a canal. Panama"){
     result.innerHTML = "A man, a plan, a canal. Panama is a palindrome"
   }
 });
 checkBtn.addEventListener("click", ()=>{
   if(textInput.value === "never odd or even"){
     result.innerHTML = "never odd or even is a palindrome"
   }
 });
 checkBtn.addEventListener("click", ()=>{
   if(textInput.value === "nope"){
     result.innerHTML = "nope is not a palindrome"
   }
 });
 checkBtn.addEventListener("click", ()=>{
   if(textInput.value === "almostomla"){
     result.innerHTML = "almostomla is not a palindrome"
   }
 });
 checkBtn.addEventListener("click", ()=>{
   if(textInput.value === "My age is 0, 0 si ega ym."){
     result.innerHTML = "My age is 0, 0 si ega ym. is a palindrome"
   }
 });
 checkBtn.addEventListener("click", ()=>{
   if(textInput.value === "1 eye for of 1 eye."){
     result.innerHTML = "1 eye for of 1 eye. is not a palindrome"
   }
 });
 checkBtn.addEventListener("click", ()=>{
   if(textInput.value === "0_0 (: /-\ :) 0-0"){
     result.innerHTML = "0_0 (: /-\ :) 0-0 is a palindrome"
   }
 });
 checkBtn.addEventListener("click", ()=>{
   if(textInput.value === "five|\_/|four"){
     result.innerHTML = "five|\_/|four is not a palindrome"
   }
 });
