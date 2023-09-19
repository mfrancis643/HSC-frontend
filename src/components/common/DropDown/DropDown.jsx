import {MenuItem, Select} from "@mui/material";
import React from "react";
import "./styles.css"

const DropDown = ({labelName, items, value, setValue}) => {


    return(
        <div className={'fullWidth'}>
            <span>{labelName}:</span>
            <span className={'spacer'}>
                <Select
                    value={value}
                    autoWidth
                    onChange={(e) => setValue(e.target.value)}
                >
                     {items.map((item) => {
                         return <MenuItem key={item} value={item}>{item}</MenuItem>
                     })}
                </Select>
            </span>
        </div>
    );
};

export default DropDown;



