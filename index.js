const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());

const publicVapidKey ='BI4fes24xSgC28R5jThwMyJ5QuZGQwHT6xeq89Bl7y7RIAhy5LRNEpNNcA_8ZdJFUUNqHhe09r_K-qC29nxPBSM';
const privateVapidKey ='5Z03kKz3JBH4hddB0Z9_irDAYWKM75BsivZK_b1MMvM';

webpush.setVapidDetails('mailto:tannisthabiswasofficial@gmail.com',publicVapidKey, privateVapidKey);

// Subscribe Route
app.post('/subscribe', (req, res) => {
    // Get pushSubscription object
    const subscription = req.body;

    // Send 201 - resourse created status
    res.status(201).json({});

    // Create payload
    const payload = JSON.stringify({ title : 'Welcome To Your University'});

    // Pass object into sendNotification func
    webpush.sendNotification(subscription, payload).catch(err => vonsole.error(err));
});

const schedule = require('node-schedule')

// Particular Date and Time
const someDate = new Date('2022-04-15T13:02:00.000+5:30');
schedule.scheduleJob(someDate, () =>  {
    console.log('Job Run AT', new Date().toString())
})

// At regular intervals
schedule.scheduleJob('first-job', '* */2 * * * *',() => {
    console.log('You Should Go Study')
    schedule.cancelJob('first-job')
} )

const secondJob = schedule.scheduleJob('second-job', '* */7 * * * *',() => {
    console.log('You Have An Assignment Due')
    secondJob.cancel()
} )

const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));