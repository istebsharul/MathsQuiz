import React, { useEffect, useState } from 'react';
import '../App.css'; // Import your CSS file
import Navbar from './navbarpage';

function RankingList() {
    const [rankings, setRankings] = useState([]);

    useEffect(() => {
        // Sample data for demonstration
        const sampleRankings = [
            { playerName: 'Player 1', score: 100 },
            { playerName: 'Player 2', score: 85 },
            { playerName: 'Player 3', score: 72 },
            { playerName: 'Player 4', score: 95 },
            { playerName: 'Player 5', score: 120 },
        ];

        setRankings(sampleRankings);
    }, []);

    return (
        <>
            <Navbar />
            <div className='ranking-container'>
                <h1 className="quiztitle">Rankings</h1>
                <ul className="ranking-list">
                    {rankings.map((ranking, index) => (
                        <li key={index} className="ranking-item">
                            <span className="player-name">{ranking.playerName}</span>
                            <span className="player-score">{ranking.score}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>

    );
}

export default RankingList;



// import React, { useEffect, useState } from 'react';

// function RankingList() {
//     const [rankings, setRankings] = useState([]);

//     useEffect(() => {
//         // Fetch rankings from the server
//         fetch('/rankings')
//             .then((response) => response.json())
//             .then((data) => setRankings(data))
//             .catch((error) => console.error('Error fetching rankings:', error));
//     }, []);

//     return (
//         <div>
//             <h1>Rankings</h1>
//             <ul>
//                 {rankings.map((ranking, index) => (
//                     <li key={index}>
//                         {ranking.playerName}: {ranking.score}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default RankingList;
