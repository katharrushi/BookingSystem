let arrows=document.querySelectorAll(".arrow");
let movieLists=document.querySelectorAll(".movie-list");


arrows.forEach((arrow,i)=>{

    
    const itemNumber= movieLists[i].querySelectorAll("img").length;
    
    let clickcounter=0;
    arrow.addEventListener("click",()=>{
        const ratio=Math.floor(window.innerWidth/270);


        clickcounter++;
        if(itemNumber- (4 + clickcounter) + (4-ratio) >= 0){
        movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
        }
        else{
            movieLists[i].style.transform = "translateX(0)";
            clickcounter=0;
        }
    })

    

})

const ball=document.querySelector(".toggle-ball");
const items=document.querySelectorAll(".container, .movie-list-title, .navbar-container, .slidebar, .left-menu-icon, .toggle");

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})




