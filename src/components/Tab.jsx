import React from 'react'

export default function Tab() {
    return (
        <div className="flex justify-between items-center my-5 px-6">
            <a href="/esg" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Sustainability Score</a>
            <a href="/reviews"  className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Reviews</a>
            <a href="/related" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"> Related Products </a>
            <a href="/accessories" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"> Accessories</a>
    </div>
    )
}