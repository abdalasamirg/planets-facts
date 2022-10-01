let buttons = document.querySelector("#buttons").querySelectorAll("div")
let planets = document.querySelector("#planets").querySelectorAll("a")





buttons.forEach(elements => {
    elements.addEventListener("click", function() {
        buttons.forEach(bt => bt.classList.remove("acitveButton"))
        this.classList.add("acitveButton")
    })
})
console.log(planets)
planets.forEach(element => {
    element.addEventListener("click", function() {
        planets.forEach(n => n.classList.remove("acitvelinks"))
        this.classList.add("acitvelinks")
    })
})


let glopalAid = {
    mercuera: document.querySelector("#mercuer"),
    venusa: document.querySelector("#venus"),
    eartha: document.querySelector("#earth"),
    marsa: document.querySelector("#mars"),
    jupitera: document.querySelector("#jupiter"),
    saturna: document.querySelector("#saturn"),
    uranusa: document.querySelector("#uranus"),
    neptuna: document.querySelector("#neptun"),
    countdown: function myTimer() {
        if (numInfo.rev.textContent > 0) {
            numInfo.rev.textContent -= 1
        } else {
            clearInterval(myInterval)
        }
    }

}

let info = {
    name: document.querySelector("#word"),
    info: document.querySelector("#about"),
    source: document.querySelector("#source").querySelector("a"),
    b1: document.querySelector("#b1"),
    b2: document.querySelector("#b2"),
    b3: document.querySelector("#b3"),
}
let img = {
    overviewImg: document.querySelector("#planet"),
    suerfaceImg: document.querySelector("#suerface"),

}
let numInfo = {
    rot: document.querySelector("#rot-days"),
    rev: document.querySelector("#rev-days"),
    rad: document.querySelector("#radKm"),
    tem: document.querySelector("#temNm"),
    time: document.querySelector("#time")
}
let mercuer = {
    name: "Mercury",
    overview: "the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)",
    iternal: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    surface: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    overviewImg: 'https://planets-fact-site-mu.vercel.app/assets/planet-mercury.svg',
    internalImg: 'https://planets-fact-site-mu.vercel.app/assets/planet-mercury-internal.svg',
    suerfaceImg: "https://planets-fact-site-mu.vercel.app/assets/geology-mercury.png",
    rot: 59,
    rev: 88 + 365,
    rad: "2,440",
    tem: 430,
}
let venus = {
    name: "Venus",
    overview: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
    source: "https://en.wikipedia.org/wiki/Venus",
    iternal: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
    surface: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
    overviewImg: 'https://planets-fact-site-mu.vercel.app/assets/planet-venus.svg',
    internalImg: 'https://planets-fact-site-mu.vercel.app/assets/planet-venus-internal.svg',
    suerfaceImg: "https://planets-fact-site-mu.vercel.app/assets/geology-venus.png",
    rot: 243,
    rev: 225 + 365,
    rad: "6,52",
    tem: 471,
}



let earth = {
    name: "EARTH",
    overview: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
    source: "https://en.wikipedia.org/wiki/Earth",
    iternal: "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
    surface: "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors",
    overviewImg: 'https://planets-fact-site-mu.vercel.app/assets/planet-earth.svg',
    internalImg: 'https://planets-fact-site-mu.vercel.app/assets/planet-earth-internal.svg',
    suerfaceImg: "https://planets-fact-site-mu.vercel.app/assets/geology-earth.png",
    rot: 1,
    rev: 0 + 365,
    rad: "6,371",
    tem: 16,
}
console.log(earth.rev)
let mars = {
    name: "MARS",
    overview: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.",
    source: "https://en.wikipedia.org/wiki/Mars",
    iternal: "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
    surface: "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
    overviewImg: 'https://planets-fact-site-mu.vercel.app/assets/planet-mars.svg',
    internalImg: 'https://planets-fact-site-mu.vercel.app/assets/planet-mars-internal.svg',
    suerfaceImg: "https://planets-fact-site-mu.vercel.app/assets/geology-mars.png",
    rot: 1,
    rev: 0,
    rad: "3390",
    tem: -28,
    time: "YEARS"

}
let jupiter = {
    name: "JUPITER",
    overview: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
    source: "https://en.wikipedia.org/wiki/Jupiter",
    iternal: "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
    surface: "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
    overviewImg: 'https://planets-fact-site-mu.vercel.app/assets/planet-jupiter.svg',
    internalImg: 'https://planets-fact-site-mu.vercel.app/assets/planet-jupiter-internal.svg',
    suerfaceImg: "https://planets-fact-site-mu.vercel.app/assets/geology-jupiter.png",
    rot: 10,
    rev: 365,
    rad: "69,911",
    tem: -108,
    time: "YEARS"

}
let saturn = {
    name: "SATURN",
    overview: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
    source: "https://en.wikipedia.org/wiki/Saturn",
    iternal: "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
    surface: "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
    overviewImg: 'https://planets-fact-site-mu.vercel.app/assets/planet-saturn.svg',
    internalImg: 'https://planets-fact-site-mu.vercel.app/assets/planet-saturn-internal.svg',
    suerfaceImg: 'https://planets-fact-site-mu.vercel.app/assets/geology-saturn.png',
    rot: 11,
    rev: 29 * 365 + 365,
    rad: "58,232",
    tem: -138,
    time: "YEARS"

}
let uranus = {
    name: "URANUS",
    overview: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
    source: "https://en.wikipedia.org/wiki/Uranus",
    iternal: "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth",
    surface: "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
    overviewImg: 'https://planets-fact-site-mu.vercel.app/assets/planet-uranus.svg',
    internalImg: 'https://planets-fact-site-mu.vercel.app/assets/planet-uranus-internal.svg',
    suerfaceImg: "https://planets-fact-site-mu.vercel.app/assets/geology-uranus.png",
    rot: 17,
    rev: 85 * 365 + 365,
    rad: "25362",
    tem: -195,
    time: "YEARS"

}
let neptun = {
    name: "NEPTUN",
    overview: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
    source: "https://en.wikipedia.org/wiki/Neptune",
    iternal: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
    surface: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
    overviewImg: 'https://planets-fact-site-mu.vercel.app/assets/planet-neptune.svg',
    internalImg: 'https://planets-fact-site-mu.vercel.app/assets/planet-neptune-internal.svg',
    suerfaceImg: 'https://planets-fact-site-mu.vercel.app/assets/geology-neptune.png',
    rot: 16,
    rev: 165 * 365 + 365,
    rad: "24,622",
    tem: -210,
    time: "YEARS"
}


// https://i.im.ge/2022/06/30/uSXTf8.png
// https://i.im.ge/2022/06/30/uSXQPX.png
// https://i.im.ge/2022/06/30/uSXMd9.png
// https://i.im.ge/2022/06/30/uSoGJK.png
// https://i.im.ge/2022/06/30/uSoBxF.png
// https://i.im.ge/2022/06/30/uSXXuh.png
// https://i.im.ge/2022/06/30/uSXl9M.png
// https://i.im.ge/2022/06/30/uSXr8Y.png


info.name.textContent = earth.name
info.info.textContent = earth.overview
info.source.href = earth.source
numInfo.rot.textContent = earth.rot
numInfo.rev.textContent = earth.rev
numInfo.rad.textContent = earth.rad
numInfo.tem.textContent = earth.tem
img.overviewImg.src = earth.overviewImg
img.suerfaceImg.style.display = "none";


if (glopalAid.eartha.className === "acitvelinks") {
    glopalAid.eartha.className = "earthclassname"
    console.log("glopald")
} else {

}
info.b1.onclick = function() {
    if (info.b1.className === "acitveButton") {
        info.info.textContent = earth.overview
        img.overviewImg.src = earth.overviewImg
    }
}
info.b2.onclick = function() {
    if (info.b2.className === "acitveButton") {
        info.info.textContent = earth.iternal
        img.overviewImg.src = earth.internalImg
        img.suerfaceImg.style.display = "none";


    }
}
info.b3.onclick = function() {
    if (info.b3.className === "acitveButton") {
        info.info.textContent = earth.surface

        img.overviewImg.src = earth.overviewImg
        img.suerfaceImg.src = earth.suerfaceImg
        img.suerfaceImg.style.display = "flex";




    }
}



glopalAid.mercuera.onclick = function() { //info.name=
    if (glopalAid.mercuera.className === "acitvelinks") {
        info.name.textContent = mercuer.name
        info.info.textContent = mercuer.overview
        info.source.href = mercuer.source
        numInfo.rot.textContent = mercuer.rot
        numInfo.rev.textContent = mercuer.rev
        numInfo.rad.textContent = mercuer.rad
        numInfo.tem.textContent = mercuer.tem
        img.overviewImg.src = mercuer.overviewImg
        img.suerfaceImg.style.display = "none";
        img.suerfaceImg.style.display = "flex";

        const myInterval = setInterval(myTimer, 1)

        function myTimer() {
            if (numInfo.rev.textContent > 88) {
                numInfo.rev.textContent -= 1
            } else {
                clearInterval(myInterval)
            }
        }


        info.b1.onclick = function() {
            if (info.b1.className === "acitveButton") {
                info.info.textContent = mercuer.overview
                img.overviewImg.src = mercuer.overviewImg
            }
        }
        if (info.b2.className === "acitveButton") {
            info.info.textContent = mercuer.iternal
            img.overviewImg.src = mercuer.internalImg
            console.log("hello")
            img.suerfaceImg.style.display = "none";

        }
        info.b2.onclick = function() {
            if (info.b2.className === "acitveButton") {
                info.info.textContent = mercuer.iternal
                img.overviewImg.src = mercuer.internalImg
                img.suerfaceImg.style.display = "none";



            }
        }

        info.b3.onclick = function() {
            if (info.b3.className === "acitveButton") {

                info.info.textContent = mercuer.surface
                img.overviewImg.src = mercuer.overviewImg
                img.suerfaceImg.src = mercuer.suerfaceImg
                img.suerfaceImg.style.display = "flex";


            }
        }
        if (info.b3.className === "acitveButton") {

            info.info.textContent = mercuer.surface
            img.overviewImg.src = mercuer.overviewImg
            img.suerfaceImg.src = mercuer.suerfaceImg
            img.suerfaceImg.style.display = "flex";


        }
    }
}


glopalAid.venusa.onclick = function() { //info.name=
    info.name.textContent = venus.name
    info.info.textContent = venus.overview
    info.source.href = venus.source
    numInfo.rot.textContent = venus.rot
    numInfo.rev.textContent = venus.rev
    numInfo.rad.textContent = venus.rad
    numInfo.tem.textContent = venus.tem
    img.overviewImg.src = venus.overviewImg
    img.suerfaceImg.style.display = "none";




    const myInterval = setInterval(myTimer, 1)

    function myTimer() {
        if (numInfo.rev.textContent > 255) {
            numInfo.rev.textContent -= 1
        } else {
            clearInterval(myInterval)
        }
    }


    if (info.b2.className === "acitveButton") {
        info.info.textContent = venus.iternal
        img.overviewImg.src = venus.internalImg
    }
    info.b1.onclick = function() {
        if (info.b1.className === "acitveButton") {
            info.info.textContent = venus.overview
            img.overviewImg.src = venus.overviewImg
        }
    }
    info.b2.onclick = function() {
        if (info.b2.className === "acitveButton") {
            info.info.textContent = venus.iternal
            img.overviewImg.src = venus.internalImg
            img.suerfaceImg.style.display = "none";

        }
    }
    info.b3.onclick = function() {
        if (info.b3.className === "acitveButton") {
            info.info.textContent = venus.surface
            img.overviewImg.src = venus.overviewImg
            img.suerfaceImg.src = venus.suerfaceImg
            img.suerfaceImg.style.display = "flex";


        }
    }
    if (info.b3.className === "acitveButton") {
        info.info.textContent = venus.surface
        img.overviewImg.src = venus.overviewImg
        img.suerfaceImg.src = venus.suerfaceImg
        img.suerfaceImg.style.display = "flex";

    }
}
glopalAid.eartha.onclick = function() { //info.name=
    info.name.textContent = earth.name
    info.info.textContent = earth.overview
    info.source.href = earth.source
    img.overviewImg.src = earth.overviewImg
    numInfo.rot.textContent = earth.rot
    numInfo.rev.textContent = earth.rev
    numInfo.rad.textContent = earth.rad
    numInfo.tem.textContent = earth.tem
    img.suerfaceImg.style.display = "none";
    const myInterval = setInterval(myTimer, 1)

    function myTimer() {
        if (numInfo.rev.textContent > 365) {
            numInfo.rev.textContent += 1
        } else {
            clearInterval(myInterval)
        }
    }


    info.b1.onclick = function() {
        if (info.b1.className === "acitveButton") {
            info.info.textContent = earth.overview
            img.overviewImg.src = earth.overviewImg
        }
    }
    info.b2.onclick = function() {
        if (info.b2.className === "acitveButton") {
            info.info.textContent = earth.iternal
            img.overviewImg.src = earth.internalImg
            img.suerfaceImg.style.display = "none";

        }
    }
    if (info.b2.className === "acitveButton") {
        info.info.textContent = earth.iternal
        img.overviewImg.src = earth.internalImg
    }
    info.b3.onclick = function() {
        if (info.b3.className === "acitveButton") {
            info.info.textContent = earth.surface
            img.suerfaceImg.src = earth.suerfaceImg
            img.overviewImg.src = earth.overviewImg
            img.suerfaceImg.src = earth.suerfaceImg
            img.suerfaceImg.style.display = "flex";


        }
    }
    if (info.b3.className === "acitveButton") {
        info.info.textContent = earth.surface
        img.suerfaceImg.src = earth.suerfaceImg
        img.overviewImg.src = earth.overviewImg
        img.suerfaceImg.src = earth.suerfaceImg
        img.suerfaceImg.style.display = "flex";


    }
}
let rev = document.querySelector("#rev")
console.log(rev.textContent)
glopalAid.marsa.onclick = function() { //info.name=
    info.name.textContent = mars.name
    info.info.textContent = mars.overview
    info.source.href = mars.source
    img.overviewImg.src = mars.overviewImg
    numInfo.rot.textContent = mars.rot
    numInfo.rev.textContent = mars.rev
    numInfo.rad.textContent = mars.rad
    numInfo.tem.textContent = mars.tem
    img.suerfaceImg.style.display = "none";
    numInfo.time.textContent = mars.time

    const myInterval = setInterval(myTimer, 1)
    console.log(numInfo.rev.textContent)

    function myTimer() {
        if (numInfo.rev.textContent === 0) {
            numInfo.rev.textContent += 1
        } else if (numInfo.rev.textContent === 2) {
            clearInterval(myInterval)
        }
    }




    info.b1.onclick = function() {
        if (info.b1.className === "acitveButton") {
            info.info.textContent = mars.overview
            img.overviewImg.src = mars.overviewImg
        }
    }
    info.b2.onclick = function() {
        if (info.b2.className === "acitveButton") {
            info.info.textContent = mars.iternal
            img.overviewImg.src = mars.internalImg
            img.suerfaceImg.style.display = "none";


        }
    }
    if (info.b2.className === "acitveButton") {
        info.info.textContent = mars.iternal
        img.overviewImg.src = mars.internalImg
    }
    info.b3.onclick = function() {
        if (info.b3.className === "acitveButton") {
            info.info.textContent = mars.surface
            img.overviewImg.src = mars.overviewImg
            img.suerfaceImg.src = mars.suerfaceImg
            img.suerfaceImg.style.display = "flex";


        }
    }
    if (info.b3.className === "acitveButton") {
        info.info.textContent = mars.surface
        img.overviewImg.src = mars.overviewImg
        img.suerfaceImg.src = mars.suerfaceImg
        img.suerfaceImg.style.display = "flex";


    }
}
let x = 10
console.log(x.typeOf)
glopalAid.jupitera.onclick = function() { //info.name=
    info.name.textContent = jupiter.name
    info.info.textContent = jupiter.overview
    info.source.href = jupiter.source
    img.overviewImg.src = jupiter.overviewImg
    numInfo.rot.textContent = jupiter.rot
    numInfo.rev.textContent = jupiter.rev
    numInfo.rad.textContent = jupiter.rad
    numInfo.tem.textContent = jupiter.tem
    const myInterval = setInterval(myTimer, 1)

    function myTimer() {
        if (numInfo.rev.textContent < 356 * 12) {
            numInfo.rev.textContent += 20
        } else {
            clearInterval(myInterval)
        }
    }

    info.b1.onclick = function() {
        if (info.b1.className === "acitveButton") {
            info.info.textContent = jupiter.overview
            img.overviewImg.innerHTML = jupiter.overviewImg
        }
    }
    info.b2.onclick = function() {
        if (info.b2.className === "acitveButton") {
            img.suerfaceImg.style.display = "none";

            info.info.textContent = jupiter.iternal
            img.overviewImg.src = jupiter.internalImg
        }
    }
    if (info.b2.className === "acitveButton") {
        info.info.textContent = jupiter.iternal
        img.overviewImg.src = jupiter.internalImg
    }
    info.b3.onclick = function() {

        if (info.b3.className === "acitveButton") {
            img.overviewImg.src = jupiter.overviewImg
            img.suerfaceImg.src = jupiter.suerfaceImg
            img.suerfaceImg.style.display = "flex";


            info.info.textContent = jupiter.surface
        }
    }
    if (info.b3.className === "acitveButton") {
        img.overviewImg.src = jupiter.overviewImg
        img.suerfaceImg.src = jupiter.suerfaceImg
        img.suerfaceImg.style.display = "flex";


        info.info.textContent = jupiter.surface
    }
}
glopalAid.saturna.onclick = function() { //info.name=
    info.name.textContent = saturn.name
    info.info.textContent = saturn.overview
    info.source.href = saturn.source
    img.overviewImg.src = saturn.overviewImg
    numInfo.rot.textContent = saturn.rot
    numInfo.rev.textContent = saturn.rev
    numInfo.rad.textContent = saturn.rad
    numInfo.tem.textContent = saturn.tem
    const myInterval = setInterval(myTimer, 1)

    function myTimer() {
        if (numInfo.rev.textContent > 0) {
            numInfo.rev.textContent -= 1
        } else {
            clearInterval(myInterval)
        }
    }


    info.b1.onclick = function() {
        if (info.b1.className === "acitveButton") {
            info.info.textContent = saturn.overview
            img.overviewImg.src = saturn.overviewImg
        }
    }
    info.b2.onclick = function() {
        if (info.b2.className === "acitveButton") {
            info.info.textContent = saturn.iternal
            img.overviewImg.src = saturn.internalImg
            img.suerfaceImg.style.visibility = "hidden";

        }
    }
    if (info.b2.className === "acitveButton") {
        info.info.textContent = saturn.iternal
        img.overviewImg.src = saturn.internalImg
    }
    info.b3.onclick = function() {
        if (info.b3.className === "acitveButton") {
            info.info.textContent = saturn.surface
            img.overviewImg.src = saturn.overviewImg
            img.suerfaceImg.src = saturn.suerfaceImg
            img.suerfaceImg.style.display = "flex";


        }
    }
    if (info.b3.className === "acitveButton") {
        info.info.textContent = saturn.surface
        img.overviewImg.src = saturn.overviewImg
        img.suerfaceImg.src = saturn.suerfaceImg
        img.suerfaceImg.style.display = "flex";


    }
}

glopalAid.uranusa.onclick = function() { //info.name=
    info.name.textContent = uranus.name
    info.info.textContent = uranus.overview
    info.source.href = uranus.source
    img.overviewImg.src = uranus.overviewImg
    numInfo.rot.textContent = uranus.rot
    numInfo.rev.textContent = uranus.rev
    numInfo.rad.textContent = uranus.rad
    numInfo.tem.textContent = uranus.tem
    const myInterval = setInterval(myTimer, 1)

    function myTimer() {
        if (numInfo.rev.textContent > 0) {
            numInfo.rev.textContent -= 1
        } else {
            clearInterval(myInterval)
        }
    }

    info.b1.onclick = function() {
        if (info.b1.className === "acitveButton") {
            info.info.textContent = uranus.overview
            img.overviewImg.src = uranus.overviewImg
        }
    }
    info.b2.onclick = function() {
        if (info.b2.className === "acitveButton") {
            info.info.textContent = uranus.iternal
            img.overviewImg.src = uranus.internalImg
            img.suerfaceImg.style.visibility = "hidden";
        }
    }
    if (info.b2.className === "acitveButton") {
        info.info.textContent = uranus.iternal
        img.overviewImg.src = uranus.internalImg
    }
    info.b3.onclick = function() {
        if (info.b3.className === "acitveButton") {
            info.info.textContent = uranus.surface
            img.overviewImg.src = uranus.overviewImg
            img.suerfaceImg.src = uranus.suerfaceImg
            img.suerfaceImg.style.display = "flex";


        }

    }
    if (info.b3.className === "acitveButton") {
        info.info.textContent = uranus.surface
        img.overviewImg.src = uranus.overviewImg
        img.suerfaceImg.src = uranus.suerfaceImg
        img.suerfaceImg.style.display = "flex";

    }
}

glopalAid.neptuna.onclick = function() {
    info.name.textContent = neptun.name
    info.info.textContent = neptun.overview
    info.source.href = neptun.source
    img.overviewImg.src = neptun.overviewImg
    numInfo.rot.textContent = neptun.rot
    numInfo.rev.textContent = neptun.rev
    numInfo.rad.textContent = neptun.rad
    numInfo.tem.textContent = neptun.tem


    const myInterval = setInterval(myTimer, 1)

    function myTimer() {
        if (numInfo.rev.textContent > 0) {
            numInfo.rev.textContent -= 1
        } else {
            clearInterval(myInterval)
        }
    }


    info.b1.onclick = function() {
        if (info.b1.className === "acitveButton") {
            info.info.textContent = neptun.overview
            img.overviewImg.src = neptun.overviewImg
            img.suerfaceImg.style.visibility = "hidden";
        }
    }
    info.b2.onclick = function() {
        if (info.b2.className === "acitveButton") {
            info.info.textContent = neptun.iternal
            img.overviewImg.src = neptun.internalImg
            img.suerfaceImg.style.visibility = "hidden";
        }
    }
    if (info.b2.className === "acitveButton") {
        info.info.textContent = neptun.iternal
        img.overviewImg.src = neptun.internalImg
    }
    info.b3.onclick = function() {
        if (info.b3.className === "acitveButton") {
            info.info.textContent = neptun.surface
            img.overviewImg.src = neptun.overviewImg
            img.suerfaceImg.src = neptun.suerfaceImg
            img.suerfaceImg.style.display = "flex";


        }
    }
    if (info.b3.className === "acitveButton") {
        info.info.textContent = neptun.surface
        img.overviewImg.src = neptun.overviewImg
        img.suerfaceImg.src = neptun.suerfaceImg
        img.suerfaceImg.style.display = "flex";


    }
}



// let textcont = info.name.textContent
// let splittext = textcont.split("")
// info.name.textContent = ""
// let char = 0;
// let timer = setInterval(onTick, 100)


// //the animation


// for (let i = 0; i < splittext.length; i++) {
//     info.name.innerHTML += "<div>" + splittext[i] + "</div>"
// }

// function onTick() {
//     let span = info.name.querySelectorAll("div")[char]
//     span.classList.add("fade")
//     char++
//     if (char === splittext.length) {
//         complete();
//         return;
//     }
// }



//that is the button to show info 

// let imgact1 = document.querySelector("#imgss")
// let b1 = document.querySelector("#b1")
// let b2 = document.querySelector("#b2")
// let b3 = document.querySelector("#b3")

// //###############################
// //*******************************
// //that is the info about the plant 
// let mercueryWord = document.querySelector("#mercuery-word")
// let mercueryInfo = document.querySelector("#mercuery-info")
// let source = document.querySelector("source")

// //###############################
// //*******************************
// //imges
// let suerface = document.querySelector("#suerface")

// //that is the b2 that show the iternal plant

// b1.onclick = function() {
//     suerface.style.visibility = "hidden"
//     imgact1.children[0].style.zIndex = "-1"
//     console.log(imgact1.children[1])
//     mercueryInfo.textContent = "the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky like earth."
// }
// b2.onclick = function() {
//     suerface.style.visibility = "hidden"
//     imgact1.children[0].style.zIndex = "2"
//     console.log(imgact1.children[0])
//     mercueryInfo.textContent = "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."

// }
// b3.onclick = function() {
//     suerface.style.visibility = "visible"
//     imgact1.children[0].style.zIndex = "-1"
// }

// let p = document.querySelector("#mercuer")

// let MercuryO = {
//     word: "Mercueysss",
//     methods:function (){

//     }
// }
// p.onclick = function() {
//     p.textContent = MercuryO.word
//