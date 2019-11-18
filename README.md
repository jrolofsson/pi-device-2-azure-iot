# pi-device-2-azure-iot
This "application" is a first try to work with the Raspberry Pi Zero as an IoT-device. 
The purpose here is to send telemetry from the Pi to an Azure IoT-hub (then what happens there, stays there). 

## Workings under the hood 
For now, since I don't have a real sensor to play with the Pi returns its own CPU temperature and sends that to Azure, but the thought is to hook up a real sensor and get more valuable data to work with. 

## Getting started
Clone the repo to the pi, do a `npm install` and add a .env file (exampel included) then just `node service.js` and see it work. 

You need to add the Azure IoT Device-connection string in the env file for it to be able to connect. 
