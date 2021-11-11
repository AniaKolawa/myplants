import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {db, } from "../firebase";
import {monthsData} from "./months";
import RenderCheckBoxes from "./Checkbox";
import {cloneDeep} from "lodash";

const EditPlant = () => {


    const {id} = useParams()
    const [plantData, setPlantData] = useState(false);
    const [initialCheckbox, setInitialCheckbox] = useState(cloneDeep(monthsData));
    const [initialCheckbox2, setInitialCheckbox2] = useState(cloneDeep(monthsData));
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        db.collection("plants").doc(`${id}`)
            .get()
            .then((doc) => {
                setPlantData({
                    ...doc.data(),
                });
                const plant =  {...doc.data()}
                const checkboxes1 = setCheckBoxes(monthsData, plant.fertilization_mineral)
                const checkboxes2= setCheckBoxes(monthsData, plant.fertilization_organic)
                setInitialCheckbox(checkboxes1)
                setInitialCheckbox2(checkboxes2)
            })
    }, [])

    const onSubmit = (e) =>{
        const tempErrors =[];
        if (plantData.name.length < 1){
            tempErrors.push("Musisz podać nazwę rośliny!")
        }
        setErrors(tempErrors);
        if (tempErrors.length > 0){
            return;
        }

        db.collection('plants').doc(`${id}`).update({...plantData, })
            .then(() => {
                console.log("Document successfully written!");
                // return <div>Zapisano zmiany</div>
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });


    }

    const onChange = (key, value) =>{
        let object = cloneDeep(plantData)
        object[key] = value
        setPlantData(object)
    }

    const handleCheckBox = (array, field) =>{
        let data = cloneDeep(plantData)
        data[field] = array.reduce((acc, curr)=> [...acc, curr.name] ,[])
        setPlantData(data)
    }


    const setCheckBoxes = (config, data) =>{
        const newData = config.map((item)=>{
            const isTrue = data.some((element)=> {
                return element === item.name
            })
            return isTrue ? {...item, isChecked: true} : item
        })
        return  cloneDeep(newData)
    }



    return (
        <div className="plantContainer container">

            <h2 className="title">EDYTUJ ROŚLINĘ</h2>
            <form className="plantForm" >
                <div className="plantForm__div">
                    <label className="plantForm__label--name plantForm__label" htmlFor="name"
                    >Nazwa</label>
                    <input
                        className="plantForm__input--name plantForm__input"
                        id="name"
                        name="name"
                        type="text"
                        value={plantData.name}
                        onChange={(e)=>{onChange('name',e.target.value)}}
                    />
                </div>

                <div className="plantForm__div">
                    <label className="plantForm__label--stand plantForm__label" htmlFor="stand">Stanowisko</label>
                    <select className="plantForm__select--stand plantForm__select"
                            id="stand"
                            name="stand"
                            onChange={(e)=>{onChange('stand',e.target.value)}}
                            value={plantData.stand}>

                        <option className="plantForm__selectOption" value="choose"> </option>
                        <option className="plantForm__selectOption" value="słoneczne">słoneczne</option>
                        <option className="plantForm__selectOption" value="półcień">półcień</option>
                        <option className="plantForm__selectOption" value="cień">cień</option>
                    </select>
                </div>

                <div className="plantForm__div">
                    <label className="plantForm__label--soil plantForm__label" htmlFor="soil">Preferowane podłoże</label>
                    <select className="plantForm__select--soil plantForm__select"
                            onChange={(e)=>{onChange('soil',e.target.value)}}
                            id="soil"
                            name="soil"
                            value={plantData.soil}>
                        <option className="plantForm__selectOption" value="choose"> </option>
                        <option className="plantForm__selectOption" value="kwaśne" >kwaśne</option>
                        <option className="plantForm__selectOption" value="obojętne">obojętne</option>
                        <option className="plantForm__selectOption" value="zasadowe">zasadowe</option>
                    </select>
                </div>

                <div className="plantForm__div">
                    <label htmlFor="fertilizationOrganicMonths" className="plantForm__label--fertilizationOrganic plantForm__label">Nawożenie organiczne</label>
                    <RenderCheckBoxes
                        id="fertilizationOrganicMonths"
                        className="plantForm__checkbox"
                        data={initialCheckbox}
                        field='fertilization_mineral'
                        setFertilizationMonths={handleCheckBox}
                    />

                </div>

                <div className="plantForm__div">
                    <label className="plantForm__label--fertilizerOrganic plantForm__label" htmlFor="fertilizerOrganic">Nawóz organiczny: </label>
                    <input className="plantForm__input--fertilizerOrganic plantForm__input"
                           type="text"
                           id="fertilizerOrganic"
                           name="fertilizerOrganic"
                           value={plantData.fertilizer_organic}
                           onChange={(e)=>{onChange('fertilizer_organic',e.target.value)}}
                    />
                </div>

                <div className="plantForm__div">
                    <label htmlFor="fertilizationMineralMonths" className="plantForm__label--fertilizationMineral plantForm__label">Nawożenie mineralne</label>
                    <RenderCheckBoxes id="fertilizationMineralMonths"
                                      className="plantForm__checkbox"
                                      data={initialCheckbox2}
                                      field='fertilization_organic'
                                      setFertilizationMonths={handleCheckBox}
                    />
                </div>


                <div className="plantForm__div">
                    <label className="plantForm__label--fertilizerMineral plantForm__label" htmlFor="fertilizerMineral">Nawóz mineralny: </label>
                    <input className="plantForm__input--fertilizerMineral plantForm__input"
                           type="text"
                           id="fertilizerMineral"
                           name="fertilizerMineral"
                           onChange={(e)=>{onChange('fertilizer_mineral',e.target.value)}}
                           value={plantData.fertilizer_mineral}
                    />
                </div>

                <div className="plantForm__div">
                    <label className="plantForm__label--additionalInfo plantForm__label" htmlFor="additionalInfo">Dodatkowe informacje</label>
                    <textarea className="plantForm__textarea"
                              name="additionalInfo"
                              id="additionalInfo"
                              rows="3"
                              onChange={(e)=>{onChange('additional_Info',e.target.value)}}
                              value={plantData.additional_Info}
                              placeholder="Wpisz dodatkowe informacje">
                    </textarea>
                </div>

                <div className="plantForm__div">
                    <label className="plantForm__label--img plantForm__label" htmlFor="img">Dodaj link do zdjęcia</label>
                    <input className="plantForm__input--img plantForm__input"
                           onChange={(e)=>{onChange('image_url',e.target.value)}}
                           value={plantData.image_url}
                           id="img"
                           name="img"
                           type="text"
                    />
                </div>
                <button
                    className="plantForm__addBtn"
                    type='button'
                    onClick={(e)=>{onSubmit(e)}}>
                    Edytuj
                </button>
            </form>
            <div className="error">
                {(errors.length > 0) && (errors.map((error, i) => <p key={i}>{error}</p>))}
            </div>
        </div>
    );
};

export default EditPlant;