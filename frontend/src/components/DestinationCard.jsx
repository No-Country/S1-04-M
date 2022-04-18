import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postDestinationCard } from '../actions/Actions';

export const DestinationCard = () => {

    const {user} = useSelector(state => state.data);
    const{internal} = useSelector(state => state.card);
    console.log(internal);
     const dispatch = useDispatch();
     const navigate = useNavigate();

const [userDestination, setUserDestination] = useState({
    user_id: user,
    card_number: "",
    destination_name: "",
    internal: internal,
alias: "",    
});

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postDestinationCard(userDestination))
        navigate("/newtransaction");
    };

    const handleInputChange = (e) => {
        e.preventDefault();
        setUserDestination({
            ...userDestination,
            [e.target.name]: e.target.value,
        });
    };


    return (
        <div>
            <h1>Agregar Cuenta</h1>

            <form onSubmit={handleSubmit} className="form-transactions">
                <label> 
                    <span className="label">Numero de tarjeta</span>
                    <input
                        className="input"
                        type="tel"
                        placeholder="Numero de tarjeta"
                       maxLength={16}
                        min="0"
                        name="card_number"
                        value={userDestination.card_number}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    <span className="label">Nombre del beneficiario</span>
                    <input
                        className="input"
                        type="text"
                        name="destination_name"
                        value={userDestination.destination_name}
                        onChange={handleInputChange}
                    />
                    <label className="label"> Alias del contacto </label>
                    <input
                        className="input"
                        type="text"
                        name="alias"
                        value={userDestination.alias}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit" className="button button-blue">Agregar</button>
                <button onClick="/newTransaction" className="button button-blue">Cancelar</button>
                </form>
                
            </div>
    );
}