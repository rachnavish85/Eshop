import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category from './components/Category'
import Category2 from './components/Category2'
import Service from './components/Service'
import Banner from './components/Banner'
import headphone from "./assets/headphone.png"
import Products from './components/Products'
import Banner1 from './components/Banner1'
import smartwatch2 from './assets/smartwatch2.png'
import Blogs from './components/Blogs'
import Partners from './components/Partners'
import Footer from './components/Footer'
const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  data: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "heelo its about our websiste amdn ddajva",
  bgColor: "#f42c37",
}

const BannerData1 = {
  discount: "30% OFF",
  title: "Happy Hours",
  data: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "heelo its about our websiste amdn ddajva",
  bgColor: "#2dcc6f",
}


function App() {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Service />
      <Banner data={BannerData} />
      <Products />
      <Banner1 data={BannerData1} />
      <Blogs />
      <Partners/>
      <Footer/>
    </div>
  )
}

export default App
