
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {db} from "../firebase";

import {monthsData} from "./months";
import {Link} from "react-router-dom";



const PlantDetails = () => {

    const [showPlantDetails, setShowPlantDetails] = useState({});

    const {id} = useParams()

    useEffect(() => {
        db.collection("plants").doc(`${id}`)
            .get()
            .then((doc) => {
                // console.log(doc.data())
                setShowPlantDetails({
                    ...doc.data(),
                })
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
                <DetailsElement  title='Stanowisko' property={showPlantDetails.stand} />
                <DetailsElement  title='Podłoże' property={showPlantDetails.soil} />
                <DetailsElement  title='Nawożenie organiczne' property={ showPlantDetails.fertilization_organic?.join([', '])}/>
                <DetailsElement  title='Nawóz organiczny' property={showPlantDetails.fertilizer_organic} />
                <DetailsElement  title='Nawożenie mineralne' property={ showPlantDetails.fertilization_mineral?.join([', '])}/>
                <DetailsElement  title='Nawóz mineralny' property={showPlantDetails.fertilizer_mineral} />
                <DetailsElement  title='Dodatkowe informacje' property={showPlantDetails.additional_Info} />
                <Link to={`/myplants/edit/${id}`} className="plantForm__addBtn">Edytuj</Link>
            </div>

        </div>
    );
};
const DetailsElement = ({title , property})=>{
    if (title && property) return(
        <div className="plantDetails__element">
            <h3 className="plantDetails__elName">{title}</h3>
            <p className="plantDetails__elData">{property}</p>
        </div >)
    else return null;
}

export default PlantDetails;