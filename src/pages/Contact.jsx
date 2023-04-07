import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className=''>
                <form className='my-10'>
                    <h1 className='text-left font-semibold text-white text-2xl mb-5'>Contact Form</h1>
                    <div className='flex items-center gap-5 justify-between'>
                        <input className='p-3 placeholder-slate-300 w-1/3' type="text" placeholder='Name' />
                        <input className='p-3 placeholder-slate-300 w-1/3' type="email" placeholder='Email' />
                        <input className='p-3 placeholder-slate-300 w-1/3' type="text" placeholder='Phone' />
                    </div>
                    <textarea className='w-full mt-6 resize-none p-3 placeholder-slate-300' name="" placeholder='Message' id="" rows="6"></textarea>
                    <button className='mt-5 px-10 btn-primary py-3 btn'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;