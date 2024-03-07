const productsContainer= document.getElementById('products')
const loadingtext= document.getElementById('loadingtext')
const fetchbtn= document.getElementById('fetchbtn');



const getproducts= async() =>{
    loadingtext.style.display="block";
    let products;
await fetch('https://dummyjson.com/products')
.then((res) => res.json())
.then((data)=> products=data.products);
console.log(products);
return products;

};
const addtocart= (item)=> {
    const storeditems= JSON.parse(localStorage.getItem('cartitems'))
    let cartitems=storeditems;
    cartitems.push(item);
    localStorage.setItem('cartitems',JSON.stringify(cartitems));
alert(`added ${item?.title} to cart`);

};


const createproducts = async ()=> {
    const todos = await getproducts();
    loadingtext.style.display='none'
    todos?.forEach((item)=> {
    const div = document.createElement('div');
    div.classList.add('product')
    div.innerHTML= `
    <img src=${item?.images[0] } alt="">
<span>${item?.title}</span>
<h3>#${item?.price}</h3>
<button>add to cart</button>
`;
div.addEventListener('click',()=>addtocart(item))
productsContainer.appendChild(div);
});
};



 fetchbtn.addEventListener('click', () => {
 createproducts();
 });


 switch (8-2){
    case 0:
    month= "january";
    console.log("month of january")
    break;
    case 2:
        month= "february";
        console.lod('month of february')
        break;
        case 3:
            month= "march";
            console.log("month of march")
            break;
            case 4:
                month="april"
                console.log("month of april")
                break;
                case 5:
                    month= "may"
                    console.log('month of may')
                    break;
                    case 6:
                    month="june"
                    console.log('month june')
                    getproducts()
                    break;
case 7:
    month='july'
    console.log('month of july')
    break;
    case 8:
        month="august"
        console.log("the month of august")
        break;
        case 9:
            month="september"
            console.log('the month of september')
            break;
            case 10:
                month='october'
                console.log("month of october")
                break;
                case 11:
                    month="november"
                    console.log('month of november')
                    break;
                    case 12:
                        month='december'
                        console.log("month of december")
 }