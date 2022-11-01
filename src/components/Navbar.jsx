import React from 'react'

const Navbar = () => {

    return (
        <header className="fixed-nav navbar bg-white">
            <nav className="relative z-50 h-20 select-none bg-white" x-data="{ showMenu: false }">
                <div className="fixed flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">

                    <div class="flex items-center justify-start w-1/4 h-full pr-4 bg-white">
                        <a href="#_" className="inline-block py-4 md:py-0">
                            <span className="p-1 text-xl font-black leading-none text-gray-900">Circular Chain.</span>
                        </a>
                    </div>

                    <div className="fixed top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-white md:p-10 md:relative md:flex">
                        <div className="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                            <ul className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-4 md:w-2/3 md:mt-0 md:flex-row md:items-center">




                            </ul>

                            <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
                                <a href="/circular" className="w-full px inline-flex items-center px-6 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600">Connect Wallet</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
