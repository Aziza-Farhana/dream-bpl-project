import React from "react";

const Header = ({ coins, setCoins }) => {
    const claimFreeCredit = () => {
        // console.log(coins);
        setCoins(prevCoins => prevCoins + 600000); 
    };

    return (
        <div>  
            <div className="flex flex-rows mt-5">
                <img className="lg:mr-80" src="./assets/logo.png" alt="" />
                <ul className="flex text-sm text-gray-500 text-center m-3">
                    <li className="mx-5">Home</li>
                    <li className="mx-5">Features</li>
                    <li className="mx-5">Teams</li>
                    <li className="mx-5">Schedules</li>
                </ul>
                <button className="lg:ml-40 border-2 px-5 rounded-lg font-bold " >{coins} coin</button>
            </div>
            <div className="bg-black rounded-lg my-10 flex justify-center items-center">
                <img className="rounded-lg obj-cover" src="./assets/bg-shadow.png" alt="" />
                <img className="absolute mb-40" src="./assets/banner-main.png" alt="" />
                <h1 className="absolute mt-20 text-white text-xl md:text-2xl lg:text-3xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h3 className="absolute mt-40 mb-5 text-gray-300 md:text-xl lg:text-xl">Beyond Boundaries, Beyond Limits</h3>
                <button className="absolute rounded-lg border-2 border-green-500 px-3 py-3 mt-60" onClick={claimFreeCredit}>
                    <span className="bg-green-500 rounded-lg px-3 py-2 font-bold">Claim Free Credit</span>
                </button>
            </div>      
        </div>
    );
};

export default Header;
