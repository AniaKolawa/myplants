import React, {useEffect, useState} from 'react';
import {db} from "../firebase";

const PlantDetails = () => {
//
//     const [showPlantDetails, setShowPlantDetails] = useState({});
    // const [showPlantName, setShowPlantName] = useState("");
    // const [showStand, setShowStand] = useState("");
    // const [showSoil, setShowSoil] = useState("");
    // const [showImg, setShowImg] = useState("");
    // const [showAdditionalInfo, setShowAdditionalInfo] = useState("");
    // const [showFertilizationOrganicMonths, setShowFertilizationOrganicMonths] = useState([]);
    // const [showFertilizerOrganic, setShowFertilizerOrganic] = useState("");
    // const [showFertilizationMineralMonths, setShowFertilizationMineralMonths] = useState([]);
    // const [showFertilizerMineral, setShowFertilizerMineral] = useState("");
    // const [errors, setShowErrors] = useState([]);


    // useEffect(() => {
    //     db.collection("plants")
    //         .get()
    //         .then((data) => {
    //             setShowPlantDetails({
    //                 plantName: data.plants.name
    //             })
    //         })
    // })


    return (
        <div className="container">
            <div className="showPhoto">
                <div><i className="fas fa-chevron-left"></i></div>
                <div><i className="far fa-edit"></i></div>
                <img src={showImg}/>
            </div>
            <div class="plantDetails">
                <h2>{showPlantName}</h2>
                <div>
                    <h3>Stanowisko</h3>
                    <p>{showStand}</p>
                </div>
                <div>
                    <h3>Podłoże</h3>
                    <p>{showSoil}</p>
                </div>
                <div>
                    <h3>Nawożenie organiczne</h3>
                    <p>{showFertilizationOrganicMonths}</p>
                </div>
                <div>
                    <h3>Nawóz organiczny</h3>
                    <p>{showFertilizerOrganic}</p>
                </div>
                <div>
                    <h3>Nawożenie mineralne</h3>
                    <p>{showFertilizationMineralMonths}</p>
                </div>
                <div>
                    <h3>Nawóz mineralny</h3>
                    <p>{showFertilizerMineral}</p>
                </div>
                <div>
                    <h3>Dodatkowe informacje</h3>
                    <p>{showAdditionalInfo}</p>
                </div>
            </div>

        </div>
    );
// };
//
// export default PlantDetails;