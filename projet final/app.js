let imageList=document.querySelector('.slider-wrapper .image-list');
let slideButtons=document.querySelectorAll('.slider-wrapper .slide-button');
let scrollbar=document.querySelector(".scrollbar-thumb");
let searchPopup=document.querySelector(".searchPopup");
let prev=document.querySelector("#prev-slide");
let searchinput=document.querySelector(".searchinput");
let deleteButton=document.querySelector(".deleteButton");
let chatButton=document.querySelector(".chatButton");
let sendButton=document.querySelector(".sendButton");
let float=document.querySelector(".float");
let deleteButton2=document.querySelector(".deleteButton2");
let messageInput=document.querySelector(".messageInput");
let menu=document.querySelector(".menu");
let hamburger=document.querySelector(".hamburger");



const initSlider= ()=>{


slideButtons.forEach(button =>{
    button.addEventListener("click", () => {
        const direction=button.id=== "prev-slide" ? -2: 2 ;
        const scrollAmount= imageList.clientWidth *direction;
        imageList.scrollBy({left: scrollAmount, behavior:"smooth"})
  scrollbar.style.left="50%"
    
});
});
}
window.addEventListener("load",initSlider);




chatButton.addEventListener("click",function(){
float.style.display="block";
 deleteButton2.addEventListener("click",function(){
          float.style.display="none";
        
})})
sendButton.addEventListener("click",function(){
   
    float.style.display="none";
    
  
    })

hamburger.addEventListener("click",function(){
  
    menu.classList.toggle("active");
})

let cardContainer=document.querySelector('.cardContainer');

data=[
    { image:'images/img1.png',
      name:'Squires and Duran Plumbing and heating',
      star:'⭐⭐⭐⭐',
      review:' 7reviews',
      description:'At Squires and Duran Plumbing and Heating Ltd, we offer a range of plumbing and heating services such as gas oven disconnection, gas safety inspections, boiler repairs,boiler servicing, emergency boiler repair, toilet repairs, boiler replacements...',
      btn1:'view Profile',
      btn2:'Leave a review',

    },
    {image:'images/img2.jpg',
        name:'Piran Plumbing',
        star:'⭐⭐⭐⭐⭐',
        review:' 5reviews',
        description:'Here at Piran Plumbing, we are renewable energy heating engineers and air source heating engineers, oil heating engineers, and ground source heating engineerswho offer boiler repair services, central heating installation,boiler installation, gas...',
        btn1:'view Profile',
        btn2:'Leave a review',
    },
    {
        image:'images/img3.jpg',
      name:'Largs Plumbing Services',
      star:'⭐⭐⭐⭐',
      review:' 10reviews',
      description:'Here at Largs Plumbing Services, we are experienced plumbers who offer 24 hour emergency plumbing services, plumbing services such as radiator installation, shower installation, electricboiler installation, electricboiler repairs, electricboiler...',
      btn1:'view Profile',
      btn2:'Leave a review',},
    {
        image:'images/img4.jpg',
      name:'Solutions4Plumbing',
      star:'⭐⭐⭐',
      review:' 2reviews',
      description:'Here at Solutions4Plumbing, we offer a wide range of plumbing services, including plumbing, tap repair, radiator installation, heating repairs, bathroom installation, emergency plumbers, blocked drains, shower repair, and power flushing to clients...',
      btn1:'view Profile',
      btn2:'Leave a review',},
    
    {
        image:'images/img5.jpg',
      name:'Clarke Gas Services',
      star:'⭐⭐⭐⭐⭐',
      review:' 8reviews',
      description:'Here at Clarke s Gas Services, we have over 12 years worth of experience operating as expert plumbers and heating engineers in Faversham, which allows you to rest easy, knowing youre in good hands with our experienced plumbers and heating...',
      btn1:'view Profile',
      btn2:'Leave a review', }

]

let dataString= JSON.stringify(data)
localStorage.setItem('data',dataString)
let dataFromLocal=localStorage.getItem('data')
let dataObject=JSON.parse(dataFromLocal)
  

function createUserCard(userInfo){
    let card=document.createElement("div");
    card.classList.add('card')
    let pro=document.createElement('div');
    let image=document.createElement('img');
    let name=document.createElement('p');
    pro.classList.add('pro');
    let star=document.createElement('p');
    let review=document.createElement('p');
    let description=document.createElement('p');
    description.classList.add("description");
    let btn1=document.createElement('button');
    let btn2=document.createElement('button');
    btn2.classList.add("review");

   image.src = userInfo.image;
   name.textContent=`${userInfo.name}`
    star.textContent=`${userInfo.star}`
     review.textContent=`${userInfo.review}`
   description.textContent=`${userInfo.description}`
     btn1.textContent=`${userInfo.btn1}`
      btn2.textContent=`${userInfo.btn2}`
      pro.appendChild(image)
      pro.appendChild(name)
      card.appendChild(pro)
      card.appendChild(star)
      card.appendChild(review)
      card.appendChild(description)
      card.appendChild(btn1)
      card.appendChild(btn2)

    return card


}
localStorage.setItem('data',JSON.stringify(data))

let newData = JSON.parse(localStorage.getItem('data'))

newData.forEach(function(item){
    let card = createUserCard(item);
cardContainer.appendChild(card);
    
})

let reviewpopup=document.querySelector(".reviewpop")
let reviewbutton=document.querySelector(".review")
reviewbutton.addEventListener("click",function(){
 reviewpopup.style.display='flex';
})

let quitreview=document.querySelector(".quitreview");
quitreview.addEventListener("click",function(){
  reviewpopup.style.display='none';
})
let postbtn=document.querySelector(".post");
postbtn.addEventListener("click",function(){
  reviewpopup.style.display='none';
})







