import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PlantList(){
    const [plants, setPlants] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/plants`)
        .then(response => setPlants(response.data))
        .catch(error => console.error(error));
    }, []);

    const deletePlant = (id) => {
        axios.delete(`http://localhost:5000/plants/${id}`)
        .then(() => {
            setPlants(plants.filter(plant => plant.id !== id));
        })
        .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>My Plants</h1>
            <button onClick = {() => navigate('/add')}>Add Plant</button>
            <ul>
                {plants.map(plant => (
                    <li key = {plant.id}>
                        {plant.name}
                        <button onClick={() => navigate(`/edit/${plant.id}`)}>Edit</button>
                        <button onClick={() => deletePlant(plant.id)}>Delete</button>
                        </li>
                ))}
            </ul>
        </div>
    );
}

export default PlantList;