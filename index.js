import express from 'express'; // Import express
const app = express();
const port = 8080; // Default port

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
