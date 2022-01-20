async function getproduct(url) {
    try {

        let response = await fetch(url)

        let data = await response.json()
        return data

        // appenddata(data.data)

    }
    catch (er) {
        console.log(er)
    }

}


function appenddata(items,location){

    let x=``;

    items.map((el)=>{



         let{name,image,description,price,manufacturer}=el

        x+=`<div id="content">
                <img src="${image}" alt="">
                <div id="infodiv">
                    <h1>${name}</h1>
                    <p>${description}</p>
                </div>
                <div id="pricediv">
                    <h3>${price}</h3>
                    <p>${manufacturer}</p>
                </div>
            </div>`

        location.innerHTML=x

    })

}

export{getproduct,appenddata}


