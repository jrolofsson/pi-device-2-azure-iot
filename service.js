var clientFromConnectionString = require ('azure-iot-device-amqp').clientFromConnectionString;
var Message = require('azure-iot-device').Message;
var temp = require('pi-temperature');
const dotenv = require('dotenv');
dotenv.config();

const connectionString = process.env.CONNECTION_STRING;
const refreshInterval = process.env.REFRESH_INTERVAL;

var client = clientFromConnectionString(connectionString);

setInterval(function(){
  temp.measure(function(err, temp){
    if (err) {
      console.error(err);
    }
    else {
      var tempMessage = new Message(JSON.stringify({
        CpuTemperature : temp
      }));
      
      client.sendEvent(tempMessage, function(err){
        if (err){
          console.error('Error occured while trying to send data : ' + err.toString());
        } else {
          console.info('Message sent: ' + tempMessage.getData());
        }
      })
    }
  })
}, refreshInterval);