export function ProductList(props/* passing props to component */){
return <div
style = {{display: "flex",
    gap: "16px",
}}
>{props.children}</div>
}