import React from "react";

const Iteration = ({interestRate, annualInterest, newBankBalance}) => {

    return(
        <div>
            <p>{interestRate} and {annualInterest} and {newBankBalance}</p>
        </div>
    );
}
export default  Iteration;