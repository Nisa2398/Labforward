# Labforward
# SerialPort Communication Project
## Overview
This project demonstrates how to use Node.js for serial communication with a device via a COM port. The code utilizes the `serialport` package to establish a connection, send messages, and handle events like open, close, and errors. This is particularly useful for interacting with hardware devices that communicate over serial interfaces.
## Prerequisites
Ensure that Node.js is installed on your machine.
## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/serialport-communication.git
   cd serialport-communication
2. **Install Dependencies:**
   ```bash
   npm install

## Usage
Connect your device: Ensure your device is connected to the COM port (e.g., COM1) that you're intending to communicate with.
1. **Run the script**:
    ```bash
    node send.js
The script will open a connection to the specified COM port at a baud rate of 9600. You can then input a message via the terminal, which will be sent over the serial connection.
Example Input: When prompted with Sending:, type your message and press Enter. The message will be sent over the serial port.

2.**Testing Options**:
For testing ASCII code, uncomment the serialPort.write( Buffer.from(message, 'ascii') section.
For sending a command, uncomment the console.log("Sending Command:", 'Send stable weight value') section.
