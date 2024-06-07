import React from 'react'
import Heading from "./Heading"
import ProductCard from './ProductCard'

{/*images import  */}

import Img1 from "../assets/p-1.jpg"
import Img2 from "../assets/p-2.jpg"
import Img3 from "../assets/p-3.jpg"
import Img4 from "../assets/p-4.jpg"
import Img5 from "../assets/p-5.jpg"
import Img6 from "../assets/p-7.jpg"
import Img7 from "../assets/p-9.jpg"
import Img8 from "../assets/headphone.png"

const ProductsData= [
    {
      id: 1,
      img: Img1,
      title: "Boat Headphone",
      price: "120",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Rocky Mountain",
      price: "420",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Googles",
      price: "320",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img4,
      title: "printend",
      price: "220",
      aosDelay: "600",
    },
    
    {
      id: 5,
      img: Img5,
      title: "printend",
      price: "220",
      aosDelay: "600",
    },
    {
      id: 6,
      img: Img6,
      title: "printend",
      price: "220",
      aosDelay: "600",
    },
    {
      id: 7,
      img: Img7,
      title: "printend",
      price: "220",
      aosDelay: "600",
    },
    {
      id: 8,
      img: Img8,
      title: "printend",
      price: "220",
      aosDelay: "600",
    },
    
]
function Products() {
  return (
    <div>
      <div className='container'>
      {/*header section */}

      <Heading title = "Our Products"
      subtitle = {"Explore Our Products"} />
      {/*body section */}
    <ProductCard data = {ProductsData} />
      </div>
    </div>
  )
}

export default Products
