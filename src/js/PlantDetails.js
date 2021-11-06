import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {db} from "../firebase";

const PlantDetails = () => {

    const [showPlantDetails, setShowPlantDetails] = useState({});


    const {id} = useParams()




    useEffect(() => {
        db.collection("plants").doc(`${id}`)
            .get()
            .then((doc) => {
                setShowPlantDetails({
                    ...doc.data(),
                    })
                console.log(showPlantDetails.stand)
            })
    }, [])




    return (
        <div className="container">

            <div className="showPhoto">
                <div className="showPhoto__imgContainer">
                    <img className="showPhoto__img" src={showPlantDetails.image_url}/>
                </div>

            </div>
            <div className="plantDetails">
                <h2 className="title">{showPlantDetails.name}</h2>
                {(!showPlantDetails.stand) &&
                <div className="plantDetails__element">
                    <h3 className="plantDetails__elName">Stanowisko</h3>
                    <p className="plantDetails__elData">{showPlantDetails.stand}</p>
                </div>}
                {(showPlantDetails.soil !== "") &&
                <div className="plantDetails__element">
                    <h3 className="plantDetails__elName">Podłoże</h3>
                    <p className="plantDetails__elData">{showPlantDetails.soil}</p>
                </div>}
                {(showPlantDetails.fertilization_organic) &&
                <div className="plantDetails__element">
                    <h3 className="plantDetails__elName">Nawożenie organiczne</h3>
                    <p className="plantDetails__elData">{showPlantDetails.fertilization_organic}</p>
                    {console.log(showPlantDetails.fertilization_organic)}
                </div>}
                {(showPlantDetails.fertilizer_organic !== "") &&
                <div className="plantDetails__element">
                    <h3 className="plantDetails__elName">Nawóz organiczny</h3>
                    <p className="plantDetails__elData">{showPlantDetails.fertilizer_organic}</p>
                </div>}
                {(showPlantDetails.fertilization_mineral) &&
                <div className="plantDetails__element">
                    <h3 className="plantDetails__elName">Nawożenie mineralne</h3>
                    <p className="plantDetails__elData">{showPlantDetails.fertilization_mineral}</p>
                </div>}
                {(showPlantDetails.fertilizer_mineral !== "") &&
                <div className="plantDetails__element">
                    <h3 className="plantDetails__elName">Nawóz mineralny</h3>
                    <p className="plantDetails__elData">{showPlantDetails.fertilizer_mineral}</p>
                </div>}
                {(showPlantDetails.additional_Info !== "") &&
                <div className="plantDetails__element">
                    <h3 className="plantDetails__elName">Dodatkowe informacje</h3>
                    <p className="plantDetails__elData">{showPlantDetails.additional_Info}</p>
                </div>}
            </div>

        </div>
    );
};

export default PlantDetails;