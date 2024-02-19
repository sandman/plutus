import React from 'react';
import NavLink from '../NavLink';
import { faBank, faChartPie, faCreditCard, faHome } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '@auth0/nextjs-auth0/client';

function Header() {
    const { user } = useUser();
    return (
        <header className='z-40 flex h-16 w-full items-center justify-between'>
            <div className='navbar bg-base-100 p-0' >
                <div className='navbar-start h-16'>
                    <div className='dropdown'>
                        <label tabIndex={0} className='btn btn-ghost lg-hidden'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                className='w-5 h-5'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h8m-8 6h16' />
                            </svg>
                        </label>
                        <ul tabIndex={0} className='menu menu-compact mt-3 w-52 p-2 dropdown-content bg-base-100'>
                            <li>
                                <NavLink name="Overview" href="/" icon={faHome} bottomBorder={false} />
                            </li>
                            <li>
                                <NavLink name="Transactions" href="/transactions" icon={faBank} bottomBorder={false} />
                            </li>
                            <li>
                                <NavLink name="Bank Accounts" href="/bank-accounts" icon={faCreditCard} bottomBorder={false} />
                            </li>
                            <li>
                                <NavLink name="Categories" href="/categories" icon={faChartPie} bottomBorder={false} />
                            </li>
                        </ul>
                    </div>
                    <span className='pl-5 text-xl font-semibold normal-case'>Finance Dashboard</span>
                </div>
                <div className='navbar-center items-center hidden h-16 lg:flex'>
                    <ul className='menu menu-horizontal h-full p-0'>
                        <li>
                            <NavLink name="Overview" href="/" icon={faHome} />
                        </li>
                        <li>
                            <NavLink name="Transactions" href="/transactions" icon={faBank} />
                        </li>
                        <li>
                            <NavLink name="Bank Accounts" href="/bank-accounts" icon={faCreditCard}/>
                        </li>
                        <li>
                            <NavLink name="Categories" href="/categories" icon={faChartPie} />
                        </li>
                    </ul>
                </div>
                <div className='navbar-end h-16'>
                    <div className='dropdown dropdown-end'>
                        <label tabIndex={0} className='btn btn-circle avatar btn-ghost'>
                            <div className='w-10 rounded-full'>
                                { user?.picture && (
                                    <div className=''>
                                        <picture>
                                            <source srcSet={user.picture} type='image/webp' />
                                            <img src={user.picture} alt={user.name} className='mx-auto rounded-full w-10 h-10' />
                                        </picture>
                                    </div>
                                )}
                            </div>
                        </label>
                        <ul tabIndex={0} className='menu menu-compact mt-3 w-52 p-2 dropdown-content bg-base-100'>
                            <li>
                                <a href='/api/auth/logout' className='!text-left'>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;