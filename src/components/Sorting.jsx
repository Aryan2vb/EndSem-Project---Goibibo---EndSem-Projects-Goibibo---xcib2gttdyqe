import React, { useState } from "react";
import "tailwindcss/tailwind.css";

function Sorting({ hotels, setHotels }) {
    const [original] = useState(hotels);
    function handleHighToLow() {
        const sortedhotels = [...hotels];
        sortedhotels.sort((a, b) => {
            // const maxPriceA = Math.min(...a.rooms.map((room) => room.price));
            // const maxPriceB = Math.min(...b.rooms.map((room) => room.price));
            return b.rooms[0].costDetails.baseCost - a.rooms[0].costDetails.baseCost ;
        });
        setHotels(sortedhotels);
    }
    function handleLowToHigh() {
        console.log(hotels)
        const sortedhotels = [...hotels];
        sortedhotels.sort((a, b) => {
            return a.rooms[0].costDetails.baseCost - b.rooms[0].costDetails.baseCost ;
        });
        setHotels(sortedhotels);
    }
    function handleRatingLowToHigh() {
        const sortedhotels = [...hotels];
        sortedhotels.sort((a, b) => a.rating - b.rating);
        setHotels(sortedhotels);
    }
    function handleRatingHighToLow() {
        const sortedhotels = [...hotels];
        sortedhotels.sort((a, b) => b.rating - a.rating);
        setHotels(sortedhotels);
    }
    function resetfilter(){
        // const sortedHoels = [...hotels]
        setHotels(original);

    }
    return (
        <div className="mt-4 flex items-center">
            <h1 className="mr-4">
                <b>Sort by:</b>
            </h1>
            <div className="flex items-center space-x-2">
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border border-blue-500 hover:border-transparent rounded-full"
                    onClick={handleLowToHigh}
                >
                    Price (Low to High)
                </button>
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border border-blue-500 hover:border-transparent rounded-full"
                    onClick={handleHighToLow}
                >
                    Price (High to Low)
                </button>
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border border-blue-500 hover:border-transparent rounded-full"
                    onClick={handleRatingHighToLow}
                >
                    Customer Ratings (High to Low)
                </button>
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border border-blue-500 hover:border-transparent rounded-full"
                    onClick={handleRatingLowToHigh}
                >
                    Customer Ratings (Low to High)
                </button>
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border border-blue-500 hover:border-transparent rounded-full"
                    onClick={resetfilter}
                    >
                    Reset
                </button>

            </div>
        </div>
    );
}

export default Sorting;