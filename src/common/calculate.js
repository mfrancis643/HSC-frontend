export const calculate = (payload) => {

    let initialBankBalance;
    let finalBankBalance;
    let yearInterestPair;
    let error = null;
    let responseBody = {};
    if (payload.hasOwnProperty("bankBalance") && payload.hasOwnProperty("yearInterestPair")) {

        yearInterestPair = payload.yearInterestPair;
        initialBankBalance = payload.bankBalance;
        finalBankBalance = parseFloat(initialBankBalance);

        let iterationList = [];
        for (let year in yearInterestPair) {
            let iteration = {};
            iteration.year = year;
            iteration.initialBalance = parseFloat(finalBankBalance );
            iteration.interestRate = parseFloat(yearInterestPair[year]);
            let interestRateMultiplier = iteration.interestRate/100
            iteration.annualInterest = (finalBankBalance * interestRateMultiplier);
            finalBankBalance = parseFloat(finalBankBalance + iteration.annualInterest);
            iteration.newBankBalance = (finalBankBalance );
            iterationList.push(iteration);
        }
        responseBody.initialBankBalance = initialBankBalance;
        responseBody.iterations = iterationList;
        responseBody.finalBankBalance = finalBankBalance;
    }
    else {
        error = "missing essential properties"
    }

    if (error !== null){
        responseBody.error = error;
    }
    return responseBody;
};
