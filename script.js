
document.querySelector("#search").addEventListener("click",getData)

function getData()
{
    // fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json")
    fetch("https://api.adviceslip.com/advice")

    .then((res)=> res.json())
    .then((data)=>{
        console.log(data.slip.advice)

        document.querySelector("#output").innerHTML = data.slip.advice;
        
    }).catch((err)=>console.log(err,"unable to fetch data"))
}


// connect input.value to search button
//  write function for serach
