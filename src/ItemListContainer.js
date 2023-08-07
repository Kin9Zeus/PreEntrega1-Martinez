
function ItemListContainer(props) {
  let hora = new Date().getHours();
  let saludo;
  if (hora < 12) saludo = "Buenos días";
  else if (hora >= 12 && hora <= 18) saludo = "Buenas tardes";
  else if (hora > 18 && hora <= 24) saludo = "Buenas noches";

  return <h1>{saludo}, {props.name}</h1>;
  
}

export default ItemListContainer;