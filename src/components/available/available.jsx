import React from 'react';

const Available = ({ players, choosePlayer }) => {
    return (
        <div>
            <h1 className='text-xl font-bold my-5'>Available Players</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {players.map(player => (
                    <div key={player.playerId} className="bg-white rounded-lg border-2 border-gray-300 p-4">
                        <img src={player.image} alt={player.name} className="w-full h-48 object-cover rounded-lg" />
                        <h2 className="text-sm text-xl font-bold mt-2">{player.name}</h2>
                        <hr />
                        <div className="flex my-5">
                            <p className="flex-1 text-left text-sm text-black font-bold">{player.country}</p>
                            <button 
                                className="text-sm bg-gray-200 rounded-lg p-1" 
                                onClick={() => choosePlayer(player.biddingPrice, player)}>
                                Choose Player
                            </button>
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-gray-600 m-2 font-bold">Batting Type: {player.battingType}</p>
                            <p className="text-xs text-gray-600 m-2 font-bold">Bowling Type: {player.bowlingType}</p>
                            <p className="flex-1 text-xs text-black leading-3 m-2 font-bold">Bidding Price: ${player.biddingPrice.toLocaleString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Available;
