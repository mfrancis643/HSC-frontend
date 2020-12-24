import ukData from './yearInterestPairUK'
import usData from './yearInterestPairUSA'

// const usData = {
//         2010:	0.2,
//         2011:	0.15,
//         2012:	0.10,
//         2013:	0.07,
//         2014:	0.06,
//         2015:	0.06,
//         2016:	0.06,
//         2017:	0.06,
//         2018:	0.07,
//         2019:	0.09,
//         2020:   0.05
//     };
//
// const ukData = {
//     1980: 10.50,
//     1981: 8.90,
//     1982: 8.54,
//     1983: 6.75,
//     1984: 7.00,
//     1985: 7.57,
//     1986: 8.65,
//     1987: 9.83,
//     1988: 9.31,
//     1989: 11.96,
//     1990: 13.56,
//     1991: 10.57,
//     1992: 8.19,
//     1993: 5.66,
//     1994: 5.36,
//     1995: 5.60,
//     1996: 4.54,
//     1997: 5.45,
//     1998: 6.33,
//     1999: 4.71,
//     2000: 5.47,
//     2001: 4.64,
//     2002: 3.68,
//     2003: 3.73,
//     2004: 4.56,
//     2005: 4.92,
//     2006: 4.68,
//     2007: 5.55,
//     2008: 5.09,
//     2009: 2.21,
//     2010: 2.80,
//     2011: 2.75,
//     2012: 2.80,
//     2013: 1.77,
//     2014: 1.48,
//     2015: 1.40,
//     2016: 1.23,
//     2017: 1.00,
//     2018: 1.18,
//     2019: 1.39,
//     2020: 0.01
// }

    const getDataSet = (country) => {
    switch(country){
        case "UK":
            return ukData
        case "USA":
            return usData
    }
}

export default getDataSet;