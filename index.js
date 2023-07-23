window.addEventListener('load', ()=>{
    let long;
    let lat;
    let locationTimezone = document.querySelector("#locationTimezone")
    let tempDescription = document.querySelector("#tempDescription");
    let tempDegree = document.querySelector("#tempDegree");
    let unit = document.querySelector("#unit");

    var secretKey = config.SECRET_KEY;

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position  =>{
        console.log(position);
        long = position.coords.longitude;
        lat = position.coords.latitude;
        
        // Api
        // const api = `http://api.weatherapi.com/v1/current.json?key=' + 2c1e1615efc54dbf9cb152609231403&q + '= ${lat},${long}&aqi=no`

      const api = `http://api.weatherapi.com/v1/current.json?key=${secretKey}= ${lat},${long}&aqi=no`
          console.log (${secretKey)
      
      fetch(api)
         .then(response =>{
            return response.json();
      })
      .then(data =>{
        console.log(data);

        locationTimezone.textContent = data.location.tz_id
        tempDescription.textContent = "It's "  + data.current.condition.text;
        tempDegree.textContent = `${data.current.temp_f}F   /  ${data.current.temp_c}C`;
        
    //    tempDegree.addEventListener ("click", ()=>{
    //       if(unit.textContent === "F"){
    //         tempDegree.textContent = data.current.temp_c;
    //         unit.textContent = "C"
    //       } else{
    //         unit.textContent = "F"
    //         tempDegree.textContent = data.current.temp_f
    //       }
    //    })

    
      })
      })
  
    }
    console.log('working')
  })
