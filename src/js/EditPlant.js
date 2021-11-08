
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {db} from "../firebase";

import {monthsData} from "./months";
import RenderCheckBoxes from "./Checkbox";



const EditPlant = () => {

    const {id} = useParams()
    const [prevPlantDetails, setPrevPlantDetails] = useState(false);
    const [editedPlantDetails, setEditedPlantDetails] = useState(false);



    useEffect(() => {
        db.collection("plants").doc(`${id}`)
            .get()
            .then((doc) => {
                console.log(doc.data())
                setPrevPlantDetails({
                    ...doc.data(),
                });
            })

    }, [])

    const handleEditInputValue = (e) => {
        const {name, value} = e.target
        setEditedPlantDetails({
            ...editedPlantDetails,
            [name]: value
        });
}


    return (
        <div className="plantContainer container">

            <h2 className="title">EDYTUJ ROŚLINĘ</h2>
            <form className="plantForm" >
                <div className="plantForm__div">
                    <label className="plantForm__label--name plantForm__label" htmlFor="name">Nazwa</label>
                    <input className="plantForm__input--name plantForm__input"
                           id="name"
                           name="name"
                           type="text"
                           value={prevPlantDetails.name}
                           onChange={(e) => handleEditInputValue}
                    />
                </div>

                <div className="plantForm__div">
                    <label className="plantForm__label--stand plantForm__label" htmlFor="stand">Stanowisko</label>
                    <select className="plantForm__select--stand plantForm__select"
                            id="stand"
                            name="stand"
                            value={prevPlantDetails.stand}>

                        <option className="plantForm__selectOption" value="choose"> </option>
                        <option className="plantForm__selectOption" value="słoneczne">słoneczne</option>
                        <option className="plantForm__selectOption" value="półcień">półcień</option>
                        <option className="plantForm__selectOption" value="cień">cień</option>
                    </select>
                </div>

                <div className="plantForm__div">
                    <label className="plantForm__label--soil plantForm__label" htmlFor="soil">Preferowane podłoże</label>
                    <select className="plantForm__select--soil plantForm__select"
                            id="soil"
                            name="soil"
                            value={prevPlantDetails.soil}>
                        <option className="plantForm__selectOption" value="choose"> </option>
                        <option className="plantForm__selectOption" value="kwaśne" >kwaśne</option>
                        <option className="plantForm__selectOption" value="obojętne">obojętne</option>
                        <option className="plantForm__selectOption" value="zasadowe">zasadowe</option>
                    </select>
                </div>

                <div className="plantForm__div">
                    <label htmlFor="fertilizationOrganicMonths" className="plantForm__label--fertilizationOrganic plantForm__label">Nawożenie organiczne</label>
                    <RenderCheckBoxes id="fertilizationOrganicMonths"
                                      className="plantForm__checkbox"

                                      data={monthsData}/>
                </div>

                <div className="plantForm__div">
                    <label className="plantForm__label--fertilizerOrganic plantForm__label" htmlFor="fertilizerOrganic">Nawóz organiczny: </label>
                    <input className="plantForm__input--fertilizerOrganic plantForm__input"
                           type="text"
                           id="fertilizerOrganic"
                           name="fertilizerOrganic"
                           value={prevPlantDetails.fertilizer_organic}/>
                </div>

                <div className="plantForm__div">
                    <label htmlFor="fertilizationMineralMonths" className="plantForm__label--fertilizationMineral plantForm__label">Nawożenie mineralne</label>
                    <RenderCheckBoxes id="fertilizationMineralMonths"
                                      className="plantForm__checkbox"
                                      data={monthsData}/>
                </div>


                <div className="plantForm__div">
                    <label className="plantForm__label--fertilizerMineral plantForm__label" htmlFor="fertilizerMineral">Nawóz mineralny: </label>
                    <input className="plantForm__input--fertilizerMineral plantForm__input"
                           type="text"
                           id="fertilizerMineral"
                           name="fertilizerMineral"
                           value={prevPlantDetails.fertilizer_mineral}
                           />
                </div>

                <div className="plantForm__div">
                    <label className="plantForm__label--additionalInfo plantForm__label" htmlFor="additionalInfo">Dodatkowe informacje</label>
                    <textarea className="plantForm__textarea"
                              name="additionalInfo"
                              id="additionalInfo"
                              rows="3"
                              value={prevPlantDetails.additional_Info}
                              placeholder="Wpisz dodatkowe informacje">
                    </textarea>
                </div>

                <div className="plantForm__div">
                    <label className="plantForm__label--img plantForm__label" htmlFor="img">Dodaj link do zdjęcia</label>
                    <input className="plantForm__input--img plantForm__input"
                           value={prevPlantDetails.image_url}
                           id="img"
                           name="img"
                           type="text"/>
                </div>
                <button className="plantForm__addBtn" type="submit">Edytuj</button>
            </form>
            {/*<div className="error">*/}
            {/*    {(errors.length > 0) && (errors.map((error, i) => <p key={i}>{error}</p>))}*/}
            {/*</div>*/}
        </div>
    );
};

export default EditPlant;