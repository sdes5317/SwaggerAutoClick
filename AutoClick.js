var aa = document.getElementsByClassName("opblock-summary-description")
for (let i = 0; i < aa.length; i++) {
    aa[i].click();
}

setTimeout(function () {
    var bb = document.getElementsByClassName("btn try-out__btn")
    for (let i = 0; i < bb.length; i++) {
        bb[i].click();
    }
}, 1000)