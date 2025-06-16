// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs');
const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit', async (req, res) => {
  const formData = req.body;

  const workbook = new ExcelJS.Workbook();
  let worksheet;
  const filePath = 'reservations.xlsx';

  try {
    if (fs.existsSync(filePath)) {
      await workbook.xlsx.readFile(filePath);
      worksheet = workbook.getWorksheet('Reservations');

      if (!worksheet) {
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
    } else {
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

    worksheet.addRow({
      name: formData.name || '',
      option: formData.option || '',
      date: formData.date || '',
      time: formData.time || '',
      email: formData.email || '',
      message: formData.message || '',
    });

    await workbook.xlsx.writeFile(filePath);

    res.status(200).send('Reservation saved!');
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
