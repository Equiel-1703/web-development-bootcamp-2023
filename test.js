javascript: !function (d) {
    var k = 0;
    function goagain() {
        for (let e of document.getElementsByTagName("video")) {
            e.setAttribute("controls", "controls");
            let rmv = e.parentElement.parentElement.nextElementSibling;
            if (rmv) {
                rmv.remove();
            }
        }
        k += 1;
        if (k < 1000) {
            setTimeout(() => { goagain(); }, 3000);
        }
    }
    goagain();
}
    (document); 