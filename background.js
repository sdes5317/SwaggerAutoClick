setTimeout(function () {
    var apis = document.getElementsByClassName("opblock-summary-description");
    for (let i = 0; i < apis.length; i++) {
        apis[i].addEventListener("click", function () {
            setTimeout(function () {
                var bb = document.getElementsByClassName("btn try-out__btn")
                for (let i = 0; i < bb.length; i++) {
                    if (bb[i].className != "btn try-out__btn cancel") {
                        bb[i].click();
                    }
                }
            }, 1000)
        })
    }
}, 500);