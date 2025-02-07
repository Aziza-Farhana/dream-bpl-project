import React from 'react';
import './App.css'; // Ensure you import your Tailwind styles

const players = [
    {
        "playerId": 1,
        "name": "Sachin Tendulkar",
        "country": "India",
        "image": "./players/sachin.jpg",
        "role": "Batsman",
        "battingType": "Right-hand bat",
        "bowlingType": "Right-arm medium",
        "biddingPrice": 500000
    },
    {
        "playerId": 2,
        "name": "Shakib Al Hasan",
        "country": "Bangladesh",
        "image": "./players/images.jpg",
        "role": "All-rounder",
        "battingType": "Left-hand bat",
        "bowlingType": "Slow left-arm orthodox",
        "biddingPrice": 450000
    },
    {
        "playerId": 3,
        "name": "AB de Villiers",
        "country": "South Africa",
        "image": "./players/4454.jpg",
        "role": "Batsman/Wicketkeeper",
        "battingType": "Right-hand bat",
        "bowlingType": "Right-arm medium",
        "biddingPrice": 600000
    },
    {
        "playerId": 4,
        "name": "Kumar Sangakkara",
        "country": "Sri Lanka",
        "image": "./players/9.jpg",
        "role": "Batsman/Wicketkeeper",
        "battingType": "Left-hand bat",
        "bowlingType": "Right-arm medium",
        "biddingPrice": 550000
    },
    {
        "playerId": 5,
        "name": "Ricky Ponting",
        "country": "Australia",
        "image": "./players/Ricky Pointing.jpg",
        "role": "Batsman",
        "battingType": "Right-hand bat",
        "bowlingType": "Right-arm medium",
        "biddingPrice": 700000
    },
    {
        "playerId": 6,
        "name": "Jacques Kallis",
        "country": "South Africa",
        "image": "./players/Jacques Kallis.jpg",
        "role": "All-rounder",
        "battingType": "Right-hand bat",
        "bowlingType": "Right-arm fast-medium",
        "biddingPrice": 800000
    },
    {
        "playerId": 7,
        "name": "Mushfiqur Rahim",
        "country": "Bangladesh",
        "image": "./players/Mushfiqur.jpg",
        "role": "Batsman/Wicketkeeper",
        "battingType": "Right-hand bat",
        "bowlingType": "Right-arm medium",
        "biddingPrice": 300000
    },
    {
        "playerId": 8,
        "name": "Lasith Malinga",
        "country": "Sri Lanka",
        "image": "./players/Lasith Malinga.jpg",
        "role": "Bowler",
        "battingType": "Right-hand bat",
        "bowlingType": "Right-arm fast",
        "biddingPrice": 350000
    },
    {
        "playerId": 9,
        "name": "Glenn McGrath",
        "country": "Australia",
        "image": "./players/glenn.jpg",
        "role": "Bowler",
        "battingType": "Right-hand bat",
        "bowlingType": "Right-arm fast",
        "biddingPrice": 400000
    },
    {
        "playerId": 10,
        "name": "Virat Kohli",
        "country": "India",
        "image": "./players/virat kohli.jpg",
        "role": "Batsman",
        "battingType": "Right-hand bat",
        "bowlingType": "Right-arm medium",
        "biddingPrice": 750000
    },
    {
        "playerId": 11,
        "name": "Shahid Afridi",
        "country": "Pakistan",
        "image":  "./players/shahid-afridi.jpg",
        "role": "All-rounder",
        "battingType": "Right-hand bat",
        "bowlingType": "Right-arm leg spin",
        "biddingPrice": 420000
    },
    {
        "playerId": 12,
        "name": "AB de Villiers",
        "country": "South Africa",
        "image": "./players/4454.jpg",
        "role": "Batsman",
        "battingType": "Right-hand bat",
        "bowlingType": "Right-arm medium",
        "biddingPrice": 600000
    },
    {
        "playerId": 13,
        "name": "Tamim Iqbal",
        "country": "Bangladesh",
        "image": "./players/Tamim-iqbal.jpeg",
        "role": "Batsman",
        "battingType": "Left-hand bat",
        "bowlingType": "N/A",
        "biddingPrice": 350000
    },
    {
        "playerId": 14,
        "name": "Steven Smith",
        "country": "Australia",
        "image": "./players/steven.jpg",
        "role": "Batsman",
        "battingType": "Right-hand bat",
        "bowlingType": "N/A",
        "biddingPrice": 800000
    },
    {
        "playerId": 15,
        "name": "Dinesh Chandimal",
        "country": "Sri Lanka",
        "image": "./players/Dinesh Chandimal.jpg",
        "role": "Batsman/Wicketkeeper",
        "battingType": "Right-hand bat",
        "bowlingType": "Right-arm medium",
        "biddingPrice": 300000
    }
]

function Players () {
    return (
        <div className="bg-gray-100 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {players.map(player => (
                    <div key={player.playerId} className="bg-white rounded-lg shadow-lg p-4">
                        <img src={player.image} alt={player.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <h2 className="text-xl font-bold mt-2">{player.name}</h2>
                        <p className="text-gray-600">Country: {player.country}</p>
                        <p className="text-gray-600">Role: {player.role}</p>
                        <p className="text-gray-600">Batting Type: {player.battingType}</p>
                        <p className="text-gray-600">Bowling Type: {player.bowlingType}</p>
                        <p className="text-gray-600">Bidding Price: ${player.biddingPrice.toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
