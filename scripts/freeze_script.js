
    import { header, footer } from "../components/header.js"

    import { getproduct, appenddata} from "./data.js"

    document.querySelector("header").innerHTML = header()

    document.querySelector("footer").innerHTML = footer()

    let main = document.querySelector('#main')
    

    const api1 = `https://flipkart-backendserver.herokuapp.com/freeze`
    const api2 = `https://flipkart-backendserver.herokuapp.com/freeze/sort?value=-1`
    const api3 = `https://flipkart-backendserver.herokuapp.com/freeze/sort?value=1`
    const api4 = `https://flipkart-backendserver.herokuapp.com/freeze/brand?brand=Samsung`
    const api5 = `https://flipkart-backendserver.herokuapp.com/freeze/brand?brand=GE`
    const api6 = `https://flipkart-backendserver.herokuapp.com/freeze/brand?brand=Whirlpool`
    const api7 = `https://flipkart-backendserver.herokuapp.com/freeze/brand?brand=Frigidaire`


    async function getdata(api) {


        try {
            let res = await getproduct(api)
            console.log(res)
            appenddata(res, main)
        }
        catch (er) {
            console.log(er)
        }

    }

    getdata(api1)

    let asc = document.querySelector('#asc')
    let dsc = document.querySelector('#dsc')
    let samsung = document.querySelector('#samsung')
    let ge= document.querySelector('#ge')
    let whirlpool = document.querySelector('#whirlpool')
    let Fri = document.querySelector('#Fri')




    let track = () => {
        if (asc.checked == true) {
            getdata(api2)
        }
    }


    let track2 = () => {
        if (dsc.checked == true) {
            getdata(api3)
        }
    }

    let brand = () => {
        if (samsung.checked == true) {
            getdata(api4)
        }
    }

    let brand2 = () => {
        if (ge.checked == true) {
            getdata(api5)
        }
    }


    let brand3 = () => {
        if (whirlpool.checked == true) {
            getdata(api6)
        }
    }
    let brand4 = () => {
        if (Fri.checked == true) {
                getdata(api7)
        }
    }


    asc.addEventListener('change', track)
    dsc.addEventListener('change', track2)
    samsung.addEventListener('change', brand)
    ge.addEventListener('change', brand2)
    whirlpool.addEventListener('change', brand3)
    Fri.addEventListener('change', brand4)

    let num =122334

    console.log(num.toLocaleString("en-US"))