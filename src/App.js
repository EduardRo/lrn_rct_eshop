import './categories.styles.scss';

function App() {
  // initialize some array
  const categories = [
    {
      id:1,
      title:'Shirts',
      
    },
    {
      id:2,
      title:'Perfumes',
      
    },
    {
      id:3,
      title:'Bracelets',
      
    },
    {
      id:4,
      title:'Women',
      
    },
    {
      id:5,
      title:'Men',
      
    },
  ]
  return (
    <div className="categories-container" key='0'>
      

      {categories.map(({title, id, index})=>(
        <div className="category-container" key={id+'cc'}>
        <div className="background-image" />
        <div key={index+'cb'} className="category-body-container">
          {/* <img /> */}
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
        
    
        </div>
     
      ))}
      
    </div>
  );
}

export default App;
