
import Product from './Product.jsx';
function ProductTab(){
    let styles= {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        aliginItems: "center",
    };
    return(
        <div style={styles}>
        <Product title="Logitech MX Master Chip 35" idx={[0]}/>
        <Product  title="Apple Pencil (2nd genration)  " idx={[1]}/>
        <Product  title="Zebronics Zeb-Transformer" idx={[2]} />
        <Product title="Portronics Toad 23 WireLess Mouse" idx={[3]}/>
        </div>
    )
}
export default ProductTab;