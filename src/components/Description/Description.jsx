import React from "react";
import "./styles.css"

const Description = () => {

    return (
        <div className="spacedText">
            <h1>Compound Interest Calculator</h1>
            <p>At HistoricalSavingsCalculator.com we provide a finance utility and service for working with bank accounts and specifically historical savings account data. We apply this to the compound interest formula so that you can see the differences in past rates in the previous decades, and today's rates. This tool can be utilized to expose the effects of events such as the financial crash of 2008 and coronavirus (Covid-19) on global interest rates, and how they have affected savings accounts worldwide.</p>
            <p>You can either define your own custom data set, or else utilize historical data by selecting the "Use Custom Data" slider.</p>
            <p>Once you have chosen your data, by either defining it yourself, or choosing a data set between which years you choose and in which country, clicking the "GET RESULTS" button will apply this to a compound interest calculator, and will show you the year-on-year interest gained and the new bank balance for each year post interest.</p>
        </div>
    )

}

export default Description
