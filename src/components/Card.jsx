import React, { useState } from 'react';
import searchIcon from '../assets/Images/search.png';

const Card = ({ product }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = product.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='px-4 sm:px-8 md:px-24 lg:px-48'>
            <div className='flex flex-col items-center md:items-start'>
                <div className='relative mt-8 w-full sm:w-3/4 md:w-1/2 ml-4'>
                    <span className='absolute left-3 mt-3'>
                        <img src={searchIcon} alt="Search" className='w-5 h-5' />
                    </span>
                    <input
                        type="text"
                        className='w-full border border-gray-300 py-2 pl-10 rounded focus:outline-none focus:border-gray-500'
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className='flex flex-wrap justify-center md:justify-start w-full mt-3'>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                            <div key={item.id} className='border w-full sm:w-[320px] md:w-[360px] h-auto rounded-lg p-4 flex flex-col gap-4 m-2 shadow-lg'>
                                <div className='flex gap-4 md:gap-8'>
                                    <img src={item.icon_url} alt="product-logo" className='h-16 w-16 md:h-20 md:w-20 border-spacing-2 border-3 shadow border-gray-100' />
                                    <div className='flex flex-col gap-2 md:gap-4'>
                                        <p className='text-lg md:text-xl'>{item.title}</p>
                                        <p className='text-gray-600 text-base md:text-lg'>{item.category}</p>
                                    </div>
                                </div>
                                <a className='text-blue-400 truncate' href={item.link}>{item.link}</a>
                                <div className='text-sm md:text-base'>{item.description}</div>
                            </div>
                        ))
                    ) : (
                        <p className='text-center w-full mt-10 text-gray-500 text-lg'>No results found</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Card;
