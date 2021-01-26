//add tp cart

let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".add-to-cart");

// for(let i = 0; i < addToCartButtons.length; i++){
//     addToCartButtons[i].addEventListener("click", function () {
//         let prevProductsCount = +productsCountEl.textContent;
//         productsCountEl.textContent = prevProductsCount + 1;
//     })
// }

for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].addEventListener("click", function () {
        productsCountEl.textContent = +productsCountEl.textContent +1;  
    })
}

//modal

let modal = document.querySelector(".modal");
let moreDetailsBtns = document.querySelectorAll(".more-details-btn");
let closeBtn = document.querySelector(".btn-close");


moreDetailsBtns.forEach((btn)=>{
    btn.addEventListener("click", openModal)
    })
    
function openModal(){
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal (){
    modal.classList.add("hide");
    modal.classList.remove("show");
}
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click",function(e){
    if(e.target == modal){
        closeModal()
    }
})


//Show modal-by scroll
function showModalByScroll(){
    if(window.pageYOffset > document.body.scrollHeight/2){
openModal()
    }
}

 window.addEventListener("scroll",showModalByScroll)

//background img like (my)

let btn = document.querySelectorAll(".heart-ico");
console.log(btn);


for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function () {
        if(btn[i].classList.contains("liked"))
        {
            btn[i].classList.remove("liked");
            btn[i].style.backgroundColor = 'transparent'; 
            btn[i].style.backgroundImage = "url('images/heart.png')"; 
        }else{
            btn[i].classList.add("liked");
            btn[i].style.backgroundColor = '#2c71b8'; 
            btn[i].style.backgroundImage = "url('images/heart-white.png'"; 
        }
    })
}


//background img like (teacher)
// let likeButtons = document.querySelectorAll('.heart-ico');

// likeButtons.forEach((btn)=>{
//     btn.addEventListener("click", function(e){
//         console.log(this)
//         if(this.classList.contains("liked")){
//             this.classList.remove("liked")
//         }else{
//             this.classList.add("liked")
//             }
//         })
// })

//background img like (teacher togle)
// let likeButtons = document.querySelectorAll('.heart-ico');

// likeButtons.forEach((btn)=>{
//     btn.addEventListener("click", function(e){
//         this.classList.toggle("liked")
//     })
// })




//change product count second version

//changed product count

// let decrementBtns = document.querySelectorAll(".decrement-button");
// let incrementBtns = document.querySelectorAll(".increment-button");
// let quantityValue = document.querySelectorAll(".product-count input");

// let currentCount = +quantityValue.value;
// let minCount = 1;
// let maxCount = 5;


// function toggleButtonState(count){
//     decrementBtns.disabled = count<= minCount;
//     incrementBtns.disabled = count >= maxCount;
// }

// for(let i = 0;i < quantityValue.length;i++) {
//     let currentCount = +quantityValue[i].value;
//     toggleButtonState(currentCount,decrementBtns[i],incrementBtns[i])
// }

// function toggleButtonState(count,decrementBtn,incrementBtn) {
//     decrementBtn.disabled = count <= minCount;
//     incrementBtn.disabled = count >= maxCount;
// }
// for(let i = 0;i < incrementBtns.length;i++){
//     incrementBtns[i].addEventListener("click", function(){
//         let currentCount = +quantityValue[i].value;
//         let nextCount = currentCount + 1;
//         quantityValue[i].value = nextCount;
    
//         toggleButtonState(nextCount, decrementBtns[i], incrementBtns[i])
//     })
// }
// for(let i = 0;i < decrementBtns.length;i++)
//     decrementBtns[i].addEventListener("click", function(){
//         let currentCount = +quantityValue[i].value;
//         let nextCount = currentCount + 1;
//         quantityValue[i].value = nextCount;
    
//         toggleButtonState(nextCount, decrementBtns[i], incrementBtns[i])
//     })



// //changed product count

// let decrementBtns = document.querySelectorAll(".decrement-button");
// let incrementBtns = document.querySelectorAll(".increment-button");
// let quantityValue = document.querySelectorAll(".product-count input");

// let currentCount = +quantityValue.value;
// let minCount = 1;
// let maxCount = 5;

// for(let i=0; i<quantityValue.length; i++){
//     decrementBtns[i].addEventListener("click", function(){
//         let currentCount = +quantityValue[i].value;
//         let nextCount = currentCount - 1;
//         quantityValue[i].value = nextCount;
    
//         if(nextCount<=1){
//             decrementBtns[i].disabled = true;
//         }else{
//             decrementBtns[i].disabled = false;
//         }
        
//     })
    
//     incrementBtns[i].addEventListener("click", function(){
//         let currentCount = +quantityValue[i].value;
//         let nextCount = currentCount + 1;
//         quantityValue[i].value = nextCount;
    
//         if(nextCount<=1){
//             decrementBtns[i].disabled = true;
//         }else{
//             decrementBtns[i].disabled = false;
//         }
//     })
// }




// function constructor change product count
let incrementBtns = document.querySelectorAll(".increment-button");
let decrementBtns = document.querySelectorAll(".decrement-button");
let quantityValue = document.querySelectorAll(".product-count input");

function Counter(incrementBtn, decrementBtn, inputField,minCount=1, maxCount=5){
//   this.incrementBtn = incrementBtn;
//   this.decrementBtn = decrementBtn;
//   this.inputField = inputField;

  this.domRefs = {
      incrementBtn,
      decrementBtn,
      inputField,
  }

  
  this.toggleButtonState = function(){
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= minCount;
    this.domRefs.incrementBtn.disabled = count >= maxCount;
  }
this.toggleButtonState();
  

 this.incrementBtn = function(){
     
    let currentCount = +this.domRefs.inputField.value;
    let nextCount = currentCount + 1;
    this.domRefs.inputField.value = nextCount;

    this.toggleButtonState()
 }

 this.decrementBtn = function(){
   
   let currentCount = +this.domRefs.inputField.value;
   let nextCount = currentCount - 1;
    this.domRefs.inputField.value = nextCount;

   this.toggleButtonState()
}
this.domRefs.incrementBtn.addEventListener("click", this.incrementBtn.bind(this));
this.domRefs.decrementBtn.addEventListener("click", this.decrementBtn.bind(this));

console.log(this)
}

const counter = new Counter (incrementBtns[0], decrementBtns[0], quantityValue[0]);
const counter1 = new Counter (incrementBtns[1], decrementBtns[1], quantityValue[1]);




//slider-slick
$(".slider-block").slick({
  fade:true, 
  dots:true,
   
});