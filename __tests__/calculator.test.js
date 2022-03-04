let cal = require("../Calculator");
let db = require("../db");
test('Value of a Compound interest valid', () => {
    cal.principalamount = 1000000
    cal.interest = 10; //in percentage
    cal.time = 10;
    cal.number_of_time_i_compounded = 12; //interval quarterl or annually
    expect(cal.compound_intrst()).toBe(2707041.4908622433) // assertion
});
test('Value of a Post tax return valid', () => {
    cal.interest = 10;
    cal.taxrate = 30;

    expect(cal.post_tax_return()).toBe(7) // assertion
});
test('Value of a inflation calculation valid', () => {
   
    cal.presentamount = 10000;
    cal.inflationrate = 5;
    cal.time = 10;
    expect(cal.inflation()).toBe(16288.946267774423) // assertion
})

test('Value of a purchasing power calculation valid', () => {
    cal.presentvalue = 10000;
    cal.inflationrate = 5;
    cal.time = 10;
    expect(cal.purchasing_power()).toBe(6139.132535407591)
});

test('Value of a effective annual rate calculation valid', () => {
    expect(cal.effective_annual_rate(9, 4)).toBe(9.308331878906229)
});
test('Value of a rule of 72 calculation valid', () => {

    cal.interestrate = 6;
    expect(cal.rule_of_72()).toBe(12);
});

test('Value of a CAGR valid', () => {

    cal.future_value = 5000;
    cal.presentvalue = 1000;
    cal.time = 10;
    expect(cal.CAGR()).toBe(17.461894308801895);
})

   

test('Value of a Loan EMI valid', () => {
    cal.loan_amount = 1000000;

    cal.interestrate =11;

    cal.time = 15;
    cal.intervals = 12;
expect(cal.loan_EMI()).toBe(11365.969345560838);
})


test('Value of a Future value of SIP valid', () => {
    cal.regular_monthly_investment = 1000;

    cal.interestrate = 15;

    cal.time = 10 ;

    cal.intervals = 12;
expect(cal.future_value_of_SIP()).toBe(278657.27154407697);
})

test('Value of a Future value of SIP valid', () => {

cal.totalassets = 1;
    cal.totalcurrentdebt = 2;
    expect(cal.liquidity_ratio()).toBe(0.5)
})
