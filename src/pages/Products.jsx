import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
            setProducts(data)
        })
    }, [])
    return (
        <div className='my-10'>
            <h1 className='font-semibold text-2xl mb-4 text-white text-left'>All Products: <strong>{products.length}</strong></h1>
            <div className='grid grid-cols-4 gap-6 mt-8'>
            {
            products.map(product => {
                return <div className='h-[350px] cursor-pointer hover:scale-105 transition-transform flex justify-between flex-col gap-1 bg-white overflow-hidden object-center p-4 rounded-md'>
                    <img className='h-[200px] object-contain' src={product.image} alt="" />
                    <div className='text-left'>
                    <h1 className=' text-base text-black'>{product.title}</h1>
                    <p className='text-black font-bold mt-1'>${product.price}</p>
                    </div>
                </div>
            })
        }
            </div>
        </div>
    );
};

export default Products;