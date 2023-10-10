import React from "react";
import "./styles.css"

const Description = () => {

    return (
        <div className="spacedText">
            <h1>Historical Savings Compound Interest Calculator</h1>
            <p>Historical Savings Calculator aims to provide an insight into historical interest rates and their affects on customers savings accounts. Using a compound interest calculator we can see recent interest rates and how they compare to the historical interest rates of previous decades.</p>
            <p>Datasets are compiled via recording the annual average historical interest rate of each national bank and adding this data to the compound interest calculator.</p>
            <p>You can either choose a historical interest rate period or define your own; then click 'Get Results' to display your year-on-year returns complete with a line graph of your savings.</p>
        </div>
    )

}

export default Description
