import ukData from './yearInterestPairUK'
import usData from './yearInterestPairUSA'

    const getDataSet = (country) => {
    switch(country){
        case "UK":
            return ukData
        case "USA":
            return usData
        default:
            return usData
    }
}

export default getDataSet;