import React from 'react';

function Food({name, picture}){
return (
  <div>
    <h2>i like {name}</h2>
    <img src={picture} alt={name}/>
  </div>
  );
}


const foodILike = [
  { 
    id:1,
    name:"Kimchi",
    image:"https://health.chosun.com/site/data/img_dir/2020/07/21/2020072103114_0.jpg"
  },
  { 
    id:2,
    name:"Samgyepsal",
    image:"https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg"
  },{ 
    id:3,
    name:"ramen",
    image:"https://health.chosun.com/site/data/img_dir/2020/07/21/2020072103114_0.jpg"
  }

]





function App() {
  return (
    <div>
      {foodILike.map(dish =>(
        <Food key={dish.id} name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;
