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
    let multi=1

    items.map((el)=>{

         let{name,image,description,price,manufacturer}=el

         multi = price*70
            multi=multi.toFixed()
            multi=multi.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            console.log(typeof multi)

        x+=`<div id="content">
                <img src="${image}" alt="">
                <div id="infodiv">
                    <h2>${name}</h2>
                    <p id="info">${description}</p>
                </div>
                <div id="pricediv">
                    <h3>₹${multi}</h3>
                    <p>${manufacturer}</p>
                </div>
            </div>`

        location.innerHTML=x

        let xyz =document.querySelectorAll('#content')

        xyz.forEach((ele,i)=>{

            ele.addEventListener('click',function(){
            console.log(items[i])
            localStorage.setItem("items",JSON.stringify(items[i]))
            localStorage.setItem("recommendations",JSON.stringify(items))
            window.location.href="product1.html"
        })  
        })
    })
}


function appendproduct(location,data){

    let x=``;
    let multi=1

       let{name,image,description,price,manufacturer}=data

    multi= price*70
    multi=multi.toFixed()
    multi=multi.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    console.log(typeof multi)

    x += `  <div id="imgdiv">
         <div id="imgdiv2">
            <img src="${image}" alt="">

         
             <button class="button1" id="button1">ADD TO CART</button>
            <button class="button1" id="button2">BUY NOW</button>

      

            </div>

        </div>

        <div id="infodiv">
                <h1>${name}</h1>
                <h2>${manufacturer}</h2>

                <div id="infodiv1">

                    <button>4.1 *</button>
                    <h5 style="color: grey;" >1,541 Rating & 157 Reviews</h5> <img src="https://www.adgully.com/img/800/68264_fl.png.jpg" alt="">

                </div>

                <h5 style="color:seagreen">Extra 20 % off</h5>

                <h1> ₹ ${multi} </h1> 
                    <div id="offer">
                       
                        <h3><b> Available Offers :</b></h3>

                            
                            <p><span class="bold"><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"alt=""><b>Grand Electronics Sale</b></span>-Extra 20% Off on your above <a href="">View T&C</a> Rs.3000</p>

                    
                            <p><span class="bold"> <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"alt=""> <b>Bank Offer</b></span>-Get an instant Discount of RS.500 on orders above Rs.5000</p>

                    
                            <p><span class="bold"> <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"alt=""> <b>Bank Offer</b></span>-Get an instant Discount of RS.1500 on orders above Rs.8000</p>

                     
  
                    </div>  

                    <div class="exchange">

                        <input type="radio" id="first" name="exc" for>
                        <label for="first">Buy without Exchange</label> <br>
    
                    </div>

                    <div class="exchange">
                        <input type="radio" id="second" name="exc" for>
                        <label for="second">Buy with Exchange <span>upto 1000 off</span></label>

                    </div>

                    <div>
                        <h4>Delivery</h4> 
                       <div style="display: flex;"> <input type="text" placeholder="Enter pincode">
                    <h2 style="color: blue;">check</h2></div> 

                        <h4>Description</h4>
                        <p>${description}</p>
                    </div>
        </div>
`
location.innerHTML=x

}



function recommend(data,location){

    let x=``
    let multi=1

    data.forEach((el)=>{

        let{image,manufacturer,price}=el
        multi=price*70
         multi=multi.toFixed()
         multi=multi.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        

        x +=`
        <div id="recommend">
        
            <img src="${image}" alt="">
            <h3>${manufacturer}</h3>
            <h3>₹${multi}</h3>
        </div>`

        location.innerHTML=x

        // let xyz=document.querySelectorAll('#recommend')

        // xyz.forEach((ele,i)=>{

        //     ele.addEventListener('click',function(){

        //         console.log(data[i])

        //     })

        // })



    })

}


export{getproduct,appenddata,appendproduct,recommend}


