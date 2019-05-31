/* Here we import the library node-rest-client.
   You can install this library with nmp using "npm install node-rest-client" */
var Client = require('node-rest-client').Client;

/* This method is used to create the sensor */
function createSensor(name, temp, hum, lastread)
{
	var sensor = {
		Station: name,
		data: {
			temperature: temp,
			humidity: hum,
			updated: lastread
		}
	};

	sendData(sensor);
}

/* This method is used to send the data to A2G InpuStream API */
function sendData(sensor)
{
	var allData = {
		IKEY: "3d87ce8e607255e644d69879974b559aff2345b8",
		Data: JSON.stringify(sensor)
	};
	
	var client = new Client();

	var args = {
		data: JSON.stringify(allData),
		headers: { "x-api-key": "d9fdf4a6406af75691a7fe43f0d8a57dc8f57273" }
	};

	client.post("https://listen.a2g.io/v1/testing/inputstream", args, 
		function (data, response)
		{
			console.log(data);
		}
	);
}

/* Here we initialize the program */
createSensor("Station 1", 18.9, 7.2, new Date());