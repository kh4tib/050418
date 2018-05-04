let main = document.querySelector(".main__content");

main.addEventListener("click", function(ev){

    let element = ev.target;
    do {
        if (element === this) {
            return false;
        }

        if (element.classList.contains("eclipse")) {
                element.nextElementSibling.classList.toggle("--fill");
        }
        element = element.parenetNode
    } while (element);
});