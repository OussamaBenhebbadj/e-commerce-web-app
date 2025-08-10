const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const app = require('./app');


dotenv.config({ path: path.join(__dirname, '../config.env') });

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ Connected to DB");
}).catch(err => {
  console.error("❌ DB Connection Error:", err.message);
});



const port = process.env.APP_PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port} ...`);
});
