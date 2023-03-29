console.log(inpu == input)

function show() {
    if (document.getElementById("inpu").value + document.getElementById("input").value <= 0) {
        alert("Fill details")
    }
    else if (document.getElementById("inpu").value === document.getElementById("input").value) {
        alert("welcome to my page")
    }
    else {
        alert("wrong Password")
    }
}



function but() {
    if (document.getElementById("ico").innerHTML == "visibility_off") {
        document.getElementById("ico").innerHTML = "visibility"
        document.getElementById("inpu").type = "text"
    }
    else if (document.getElementById("ico").innerHTML == "visibility") {
        document.getElementById("ico").innerHTML = "visibility_off"
        document.getElementById("inpu").type = "password"
    }
}
function butt() {
    if (document.getElementById("ico2").innerHTML == "visibility_off") {
        document.getElementById("ico2").innerHTML = "visibility"
        document.getElementById("input").type = "text"
    }
    else if (document.getElementById("ico2").innerHTML == "visibility") {
        document.getElementById("ico2").innerHTML = "visibility_off"
        document.getElementById("input").type = "password"
    }
}
