dragElement(document.getElementsByClassName("draggable"));
var draggableleft = 0;
var draggabletop = 10;
var Screenwidth = Screen.width;


function dragElement(elmnts) {
    for (let i = 0; i < elmnts.length; i++) {
        const elmnt = elmnts[i];

        var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;

        const header = elmnt.querySelector(".header");
        if (header) {
            header.onmousedown = dragMouseDown;
        } else {
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;

            console.log(pos3, pos4);

            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element"s new position:
            elmnt.style.top = elmnt.offsetTop - pos2 + "px";
            elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }

    }
}