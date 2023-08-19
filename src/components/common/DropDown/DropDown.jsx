import {MenuItem, Select} from "@mui/material";
import React from "react";

const DropDown = ({labelName, items, value, setValue}) => {

    const labelStyle = {
        marginLeft: '50px'
    };

    return(
        <div className={"fullWidth scaledText"}>
            <span>{labelName}</span>
            <span style={labelStyle}>
                <Select
                    style={{fontSize: "0.25vw + 0.25vh + 2"}}
                    className={"scaledText"}
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
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



