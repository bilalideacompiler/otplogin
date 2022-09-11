const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');
app.use(cors());
app.use(express.json());

require('dotenv').config({ path: __dirname + '/.env' });
const template = process.env.VERIFY_TEMPLATE_SID;
const client = require('@sendgrid/mail');
client.setApiKey(process.env.SENDGRID_API_KEY);

// create a random 6 digit number
function generateCode() {
  return Math.floor(100000 + Math.random() * 900000);
}

app.get('/api/v1/getcode/:email', (req, res) => {
  const email = req.params.email;
  let code = generateCode();
  res.status(200).json({
    status: 'success',
    data: {
      code,
      email,
      mail: client.send({
        to: {
          email,
        },
        from: {
          email: 'bkeskin@ideacompiler.com',
          name: 'bilal',
        },
        templateId: template,
        dynamic_template_data: {
          code,
        },
      }),
    },
  });
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
