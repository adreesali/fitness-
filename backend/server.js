// // Import required modules
// const express = require('express');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcryptjs');
// const { Pool } = require('pg');

// // Create express app
// const app = express();
// const PORT = process.env.PORT || 3001;

// // PostgreSQL configuration
// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'fitnessapp',
//     password: '1234',
//     port: 5432,
// });

// // Middleware to parse JSON bodies
// app.use(bodyParser.json());

// // Login endpoint
// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
//         const user = result.rows[0];
//         if (!user) {
//             return res.status(400).send('Invalid credentials');
//         }
//         const isPasswordMatch = await bcrypt.compare(password, user.password);
//         if (!isPasswordMatch) {
//             return res.status(400).send('Invalid credentials');
//         }
//         res.status(200).send('Login successful');
//     } catch (error) {
//         console.error('Error during login:', error);
//         res.status(500).send('Internal server error');
//     }
// });

// // Signup endpoint
// app.post('/register', async (req, res) => {
//     const { name, email, password } = req.body;
//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, hashedPassword]);
//         res.status(201).send('User created');
//     } catch (error) {
//         console.error('Error during registration:', error);
//         res.status(500).send('Internal server error');
//     }
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });





const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'fitnessapp',
  password: '1234',
  port: 5432,
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS fitness_stats (
    id SERIAL PRIMARY KEY,
    photo VARCHAR(255) NOT NULL,
    heading VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;

app.get('/api', (req, res) => {
  res.send('Hello, world!');
});

app.get('/api/add', async (req, res) => {
  try {
    // Ensure the table exists before attempting to insert data
    await pool.query(createTableQuery);

    // Insert data into the database
    const insertQuery = `
      INSERT INTO fitness_stats (photo, heading, description)
      VALUES 
        ('https://picsum.photos/200/300', 'Elevate Your Fitness Journey', 'Energize your fitness journey with FitPulse – the ultimate app for home workouts. From personalized plans to real-time progress tracking, we\\'re your partner in achieving your fitness goals. Join the FitPulse community, where every heartbeat propels you closer to a stronger, healthier you!'),
        ('https://picsum.photos/200/300', 'EXPERT PERSONAL TRAINING', 'FITNESS nGO Gyms has the best personal training program in the Port Saint Lucie area. Our certified personal trainers are experts in their craft. We create the perfect programs to help you reach your goals. Everything begins with our energy and figuring out how to evolve that, then the journey begins'),
        ('https://picsum.photos/200/300', 'The Experience', 'Cleanliness & Friendliness, Guaranteed. Fitness nGo carries the latest and greatest cardio and strength training equipment available, exciting nGo classes, Personal Training, Tanning, Cryo-Therapy, Hydromassage, Kids Club, and the greatest atmosphere in the city.'),
        ('https://picsum.photos/200/300', 'THE BEST RECOVERY.', 'Our ultimate tier membership gives you the best recovery equipment in Port Saint Lucie. The hydromassage and Cryo chairs alone are worth becoming a member.'),
        ('https://picsum.photos/200/300', 'TURF ZONE', 'The perfect place to knock out those athletic workouts, take content, and use the TANK.'),
        ('https://picsum.photos/200/300', 'ATMOSPHERE', 'Our members tell us that they love our gym and the competitive atmosphere to be better. We are a gym for people that are serious about their health and fitness. Our gym is almost at capacity for monthly members because we want to make sure we don\\'t get overcrowded')
    `;
    await pool.query(insertQuery);

    // Fetch all data after insertion
    const result = await pool.query('SELECT * FROM fitness_stats');
    const data = result.rows;

    console.log('Inserted data:', data);
    res.json(data);
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/migrations', async (req, res) => {
  try {
    await pool.query(createTableQuery);
    res.send({ message: 'Table created successfully' });
  } catch (error) {
    console.error('Error creating table:', error);
    res.send({ error: 'Internal Server Error' });
  }
});

app.get('/api/stats', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM fitness_stats');
    res.json(result.rows);
  } catch (error) {
    console.error('Error retrieving stats:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
