import React from 'react';
import { Link } from "react-router-dom";


const Navbar = ({children}) => {
    return (
        <div>
            <div class="drawer">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div class="w-full navbar">

                        <h2 class="text-xl text-white bg-black font-bold px-2 mx-2">Pixel Frame</h2>
                        <div class="flex-none justify-center hidden lg:block">
                            <ul class="menu menu-horizontal">
                                {/* <!-- Navbar menu content here --> */}
                                <li>
                                    <Link className='btn btn-ghost rounded-full' to='/home'>Home</Link>
                                </li>
                                <li>
                                    <Link className='btn btn-ghost rounded-full' to='/services'>Our Services</Link>
                                </li>
                                <li>
                                    <Link className='btn btn-ghost rounded-full' to='/about'>About Us</Link>
                                </li>
                                <li>
                                    <Link className='btn btn-ghost rounded-full' to='/portfolio'>Portfolio</Link>
                                </li>
                                <li>
                                    <Link className='btn btn-ghost rounded-full' to='/contact'>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                    </div>
                    {children}
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {/* <!-- Sidebar content here --> */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;