import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../../static/images/banner.jpg'
import { useSelector } from 'react-redux'

function BlogSection() {

    const { home } = useSelector(state => state.general)

    return (
        <>
            {home?.isBlog === "true" && (
                <div className='my-10 lg:max-w-screen-xl lg:mx-auto'>
                    <div className='space-y-5'>
                        <div className='space-y-3 p-5 bg-trans shadow-sm lg:rounded-2xl py-14'>
                            <div className='flex justify-between items-center'>
                                <div className='text-darktext text-3xl font-medium cursor-default'>
                                    Blog
                                </div>
                                <Link to='/blog'>
                                    <div className='px-7 mr-2 hover:bg-soft hover:text-blue hover:border-blue hover:border bg-blue text-light shadow-sm py-2 rounded-md cursor-pointer'>View</div>
                                </Link>
                            </div>
                            <div className=' gap-5 md:grid-cols-2 md:grid lg:grid-cols-3'>

                                {home?.blog?.map((item) => (
                                    <div className=' mt-2 bg-light p-3 rounded-3xl cursor-pointer'key={item?._id}>
                                        <div className=' relative'>
                                            <div className='overflow-hidden rounded-t-3xl rounded-b-md'>
                                                <img className='hover:scale-110 object-cover  h-[14em] lg:[14em] w-full transition-all duration-500 cursor-pointer' src={process.env.REACT_APP_SERVER_URL + item.img} alt={item?.title} />
                                            </div>
                                            <div className='px-3 space-y-3 pb-5 pt-3 text-darktext'>
                                                <div className='font-semibold'>{item?.title}</div>
                                                <i className='text-bluetrans font-light text-sm '>{item?.createdAt?.slice(0,10)}</i>
                                                <div className='text-sm text-text leading-relaxed line-clamp-6'>
                                                    {item?.body}
                                                </div>
                                                <div className='flex justify-end'>
                                                    <button className='py-1 px-2 bg-lightblue hover:bg-blue rounded-md text-light text-sm '>Read more</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default BlogSection