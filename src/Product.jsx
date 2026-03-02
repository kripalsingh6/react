import './Product.css';
import Price from './price';
function Product({title,idx}){
    let oldPrice=["12,495","11,900","1,599","599"];
    let newPrice=["8,999","9,199","899","278"];
   
    return(
        <div className='Product'>
            <h3>{title}</h3><br></br>
            <p>Description</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    )
}
export default Product;