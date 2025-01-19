import Productdata from "../data/data.json";
import "./Product.css";
import { useState } from "react";




function Products(){

    const  [Product, setProduct]=useState(Productdata);
    const [filterclick, setFilterClick]=useState(false);




    const ascendingSort=()=>{
        const sorteddata =  [...Product].sort((a,b)=> a.price - b.price);
        setProduct(sorteddata);
        
        }

        const descendingSort=()=>{
            const sorteddata =  [...Product].sort((a,b)=>b.price - a.price);
            setProduct(sorteddata);

            }    

    const handleSort=(event)=>{
        const value=event.target.value;
        if (value == "low_high"){
            ascendingSort();
        }
        if(value == "high_low"){
            descendingSort();
        }
    }

    
return(
    <>
    <div style={{display:'flex', alignItems:"center", marginBottom:'1rem'}}>


    
    <select onChange={handleSort}>
        <option value="">Sort by Price</option>
        <option value="low_high">Low to High</option>
        <option value="high_low">High to Low</option>
    </select>
    </div>

   
    <div className="product_list" >
        {
            Product.map(foot =>{
                return(
                    <div className="product_box" key={foot.id}>

                        <img src={foot.imageUrl} loading="lazy" className="product_image"></img>

                        <section>
                        <div className="product_name">
                       { foot.brand == "different" ? <p>Unique </p>: <p>{foot.brand} </p>}
                        <p>{foot.name}</p>
                        </div>

                        <p className="product_price">&#x20B9;{foot.price}</p>
                        <button class="ripple-button"><span class="cart-icon">🛒</span></button>
                        </section>
                    </div>
                )
            })
        }
    </div>
    </>
)
}

export default Products

    {/* <FaFilter className="filter_icon" onClick={filerfunction}/> */}
     {/* { filterclick &&  <Filter onApplyFilter={applyFilter}/>} */}
// const filerfunction =()=>{
    //     setFilterClick(!filterclick);
    // }

    {
        /* const applyFilter = (selectedColors) => {
    //     if (selectedColors.length > 0) {
    //         const filteredData = Productdata.filter((item) =>
    //             selectedColors.includes(item.color.toLowerCase())
    //         );
    //         setFilteredProduct(filteredData);
    //     } else {
    //         setFilteredProduct(Productdata); 
    //     }
    // };*/}
