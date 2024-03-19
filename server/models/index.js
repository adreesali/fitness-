// const express = require("express")
// const mongoose = require('mongoose')
// const cors = require('cors') 
// const EmployeeModel = require('./models/Employee')

// const app = express();
// app.use(express.json());
// app.use(cors())

// mongoose.connect('mongodb://127.0.0.1:27017/employee');

// app.post("/login", (req, res) => {
//     const {email, password} = req.body;
//     EmployeeModel.findOne({email: email})
//     .then(user => {
//        if(user) {
//         if(user.password === password) {
//             res.json("Success")
//         } else{
//             res.json("the password is incorrect")
//         }
//         }else {
//             res.json("No record existed")
//         }
    
//     })
// })

// app.post('/register', (req, res) => {
//     EmployeeModel.create(req.body)
//     .then(employees => res.json(employees))
//     .catch
//     (err => res.json(err)) 
// })

// app.listen(3001, () => {
//     console.log("server is running")
// } )







// app.get('/api/migrations', async (req, res) => {
//   try {
//     await pool.query(createTableQuery);
//     res.status(200).json({ message: 'Table created successfully' });
//   } catch (error) {
//     console.error('Error creating table:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.get('/api/stats', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM fitness_stats');
//     res.json(result.rows);
//   } catch (error) {
//     console.error('Error retrieving stats:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});





