import * as rangeInput from "./rangeInput.js"

$(".js-number-input").on('input', function(e) {
    let currentValue = rangeInput.getNumberValue(e.target)
    $(this).val(rangeInput.addSpaces(currentValue))
})
$(".js-number-input").each(function(i, el) {
    let currentValue = rangeInput.getNumberValue(el)
    $(el).val(rangeInput.addSpaces(currentValue))
})

// Табы калькулятора
$(".calculator__type").each(function(i, el) {
    $(el).attr("data-calculator-id", i)
})
$(".calculator__container").each(function(i, el) {
    $(el).attr("data-calculator-id", i)
})

$(".calculator__type").on("click", function() {
    $(".calculator__type").removeClass("calculator__type_active")
    $(this).addClass("calculator__type_active")

    let calculatorId = $(this).attr("data-calculator-id")
    $(".calculator__container").removeClass("calculator__container_active")
    $(`.calculator__container[data-calculator-id=${calculatorId}]`).addClass("calculator__container_active")
})

// Удаление доп. поля
$(".calculator__remove-row").click(function() {
    $(this).parents(".calculator__inputs-row").remove()
})

// Расчеты
function formatResult(result) {
    result = result.toFixed(2)
    result += ""
    let parts = result.split("."),
        left = parts[0],
        right = parts.length == 2 ? parts[1] : null

    return right ? `${rangeInput.addSpaces(left)},${right}` : `${rangeInput.addSpaces(left)}`
}

// ------- creditCalculator -------
let loanRateRange = $("#creditCalculatorLoanRateRange"),
    loadRateInput = $("#creditCalculatorLoanRateInput")
let loanTermRange = $("#creditCalculatorLoanTermRange"),
    loanTermInput = $("#creditCalculatorLoanTermInput")
let loanAmountRange = $("#creditCalculatorLoanAmountRange"),
    loanAmountInput = $("#creditCalculatorLoanAmountInput")


function calculatingCreditCalculatorMonthlyPayment(p, r, n) {
    // p - сумма кредита
    // r - месячная процентная ставка
    // n - количество платежей
    let monthlyPayment = p * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1))
    return Math.round(monthlyPayment * 100) / 100
}


$("#creditCalculatorLoanTermRange, #creditCalculatorLoanAmountRange, #creditCalculatorLoanRateRange").on("input", function() {
    let monthlyRate = loanRateRange.val() / 12 / 100
    let paymentsNumber = loanTermRange.val() * 12
    let loanAmount = loanAmountRange.val()
    
    let monthlyPayment = calculatingCreditCalculatorMonthlyPayment(loanAmount, monthlyRate, paymentsNumber)
    
    $("#creditCalculatorMonthlyPayment").html(formatResult(monthlyPayment))
})


$("#creditCalculatorLoanTermInput, #creditCalculatorLoanAmountInput, #creditCalculatorLoanRateInput").on("input", function() {
    let monthlyRate = Number(loadRateInput.val()) / 12 / 100
    let paymentsNumber = Number(loanTermInput.val()) * 12
    let loanAmount = Number(rangeInput.getNumberValue(loanAmountInput[0]))
    
    let monthlyPayment = calculatingCreditCalculatorMonthlyPayment(loanAmount, monthlyRate, paymentsNumber)
    
    $("#creditCalculatorMonthlyPayment").html(formatResult(monthlyPayment))
})

// Изначальный расчет
let monthlyRate = loanRateRange.val() / 12 / 100
let paymentsNumber = loanTermRange.val() * 12
let loanAmount = loanAmountRange.val()
let monthlyPayment = calculatingCreditCalculatorMonthlyPayment(loanAmount, monthlyRate, paymentsNumber)
$("#creditCalculatorMonthlyPayment").html(formatResult(monthlyPayment))


// ------- refinancingCalculator -------
$("#refinancingCalculatorAddFields").click(function() {
    let inputId = Number(/\d+/.exec($(".js-refinancing-calculator-amount").last().attr("id"))[0]) + 1
    let newFields = `<div class="calculator__inputs-row">
                        <div class="inner-caption-input">
                            <div class="inner-caption-input__label body-regular">Сумма кредита</div>
                            <div class="inner-caption-input__wrapper" data-caption="руб.">
                                <input type="number" value="500000" id="refinancingCalculatorLoanAmountInput${inputId}" class="calculator__input body-regular js-refinancing-calculator-amount">
                            </div>
                        </div>
                        <div class="inner-caption-input">
                            <div class="inner-caption-input__label body-regular">Ежемесячный платёж</div>
                            <div class="calculator__temp">
                                <div class="inner-caption-input__wrapper" data-caption="руб.">
                                    <input type="number" value="12000" id="refinancingCalculatorMonthlyPaymentInput${inputId}" class="calculator__input body-regular js-refinancing-calculator-monthly-payment">
                                </div>
                                <a href="javascript:void(0)" class="calculator__remove-row">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                                
                                </a>
                            </div>
                        </div>
                    </div>`
    $(".js-refinancing-calculator-amount").parents(".calculator__inputs").append(newFields)
})

let refinancingCalculatorMonthlyPayment = $("#refinancingCalculatorMonthlyPayment"),
    refinancingCalculatorRecreditingAmountInput = $("#refinancingCalculatorRecreditingAmountInput"),
    refinancingCalculatorAdditionalAmountInput = $("#refinancingCalculatorAdditionalAmountInput"),
    refinancingCalculatorTotalAmountInput = $("#refinancingCalculatorTotalAmountInput"),
    refinancingCalculatorTermInput = $("#refinancingCalculatorTermInput"),
    refinancingCalculatorResult = $("#refinancingCalculatorResult"),
    refinancingCalculatorRate = Number($("#refinancingCalculator").attr('data-rate')) / 100

function refinancingCalculatorCalculateResult(amount, rate, term) {
    // amount - сумма кредита
    // rate - месячная процентная ставка
    // term - срок кредита
    return (amount * (rate / 12)) / (1 - Math.pow(1 + (rate / 12), -1 * term * 12))
}

function refinancingCalculatorCalculate() {
    let currentCreditsAmount = 0,
        currentMonthlyPayment = 0

    $(".js-refinancing-calculator-amount").each(function(i, el) {
        currentCreditsAmount += Number(rangeInput.getNumberValue(el))
    })
    $(".js-refinancing-calculator-monthly-payment").each(function(i, el) {
        currentMonthlyPayment += Number(rangeInput.getNumberValue(el))
    })
    refinancingCalculatorMonthlyPayment.text(rangeInput.addSpaces(currentMonthlyPayment))

    refinancingCalculatorTotalAmountInput.val(
        rangeInput.addSpaces(
            Number(rangeInput.getNumberValue(refinancingCalculatorRecreditingAmountInput[0])) + 
            Number(rangeInput.getNumberValue(refinancingCalculatorAdditionalAmountInput[0]))
        )
    )

    refinancingCalculatorResult.html(
        formatResult(refinancingCalculatorCalculateResult(
            Number(rangeInput.getNumberValue(refinancingCalculatorTotalAmountInput[0])),
            refinancingCalculatorRate,
            Number(rangeInput.getNumberValue(refinancingCalculatorTermInput[0])),
        ))
    )
}

if ($("#refinancingCalculator").length) {
    refinancingCalculatorCalculate()
}

$("#refinancingCalculator input").on("input", function() {
    refinancingCalculatorCalculate()
})


// ------- businessCalculator -------
let businessCalculatorAmountInput = $("#businessCalculatorAmountInput"),
    businessCalculatorlLoanAmountRange = $("#businessCalculatorlLoanAmountRange"),
    businessCalculatorLoanTermInput = $("#businessCalculatorLoanTermInput"),
    businessCalculatorLoanTermRange = $("#businessCalculatorLoanTermRange"),
    businessCalculatorLoanRateInput = $("#businessCalculatorLoanRateInput"),
    businessCalculatorlLoanRateRange = $("#businessCalculatorlLoanRateRange"),
    businessCalculatorResult = $("#businessCalculatorResult")

function businessCalculatorCalculateResult(p, r, n) {
    // p - сумма кредита
    // r - месячная процентная ставка
    // n - срок кредита
    return (p * r / 12) / (1 - Math.pow(1 + r / 12, -1 * n * 12))
}


function businessCalculatorCalculate() {

    businessCalculatorResult.html(
        formatResult(businessCalculatorCalculateResult(
            Number(businessCalculatorlLoanAmountRange.val()),
            Number(businessCalculatorlLoanRateRange.val()) / 100,
            Number(businessCalculatorLoanTermRange.val()),
        ))
    )
}
    

if ($("#businessCalculator").length) {
    businessCalculatorCalculate()
}

$("#businessCalculator input").on("input", function() {
    businessCalculatorCalculate()
})