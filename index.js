let productContainer=document.getElementById('products');

const getProducts=()=>{
    return fetch('https://dummyjson.com/products?limit=5')
    .then(response=>response.json())
    .then(response=>response)
    .catch(error=>error.message)
}
getProducts();

const displayProducts=async ()=>{
    const products=await getProducts();
    console.log(products.products)
    products.products.map(item=>{
        let div=document.createElement('div')
        div.className='products';
        let img=document.createElement('img')
        let description=document.createElement('h2')
        let price=document.createElement('p')

        img.src=item.images;
        description.innerHTML=`${item.description}`;
        price.innerHTML= `${item.price}`
        div.appendChild(img)
        div.appendChild(description)
        div.appendChild(price)
        productContainer.appendChild(div);
    })
}
displayProducts();