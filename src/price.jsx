export default function Price({oldPrice, newPrice}){
    let styles= {
    backgroundColor: "#e0c367",
    borderBottomLeftRadius : "14px",
    borderBottomRightRadius : "14px",
    height:"30px"
    }
    return(
        <div style={styles}>
         <span style={{TextDecorationLine:"line-through"}}>{oldPrice}</span>
         &nbsp;  &nbsp;
         <span style={{fontWeight:"bold"}}>{newPrice}</span>
        </div>
    )
}