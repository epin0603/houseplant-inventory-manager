import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddPlant(){
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [purchaseDate, setPurchaseDate] = useState('');
    const [careHistory, setCareHistory] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/plants', {
            name,
            species,
            purchase_date: purchaseDate,
            care_history: careHistory,
            image_url: imageUrl
        })
        .then(response => {
            console.log(response.data);
            navigate('/');
        })
        .catch(error => console.error(error));
    };

    return (
        <form onSubmit = {handleSubmit}>
            <input type = "text" value = {name} onChange = {(e) => setName(e.target.value)} placeholder = 'Name' />
            <input type = "text" value = {species} onChange = {(e) => setSpecies(e.target.value)} placeholder = 'Species' />
            <input type = "date" value = {purchaseDate} onChange = {(e) => setPurchaseDate(e.target.value)} />
            <textarea value={careHistory} onChange={(e) => setCareHistory(e.target.value)} placeholder='Care History' />
            <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder='Image URL' />
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddPlant;