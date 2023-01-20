import React from 'react';
import "./App.css";


const App =()=>{

   
    return(
        <>
            <h1>
                <u>SHOPPING CART</u>
            </h1>
            <div className='container'>
            <div className='product'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvqLWJ3n82zKE7jECdVZmW902nwTU18wBxGA&usqp=CAU' alt='sweatshirt'/>
               <h3>SweatShirt</h3>
               <p>Price:799</p>
              <labell>Quantity </labell><input type='number' min="0" max="5"></input><br/> <br/>
               <label>SIZE:
               <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
               </select></label> <br/> <br/>
               <button >Add To Cart</button>
            </div>
            
            <div className='product'>
            <img src='https://5.imimg.com/data5/LN/PI/JS/SELLER-3749501/corparate-trouser-500x500.jpg' alt='trousers'/>
               <h3>Trousers</h3>
               <p>Price:1499</p>
               <labell>Quantity </labell><input type='number' min="0" max="5"></input><br/> <br/>
               <label>SIZE:
               <select>
                <option>30</option>
                <option>32</option>
                <option>34</option>
                <option>36</option>
                <option>38</option>
               </select></label> <br/> <br/>
                <button>Add To Cart</button>
            </div>

            <div className='product'>
            <img src='https://assets.ajio.com/medias/sys_master/root/20211224/1tuJ/61c4c229aeb26901101a2a6a/-473Wx593H-469034008-black-MODEL.jpg' alt='shoes'/>
               <h3>NIKE SHOES</h3>
               <p>Price:1499</p>
               <labell>Quantity </labell><input type='number' min="0" max="5"></input><br/> <br/>
               <label>SIZE:
               <select>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
               </select></label> <br/> <br/>
                <button>Add To Cart</button>
            </div>
            <div className='product'>
            <img src='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41Cwt7bV-NL._UX679_.jpg' alt='glasses'/>
               <h3>Glasses</h3>
               <p>Price:499</p>
               <labell>Quantity </labell><input type='number' min="0" max="5"></input><br/> <br/>
               <label>SIZE:
               <select>
                <option>Free Style</option>
                
               </select></label> <br/> <br/>
                <button>Add To Cart</button>
            </div>
            <div className='product'>
            <img src='https://m.media-amazon.com/images/I/71njU5PNAjL._UL1500_.jpg' alt='puma jackets'/>
               <h3>Puma Jacket</h3>
               <p>Price:1499</p>
               <labell>Quantity </labell><input type='number' min="0" max="5"></input><br/> <br/>
               <label>SIZE:
               <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
               </select></label> <br/> <br/>
                <button>Add To Cart</button>
            </div>
           
            <div className='product'>
            <img src='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51ZW4OPqYQL._UX679_.jpg' alt='cap'/>
               <h3>CAP</h3>
               <p>Price:299</p>
               <labell>Quantity </labell><input type='number' min="0" max="5"></input><br/> <br/>
               <label>SIZE:
               <select>
                <option>Free Style</option>
                
               </select></label> <br/> <br/>
                <button>Add To Cart</button>
            </div>
            </div>
        </>
    )
}

export default App;