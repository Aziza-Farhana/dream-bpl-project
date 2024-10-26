import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Available from './components/available/available';
import Selected from './components/select/select';
import Footer from "./components/footer/footer";

// Full players data
const players = [
    {
        playerId: 1,
        name: "Sachin Tendulkar",
        country: "India",
        image: "./players/sachin.jpg",
        role: "Batsman",
        battingType: "Right-hand bat",
        bowlingType: "Right-arm medium",
        biddingPrice: 500000
    },
    {
        playerId: 2,
        name: "Shakib Al Hasan",
        country: "Bangladesh",
        image: "./players/images.jpg",
        role: "All-rounder",
        battingType: "Left-hand bat",
        bowlingType: "Slow left-arm orthodox",
        biddingPrice: 450000
    },
    {
        playerId: 3,
        name: "AB de Villiers",
        country: "South Africa",
        image: "./players/4454.jpg",
        role: "Batsman/Wicketkeeper",
        battingType: "Right-hand bat",
        bowlingType: "Right-arm medium",
        biddingPrice: 600000
    },
    {
        playerId: 4,
        name: "Kumar Sangakkara",
        country: "Sri Lanka",
        image: "./players/9.jpg",
        role: "Batsman/Wicketkeeper",
        battingType: "Left-hand bat",
        bowlingType: "Right-arm medium",
        biddingPrice: 550000
    },
    {
        playerId: 5,
        name: "Ricky Ponting",
        country: "Australia",
        image: "./players/Ricky Ponting.jpg",
        role: "Batsman",
        battingType: "Right-hand bat",
        bowlingType: "Right-arm medium",
        biddingPrice: 700000
    },
    {
        playerId: 6,
        name: "Jacques Kallis",
        country: "South Africa",
        image: "./players/Jacques Kallis.jpg",
        role: "All-rounder",
        battingType: "Right-hand bat",
        bowlingType: "Right-arm fast-medium",
        biddingPrice: 800000
    },
    {
        playerId: 7,
        name: "Mushfiqur Rahim",
        country: "Bangladesh",
        image: "./players/Mushfiqur Rahim.jpg",
        role: "Batsman/Wicketkeeper",
        battingType: "Right-hand bat",
        bowlingType: "Right-arm medium",
        biddingPrice: 300000
    },
    {
        playerId: 8,
        name: "Lasith Malinga",
        country: "Sri Lanka",
        image: "./players/Lasith Malinga.jpg",
        role: "Bowler",
        battingType: "Right-hand bat",
        bowlingType: "Right-arm fast",
        biddingPrice: 350000
    },
    {
        playerId: 9,
        name: "Glenn McGrath",
        country: "Australia",
        image: "./players/glenn.jpg",
        role: "Bowler",
        battingType: "Right-hand bat",
        bowlingType: "Right-arm fast",
        biddingPrice: 400000
    },
    {
        playerId: 10,
        name: "Virat Kohli",
        country: "India",
        image: "./players/virat kohli.jpeg",
        role: "Batsman",
        battingType: "Right-hand bat",
        bowlingType: "Right-arm medium",
        biddingPrice: 750000
    },
    {
        playerId: 11,
        name: "Shahid Afridi",
        country: "Pakistan",
        image: "./players/shahid-afridi.jpg",
        role: "All-rounder",
        battingType: "Right-hand bat",
        bowlingType: "Right-arm leg spin",
        biddingPrice: 420000
    },
    {
        playerId: 12,
        name: "AB de Villiers",
        country: "South Africa",
        image: "./players/4454.jpg",
        role: "Batsman",
        battingType: "Right-hand bat",
        bowlingType: "Right-arm medium",
        biddingPrice: 600000
    },
    {
        playerId: 13,
        name: "Tamim Iqbal",
        country: "Bangladesh",
        image: "./players/Tamim-iqbal.jpeg",
        role: "Batsman",
        battingType: "Left-hand bat",
        bowlingType: "N/A",
        biddingPrice: 350000
    },
    {
        playerId: 14,
        name: "Steven Smith",
        country: "Australia",
        image: "./players/steven.jpg",
        role: "Batsman",
        battingType: "Right-hand bat",
        bowlingType: "N/A",
        biddingPrice: 800000
    },
    {
        playerId: 15,
        name: "Dinesh Chandimal",
        country: "Sri Lanka",
        image: "./players/Dinesh Chandimal.jpg",
        role: "Batsman/Wicketkeeper",
        battingType: "Right-hand bat",
        bowlingType: "Right-arm medium",
        biddingPrice: 300000
    }
];

function App() {
    const [coins, setCoins] = useState(1000000); // Initial coins
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [view, setView] = useState("available"); // State to track current view

    const choosePlayer = (biddingPrice, player) => {
        if (coins >= biddingPrice) {
            setCoins(prevCoins => prevCoins - biddingPrice);
            setSelectedPlayers(prevSelected => [...prevSelected, player]);
            alert(`Player chosen! ${biddingPrice} coins deducted.`);
        } else {
            alert('Not enough coins to choose this player.');
        }
    };

    // Filter available players by removing selected players
    const availablePlayers = players.filter(player => 
        !selectedPlayers.includes(player)
    );

    return (
        <>
            <Header coins={coins} />
            <div className="flex justify-center my-5">
                <button
                    className={`mx-2 p-2 rounded ${view === "available" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    onClick={() => setView("available")}
                >
                    Available
                </button>
                <button
                    className={`mx-2 p-2 rounded ${view === "selected" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    onClick={() => setView("selected")}
                >
                    Selected
                </button>
            </div>
            {view === "available" && <Available players={availablePlayers} choosePlayer={choosePlayer} />}
            {view === "selected" && <Selected selectedPlayers={selectedPlayers} />}
            <Footer />
        </>
    );
}

export default App;
