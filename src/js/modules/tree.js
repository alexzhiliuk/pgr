function createSVG(svgWidth, svgHeight, xStart, xEnd, yEnd, from) {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "card-link-line")
    svg.setAttribute("width", svgWidth)
    svg.setAttribute("height", svgHeight)
    document.querySelector("body").appendChild(svg)

    $(svg).css("position", "absolute").css("top", yEnd).css("pointer-events", "none").css("z-index", "0")
    if (from == "top"){
        if (xEnd >= xStart) {
            $(svg).css("left", xStart)
        } else {
            $(svg).css("left", xEnd).css("transform", "scaleX(-1)")
        }
    } else
    if (from == "side"){
        if (xEnd > xStart) {
            $(svg).css("left", xStart)
        } else {
            $(svg).css("left", xEnd).css("transform", "scaleX(-1)")
        }
    }

    return svg;
}

function createPath(lineWidth, svgHeight, svgWidth, from) {
    let path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    path.setAttribute("stroke", "#E1E1E1")
    path.setAttribute("fill", "none")
    path.setAttribute("stroke-width", lineWidth)
    path.setAttribute("stroke-linecap", "round")
    
    if (from == "top") {
        if (svgWidth == lineWidth * 2) {
            var d = `M ${lineWidth} ${svgHeight - lineWidth} V ${lineWidth}`
        } else {
            var radius = 25
            var d = `M ${lineWidth} ${svgHeight - lineWidth} V ${lineWidth + 2 * radius} Q ${lineWidth} ${lineWidth + radius} ${lineWidth + radius} ${lineWidth + radius}  H ${svgWidth - radius - lineWidth} Q ${svgWidth - lineWidth} ${lineWidth + radius} ${svgWidth - lineWidth} ${lineWidth}`
        }
    } else
    if (from == "side") {
        var radius = 25
        var d = `M ${lineWidth} ${svgHeight - lineWidth} H ${svgWidth - lineWidth - radius} Q ${svgWidth - lineWidth} ${svgHeight - lineWidth} ${svgWidth - lineWidth} ${svgHeight - lineWidth - radius} V ${lineWidth}`
    }
    path.setAttribute("d", d)
    return path

}

function linkCards() {
    $(".tree__card[data-connect-to]").each(function(i, el) {
        let connectToId = $(el).attr("data-connect-to"),
            connectToElement = $(`.tree__card[data-card-id=${connectToId}]`),
            avatarGap = 42

        if ($(el).hasClass("tree__card_top")) {
            var xEnd = connectToElement.offset().left + connectToElement.outerWidth() / 2,
                yEnd = connectToElement.offset().top + connectToElement.outerHeight(),
                xStart = $(el).offset().left + $(el).outerWidth() / 2,
                yStart = $(el).hasClass("tree__card_avatar-gap") ? $(el).offset().top - avatarGap : $(el).offset().top,
                lineWidth = 2,
                svgWidth = Math.abs(xEnd - xStart) + lineWidth * 2,
                svgHeight = Math.abs(yEnd - yStart),
                from = "top"
        } else if ($(el).hasClass("tree__card_side")) {
            var xEnd = connectToElement.offset().left + connectToElement.outerWidth() / 2,
                yEnd = connectToElement.offset().top + connectToElement.outerHeight(),
                xStart = $(el).offset().left < xEnd ? $(el).offset().left + $(el).outerWidth() : $(el).offset().left,
                yStart = $(el).offset().top + $(el).outerHeight() / 2,
                lineWidth = 2,
                svgWidth = Math.abs(xEnd - xStart) + lineWidth * 2,
                svgHeight = Math.abs(yEnd - yStart),
                from = "side"
        }
        let svg = createSVG(svgWidth, svgHeight, xStart, xEnd, yEnd, from)
        let path = createPath(lineWidth, svgHeight, svgWidth, from)
        svg.appendChild(path)

    })
}

function linkCardsMobile() {
    $(".tree__card[data-connect-to]:not(.tree__card_short-line)").each(function(i, el) {
        let connectToId = $(el).attr("data-connect-to"),
            connectToElement = $(`.tree__card[data-card-id=${connectToId}]`),
            leftGap = 40,
            radius = 10,
            containerPadding = 24

        var xEnd = connectToElement.offset().left + connectToElement.outerWidth() / 2,
            yEnd = connectToElement.offset().top + connectToElement.outerHeight(),
            xStart = $(el).offset().left,
            yStart = $(el).offset().top + $(el).outerHeight() / 2,
            lineWidth = 2,
            svgWidth = xEnd - containerPadding,
            svgHeight = Math.abs(yEnd - yStart),
            from = "top"

        let svg = createSVG(svgWidth, svgHeight, containerPadding, xEnd, yEnd, from)

        let path = document.createElementNS("http://www.w3.org/2000/svg", "path")
        path.setAttribute("stroke", "#E1E1E1")
        path.setAttribute("fill", "none")
        path.setAttribute("stroke-width", lineWidth)
        path.setAttribute("stroke-linecap", "round")

        let d = `M ${leftGap - lineWidth} ${svgHeight - lineWidth} 
                H ${radius + lineWidth} 
                Q ${lineWidth} ${svgHeight - lineWidth} ${lineWidth} ${svgHeight - lineWidth - radius} 
                V ${radius * 2 + lineWidth} 
                Q ${lineWidth} ${radius + lineWidth} ${lineWidth + radius} ${radius + lineWidth} 
                H ${svgWidth - radius - lineWidth} 
                Q ${svgWidth - lineWidth} ${radius + lineWidth} ${svgWidth - lineWidth}  ${lineWidth}`
        path.setAttribute("d", d)

        svg.appendChild(path)

    })
}

function sortCardsForMobile() {
    let cardGroups = {}
    $(".tree__card").each(function(i, el) {
        let connectToId = $(el).attr("data-connect-to"),
            cardId = $(el).attr("data-card-id")
        if (connectToId !== undefined ) {
            cardGroups[connectToId] ? cardGroups[connectToId].push(cardId) : cardGroups[connectToId] = [cardId]
        }
    })
    console.log(cardGroups)
    
    let order = 0
    for (let cardId in cardGroups) {
        $(`.tree__card[data-card-id=${cardId}]`).parent().css("order", order++)
    
        for (let childCardId of cardGroups[cardId]) {
            $(`.tree__card[data-card-id=${childCardId}]`).parent().css("order", order++)
        }
    }
}

setTimeout(() => {
    if (window.outerWidth > 768) {
        linkCards()
        $(`.tree__card`).parent().css("order", "")
    } else {
        sortCardsForMobile()
        setTimeout(() => {
            linkCardsMobile()
        }, 500)
    }
}, 500)




$(window).on("resize", function() {
setTimeout(() => {
    $(".card-link-line").remove()
    if (window.outerWidth > 768) {
        linkCards()
        $(`.tree__card`).parent().css("order", "")
    } else {
        sortCardsForMobile()
        setTimeout(() => {
            linkCardsMobile()
        }, 500)
    }
}, 500)
})

