import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {cloneDeep} from 'lodash';
import {monthsData} from "./months";
import RenderCheckBoxes from "./Checkbox";

import {db} from "../firebase";

// const plantDataFactory = {
//     plantName: "",
//     stand: "",
//     soil: "",
//     img: "",
//     additionalInfo: "",
//     fertilizationOrganicMonths: [],
//     fertilizerOrganic: "",
//     fertilizationMineralMonths: [],
//     fertilizerMineral: ""
// }


const AddPlant = () => {

    const [plantName, setPlantName] = useState("");
    const [stand, setStand] = useState("");
    const [soil, setSoil] = useState("");
    const [img, setImg] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [fertilizationOrganicMonths, setFertilizationOrganicMonths] = useState([]);
    const [fertilizerOrganic, setFertilizerOrganic] = useState("");
    const [fertilizationMineralMonths, setFertilizationMineralMonths] = useState([]);
    const [fertilizerMineral, setFertilizerMineral] = useState("");
    const [errors, setErrors] = useState([]);
    const [isActive, setIsActive] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();


        const newPlantData = {
            name: plantName,
            stand: stand,
            soil: soil,
            additional_Info: additionalInfo,
            image_url: img,
            fertilizer_organic: fertilizerOrganic,
            fertilizer_mineral: fertilizerMineral,
            fertilization_organic: fertilizationOrganicMonths.map((el) => el.name),
            fertilization_mineral: fertilizationMineralMonths.map((el) => el.name)

        }
        const tempErrors =[];
        if (plantName.length < 1){
            tempErrors.push("Musisz podać nazwę rośliny!")
        }
        setErrors(tempErrors);
        if (tempErrors.length > 0){
            return;
        }

        db.collection("plants").add(newPlantData)
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        setPlantName("");
        setSoil("");
        setStand("");
        setImg("");
        setAdditionalInfo("");
        setFertilizerOrganic("");
        setFertilizerMineral("");


        setFertilizationOrganicMonths(fertilizationOrganicMonths.map((el) => el.isChecked = false));
        setFertilizationMineralMonths(fertilizationMineralMonths.map((el) => el.isChecked = false));
    }




    return (
        <div className="plantContainer container">

            <h2 className="title">DODAJ ROŚLINĘ</h2>
            <form className="plantForm" onSubmit={(e) => handleSubmit(e)}>
                <div className="plantForm__div">
                    <label className="plantForm__label--name plantForm__label" htmlFor="name">Nazwa</label>
                    <input className="plantForm__input--name plantForm__input"
                           id="name"
                           name="name"
                           type="text"
                           value={plantName}
                           onChange={e => setPlantName(e.target.value)}/>
                </div>

                <div className="plantForm__div">
                    <label className="plantForm__label--stand plantForm__label" htmlFor="stand">Stanowisko</label>
                    <select className="plantForm__select--stand plantForm__select"
                            id="stand"
                            name="stand"
                            value={stand}
                            onChange={e => setStand(e.target.value)}>
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
                            value={soil}
                            onChange={e => setSoil(e.target.value)}>
                        <option className="plantForm__selectOption" value="choose"> </option>
                        <option className="plantForm__selectOption" value="kwaśne">kwaśne</option>
                        <option className="plantForm__selectOption" value="obojętne">obojętne</option>
                        <option className="plantForm__selectOption" value="zasadowe">zasadowe</option>
                    </select>
                </div>

                <div className="plantForm__div">
                    <label htmlFor={fertilizationOrganicMonths} className="plantForm__label--fertilizationOrganic plantForm__label">Nawożenie organiczne</label>
                    <RenderCheckBoxes id="fertilizationOrganicMonths"
                                      className="plantForm__checkbox"
                                      setFertilizationMonths={setFertilizationOrganicMonths}
                                      data={monthsData}/>
                </div>

                <div className="plantForm__div">
                    <label className="plantForm__label--fertilizerOrganic plantForm__label" htmlFor={fertilizerOrganic}>Nawóz organiczny: </label>
                    <input className="plantForm__input--fertilizerOrganic plantForm__input"
                           type="text"
                           id="fertilizerOrganic"
                           name="fertilizerOrganic"
                           value={fertilizerOrganic}
                           onChange={e => setFertilizerOrganic(e.target.value)}/>
                </div>

                <div className="plantForm__div">
                    <label htmlFor={fertilizationMineralMonths} className="plantForm__label--fertilizationMineral plantForm__label">Nawożenie mineralne</label>
                    <RenderCheckBoxes id="fertilizationMineralMonths"
                                      className="plantForm__checkbox"
                                      setFertilizationMonths={setFertilizationMineralMonths}
                                      data={monthsData}/>
                </div>


                <div className="plantForm__div">
                    <label className="plantForm__label--fertilizerMineral plantForm__label" htmlFor={fertilizerMineral}>Nawóz mineralny: </label>
                    <input className="plantForm__input--fertilizerMineral plantForm__input"
                           type="text"
                           id="fertilizerMineral"
                           name="fertilizerMineral"
                           value={fertilizerMineral}
                           onChange={e => setFertilizerMineral(e.target.value)}/>
                </div>

                <div className="plantForm__div">
                    <label className="plantForm__label--additionalInfo plantForm__label" htmlFor="additionalInfo">Dodatkowe informacje</label>
                    <textarea className="plantForm__textarea"
                              name="additionalInfo"
                              id="additionalInfo"
                              rows="3"
                              value={additionalInfo}
                              placeholder="Wpisz dodatkowe informacje"
                              onChange={e => setAdditionalInfo(e.target.value)}>
                    </textarea>
                </div>

                <div className="plantForm__div">
                    <label className="plantForm__label--img plantForm__label" htmlFor="img">Dodaj link do zdjęcia</label>
                    <input className="plantForm__input--img plantForm__input"
                           value={img}
                           id="img"
                           name="img"
                           type="text"
                           onChange={e => setImg(e.target.value)}/>
                </div>
                <button className="plantForm__addBtn" type="submit">Dodaj</button>
            </form>
            <div className="error">
                {(errors.length > 0) && (errors.map((error, i) => <p key={i}>{error}</p>))}
            </div>
        </div>
    );
};

export default AddPlant;