
import Product from './Product.jsx';
function ProductTab(){
     let options= ["smooth","Adavanced Camera","flexiable"];
    
    return(
        <>
        <Product title= "Phone" price={15000}/>
        <Product title= "Laptop" price={70000}/>
        <Product title= "Ipad" price={50000} />
        </>
    )
}
export default ProductTab;