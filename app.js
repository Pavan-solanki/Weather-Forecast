const place=document.querySelector(".weather .place span");
const date=document.querySelector(".weather .day");
const temperature=document.querySelector(".weather .temp");
const emoji=document.querySelector(".img img");
const about=document.querySelector(".img .about");
const inpt=document.querySelector("form input");
const form=document.querySelector("form");

let target="noida";

const fetchData= async()=>{
    const url=`https://api.weatherapi.com/v1/current.json?key=a693631579bb4cfab6a83513242701&q=${target}`;
    const response=await fetch(url);
    const data=await response.json();
    const{
        current:{temp_c,
        condition:{text,icon}},
        location:{name,
    localtime}
    }=data;
    console.log(data);
    temp(temp_c,name,localtime,icon,text);
}
function temp(tempera,city,time,emoj,abou){
    temperature.innerText=tempera;
    place.innerText=city.toUpperCase();
    const exactTime=time.split(" ")[1];
    const exactDate=time.split(" ")[0];
    const exactDay=getFullDayName(new Date(exactDate).getDay());
    date.innerText=`${exactTime}-${exactDay.toUpperCase()} ${exactDate}`;
    emoji.src=emoj;
    emoji.classList.add('cloud');
    about.innerText=abou;
}
fetchData();

const searchField=(e)=>{
    e.preventDefault();
    target=inpt.value;
    fetchData();

}

form.addEventListener("submit",searchField);


function getFullDayName(num){
    switch (num) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        
        
        default:
            return "none";
            break;
    }
}