let toggleBtn = document.getElementById("theme-toggle");
let html = document.documentElement;
let allProducts = document.getElementById("all_products")
let productDetails = document.querySelector('.product-details')

if (localStorage.getItem("theme") == "dark") {
  html.setAttribute("data-theme", "dark");
  toggleBtn.classList.add("fa-sun");
} else {
  html.setAttribute("data-theme", "light");
  toggleBtn.classList.add("fa-moon");
}

/**
 * this change between light and dark
 */
function theme() {
  if (html.getAttribute("data-theme") == "dark") {
    html.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }

  toggleBtn.classList.toggle("fa-sun");
  toggleBtn.classList.toggle("fa-moon");
}

// clock
// function printTime() {
//   const now = new Date();
//   const hours = String(now.getHours()).padStart(2, "0");
//   const minutes = String(now.getMinutes()).padStart(2, "0");
//   const second = String(now.getSeconds()).padStart(2, "0");

//   document.getElementById("clock").textContent = `${hours}:${minutes}:${second}`
// }

// printTime()
// setInterval(printTime , 1000)

// Live 24-hour clock (HH:MM:SS), using the library's default clock face and skin
$("#clock")?.FlipClock({
  clockFace: "TwentyFourHourClock",
  showSeconds: true,
});

//  <p class="text-muted">${product.description.substring(0,60)}...</p>
// show all products
async function showProducts() { 
  try {

      let result = await fetch("https://fakestoreapi.com/products")
      let data = await result.json();

      let container = '';
      data?.forEach( (product , ind) => {
        container += `  <div class="col-12 col-md-6 col-lg-3 for-space">
                          <a href="products-details.html?id=${product.id}" class="product-link">
                            <div class="product">
                                <div class="img-prod">
                                    <img src="${product.image}" class="w-100" alt="${product.title}">
                                </div>
                                <div class="mt-3 px-2">
                                    <h6 class="text-success">${product.price} EGP</h6>
                                    <h6>${product.title.substring(0,40)}</h6>
                                  
                                </div>
                                <i class="fa-regular fa-star star-num"> 
                                    <span class="num">${product.rating.rate}</span> 
                                </i>
                            </div>
                        </a>
                      </div>`
      } )
      
      allProducts ? allProducts.innerHTML = container : ''
    
  } catch (error) {
    console.log(error);
  }
  
}

showProducts()




async function showProductDetails() { 

  try {
    let params = new URLSearchParams(window.location.search)
    let productId = params.get("id") // 2

    if (productId) {
       let result = await fetch(`https://fakestoreapi.com/products/${productId}`)
      let data = await result.json()

      let container = `<div class="prod-details-img col-12 col-md-4">
                          <img src="${data.image}" class="w-100" alt="${data.title}">
                      </div>

                      <div class="mt-3 mt-md-0 col-12 col-md-7">
                          <h5 class="font-2-5rem">Price : ${data.price} EGP</h5>
                          <h6 class="font-2rem">Title : ${data.title}</h6>
                          <p class="font-1-5rem text-muted">Description : ${data.description}</p>
                          <h4>Rating : ${data.rating.rate} 🌟</h4>
                      </div>`

      productDetails.innerHTML = container

    } else{
      // not found
      let container = `<h2 class="text-center py-4 my-2">Data Not Found 😖</h2>`
      productDetails.innerHTML = container
    }

  } catch (error) {
    console.log(error)
  }

}

showProductDetails()