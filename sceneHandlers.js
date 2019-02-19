/* Diego Kaleb Valenzuela Carrillo
    Solar System */

// Position of the mouse at the moment of a certain event: 
var mouseDown = false 
var posX = 0
var posY = 0 
var button = -1

// Size of the objects (all):
function scaleScene(s){
    solarSysten.scale.set(s, s, s)
    $("#scale").html("Scale: " + s)
}

// Movement to see all the scene:
function rotateScene(deltaX, deltaY){
    solarSystem.rotation.y += deltaX / 100
    solarSystem.rotation.x += deltaY / 100
    $("#rotation").html("rotation:" + solarSystem.rotation.x.toFixed(1) + "," + solarSystem.rotation.y.toFixed(1) + ",0")
}

// Move around the solar system:
function translateScene(deltax, deltay) {
    solarSysten.position.y -= deltay / 100
    solarSysten.position.x += deltax / 100
}

// What happens when an event is triggered in the mouse:
function onMouseMove(ev){
    if (!mouseDown)                     //Do nothing when mouse is not clicking
        return
    ev.preventDefault()

    // Position:
    var deltax = ev.pageX - pageX       //UPDATE
    pageX = ev.pageX                    //UPDATE

    var deltay = ev.pageY - pageY       //UPDATE
    pageY = ev.pageY                    //UPDATE

    // Which botton is down?:
    switch(button) {
        case 0:
            rotateScene(deltax, deltay)
            break
        case 2:
            translateScene(deltax * 10 , deltay * 10)
            break
        default:
            print("Error in switch: line 43")
            break
    }
}

// Simple detection that changes the value of mouseDown:
function onMouseUp(ev){
    ev.preventDefault()
    mouseDown = false
    button = -1
}

function onMouseDown(ev){
    ev.preventDefault()

    mouseDown = true
    button = ev.button
    // Updating positions:
    pageX = ev.pageX
    pageY = ev.pageY
}

// MouseHandler seen in class:
function addMouseHandler(canvas){
    canvas.addEventListener( 'contextmenu', event => event.preventDefault())
    canvas.addEventListener( 'mousemove', function(e) { onMouseMove(e) }, false)
    canvas.addEventListener( 'mousedown', function(e) { onMouseDown(e) }, false)
    canvas.addEventListener( 'mouseup', function(e) { onMouseUp(e) }, false)
}