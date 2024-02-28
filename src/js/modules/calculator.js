import * as rangeInput from "./rangeInput.js"

let loanRateRange = $("#loanRateRange")
let loanTermRange = $("#loanTermRange")
let loanAmountRange = $("#loanAmountRange")

function calculatingMonthlyPayment(p, r, n) {
    // p - сумма кредита
    // r - месячная процентная ставка
    // n - количество платежей
    let monthlyPayment = p * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1))
    return Math.round(monthlyPayment * 100) / 100
}

function formatMonthlyPayment(monthlyPayment) {
    monthlyPayment += ""
    let parts = monthlyPayment.split("."),
        left = parts[0],
        right = parts.length == 2 ? parts[1] : null

    return right ? `${rangeInput.addSpaces(left)},${right}` : `${rangeInput.addSpaces(left)}`
}

$("#loanTermRange, #loanAmountRange, #loanRateRange").on("input", function() {
    let monthlyRate = loanRateRange.val() / 12 / 100
    let paymentsNumber = loanTermRange.val() * 12
    let loanAmount = loanAmountRange.val()
    
    let monthlyPayment = calculatingMonthlyPayment(loanAmount, monthlyRate, paymentsNumber)
    
    $("#monthlyPayment").html(formatMonthlyPayment(monthlyPayment))
})