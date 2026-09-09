let toggleBtn = document.getElementById("theme-toggle")
let html = document.documentElement;

function theme(){

    if( html.getAttribute("data-theme") == "dark" ){
        html.setAttribute("data-theme" ,"light" )
    }else{
        html.setAttribute("data-theme" ,"dark" )
    }

    toggleBtn.classList.toggle("fa-sun")
    toggleBtn.classList.toggle("fa-moon")
}