import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditPlant(){
    const { id } = useParams();
    const [plant, setPlant] = useState({ name: '', species: '', purchase_date: '', care_history: '', image_url: '' });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/plants/${id}`)
        .then(response => {
            setPlant(response.data);
            console.log(response.data);
    })
        .catch(error => console.error(error));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:5000/plants/${id}`, plant)
        .then(() => navigate('/'))
        .catch(error => console.error(error));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPlant({ ...plant, [name]: value});
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={plant.name} onChange={handleChange} placeholder="Name" />
            <input type="text" name="species" value={plant.species} onChange={handleChange} placeholder="Species" />
            <input type="date" name="purchase_date" value={plant.purchase_date} onChange={handleChange} />
            <textarea name="care_history" value={plant.care_history} onChange={handleChange} placeholder="Care History" />
            <input type="text" name="image_url" value={plant.image_url} onChange={handleChange} placeholder="Image URL" />
            <button type="submit">Update Plant</button>
        </form>
    );
}

export default EditPlant;