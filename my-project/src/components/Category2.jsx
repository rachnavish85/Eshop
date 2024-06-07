import React from 'react'
import Button from "./shared/Button"
import Image1 from "../assets/gaming.png";
import Image2 from "../assets/vr.png";
import Image3 from "../assets/speaker.png";
function Category() {
    return (
        <div className='py-8'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-4 gap-8 '>


                    {/*first*/}

                    <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90
                    to-gray/100 text-white rounded-3xl relative h-[320px]
                    flex items-end  '>
                        <div>
                            <div className=' mb-4'>
                                <p className='text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>CONSOLE</p>

                                <Button
                                    text="Browse"
                                    bgColor="bg-white"
                                    textColor="text-primary"
                                />
                            </div>
                        </div>
                        <img src={Image1} className='w-[300px] absolute top-1/2 -translate-y-1/2 -right-0
                        bottom-0 ' />
                    </div>

                    {/*second col */}

                    <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/90
                    to-brandGreen/70 text-white rounded-3xl relative h-[320px]
                    flex items-start  '>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-white'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Oculus</p>

                                <Button
                                    text="Browse"
                                    bgColor="bg-white"
                                    textColor="text-brandBlue"
                                />
                            </div>
                        </div>
                        <img src={Image2} className='w-[250px] absolute 
                        bottom-0 ' />
                    </div>
                    {/*third col */}

                    <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue
                    to-brandBlue/90 text-white rounded-3xl relative h-[320px]
                    flex items-start  '>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Speakers</p>

                                <Button
                                    text="Browse"
                                    bgColor="bg-white"
                                    textColor="text-brandBlue"
                                />
                            </div>
                        </div>
                        <img src={Image3} className='w-[200px] absolute bottom-0 right-0
 ' />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Category
