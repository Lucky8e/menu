import { useState } from "react";
import Title from "./Title"
import data from "./data"
import Menu from "./Menu";
import Categories from "./Categories";

const tempCategories=data.map((item)=>item.category)
const tempSet=new Set(tempCategories);
const tempItems=['all',...tempSet]

const App = () => {

  const [menu,setMenu]=useState(data);
  const [categories,setCategories]=useState(tempItems);


  const filterItem=(category)=>{
    if(category==='all'){
      setMenu(data);
      return;
    }
    const newItems=data.filter((item)=>item.category===category);
    setMenu(newItems)
  }
  
  return(
    <main>
      <section className="menu">
        <Title />
        <Categories categories={categories} filterItem={filterItem} />
        <Menu menu={menu}/>
      </section>
    </main>
  );
};
export default App;
