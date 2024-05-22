import React from 'react';
import 'tailwindcss/tailwind.css';

function Sorting({hotel,setHotels}) {
    function handleHighToLow() {
        const sortedHotels = [...hotel];
        sortedHotels.sort((a, b) => {
            const maxPriceA = Math.min(...a.rooms.map((room) => room.price));
            const maxPriceB = Math.min(...b.rooms.map((room) => room.price));
            return maxPriceA - maxPriceB;
        });
        setHotels(sortedHotels);
    }
    function handleLowToHigh() {
        const sortedHotels = [...hotel];
        sortedHotels.sort((a, b) => {
            const maxPriceA = Math.max(...a.rooms.map((room) => room.price));
            const maxPriceB = Math.max(...b.rooms.map((room) => room.price));
            return maxPriceB - maxPriceA;
        });
        setHotels(sortedHotels);
    }
    function handleRatingLowToHigh() {
        const sortedHotels = [...hotel];
        sortedHotels.sort((a, b) => a.rating - b.rating);
        setHotels(sortedHotels);
    }
    function handleRatingHighToLow() {
        const sortedHotels = [...hotel];
        sortedHotels.sort((a, b) => b.rating - a.rating);
        setHotels(sortedHotels);
    }
    return (
        <div className="mt-4 flex items-center">
            <h1 className="mr-4"><b>Sort by:</b></h1>
            <div className="flex items-center space-x-2">

                <button
                    className="bg-transparent border border-blue-500 text-blue-500 hover:border-blue-700 hover:text-blue-700 py-2 px-4 rounded-full"
                onClick={handleLowToHigh}>
                    Price (handleLowToHigh)
                </button>
                <button
                    className="bg-transparent border border-blue-500 text-blue-500 hover:border-blue-700 hover:text-blue-700 py-2 px-4 rounded-full"
                onClick={handleHighToLow}>
                    Price (High to Low)
                </button>
                <button
                    className="bg-transparent border border-blue-500 text-blue-500 hover:border-blue-700 hover:text-blue-700 py-2 px-4 rounded-full"
                onClick={handleRatingHighToLow}>
                    Customer Ratings (High to Low)
                </button>
                <button
                    className="bg-transparent border border-blue-500 text-blue-500 hover:border-blue-700 hover:text-blue-700 py-2 px-4 rounded-full"
                onClick={handleRatingLowToHigh}>
                    Customer Ratings (Low to High)
                </button>
            </div>
        </div>
    );
}
export default Sorting;