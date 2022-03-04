'use strict'

// //---------Compound interest------
// function compound_intrst(p, r, t, n) {
//     // P = principal amount (your initial investment),
//     // r = annual interest rate (divide the number by 100),
//     // t = years .
//     //n = number of times clear sthe interest is compounded per year
//     return p * (1 + r / n) ** (n * t)
// }

// //-------2. Post Tax Return

// function post_tax_return(interestrate, taxrate) {


//     //Formula = Interest rate - (Interest rate*tax rate)
//     return interestrate - (interestrate * taxrate)
// }
// //---- 3. Inflation
// function inflation(presentamount, inflationrate, years) {
//     //  Formula: Future amount = Present amount * (1+inflation rate) ^number of years
//     return presentamount * (1 + inflationrate / 100) ** years
// }
// //---- 4. Purchasing Power
// function purchasing_power(presentvalue, inflationrate, nyears) {
//     //Future Value = Present value/(1+inflation rate)^number of years
//     return presentvalue / ((1 + inflationrate / 100) ** nyears)
// }


// //---- 5. Effective Aannual Rate
// //Effective Annual Rate = (1+(r/n)^n)-1*100
// //r = nominal return divided by number of times compounding is done in a year
// //n = number of times compounding is done in a year
// function effective_annual_rate(r, n) {
//     return ((1 + ((r / 100) / n)) ** n - 1) * 100
// }

// //--- 6. Rule of 72 
// function rule_of_72(interest) {
//     return 72 / interest
// }

// //---   7. Compounded Annual  Growth Rate (CAGR)
// //CAGR=((FV/PV)^(1/n)) - 1
// // FV = is the investment's ending/maturity value

// // PV = is the investment's beginning/opening value

// // n = is the duration in years

// function CAGR(FV, PV, n) {
//     return (((FV / PV) ** (1 / n)) - 1) * 100
// }
// //--  Loan Equated monthly instalments (EMIs)
// // EMI= (A*R)*(1+R) ^N/ ((1+R) ^N)-1)
// //Where A = Loan amount
// //R = Interest rate
// // N= Duration
// // I = regular intervals (monthly, quarterly or half-yearly) 

// function loan_EMI(A, R, N, I) {
//     return (A * (R / (I * 100))) * (1 + (R / (I * 100))) ** (N * I) / ((1 + (R / (I * 100))) ** (N * I) - 1)
// }

// //--- 9. Future Value of SIP 
// // //S = R((1+i)^n-1/i) (1+i)
// // S = Future value of investment
// // R = Regular monthly investment
// // i = Interest rate assumed /12
// // n = Duration (number of months or number of years *12)

// function future_value_of_SIP(R, i, n) {
//     var temp1 = n * 12;
//     var temp2 = ((i / 12) / 100);
//     return (R * ((1 + temp2) ** temp1 - 1) / temp2) * (1 + temp2)
// }
// //--- 10. Liquidity Ratio
// //Formula:Liquidity Ratio = Total liquid assets\Total current debt
// function liquidity_ratio(totalassets, totalcurrentdebt) {
//     return totalassets / totalcurrentdebt
// }
// var answr = liquidity_ratio(1, 2)
// console.log(answr)

//---------------------------------

module.exports = {
    principalamount: 0,
    interest:0,
    time : 0 ,
    number_of_time_i_compounded:0,
    compound_intrst : function() {
         // P = principal amount (your initial investment),
         // r = annual interest rate (divide the number by 100),
         // t = years .
         //n = number of times clear the interest is compounded per year
         return this.principalamount * (1 +  (this.interest/100) / this.number_of_time_i_compounded) ** (this.number_of_time_i_compounded * this.time )
     },
     taxrate:0,
     //-------2. Post Tax Return
     post_tax_return :function () {
         //Formula = Interest rate - (Interest rate*tax rate)
         return  this.interest - ( this.interest * this.taxrate/100)
     },
     //---- 3. Inflation
     presentamount:0, inflationrate:0, 
     inflation:function () {
          //  Formula: Future amount = Present amount * (1+inflation rate) ^number of years
         return this.presentamount * (1 + this.inflationrate / 100) **this.time
     },
     //---- 4,. Purchasing Power
     presentvalue:0, 
     purchasing_power :function () {
        //Future Value = Present value/(1+inflation rate)^number of years
         return this.presentvalue / ((1 + this.inflationrate / 100) ** this.time)
     },
     
     
     //---- 5. Effective Aannual Rate
     //Effective Annual Rate = (1+(r/n)^n)-1*100
     //r = nominal return divided by number of times compounding is done in a year
     //n = number of times compounding is done in a year
 
     effective_annual_rate: function(r, n) {
         return ((1 + ((r / 100) / n)) ** n - 1) * 100
     },
    interestrate:0,
     //--- 6. Rule of 72 
     rule_of_72:function () {
         return (72 /this.interestrate)
     },
     
     //---   7. Compounded Annual Growth Rate (CAGR)
     //CAGR=((FV/PV)^(1/n)) - 1
     // FV = is the investment's ending/maturity value
     
     // PV = is the investment's beginning/opening value
     
     // n = is the duration in years
     future_value:0,
    CAGR: function() {
         return (((this.future_value / this.presentvalue) ** (1 / this.time)) - 1) * 100
     },
     //--  Loan Equated monthly instalments (EMIs)
     // EMI= (A*R)*(1+R) ^N/ ((1+R) ^N)-1)
     //Where A = Loan amount
     //R = Interest rate
     // N= Duration
     // I = regular intervals (monthly, quarterly or half-yearly) 
     loan_amount:0,
     intervals:0,
    loan_EMI: function() {
         return (this.loan_amount* (this.interestrate / (this.intervals * 100))) * (1 + (this.interestrate / ( this.intervals * 100))) ** (this.time *  this.intervals) / ((1 + (this.interestrate/ ( this.intervals * 100))) ** (this.time *  this.intervals) - 1)
     },
     
     //--- 9. Future Value of SIP 
     // //S = R((1+i)^n-1/i) (1+i)
     // S = Future value of investment
     // R = Regular monthly investment
     // i = Interest rate assumed /12
     // n = Duration (number of months or number of years *12)
     regular_monthly_investment:0,
     future_value_of_SIP:function() {
         var temp1 = this.time * this.intervals;
         var temp2 = ((this.interestrate / this.intervals) / 100);
         return (this.regular_monthly_investment * ((1 + temp2) ** temp1 - 1) / temp2) * (1 + temp2)
     },
     //--- 10. Liquidity Ratio
     //Formula:Liquidity Ratio = Total liquid assets\Total current debt
     totalassets:0,
     totalcurrentdebt:0,
     liquidity_ratio: function () {
         return this.totalassets / this.totalcurrentdebt
     }
  }