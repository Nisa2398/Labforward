var SerialPort = require("serialport");
const ReadLine =require('@serialport/parser-readline')
var port = "COM1";
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var serialPort = new SerialPort(port, {
  baudRate: 9600
});

serialPort.on('open', onPortOpen);

serialPort.on('close', onClose);
serialPort.on('error', onError);

function onPortOpen(){
  console.log('--Connection Opened--')
  rl.question("Sending:", function (message) {
  //uncomment this for testing ascii code
    //   serialPort.write( Buffer.from(message,'ascii'), function(err) {
    //     if (err){ 
    //         console.log(err)
    //     }
    
    //     console.log('message written');
    // });
  //uncomment this for sending command
    // console.log("Sending Command:",'Send stable weight value')
  // uncomment this for sending normal data
        serialPort.write(message.toString(), function (err) {
          if (err) {
              console.log(err)
          }

          console.log('message written');
      });
  })
}

function onClose(){
  console.log("Port is closed, yo");
}
function onError(){
  console.log("something went wrong");
}
rl.on("close", function () {

  process.exit(0);
});