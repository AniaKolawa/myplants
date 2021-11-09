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
            <h2 className="title">ZNAJDŹ ROŚLINĘ</h2>
            <div className="search__container">
                <form className="search__form"
                      // onSubmit={(e) => getPlant(e)}
                >
                    <input
                        className="search__input"
                        type="search"
                        placeholder="Wpisz nazwę rośliny"


                    />
                    <button className="search__button" type="submit">Szukaj</button>
                </form>

            </div>

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


















// import React, {useState, useEffect} from 'react';
// import {db} from "../firebase";
//
// const Search = () => {
//     const [plant, setPlant] = useState("");
//     const [plants, setPlants] = useState("")
//     // const [searching, setSearching] = useState(false);
//
//
//     const getPlant = (e) => {
//         e.preventDefault();
//
//         const data = {}
//     }
//
//
//     useEffect(() => {
//         db.collection("plants")
//             .get()
//             .then((querySnapshot) => {
//
//
//                 querySnapshot.forEach((doc) => {
//                     setPlants((state) => [
//                         ...state,
//                         {
//                             ...doc.data(),
//                             id: doc.id,
//
//                         },
//                     ]);
//                 });
//             });
//     },[]);
//
//     return (
//         <div className="search__container">
//             <form className="search__form" onSubmit={(e) => getPlant(e)}>
//                 <input
//                     className="search__input"
//                     type="search"
//                     placeholder="Znajdź roślinę"
//                     value={plant.name}
//                     onChange={(e) => {
//                         setPlant(e.target.value);
//                     }}
//                 />
//                 <button className="search__button" type="submit">Szukaj</button>
//             </form>
//
//         </div>
//     );
// };
//
// export default Search;