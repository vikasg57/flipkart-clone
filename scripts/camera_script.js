
    import { header, footer } from "../components/header.js"

    import { getproduct, appenddata} from "./data.js"

    document.querySelector("header").innerHTML = header()

    document.querySelector("footer").innerHTML = footer()

    let main = document.querySelector('#main')
    //   ` http://localhost:3030/products?$limit=15?&description[$like]=*megapixel*&name[$like]=*dslr*&$sort[price]=1`

   

    const api1 = `https://flipkart-backendserver.herokuapp.com/camera`
    const api2 = `https://flipkart-backendserver.herokuapp.com/camera/sort?value=-1`
    const api3 = `https://flipkart-backendserver.herokuapp.com/camera/sort?value=1`
    const api4 = `https://flipkart-backendserver.herokuapp.com/camera/brand?brand=Nikon`
    const api5 = `https://flipkart-backendserver.herokuapp.com/camera/brand?brand=Canon`
    const api6 = `https://flipkart-backendserver.herokuapp.com/camera/brand?brand=Sony`

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
    let nikon = document.querySelector('#nikon')
    let canon = document.querySelector('#canon')
    let sony = document.querySelector('#sony')



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
        if (nikon.checked == true) {
            getdata(api4)
        }
    }

    let brand2 = () => {
        if (canon.checked == true) {
            getdata(api5)
        }
    }


    let brand3 = () => {
        if (sony.checked == true) {
            getdata(api6)
        }
    }
    asc.addEventListener('change', track)
    dsc.addEventListener('change', track2)
    nikon.addEventListener('change', brand)
    canon.addEventListener('change', brand2)
    sony.addEventListener('change', brand3)

