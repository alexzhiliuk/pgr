let getNumberValue = function(input) {
	return input.value.replace(/\D/g, "")
}

function addSpaces(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ' ' + '$2');
    }
    return x1 + x2;
}

$(".range-input input[type='range']").on('input', function() {
    let maxValue = $(this).attr('max'),
        currentValue = $(this).val()
    
    $(this).parent().children(".range-input__progress").css("width", `${currentValue / maxValue * 100}%`)

    $(this).parent().children(".range-input__number").val(addSpaces(currentValue))
})

$(".range-input__number").on('input', function(e) {
    let currentValue = getNumberValue(e.target),
        rangeInput = $(this).parent().children("input[type='range']"),
        maxValue = rangeInput.attr('max')

    if (!currentValue) currentValue = rangeInput.attr("min")
    if (Number(currentValue) > Number(maxValue)) currentValue = maxValue
    $(this).val(addSpaces(currentValue))
    
    $(this).parent().children(".range-input__progress").css("width", `${currentValue / maxValue * 100}%`)

    rangeInput.val(currentValue)
})