import "./styles.css";
import React, {useState, useEffect} from 'react';

export default function App() {

const API_URL = "https://inshorts.deta.dev/news?category=science"
const [authorMap,setAuthorMap] = useState(new Map());

useEffect(() => {
  const fetchData = async () => {
    await fetch(API_URL)
    .then((response) => {
      const data =response.json().data;
      const myMap = new Map();
      data.map ((entry) => {
        const author = entry.author;
        if(myMap.has(author)){
          const f = myMap.get(author) ?? 0;
          myMap.set(author, f+1);
        }
        else {
          myMap.set(author, 1);
        }
        return 0;
     } )
    console.log(myMap);
    setAuthorMap(myMap);
    } )
      .catch((e) => console.error(e));
  };

  fetchData();
}, []);

  

return(
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
