import React from 'react'
import Heading from './Heading'
import img1 from "../assets/blog-1.jpg"
import img2 from "../assets/blog-2.jpg"
import img3 from "../assets/blog-3.jpg"

const BlogData = [
    {
        title: "How to choose perfect smartshitch",
        subtitle: "hello how are you sirji? ",
        published: "Jan20, 2024 by disshed",
        image: img1,
    },
    {
        title: "How to choose perfect gatget",
        subtitle: "hello how are you sirji? ",
        published: "Jan20, 2024 by disshed",
        image: img2,
    },
    {
        title: "How to choos eperdect vr headset",
        subtitle: "hello how are you sirji? ",
        published: "Jan20, 2024 by disshed",
        image: img3,
    }
]
const Blogs = () => {
    return (
        <div>
            <div className='container'>

                {/*header section */}

                <Heading title="Recent News" subtitle={"Exploure our blogs"}
                />

                {/*blog section */}

                <div className='grid grid-cols-1 sm:grid-cols2 
        md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 *:md:gap-7'>

                    {/*blog card */}

                    {BlogData.map((data) => (
                        <div key={data.title} className='bg-white dark:bg-gray-900'>

                            {/*image section */}

                            <div className='overflow-hidden rounded-2xl mb-2'>
                                <img
                                    src={data.image}
                                    className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'
                                />
                            </div>

                            {/*content section */}

                            <div className='space-y-2'>
                                <p className='text-xs text-gray-500 '>{data.published}</p>
                                <p className='font-bold line-clamp-1 '>{data.title}</p>
                                <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </div>
    )
}

export default Blogs
