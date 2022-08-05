import { useEffect, useState } from "react";
import "./styles.css";
const App = () => {
  const[cards,setCard] = useState([]);
  const[search,setSearch] = useState("");


  

  const searchFunc = (e) => {

    setSearch(e.target.value);
  }
  useEffect(() => {
    (async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const arr = await data.json();
      console.log(arr);
      setCard(arr);
    })()
  },[search])

  return (
    <div className="container">
    <input type="text" onChange={searchFunc} 
    value={search} />
      {cards.map(item => {
        return (
          <>
          <button onClick={() => {
            setCard(prev => {
              return prev.filter(item => search === item.title.substring(0,search.length))
            })
          }} >search</button>
          <Card image={item.image}
          title={item.title}
          price={item.price}
          description={item.description}
          />
          </>
        )
      })}
    </div>
  )
}



const Card = (prop) => {
  return (
    <div className="card">
      <img src={prop.image}/>
      
      <h3>{prop.title}</h3>
      <p>{prop.description}</p>
      <p>{prop.price}</p>

    </div>
  )
}
export default App;

