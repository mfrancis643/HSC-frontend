import {MenuItem, Select} from "@material-ui/core";
import React from "react";

const DropDown = ({labelName, items, value, setValue}) => {

    const labelStyle = {
        marginLeft: '50px'
    };

    return(
        <div className={"fullWidth"}>
            <span>{labelName}</span>
            <span style={labelStyle}>
                <Select
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



