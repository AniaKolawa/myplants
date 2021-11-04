import React, {useEffect, useState} from 'react';
import {db} from "../firebase";

const PlantsList = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        db.collection("plants")
            .get()
            .then((querySnapshot) => {

                console.log(querySnapshot, "XXXXXX")
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
        <div>
            <h2>Moje rośliny</h2>
            {plants.map((el) => {
                return (
                    <ul>
                        <img src={el.image_url}/>
                        <p>{el.name}</p>
                    </ul>
                )
            })}
        </div>
    );
};

export default PlantsList;