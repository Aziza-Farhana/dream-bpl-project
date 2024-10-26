import React from 'react';

const Selected = ({ selectedPlayers }) => {
    return (
        <div>
            <h1 className='text-xl font-bold my-5'>Selected Players</h1>
            {selectedPlayers.length === 0 ? (
                <p>No players selected.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {selectedPlayers.map(player => (
                        <div key={player.playerId} className="bg-white rounded-lg border-2 border-gray-300 p-4">
                            <img src={player.image} alt={player.name} className="w-full h-48 object-cover rounded-lg" />
                            <h2 className="text-sm text-xl font-bold mt-2">{player.name}</h2>
                            <hr />
                            <div className="flex my-5">
                                <p className="flex-1 text-left text-sm text-black font-bold">{player.country}</p>
                                <button className="text-sm bg-gray-200 rounded-lg p-1">{player.role}</button>
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-gray-600 m-2 font-bold">Batting Type: {player.battingType}</p>
                                <p className="text-xs text-gray-600 m-2 font-bold">Bowling Type: {player.bowlingType}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Selected;
