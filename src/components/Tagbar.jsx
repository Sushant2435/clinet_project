import React from 'react';

const Tagbar = ({ filterItem, NavList }) => {
    return (
        <div className="flex justify-around mt-20 lg:w-1/3 xl:w-1/3 sm:w-1/2 w-1/2 m-auto font-semibold shadow-sm">
            {NavList.map((item, index) => (
                <button key={item} onClick={() => filterItem(item)} className={`py-2 flex-1 text-center uppercase bg-gray-50 hover:bg-blue-500 active:bg-blue-500 focus:bg-blue-500 
                        ${index === 0 ? 'border-l border-t rounded-tl-lg rounded-bl-lg border-b' : ''}
                        ${index === NavList.length - 1 ? 'border-r border-t rounded-tr-lg rounded-br-lg border-b' : ''}
                        ${index !== 0 && index !== NavList.length - 1 ? 'border' : ''}`}
                >
                    {item}
                </button>
            ))
            }
        </div >
    );
};

export default Tagbar;
