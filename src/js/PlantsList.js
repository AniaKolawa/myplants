import React, {useEffect, useState} from 'react';
import {db} from "../firebase";
import {Link} from "react-router-dom";

const PlantsList = () => {
    const [plants, setPlants] = useState([]);



    useEffect(() => {
        db.collection("plants")
            .get()
            .then((querySnapshot) => {


                querySnapshot.forEach((doc) => {
                    setPlants((state) => [
                        ...state,
                            {
                                ...doc.data(),
                                id: doc.id,

                            },
                    ]);
                });
            });
    },[]);

    return (

        <div className="container">
            <h2 className="title">MOJE ROŚLINY</h2>
            {plants.map((el) => {
                return (
                    <div key={el.id} className="plantsList__element">
                        <div className="plantsList__imgContainer">
                            <img className="plantsList__img" src={el.image_url}/>
                        </div>

                        <div className="plantsList__innerContainer">
                            <p className="plantsList__plantName">{el.name}</p>
                            <div className="plantsList__buttonsContainer">
                                <Link to={`/myplants/${el.id}`} className="plantsList__btn">Szczegóły</Link>
                                <Link to={`/myplants/edit/${el.id}`} className="plantsList__btn">Edytuj</Link>
                            </div>

                        </div>

                    </div>
                )
            })}
        </div>
    );
};

export default PlantsList;