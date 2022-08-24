// const accountSid = "AC171572224e80c8b12a952d9ee408ec9a";
// const authToken = "741b031cedc133c56d133a93d19f96c2";
// const twilio = require('twilio');
// const client = require('twilio')(accountSid, authToken);

// client.verify.v2.services('VAb26fecfb757a17559ddd9249ca0aa86a')
//                 .verifications
//                 .create({to: 'bilalkeskin_94@hotmail.com', channel: 'email'})
//                 .then(verification => console.log(verification.sid));

//                 console.log('hey')


// const accountSid = "AC171572224e80c8b12a952d9ee408ec9a";
// const authToken = "741b031cedc133c56d133a93d19f96c2";
// const client = require('twilio')(accountSid, authToken);

// client.verify.v2.services('VAb26fecfb757a17559ddd9249ca0aa86a')
//              .verificationChecks
//              .create({to: 'bilalkeskin_94@hotmail.com', code: '123456'})
//              .then(verification_check => console.log(verification_check.sid));

//SENDGRID_API_KEY='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'


const accountSid = "AC171572224e80c8b12a952d9ee408ec9a";
const authToken = "741b031cedc133c56d133a93d19f96c2";
const client = require('twilio')(accountSid, authToken);

client.verify.v2.services('VAb26fecfb757a17559ddd9249ca0aa86a')
                .verifications
                .create({channelConfiguration: {
                   template_id: 'd-2aebc801db814ff2a385b5643f7fa712',
                   from: 'bkeskin@ideacompiler.com',  
                   from_name: 'test'
                 }, to: 'bilalkeskin_94@hotmail.com', channel: 'email'})
                .then(verification => console.log(verification.sid)).catch(err => console.log(err));