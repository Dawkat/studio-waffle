
//playStation is the name of the function.
//The second line of code calls for a sound, while also finds the file location.
//The third line of code shows that it will play the sound.
function playStation(){
    mySound = new sound ("spacestation.mp3");
    mySound.play();
}
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
        this.sound.play();
    }
}
//This organizes the data from the dataloader file.
class InputData{
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
        )
        {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude=longitude;
        this.gps_altitude=gps_altitude;
        this.bmpSensor_altitude=bmpSensor_altitude;
        this.bmpSensor_pressure=bmpSensor_pressure;
        this.bmpSensor_temp=bmpSensor_temp;
        this.digSensor_temp=digSensor_temp;
        this.cssSensor_temp=cssSensor_temp;
        this.cssSensor_eCO2=cssSensor_eCO2;
        this.cssSensor_TVOC=cssSensor_TVOC;
        this.UV=UV;
        this.accelX=accelX;
        this.accelY=accelY;
        this.accelZ=accelZ;
        this.magneticX=magneticX;
        this.magneticY=magneticY;
        this.magneticZ=magneticZ;
        this.gyroX=gyroX;
        this.gyroY=gyroY;
        this.gyroZ=gyroZ;
        }
    }
//This connects to the HTML file and will be loaded into the array.
function getData(){
    var loadedData=loadData();
    return loadedData;}

//This connects the the HTML file and will help with inputing the data into the rows.
function dataRow(legend, value, units){
    msg = "<td>";
    msg +=legend;
    msg +=": </td><td>";
    msg +=value;
    msg +="" + units;
    msg +="</td>";
    return msg;
}




















    





















