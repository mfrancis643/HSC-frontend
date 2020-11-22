import React from "react";

const Iteration = ({year, initialBalance, interestRate, annualInterest, newBankBalance}) => {

    return(
        <div className={"iteration"}>
            <p>{year}</p>
            <p>Balance of {parseFloat(initialBalance).toFixed(2)} with an interest rate of {parseFloat(interestRate).toFixed(2)}% = {parseFloat(annualInterest).toFixed(2)} annual interest.</p>
            <p>{parseFloat(initialBalance).toFixed(2)} + {parseFloat(annualInterest).toFixed(2)} = {parseFloat(newBankBalance).toFixed(2)} (new balance).</p>
        </div>
    );
};
export default  Iteration;