var SerialPort = require("serialport");
var port = "COM2";

var serialPort = new SerialPort(port, {
  baudRate: 9600,
});

serialPort.on('open', onPortOpen);
serialPort.on('data', onData);
serialPort.on('close', onClose);
serialPort.on('error', onError);
function onPortOpen(){
  console.log('--Connection Opened--')
}
function onData(data){
//uncomment this code for receiving data
    // console.log("Data received: " + data);

//uncomment this code for receiving ascii data - enter comma separated string value
    var buffer=''
      buffer += data;
      var answers = buffer.split(',');
      let message='' 
      answers.forEach((value,index)=>{
        message+=String.fromCharCode(value)
      })
    console.log(message)
//uncomment this for recognizing commands
    // var msg=''
    // var data=data.toString('hex')
    // for (var i = 0; i < data. length; i += 2) {
      
    //   msg += String. fromCharCode(parseInt(data. substr(i, 2), 16));
    //   console.log('Received:'+data. substr(i, 2) +' is '+msg)
    //   }

    // console.log('Command Recognized')
    // if(msg=='S'){
    //   console.log('Weight is 100.00')
    // }
    // else{
    //   'Not a valid command'
    // }
}



function onClose(){
  console.log("Port is closed, yo");
}
function onError(){
  console.log("something went wrong");
}