const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

var td= new Date().toDateString();
var ct= new Date().toLocaleTimeString();

const datahide = document.querySelector('.middle_layer');


day.innerText=td
today_date.innerText=ct


const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal == '' ){
        city_name.innerText = `Please Write The Name Before Search`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=8e2f78f0b9bf8fb87a2f56b737774ed3`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data]

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;
            //condition to check sunny or cloudy imoji
            if(tempMood == "Clear") {
            temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }else if(tempMood == "Clouds") {
            temp_status.innerHTML = 
                "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }else if(tempMood == "Rain") {
            temp_status.innerHTML = 
                "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }else {
            temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }

            datahide.classList.remove('data_hide');
        
        }catch{
            city_name.innerText = `Please Enter The City Name Properly`;
            datahide.classList.add('data_hide');
        }
    }
        

}

submitBtn.addEventListener('click',getInfo);