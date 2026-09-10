let toggleBtn = document.getElementById("theme-toggle")
let html = document.documentElement;

if( localStorage.getItem("theme") == "dark" ){
    html.setAttribute("data-theme" ,"dark" )
    toggleBtn.classList.add("fa-sun")
}else{
    html.setAttribute("data-theme" ,"light" )
    toggleBtn.classList.add("fa-moon")
}


/**
 * this change between light and dark
 */
function theme(){

    if( html.getAttribute("data-theme") == "dark" ){
        html.setAttribute("data-theme" ,"light" )
        localStorage.setItem("theme" , "light")
    }else{
        html.setAttribute("data-theme" ,"dark" )
        localStorage.setItem("theme" , "dark")
    }

    toggleBtn.classList.toggle("fa-sun")
    toggleBtn.classList.toggle("fa-moon")
}



