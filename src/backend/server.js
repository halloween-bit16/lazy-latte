const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit', async (req, res) => {
  const formData = req.body;

  const workbook = new ExcelJS.Workbook();
  let worksheet;

  try {
    // Try to load existing workbook
    await workbook.xlsx.readFile('reservations.xlsx');
    worksheet = workbook.getWorksheet('Reservations');
  } catch (err) {
    // If not exist, create one
    worksheet = workbook.addWorksheet('Reservations');
    worksheet.columns = [
      { header: 'Name', key: 'name', width: 20 },
      { header: 'Location', key: 'option', width: 20 },
      { header: 'Date', key: 'date', width: 15 },
      { header: 'Time', key: 'time', width: 15 },
      { header: 'Email', key: 'email', width: 25 },
      { header: 'Message', key: 'message', width: 40 },
    ];
  }

  worksheet.addRow(formData);
  await workbook.xlsx.writeFile('reservations.xlsx');

  res.status(200).send('Reservation saved to Excel!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
