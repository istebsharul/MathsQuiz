import React from 'react';
import { useNavigate } from 'react-router-dom';
import Topic from '../components/Topics';
import Navbar from './navbarpage';



const TopicsPage = () => {
    const topics = [
        { name: 'Topic 1', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCDOYMg9uA-VR2LrQb9kJWeuwOu1r7NcJGa17fF7X6rVmeiIIpxgfOG44vETlMwhcWrIM&usqp=CAU' },
        { name: 'Topic 2', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgC5VY6Ua5zEAOJXOuKNKms2_IJaWkjOz-vSK2Zljh0IEcBP2rjI7rhuqvPlU-Pm4wzF8&usqp=CAU' },
        // Add more topics as needed
    ];

    const navigate = useNavigate();

    const handleTopicClick = () => {
        navigate('/quiz');
    }


    return (
        <>
            <Navbar />
            <div className="topics-page">
                <h1 className="quiztitle">Topics Page</h1>
                <div className="topics-grid">
                    {topics.map((topic, index) => (
                        <div onClick={handleTopicClick}>
                            <Topic key={index} name={topic.name} imageUrl={topic.imageUrl} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TopicsPage;
