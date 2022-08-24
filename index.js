const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.verify.v2.services('VAb26fecfb757a17559ddd9249ca0aa86a')
                .verifications
                .create({channelConfiguration: {
                   template_id: 'd-2aebc801db814ff2a385b5643f7fa712',
                   from: 'bkeskin@ideacompiler.com',  
                   from_name: 'test2'
                 }, to: 'bilalkeskin_94@hotmail.com', channel: 'email'})
                .then(verification => console.log(verification.sid)).catch(err => console.log(err));