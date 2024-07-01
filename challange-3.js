function calculateNetSalary(basicSalary, benefits) {
    const taxRates = {
        0: 0,
        12298: 0.1,
        23885: 0.15,
        35473: 0.2,
        47060: 0.25,
        68648: 0.3
    };

    const kraValues = {
        personalRelief: 2482,
        insuranceRelief: 1500
    };

    const nhifRate = 0.065; 
    const nssfRate = 0.06; 

    const grossSalary = basicSalary + benefits;

    
    const taxableIncome = grossSalary - (kraValues.personalRelief + kraValues.insuranceRelief);

    
    let tax = 0;
    for (const [threshold, rate] of Object.entries(taxRates)) {
        const thresholdAmount = parseInt(threshold);
        if (taxableIncome > thresholdAmount) {
            tax += (taxableIncome - thresholdAmount) * rate;
            break;
        }
    }

    
    const nhifDeductions = grossSalary * nhifRate;

    
    const nssfDeductions = grossSalary * nssfRate;

    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    return {
        grossSalary: grossSalary.toFixed(2),
        tax: tax.toFixed(2),
        nhifDeductions: nhifDeductions.toFixed(2),
        nssfDeductions: nssfDeductions.toFixed(2),
        netSalary: netSalary.toFixed(2)
    };
}

const basicSalary = 50000;
const benefits = 10000;
const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("Tax:", salaryDetails.tax);
console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
console.log("Net Salary:", salaryDetails.netSalary);