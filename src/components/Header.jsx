import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/Images/NxtWave TM_Coloured logo 1.png';
import profile from '../assets/Images/profile.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const currenturl = useLocation();
    const currentPath = currenturl.pathname;
    const user = JSON.parse(localStorage.getItem('user'));

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.reload();
    };

    return (
        <header className='flex justify-between px-10 py-2 bg-white shadow'>
            <Link to='/'><img src={logo} alt="Logo" /></Link>
            {user ? (
                <div className='flex gap-8 items-center'>
                    {currentPath !== "/create-item" && (<Link to='/create-item' className='bg-[#2DCA73] px-4 font-semibold rounded-lg py-2'>ADD ITEM</Link>)}
                    <div className='relative' ref={dropdownRef}>
                        <img src={profile} alt="dp" className='rounded-full border cursor-pointer' onClick={toggleDropdown} />
                        {isDropdownOpen && (
                            <ul className='absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg'>
                                <li className='py-2 px-4 hover:bg-gray-100 cursor-pointer' onClick={handleLogout}>Logout</li>
                            </ul>
                        )}
                    </div>
                </div>
            ) : (
                <Link to='/login' className='py-2 font-semibold'>
                    Login
                </Link>
            )}
        </header>
    );
};

export default Header;
