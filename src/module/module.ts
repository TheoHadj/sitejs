export async function getZen(){

    let response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m");
    let data = response.json();
    console.log(data)
    return data; 
} 