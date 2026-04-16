export function ProductCard({product, background= "slategray",  ...restProps/*passing props to react component*/}){

//using Variables in JSX
const style = {
    background,
    width: "100%",
    border: "1px solid white",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
}

function getProductTitle(){
  return product.title;
}

    return (
      <article style = {style}>
        <h2>{getProductTitle()}</h2>
        <img 
        src = {product.imgSrc}
        alt = {getProductTitle()}
        {...restProps}
        />
        <p>Specification:</p>
        <ul style = {{
          listStyle: "none",
          padding: 0
        }}>
          <li>{product.specification[0]}</li>
          <li>{product.specification[1]}</li>
          <li>{product.specification[2]}</li>
        </ul>
        <button>Buy (From ${product.price})</button>
      </article>
    );
  }

