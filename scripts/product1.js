      import { header, footer } from "../components/header.js"
      

            import { appendproduct,recommend} from "./data.js"

            document.querySelector("#nav").innerHTML = header()

            document.querySelector("#foot").innerHTML = footer()

            var container=document.querySelector('#container')
            var lower = document.querySelector('#lower')
            let recommendations = JSON.parse(localStorage.getItem('recommendations'))


            let data = JSON.parse(localStorage.getItem('items'))

             appendproduct(container,data)

            let cartarray = JSON.parse(localStorage.getItem('cartarray')) || []

            let but = document.querySelector('#button1')

             but.addEventListener('click', cart)

        function cart() {

         cartarray.push(data)

        data=JSON.stringify(data)

        console.log(data)

       // setproduct(data,`http://localhost:8500/cart`)

         localStorage.setItem("cartarray",JSON.stringify(cartarray))

         

  
        //  console.log(cartarray)

        window.location.href="./kart.html"


        }


    // async function setproduct(item,url) {
    //     try {

    //         let response = await fetch(url,{
    //            method:"POST",
    //            body:item,
    //            headers:{
    //                "Content-Type":'application/json'
    //            }
    //         })

    //         let d = await response.json()
    //        console.log(d)

    //         // appenddata(data.data)

    //     }
    //     catch (er) {
    //         console.log(er)
    //     }

    // }
      

      recommend(recommendations,lower)

