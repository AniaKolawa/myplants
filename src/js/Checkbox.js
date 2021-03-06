import React, { useState, useEffect } from "react";
import { cloneDeep } from "lodash";

export default function RenderCheckBoxes({ data, setFertilizationMonths, field}) {
    const [months, setMonths] = useState(cloneDeep(data));

    const onCheckboxChange = (i) => {
        let array = cloneDeep(months);
        array[i].isChecked = !array[i].isChecked;
        setMonths(array);
        const filteredMonths = array.filter((item) => item.isChecked)
        setFertilizationMonths(filteredMonths, field)

    };
    useEffect(()=>{
        setMonths(cloneDeep(data))
    },[data])



    return (
        <div className="plantForm__checkbox">
            {months.map((item, index) => {
                return (
                    <label className={`plantForm__checkbox-label ${item.isChecked && "plantForm__checkbox-label--active"}`} key={item.id}>
                        {item.name}
                        <input
                            className="plantForm__checkbox-input "
                            type="checkbox"
                            checked={item.isChecked}
                            onChange={() => {onCheckboxChange(index)}}
                        />
                    </label>
                );
            })}
        </div>
    );
}