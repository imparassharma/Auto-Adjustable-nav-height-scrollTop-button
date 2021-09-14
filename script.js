const toggle = document.querySelector(".toggle-btn");
const linkscontainer = document.querySelector(".links-container");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click",function(){
    linkscontainer.classList.toggle("show-links");
    const container_height = linkscontainer.getBoundingClientRect().height;
    console.log(container_height);
    const links_height = links.getBoundingClientRect().height;
    console.log(links_height);
    if(container_height==0)
    {
        linkscontainer.style.height = `${links_height}px`;
    }
    else{
        linkscontainer.style.height = 0;
    }
});


const nav_height = document.getElementById("nav");
const scroll_top = document.querySelector(".home");
window.addEventListener("scroll",function(){
    const scrollheight = window.pageYOffset;

    if(scrollheight >200){
        scroll_top.classList.add("show-links");
    }
    else
    {
        scroll_top.classList.remove("show-links");
    }
});
