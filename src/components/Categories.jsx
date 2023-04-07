import React, { useEffect, useState } from 'react';
import CategoryProducts from './CategoryProducts';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [linkText, setLinkText] = useState("jewelery");
    const text = linkText.toLocaleLowerCase();

    useEffect(() => {
        AOS.init();
      }, [])
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(data => {
            setCategories(data)
        })
    }, [])


    
    return (
        <div className='pt-10'>
            <h1 className='text-center font-semibold text-4xl text-white my-5' data-aos="fade-down" data-aos-duration="1000">Featured Categories</h1>
            <ul className='flex items-center justify-center mb-4 gap-7' data-aos="fade-up" data-aos-duration="1000">
                {
                    categories.map(category => {
                        return <div>
                            <li className={` btn btn-primary cursor-pointer hover:btn-primary hover:btn`} onClick={(e)=>setLinkText(e.target.innerText)}>{category}</li>
                        </div>
                    })
                }
            </ul>
                <CategoryProducts name={text}></CategoryProducts>
        </div>
    );
};

export default Categories;