/* Diego Kaleb Valenzuela Carrillo
    Solar System */

// List of objects in scene: 
    var scene = null
    var camera = null
    var renderer = null
    var solarSystem = null
    // Stars:
    var sun = null
    //Planets:
    var mercury = null
    var venus = null
    var earth = null
    var mars = null
    var jupiter = null
    var saturn = null
    var uranus = null
    var neptune = null
    var pluto = null
    //Groups (for those planets with moons):
    var earthSet = null
    var marsSet = null
    var jupiterSet = null
    var saturnSet = null
    var uranusSet = null
    var neptuneSet = null
    //Orbits (Ring per planet):
    var mercuryOrbit = null
    var venusOrbit = null
    var earthOrbit = null
    var marsOrbit = null
    var jupiterOrbit = null
    var saturnOrbit = null
    var uranusOrbit = null
    var neptuneOrbit = null
    var plutoOrbit = null
    //Moons:
    var earthMoon = null
    var marsMoon1 = null
    var marsMoon2 = null
    var jupiterMoon1 = null
    var jupiterMoon2 = null
    var jupiterMoon3 = null
    var jupiterMoon4 = null
    var saturnMoon1 = null
    var saturnMoon2 = null
    var saturnMoon3 = null
    var uranusMoon1 = null
    var uranusMoon2 = null
    var neptuneMoon1 = null
    var neptuneMoon2 = null
    //Asteroids:
    var asteroid = null
    var asteroid2 = null
    //Others:
    var saturnRing = null
    var asteroidBelt = null
    var asteroidBelt2 = null

// Global vars: 
    var currentTime = Date.now()   
    var duration = 10000
    
    var min = 21
    var max = 26
    //Default position:
    var x = 0
    var y = 0
    var z = 0
    var radius = 0
    
    var min2 = 45
    var max2 = 48
    //Default position:
    var x2 = 0
    var y2= 0
    var z2 = 0
    var radius2 = 0

// Functions:
    // Initial position of the whole Solar System:
    function awake(){
        var now = Date.now()
        var deltat = now - currentTime
        currentTime = now
        var fract = deltat / duration
        var angle = Math.PI * 2 * fract
        var movement = now * 0.0001

        solarSystem.rotation.y += angle
        earthSet.rotation.y += angle
        marsSet.rotation.y += angle
        jupiterSet.rotation.y += angle
        saturnSet.rotation.y += angle
        uranusSet.rotation.y += angle
        neptuneSet.rotation.y += angle

        // Rotate the cube about it's Y axis
        sun.rotation.y += angle
        mercury.rotation.y += angle
        venus.rotation.y += angle
        earth.rotation.y += angle
        earthMoon.rotation.y += angle
        mars.rotation.y += angle
        marsMoon1.rotation.y += angle
        marsMoon2.rotation.y += angle
        jupiter.rotation.y += angle
        jupiterMoon1.rotation.y += angle
        jupiterMoon2.rotation.y += angle
        jupiterMoon3.rotation.y += angle
        jupiterMoon4.rotation.y += angle
        saturn.rotation.y += angle
        saturnMoon1.rotation.y += angle
        saturnMoon2.rotation.y += angle
        saturnMoon3.rotation.y += angle
        uranus.rotation.y += angle
        uranusMoon1.rotation.y += angle
        uranusMoon2.rotation.y += angle
        neptune.rotation.y += angle
        neptuneMoon1.rotation.y += angle
        neptuneMoon2.rotation.y += angle
        pluto.rotation.y += angle
        asteroid.rotation.y += angle
        asteroid2.rotation.y += angle
    }

    // Render the scene in an infinite loop:
    function run() {
        requestAnimationFrame(function() {run()})
        renderer.render(scene, camera)
        awake()
    }
    
    // Everything in the scene is here: 
    function createScene(canvas){
        renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true})
        renderer.setSize(canvas.width, canvas.height)
        scene = new THREE.Scene()
        //Lights:
        var light = new THREE.PointLight( 0xffffff, 1.5, 100)
        light.position.set(0, 0, 0)

        // Background image:
        var textureUrl = "./images/Background.jpeg"
        scene.background = new THREE.TextureLoader().load(textureUrl)

        // Camera settings
        camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 1, 4000)
        camera.position.y = 0
        camera.position.z = 100
        scene.add(camera)

        solarSystem = new THREE.Object3D            //Holds everything else
            solarSystem.add(light)                  //Everything has this kind of light

        //Setting the position of each group:
        earthSet = new THREE.Object3D       
        solarSystem.add(earthSet)
        earthSet.position.set(0, 0, -16)

        marsSet = new THREE.Object3D
        solarSystem.add(marsSet)
        marsSet.position.set(0, 0, 20)

        jupiterSet = new THREE.Object3D
        solarSystem.add(jupiterSet)
        jupiterSet.position.set(-28, 0, 0)

        saturnSet = new THREE.Object3D;
        solarSystem.add(saturnSet);
        saturnSet.position.set(32, 0, 0)

        uranusSet = new THREE.Object3D
        solarSystem.add(uranusSet)
        uranusSet.position.set(0, 0, -36)

        neptuneSet = new THREE.Object3D
        solarSystem.add(neptuneSet)
        neptuneSet.position.set(0, 0, 40)

        //Asteroid Belts:
        asteroidBelt = new THREE.Object3D
        asteroidBelt2 = new THREE.Object3D
        
        // Sun:
        textureUrl = "./images/Sun.jpg"
        var texture = new THREE.TextureLoader().load(textureUrl)
        var material = new THREE.MeshBasicMaterial({map: texture})
        var geometry = new THREE.SphereGeometry(4, 25, 25)
        sun = new THREE.Mesh(geometry, material)
        solarSystem.add(sun)

        // Planets:
            // Mercury:
        textureUrl = "./images/Mercury.jpg"
        texture = new THREE.TextureLoader().load(textureUrl)
        material = new THREE.MeshPhongMaterial({map: texture})
        geometry = new THREE.SphereGeometry(0.3, 20, 20)
        mercury = new THREE.Mesh(geometry, material)
        mercury.position.set(-8, 0, 0)
        solarSystem.add(mercury)

            // Venus:
        textureUrl = "./images/Venus.jpg"
        texture = new THREE.TextureLoader().load(textureUrl)
        material = new THREE.MeshPhongMaterial({ map: texture })
        geometry = new THREE.SphereGeometry(0.5, 20, 20)
        venus = new THREE.Mesh(geometry, material)
        venus.position.set(12, 0, 0)
        solarSystem.add(venus)

            // Earth:
        textureUrl = "./images/Earth.jpg"
        texture = new THREE.TextureLoader().load(textureUrl)
        material = new THREE.MeshPhongMaterial({map: texture})
        geometry = new THREE.SphereGeometry(0.5, 20, 20)
        earth = new THREE.Mesh(geometry, material)
        earthSet.add(earth)
        
            // Our moon:
            textureUrl = "./images/Moon.jpg"
            texture = new THREE.TextureLoader().load(textureUrl)
            material = new THREE.MeshPhongMaterial({map: texture})
            geometry = new THREE.SphereGeometry(.15, 20, 20)
            earthMoon = new THREE.Mesh(geometry, material)
            earthMoon.position.set(1, 0, 0)
            earthSet.add(earthMoon)

            // Mars:
        textureUrl = "./images/Mars.jpg"
        texture = new THREE.TextureLoader().load(textureUrl)
        material = new THREE.MeshPhongMaterial({map: texture})
        geometry = new THREE.SphereGeometry(0.4, 20, 20)
        mars = new THREE.Mesh(geometry, material)
        marsSet.add(mars)

            // Moon 1:
            textureUrl = "./images/Moon.jpg"
            texture = new THREE.TextureLoader().load(textureUrl)
            material = new THREE.MeshPhongMaterial({map: texture})
            geometry = new THREE.SphereGeometry(.15, 20, 20)
            marsMoon1 = new THREE.Mesh(geometry, material)
            marsMoon1.position.set(1, 0, 0)
            marsSet.add( marsMoon1 )
            // Moon 2:
            textureUrl = "./images/Moon.jpg"
            texture = new THREE.TextureLoader().load(textureUrl)
            material = new THREE.MeshPhongMaterial({ map: texture })
            geometry = new THREE.SphereGeometry(.15, 20, 20)
            marsMoon2 = new THREE.Mesh(geometry, material)
            marsMoon2.position.set(-1, 0, 0)
            marsSet.add( marsMoon2 )

        // Jupiter:
        textureUrl = "./images/Jupiter.jpg"
        texture = new THREE.TextureLoader().load(textureUrl)
        material = new THREE.MeshPhongMaterial({map: texture})
        geometry = new THREE.SphereGeometry(1.6, 20, 20)
        jupiter = new THREE.Mesh(geometry, material)
        jupiterSet.add(jupiter)
            // Moon 1:
            textureUrl = "./images/Moon.jpg"
            texture = new THREE.TextureLoader().load(textureUrl)
            material = new THREE.MeshPhongMaterial({map: texture})
            geometry = new THREE.SphereGeometry(.15, 20, 20)
            jupiterMoon1 = new THREE.Mesh(geometry, material)
            jupiterMoon1.position.set(2, 0, 0)
            jupiterSet.add(jupiterMoon1)
            // Moon 2:
            textureUrl = "./images/Moon.jpg"
            texture = new THREE.TextureLoader().load(textureUrl)
            material = new THREE.MeshPhongMaterial({map: texture})
            geometry = new THREE.SphereGeometry(.15, 20, 20)
            jupiterMoon2 = new THREE.Mesh(geometry, material)
            jupiterMoon2.position.set(-2, 0, 0)
            jupiterSet.add(jupiterMoon2)
            // Moon 3:
            textureUrl = "./images/Moon.jpg"
            texture = new THREE.TextureLoader().load(textureUrl)
            material = new THREE.MeshPhongMaterial({map: texture})
            geometry = new THREE.SphereGeometry(.15, 20, 20)
            jupiterMoon3 = new THREE.Mesh(geometry, material)
            jupiterMoon3.position.set(0, 2, 0)
            jupiterSet.add(jupiterMoon3)
            // Moon 4:
            textureUrl = "./images/Moon.jpg"
            texture = new THREE.TextureLoader().load(textureUrl)
            material = new THREE.MeshPhongMaterial({map: texture})
            geometry = new THREE.SphereGeometry(.15, 20, 20)
            jupiterMoon4 = new THREE.Mesh(geometry, material)
            jupiterMoon4.position.set(0, 1, -2)
            jupiterSet.add(jupiterMoon4)

        // Saturn:
        textureUrl = "./images/Saturn.jpg"
        texture = new THREE.TextureLoader().load(textureUrl)
        material = new THREE.MeshPhongMaterial({map: texture})
        geometry = new THREE.SphereGeometry(1.1, 20, 20)
        saturn = new THREE.Mesh(geometry, material)
        saturnSet.add(saturn)
            // Ring:
            geometry = new THREE.RingGeometry(1, 2, 32)
            material = new THREE.MeshBasicMaterial( {color: 0xCCCC00, transparent: true, opacity: 0.3})
            saturnRing = new THREE.Mesh( geometry, material )
            saturnRing.rotation.x = Math.PI / 5
            saturnSet.add(saturnRing)
            // Moon 1:
            textureUrl = "./images/Moon.jpg"
            texture = new THREE.TextureLoader().load(textureUrl)
            material = new THREE.MeshPhongMaterial({map: texture})
            geometry = new THREE.SphereGeometry(.15, 20, 20)
            saturnMoon1 = new THREE.Mesh(geometry, material)
            saturnMoon1.position.set(0, 1, -2)
            saturnSet.add(saturnMoon1)
            // Moon 2:
            textureUrl = "./images/Moon.jpg"
            texture = new THREE.TextureLoader().load(textureUrl)
            material = new THREE.MeshPhongMaterial({map: texture})
            geometry = new THREE.SphereGeometry(.15, 20, 20)
            saturnMoon2 = new THREE.Mesh(geometry, material)
            saturnMoon2.position.set(0, 2, 0)
            saturnSet.add(saturnMoon2)
            // Moon 3:
            textureUrl = "./images/Moon.jpg"
            texture = new THREE.TextureLoader().load(textureUrl)
            material = new THREE.MeshPhongMaterial({ map: texture })
            geometry = new THREE.SphereGeometry(.15, 20, 20)
            saturnMoon3 = new THREE.Mesh(geometry, material)
            saturnMoon3.position.set(2, 0, 2)
            saturnSet.add(saturnMoon3)

        // Uranus:
        textureUrl = "./images/Uranus.jpg"
        texture = new THREE.TextureLoader().load(textureUrl)
        material = new THREE.MeshPhongMaterial({map: texture})
        geometry = new THREE.SphereGeometry(0.7, 20, 20)
        uranus = new THREE.Mesh(geometry, material)
        uranusSet.add(uranus)
            // Moon 1:
            textureUrl = "./images/Moon.jpg"
            texture = new THREE.TextureLoader().load(textureUrl)
            material = new THREE.MeshPhongMaterial({map: texture})
            geometry = new THREE.SphereGeometry(.15, 20, 20)
            uranusMoon1 = new THREE.Mesh(geometry, material)
            uranusMoon1.position.set(0, 0.5, -1)
            uranusSet.add(uranusMoon1)
            // Moon 2:
            textureUrl = "./images/Moon.jpg"
            texture = new THREE.TextureLoader().load(textureUrl)
            material = new THREE.MeshPhongMaterial({map: texture})
            geometry = new THREE.SphereGeometry(.15, 20, 20)
            uranusMoon2 = new THREE.Mesh(geometry, material)
            uranusMoon2.position.set(1, 1, 0)
            uranusSet.add(uranusMoon2)

        // Neptune:
        textureUrl = "./images/Neptune.jpg"
        texture = new THREE.TextureLoader().load(textureUrl)
        material = new THREE.MeshPhongMaterial({map: texture})
        geometry = new THREE.SphereGeometry(0.7, 20, 20)
        neptune = new THREE.Mesh(geometry, material)
        neptuneSet.add(neptune)
            // Moon 1:
            textureUrl = "./images/Moon.jpg"
            texture = new THREE.TextureLoader().load(textureUrl)
            material = new THREE.MeshPhongMaterial({ map: texture })
            geometry = new THREE.SphereGeometry(.15, 20, 20)
            neptuneMoon1 = new THREE.Mesh(geometry, material)
            neptuneMoon1.position.set(0, .9, -.5)
            neptuneSet.add(neptuneMoon1)
            // Moon 2:
            textureUrl = "./images/Moon.jpg"
            texture = new THREE.TextureLoader().load(textureUrl)
            material = new THREE.MeshPhongMaterial({map: texture})
            geometry = new THREE.SphereGeometry(.15, 20, 20)
            neptuneMoon2 = new THREE.Mesh(geometry, material)
            neptuneMoon2.position.set(0.5, 0, 1)
            neptuneSet.add(neptuneMoon2)

        // Pluto
        textureUrl = "./images/plutomap.jpg"
        texture = new THREE.TextureLoader().load(textureUrl)
        material = new THREE.MeshPhongMaterial({map: texture})
        geometry = new THREE.SphereGeometry(0.25, 20, 20)
        pluto = new THREE.Mesh(geometry, material)
        pluto.position.set(-44, 0, 0)
        solarSystem.add(pluto)

        //Orbits:
        geometry = new THREE.TorusGeometry( 8, 0.1, 16, 100 )
        material = new THREE.MeshBasicMaterial( { color: 0xffff00, transparent: true, opacity: 0.3 } )
        mercuryOrbit = new THREE.Mesh( geometry, material )
        mercuryOrbit.rotation.x = Math.PI / 2
        solarSystem.add( mercuryOrbit )

        geometry = new THREE.TorusGeometry( 12, 0.1, 16, 100 )
        material = new THREE.MeshBasicMaterial( { color: 0xffff00, transparent: true, opacity: 0.3 } )
        venusOrbit = new THREE.Mesh( geometry, material )
        venusOrbit.rotation.x = Math.PI / 2
        solarSystem.add( venusOrbit )

        geometry = new THREE.TorusGeometry( 16, 0.1, 16, 100 )
        material = new THREE.MeshBasicMaterial( { color: 0xffff00, transparent: true, opacity: 0.3 } )
        earthOrbit = new THREE.Mesh( geometry, material )
        earthOrbit.rotation.x = Math.PI / 2
        solarSystem.add( earthOrbit )

        geometry = new THREE.TorusGeometry( 20, 0.1, 16, 100 )
        material = new THREE.MeshBasicMaterial( { color: 0xffff00, transparent: true, opacity: 0.3 } )
        marsOrbit = new THREE.Mesh( geometry, material )
        marsOrbit.rotation.x = Math.PI / 2
        solarSystem.add( marsOrbit )

        geometry = new THREE.TorusGeometry( 28, 0.1, 16, 100 )
        material = new THREE.MeshBasicMaterial( { color: 0xffff00, transparent: true, opacity: 0.3 } )
        jupiterOrbit = new THREE.Mesh( geometry, material )
        jupiterOrbit.rotation.x = Math.PI / 2
        solarSystem.add( jupiterOrbit )

        geometry = new THREE.TorusGeometry( 32, 0.1, 16, 100 )
        material = new THREE.MeshBasicMaterial( { color: 0xffff00, transparent: true, opacity: 0.3 } )
        saturnOrbit = new THREE.Mesh( geometry, material )
        saturnOrbit.rotation.x = Math.PI / 2
        solarSystem.add( saturnOrbit )

        geometry = new THREE.TorusGeometry( 36, 0.1, 16, 100 )
        material = new THREE.MeshBasicMaterial( { color: 0xffff00, transparent: true, opacity: 0.3} )
        uranusOrbit = new THREE.Mesh( geometry, material )
        uranusOrbit.rotation.x = Math.PI / 2
        solarSystem.add( uranusOrbit )

        geometry = new THREE.TorusGeometry( 40, 0.1, 16, 100 )
        material = new THREE.MeshBasicMaterial( { color: 0xffff00, transparent: true, opacity: 0.3 } )
        neptuneOrbit = new THREE.Mesh( geometry, material )
        neptuneOrbit.rotation.x = Math.PI / 2
        solarSystem.add( neptuneOrbit )

        geometry = new THREE.TorusGeometry( 44, 0.1, 16, 100 )
        material = new THREE.MeshBasicMaterial( { color: 0xffff00, transparent: true, opacity: 0.3 } )
        plutoOrbit = new THREE.Mesh( geometry, material )
        plutoOrbit.rotation.x = Math.PI / 2
        solarSystem.add( plutoOrbit )

        geometry = new THREE.SphereGeometry(.1, 20, 20)
        texture = new THREE.TextureLoader().load('./images/asteroidmap.jpg')
        material = new THREE.MeshPhongMaterial({ map: texture, bumpMap: '', bumpScale: 0.05 })

        // For loop for several asteroids
        for (var i = 0; i < 1000; i++) {
            asteroid = new THREE.Mesh(geometry, material)
            asteroid2 = new THREE.Mesh(geometry, material)
            radius = Math.random() * (max - min) + min
            radius2 = Math.random() * (max2 - min2) + min2
            x = radius * Math.cos((i * (Math.PI / 180)))
            x2 = radius2 * Math.cos((i * (Math.PI / 180)))
            y = radius * Math.sin((i * (Math.PI / 180)))
            y2 = radius2 * Math.sin((i * (Math.PI / 180)))
            z = (Math.random() * ((radius * .05) - (radius * -.05)) + (radius * -.05))
            z2 = (Math.random() * ((radius2 * .05) - (radius2 * -.05)) + (radius2 * -.05))
            asteroid.position.set(x, y, z)
            asteroid2.position.set(x2, y2, z2)
            asteroidBelt.add(asteroid)
            asteroidBelt2.add(asteroid2)
        }

        asteroidBelt.rotation.x = Math.PI / 2
        asteroidBelt2.rotation.x = Math.PI / 2
        solarSystem.add(asteroidBelt)
        solarSystem.add(asteroidBelt2)

        // Now add the group to our scene
        scene.add( solarSystem )
}
