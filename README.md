# a2gapi-nodejs
Working sample that connects from NodeJS with A2G API

<b>Welcome!</b>

This code is meant to be used to connect from NodeJS with Alert2Gain's API for InputStreams. This code simulates a weather station that generates random values for probes related to temperature and humidity, for every simulated reading a timestamp is generated and formatted.

After the data is captured, it's sent to the API by the sendData method, when you set up the REST Request, you must send the x-api-key header that was assigned to your account in order to connect successfully.

You must import with NPM the library <b>node-rest-client</b>.

<b>Usage</b>

Replace [YOUR_API_KEY] with the API Key provided by Alert2Gain, and replace [YOUR_INPUTSTREAM_KEY] with the Input Stream Key that was provided when you created the InputStream.

After your sample data is sent to the API, you can run the schema scanner tool that will run over the transmitted data in order to detect the schema of the transmitted data.

<b>Questions</b>

You can submit an issue in this repo or write us back through the Alert2Gain contact email hello@alert2gain.com.
