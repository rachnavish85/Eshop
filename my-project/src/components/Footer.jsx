import React from 'react'
const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "Home",
        link: "/#about",
    },
    {
        title: "Home",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
]

const Footer = () => {
    return (
        <div className='dark:bg-gray-950'>
            <div className='container'>
                <div className='grid md:grid-cols-3 pb-20 pt-5'>

                    {/*company details */}

                    <div className='py-8 px-4'>
                        <a
                            href='#'
                            className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
                        >Eshop</a>
                        <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                            Lorem ipsum dolor its amet and costunmers and hii world and another word text next
                        </p>
                        <p className='text-gray-500 mt-4 '>Made with by The Rachna</p>

                        <a
                            href='#'
                            target='_blank'
                            className='inline-block bg-primary/90 text-white
     py-2 px-4 mt-4 text-sm rounded-full'>
                            Visit our YouTube Channel</a>
                    </div>

                    {/*footer links */}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-semibold sm:text-left mb-3'>Important Links</h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((data, index) => (
                                    <li key={index} >
                                        <a href={data.link}
                                            className='text-gray-600 dark:text-gray-600 hover:dark:text-white hover:text-black duration-300'>
                                            {data.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-semibold sm:text-left mb-3'>Quick Links</h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((data, index) => (
                                    <li key={index} >
                                        <a href={data.link}
                                            className='text-gray-600 dark:text-gray-600 hover:dark:text-white hover:text-black duration-300'>
                                            {data.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/*company address */}

                    <div className='py-8 px-4 col-span-2 sm:col-auto' >
                        <div>
                            <div className='flex items-center gap-3'>
                                <p>Lucknow, Uttar Pradesh</p>
                                <p>India</p>
                                <p>+91 9369986157</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer
