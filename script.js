const productListRef = document.getElementById("productList");

let products = [];
let limit = 4;

async function getProducts(limit) {
    console.log(limit);
    try {
        const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
        const data = await res.json();
        products = data.products;
        showProducts(products);
    } catch (error) {
        console.log(error.message);
    }
}

function showProducts(products) {
    if (!products || !Array.isArray(products)) return;

    let html = "<div class='row gy-4'>";

    products.forEach((p) => {
        html += `<div class="col-3">
                <div class="card">
                    <div class="card-header">
                        <span class="badge text-bg-secondary">${p.category}</span>
                        <img class="w-100" src="${p.thumbnail}" alt="images">
                    </div>
                    <div class="card-body">
                        <h4>${p.title}</h4>
                        </div>
                    <div class="card-footer">
                        <h3>$${p.price}</h3>
                    </div>
                </div>
            </div>`
    })

    html += `
        </div>
        <div class="mt-5 text-center">
            <button onclick="getProducts(${limit + 4})" class="btn btn-primary" type="button">Load More</button>
        </div>
    `;

    productListRef.innerHTML = html;
    
}

getProducts(limit);