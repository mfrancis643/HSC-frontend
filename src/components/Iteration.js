import React from "react";

const Iteration = ({year, initialBalance, interestRate, annualInterest, newBankBalance}) => {

    return(
        <div className={"iteration"}>
            <p>{year}</p>
            <p>Balance of {initialBalance.toFixed(2)} with an interest rate of {interestRate.toFixed(2)}% = {annualInterest.toFixed(2)} annual interest.</p>
            <p>{initialBalance.toFixed(2)} + {annualInterest.toFixed(2)} = {newBankBalance.toFixed(2)} (new balance).</p>
        </div>
    );
};
export default  Iteration;