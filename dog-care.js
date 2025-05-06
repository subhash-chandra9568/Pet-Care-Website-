// Click bar And Show Nav-Items On Mobile View
const toggleBtn = document.getElementById('bar');
const nav = document.getElementById('nav-item');
const closeBtn = document.getElementById('close-btn');

toggleBtn.addEventListener('click', function() {
    nav.style.left = '0'; 
});

closeBtn.addEventListener('click', function() {
    nav.style.left = '-100%'; 
});


    let content = document.querySelectorAll(".Target");
    let showItem = document.querySelector(".content");
    let showDiv = document.querySelector(".full-img");

    content.forEach(item =>{
        item.addEventListener("click", function(){
            let showSrc = this.src;
            showDiv.src = showSrc;
            showItem.style.display = "block";
        });
    });

    showItem.addEventListener("click", function(e){
        if(e.target !== showItem){
            showItem.style.display = "none";
        };
    });