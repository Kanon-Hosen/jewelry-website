import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const CategoryProducts = ({name}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${name}`)
            .then(res => res.json())
            .then(data => {
            setProducts(data)
        })
    }, [name])

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className='grid md:grid-cols-3 gap-6 mt-7'>
        {
            products.map(product => {
                return <div className='h-[350px] cursor-pointer hover:scale-105 transition-transform flex justify-between flex-col gap-1 bg-white overflow-hidden object-center p-4 rounded-md' data-aos="fade-down" data-aos-duration="2000">
                    <img className='h-[200px] object-contain' src={product.image} alt="" />
                    <div className='text-left'>
                    <h1 className=' text-base text-black'>{product.title}</h1>
                    <p className='text-black font-bold mt-1'>${product.price}</p>
                    </div>
                </div>
            })
        }
    </div>
    );
};

export default CategoryProducts;