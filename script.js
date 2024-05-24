let searchbtn = document.getElementById('search-inp');

let countryinp = document.getElementById('country-inp');

searchbtn.addEventListener("click", () => {

    let countryname = countryinp.value ;

let finalurl = `https://restcountries.com/v3.1/name/${countryname}?fullText=true`;

console.log(finalurl);

fetch(finalurl).then((response) => response.json())
.then((data) => {

    console.log(data[0]);

    console.log(data[0].capital[0]);

    console.log(data[0].flags.svg);

    console.log(data[0].name.common);

    console.log(data[0].continents[0]);

    console.log(Object.keys(data[0].currencies)[0]);

    console.log(data[0].currencies[Object.keys(data[0].currencies)].name);  

    console.log(Object.values(data[0].languages).toString().split(",").join(","));


result.innerHTML= `

<img src="${data[0].flags.svg}" class="flag-svg">

<h2>${data[0].name.common}</h2>

<div class="wapr">
<div class="data-wapr">

<h4>Continent: </h4>
<sapn> ${data[0].capital[0]}  </sapn>

</div>
</div>

<div class="wapr">
<div class="data-wapr">

<h4>Capital : </h4>
<sapn> ${data[0].continents[0]}  </sapn>

</div>
</div>

<div class="wapr">
<div class="data-wapr">

<h4>Population : </h4>
<sapn> ${data[0].population}  </sapn>

</div>
</div>

<div class="data-wapr">

<h4>Currency : </h4>
<sapn> ${ data[0].currencies[Object.keys(data[0].currencies)].name} -
 ${Object.keys(data[0].currencies)[0]}   </sapn>

</div>
</div>



<div class="wapr">
<div class="data-wapr">

<h4>Common Languages : </h4>
<sapn> ${Object.values(data[0].languages).toString().split(",").join(",")}  </sapn>

</div>
</div>


` ;



    }).catch(() => {
        if(countryname.length==0){
            result.innerHTML= `   <h3> the input feild cannot be empty</h3> `
        }
        else{
            result.innerHTML= `   <h3> please enter country name </h3> `
        }
    })
});