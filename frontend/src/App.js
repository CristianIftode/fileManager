import React, {useEffect, useState} from  'react';
import './App.css';



function App() {
  const [data, setData] = useState({path:"", files: []});
  const [parent, setParent] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/")
    .then(res => res.json())
    .then((result) => {
      setParent('');
      setData(result);
    },
    (error) =>{
      console.log(error);
    })
  }, []);

  const clickHandler = (event) =>{
    event.preventDefault();
    
    fetch("http://localhost:8000/?path="+event.target.attributes.href.value)
    .then(res => res.json())
    .then(result=>{
      let linkArr = result.path.split('/');
      linkArr.pop();
      setParent(linkArr.join('/'));
      setData(result);
    })
  }

  return (
    <div className="App">

      <div>
        <a href={parent} onClick={clickHandler} className='material-icons'>
        &#xe15e;
        </a>
      </div>

      <div className='current-level'>
        current: {data.path === '' ? '/' : data.path}

      </div>

      <ul className='folder-list'>
        {data.files.map(item=> {

          if(item.dir){
            return <li key={item.name} className='folder'>
              <a href={data.path+'/'+item.name} onClick={clickHandler}>
              <span className='material-icons'>&#xe2c7;</span>
              {item.name}</a>
              </li>
          }else{
            return <li key={item.name} className='file'>
              <div>
                <span className='material-icons'>&#xe873;</span>
                {item.name}
              </div>
              <div>
                {item.size}
              </div>
              </li>
          }

        })}
      </ul>      
    </div>
  );
}

export default App;
 