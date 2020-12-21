import React, {useEffect, useState} from "react";
import CustomTableRow from "./CustomTableRow";

const CustomDataWrapper = ({customData, setCustomData, years}) => {



    return(
        <>
            {
                years.map((year, index) => {
                    return (<CustomTableRow
                    year={year}
                    interestRate={customData[year]}
                    key={index}
            />)
        })
            }
        </>
    );
}

export default  CustomDataWrapper;