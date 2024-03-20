 


// const express = require('express');
// const { Pool } = require('pg');
// const cors = require('cors');

// const app = express();
// const port = 3000;
// app.use(cors());

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   password: '1234',
//   port: 5432,
// });

// const createTableQuery = `
//   CREATE TABLE IF NOT EXISTS fitness_stats (
//     id SERIAL PRIMARY KEY,
//     photo VARCHAR(255) NOT NULL,
//     heading VARCHAR(255) NOT NULL,
//     description TEXT NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//   )
// `;

// app.get('/api', (req, res) => {
//   res.send('Hello, world!');
// });

// app.get('/api/add', async (req, res) => {
//   try {
//     // Ensure the table exists before attempting to insert data
//     await pool.query(createTableQuery);

//     // Insert data into the database
//     const insertQuery = `
//       INSERT INTO fitness_stats (photo, heading, description)
//       VALUES 
//         ('https://picsum.photos/200/300', 'Elevate Your Fitness Journey', 'Energize your fitness journey with FitPulse – the ultimate app for home workouts. From personalized plans to real-time progress tracking, we\\'re your partner in achieving your fitness goals. Join the FitPulse community, where every heartbeat propels you closer to a stronger, healthier you!'),
//         ('https://picsum.photos/200/300', 'EXPERT PERSONAL TRAINING', 'FITNESS nGO Gyms has the best personal training program in the Port Saint Lucie area. Our certified personal trainers are experts in their craft. We create the perfect programs to help you reach your goals. Everything begins with our energy and figuring out how to evolve that, then the journey begins'),
//         ('https://picsum.photos/200/300', 'The Experience', 'Cleanliness & Friendliness, Guaranteed. Fitness nGo carries the latest and greatest cardio and strength training equipment available, exciting nGo classes, Personal Training, Tanning, Cryo-Therapy, Hydromassage, Kids Club, and the greatest atmosphere in the city.'),
//         ('https://picsum.photos/200/300', 'THE BEST RECOVERY.', 'Our ultimate tier membership gives you the best recovery equipment in Port Saint Lucie. The hydromassage and Cryo chairs alone are worth becoming a member.'),
//         ('https://picsum.photos/200/300', 'TURF ZONE', 'The perfect place to knock out those athletic workouts, take content, and use the TANK.'),
//         ('https://picsum.photos/200/300', 'ATMOSPHERE', 'Our members tell us that they love our gym and the competitive atmosphere to be better. We are a gym for people that are serious about their health and fitness. Our gym is almost at capacity for monthly members because we want to make sure we don\\'t get overcrowded')
//     `;
//     await pool.query(insertQuery);


            


const insertQuery = `
       INSERT INTO fitness_articles (photo, heading, description)
       VALUES 
      ('https://picsum.photos/200/300', 'The Ultimate Beginner's Guide to Fitness', 'Embarking on a fitness journey can be both exciting and overwhelming, especially if you're new to the world of exercise and wellness. In "The Ultimate Beginner's Guide to Fitness," we provide you with a comprehensive roadmap to kickstart your fitness journey with confidence and clarity. Whether you're looking to lose weight, build muscle, improve your overall health, or simply enhance your well-being, this guide covers everything you need to know to get started and stay motivated along the way. From setting realistic goals and creating personalized workout plans to understanding the fundamentals of nutrition and incorporating essential exercises into your routine, we break down each step into manageable and actionable insights. Discover the benefits of different types of workouts, learn how to listen to your body, and explore the importance of rest and recovery for optimal results. With practical tips, expert advice, and motivational strategies, this guide empowers you to take control of your fitness journey and achieve your goals, one step at a time. Whether you're a complete novice or someone looking to refresh their fitness knowledge, "The Ultimate Beginner's Guide to Fitness" is your go-to resource for building a strong foundation and embracing a healthier, happier lifestyle. Get ready to unlock your full potential and become the best version of yourself.'),
         ('https://picsum.photos/200/300', 'Top 10 Essential Exercises for a Full-Body Workout Routine', 'Achieving a well-rounded, strong, and healthy physique requires a strategic approach to exercise, focusing on key movements that target multiple muscle groups simultaneously. In our article, "Top 10 Essential Exercises for a Full-Body Workout Routine," we unveil a curated selection of exercises designed to sculpt your body, enhance your strength, and improve your overall fitness level.From foundational compound movements to dynamic functional exercises, we've handpicked the most effective workouts to ensure maximum results in minimal time. Whether you're a beginner or an experienced fitness enthusiast, these exercises cater to all fitness levels and can be customized to suit your individual goals and preferences. Discover the power of squats, deadlifts, lunges, push-ups, and pull-ups, among others, as we guide you through proper form, technique, and variations to challenge your muscles and ignite your metabolism. With a focus on functional movement patterns and full-body engagement, these exercises not only build strength and muscle mass but also improve balance, flexibility, and coordination. Whether you prefer to work out at home or in the gym, our comprehensive guide provides you with everything you need to know to incorporate these essential exercises into your routine seamlessly. Say goodbye to monotony and hello to a diverse, effective, and enjoyable workout regimen that delivers real results. Join us as we explore the top 10 exercises that form the cornerstone of a full-body workout routine, empowering you to unleash your potential, transform your physique, and embrace a healthier, happier lifestyle. It's time to sculpt your body, boost your confidence, and become the best version of yourself with these essential exercises.'),
         ('https://picsum.photos/200/300', 'Understanding the Importance of Nutrition in Your Fitness Journey', 'TitleIn the pursuit of a healthier and fitter lifestyle, it's easy to get caught up in the intensity of workouts and the allure of quick fixes. However, one aspect that often gets overlooked but is crucial to your success is nutrition. Understanding the importance of nutrition in your fitness journey is not only essential for reaching your goals but also for sustaining long-term health and vitality. Think of your body as a high-performance machine, and nutrition as the fuel that powers it. Just as a car requires quality fuel to run efficientlyfitness.
Protein often hailed as the king of nutrients for fitness enthusiasts, is essential for muscle repair, growth, and recovery. Whether    you're aiming to bulk up or tone your physique, adequate protein intake is non-negotiable. Incorporating lean sources of protein such as chicken, fish, tofu, beans, and lentils into your meals helps support muscle development and repair, ensuring you see the results of your hard work in the gym. Carbohydrates and fats are equally important macronutrients that provide your body with energy for daily activities and workouts. Carbohydrates serve as the primary fuel source for your muscles during high-intensity exercises, while fats play a crucial role in hormone production, cell function, and nutrient absorption. Opt for complex carbohydrates like whole grains, fruits, and vegetables, as well as healthy fats from surces like avocados, nuts, seeds, and olive oil to fuel your workouts and promote overall well-being. **Micronutrients for Optimal Health:** In addition to macronutrients, micronutrients such as vitamins and minerals are essential for maintaining various bodily functions and supporting overall health. Incorporating a diverse range of colorful fruits and vegetables into your diet ensures you're getting a wide array of micronutrients, antioxidants, and phytochemicals that help boost immunity, fight inflammation, and protect against chronic diseases.**Hydration: The Unsung Hero:** Last but certainly not least, proper hydration is paramount for performance, recovery, and overall health. Water plays a crucial role in regulating body temperature, lubricating joints, transporting nutrients, and flushing out toxins from your system. Make it a habit to drink an adequate amount of water throughout the day, especially before, during, and after exercise, to stay hydrated and optimize your workout performance. **The Bottom Line:** In conclusion, nutrition is the cornerstone of your fitness journey, providing the foundation upon which your progress and success are built. By fueling your body with the right nutrients in the right proportions, you can enhance your athletic performance, accelerate your results, and improve your overall well-being. Remember, fitness is not just about how hard you work in the gym but also about how well you nourish your body outside of it. Prioritize nutrition, make informed food choices, and reap the rewards of a balanced and sustainable approach to health and fitness.'),
         ('https://picsum.photos/200/300', 'Overcoming Common Fitness Challenges ', 'Embarking on a fitness journey is often accompanied by various challenges that can hinder progress and demotivate even the most dedicated individuals. In "Overcoming Common Fitness Challenges," we delve into the obstacles that many people face on their path to better health and provide practical strategies to overcome them. From time constraints and lack of motivation to plateaus and injuries, we address a wide range of common challenges that individuals encounter throughout their fitness journey. Through insightful tips, expert advice, and real-life examples, we offer effective solutions to help you navigate these obstacles and stay on track toward your goals. Learn how to overcome procrastination, stay consistent with your workouts, and find the motivation to push through tough times. Discover how to adapt your routine to fit your busy schedule, break through plateaus, and prevent injuries with proper form and technique. With our guidance, you'll gain the confidence and resilience to tackle any challenge that comes your way, allowing you to continue progressing and thriving on your fitness journey. "Overcoming Common Fitness Challenges" is your roadmap to conquering obstacles, realizing your potential, and achieving lasting success in your pursuit of health and wellness.'),
         ('https://picsum.photos/200/300', 'How to Set Realistic Fitness Goals and Stay Motivated', ' Setting fitness goals is essential for progress, but it's equally important to make sure those goals are realistic and sustainable. Here's how you can set achievable objectives and maintain the motivation to reach them. Firstly, start by defining your objectives clearly. Instead of vague goals like "get in shape," be specific. For instance, aim to lose a certain amount of weight, run a particular distance, or increase your strength by lifting heavier weights. Specific goals provide clarity and help you track your progress effectively. Once you've set your goals, break them down into smaller, manageable milestones. This approach makes your objectives less daunting and allows you to celebrate achievements along the way. For example, if your ultimate goal is to lose 20 pounds in six months, set monthly targets of losing 3-4 pounds. These incremental goals keep you focused and motivated. Moreover, make sure your goals are realistic and attainable within your current lifestyle and circumstances. Consider factors like your fitness level, available time, and resources. Setting overly ambitious goals can lead to frustration and burnout. Instead, set targets that challenge you but are within reach with consistent effort. To stay motivated, find your source of inspiration. Whether it's visualizing your ideal physique, joining a supportive community, or following fitness influencers for motivation, find what works for you. Additionally, keep track of your progress using a fitness journal or app. Seeing how far you've come can reignite your determination during challenging times. Furthermore, embrace the power of accountability. Share your goals with a friend, family member, or workout buddy who can offer support and encouragement. Having someone to share your successes and setbacks with can make the journey more enjoyable and keep you accountable. Lastly, be flexible and adjust your goals as needed. Life is unpredictable, and obstacles may arise. If you encounter setbacks or realize your initial goals were too ambitious, don't be afraid to revise them. Remember, the most important thing is to keep moving forward and prioritize your overall well-being throughout your fitness journey.'),
         ('https://picsum.photos/200/300', 'Building Muscle and Boosting Metabolism ', 'Building muscle and boosting metabolism are two intertwined goals that can significantly impact your overall health and fitness journey. Muscle mass plays a vital role in increasing metabolism, as muscle tissue burns more calories at rest compared to fat tissue. To effectively build muscle and enhance metabolism, it's essential to prioritize resistance training exercises such as weightlifting and bodyweight exercises. These activities stimulate muscle growth, leading to an increase in lean muscle mass. Additionally, incorporating compound exercises that target multiple muscle groups simultaneously can maximize efficiency and results. Alongside strength training, adequate protein intake is crucial for muscle repair and growth. Aim to consume protein-rich foods such as lean meats, poultry, fish, eggs, dairy products, legumes, and tofu. Moreover, ensure you're getting enough rest and recovery between workouts to allow your muscles to repair and grow stronger. Consistency is key, so maintain a regular exercise routine and make gradual progressions in intensity and volume over time. By focusing on building muscle through resistance training and supporting your efforts with proper nutrition and recovery, you can effectively boost your metabolism and achieve your fitness goals.')
         ('https://picsum.photos/200/300', 'Effective Workouts for a Strong Heart', 'A strong heart is the cornerstone of overall health and fitness. Incorporating effective workouts targeted at strengthening your heart can significantly improve cardiovascular function, enhance endurance, and reduce the risk of heart disease. One of the most effective workouts for a strong heart is aerobic exercise. Activities such as brisk walking, jogging, cycling, swimming, and dancing elevate your heart rate, improving circulation and increasing the efficiency of your heart muscle. Aim for at least 150 minutes of moderate-intensity aerobic exercise or 75 minutes of vigorous-intensity exercise per week, spread across several days, to maximize cardiovascular benefits. Consistency is key, so find activities you enjoy and make them a regular part of your routine. In addition to aerobic exercise, incorporating interval training can further boost heart health. Interval training involves alternating between periods of high-intensity exercise and periods of low-intensity recovery. This type of workout challenges your heart to work harder during intense intervals, followed by brief recovery periods that allow for active rest. Examples of interval training include sprint intervals, circuit training, and high-intensity interval training (HIIT). Not only does interval training improve cardiovascular fitness, but it also helps burn calories more efficiently and can lead to greater overall fitness gains in a shorter amount of time. However, it's important to gradually increase the intensity and duration of your interval workouts to prevent injury and allow your body to adapt to the demands placed on it. Always listen to your body and consult with a healthcare professional before starting any new exercise regimen, especially if you have pre-existing medical conditions or concerns. By incorporating these effective workouts into your fitness routine, you can strengthen your heart and improve your overall health and well-being.')
         ('https://picsum.photos/200/300', 'Key Components of a Well-Rounded Fitness Routine', 'A well-rounded fitness routine encompasses various components to ensure comprehensive physical health and overall well-being. Firstly, incorporating cardiovascular exercise is crucial for improving heart health and stamina. Activities such as running, cycling, swimming, and dancing elevate heart rate, enhancing circulation, and boosting endurance. Aim for at least 150 minutes of moderate-intensity aerobic exercise or 75 minutes of vigorous-intensity exercise per week, divided over several sessions to maximize cardiovascular benefits. Additionally, strength training plays a vital role in building lean muscle mass, increasing metabolism, and improving overall strength and functionality. Incorporate resistance exercises using body weight, free weights, or resistance bands to target major muscle groups, aiming for two to three sessions per week with adequate rest between workouts to allow for muscle recovery and growth. Furthermore, flexibility and mobility exercises are essential for maintaining joint health, preventing injuries, and promoting better posture and range of motion. Include stretching, yoga, or Pilates in your routine to improve flexibility, balance, and coordination. Regular practice of these exercises not only enhances physical performance but also contributes to stress relief and relaxation. Lastly, don't overlook the importance of rest and recovery in your fitness regimen. Adequate sleep, proper hydration, and nutrition are fundamental for supporting your body's repair and growth processes. Incorporate rest days into your weekly schedule to prevent burnout and allow your muscles to recover fully. By integrating these key components into your fitness routine, you can achieve a balanced approach to health and fitness, leading to improved overall quality of life and longevity.')
         ('https://picsum.photos/200/300', 'The Role of Rest and Recovery in Maximizing Your Fitness Results', 'Rest and recovery are often overlooked aspects of fitness, yet they play a crucial role in achieving optimal results. Many people believe that the key to fitness success lies in pushing harder and working out more frequently. While exercise is undoubtedly important, it's equally essential to recognize the significance of rest periods and allowing the body time to recover.When we engage in physical activity, whether it's lifting weights, running, or participating in a high-intensity workout, we're essentially breaking down muscle tissue. This breakdown is a natural part of the muscle-building process, but it's during rest and recovery that our bodies repair and rebuild stronger muscle fibers. Without adequate rest, our muscles don't have the opportunity to repair themselves properly, which can lead to overtraining, fatigue, and even injury. Moreover, rest isn't just about giving your muscles time to recover; it's also about allowing your central nervous system to recuperate. Intense exercise places stress on the nervous system, and without sufficient rest, this stress can accumulate, leading to decreased performance, burnout, and diminished overall well-being. Incorporating rest days into your fitness routine doesn't mean being inactive. Active recovery, such as gentle stretching, yoga, or low-intensity activities like walking or swimming, can help promote blood flow to the muscles, reduce stiffness, and enhance recovery without placing additional stress on the body.Additionally, prioritizing quality sleep is essential for effective recovery. During sleep, the body releases growth hormone, which is crucial for muscle repair and growth. Aim for seven to nine hours of uninterrupted sleep each night to support your fitness goals.In conclusion, rest and recovery are integral components of any successful fitness program. By allowing your body time to repair and recharge, you'll not only maximize your fitness results but also reduce the risk of injury and burnout. Remember, it's not just about how hard you work; it's also about how well you recover.')
         ('https://picsum.photos/200/300', 'Exploring Different Types of Yoga for Physical and Mental Well-Being', 'Yoga, an ancient practice originating in India, offers a diverse range of styles, each with its unique benefits for physical and mental health. One popular form is Hatha Yoga, known for its gentle pace and focus on basic poses, making it suitable for beginners. Hatha Yoga emphasizes alignment, breathing techniques, and relaxation, promoting flexibility, strength, and stress relief. For those seeking a more dynamic practice, Vinyasa Yoga might be the perfect fit. Vinyasa involves flowing sequences of poses synchronized with breath, creating a continuous and energizing movement. This style builds cardiovascular endurance, enhances flexibility, and fosters a deep mind-body connection through its fluid transitions. Alternatively, practitioners looking for a deeply relaxing experience often turn to Yin Yoga. In Yin Yoga, poses are held for extended periods, typically 3 to 5 minutes or even longer. This passive approach targets the connective tissues, such as ligaments and fascia, promoting joint mobility and releasing tension stored in the body. Yin Yoga also cultivates mindfulness and inner peace as practitioners surrender to the stillness of each posture. For those who seek a blend of physical challenge and spiritual exploration, Kundalini Yoga may offer profound benefits. Kundalini incorporates dynamic movements, breathwork, chanting, and meditation to awaken the dormant energy at the base of the spine. This practice aims to balance the chakras, enhance vitality, and awaken higher consciousness, leading to a sense of expanded awareness and inner transformation. Whether you're drawn to the meditative aspects of Yin Yoga, the dynamic flow of Vinyasa, or the spiritual journey of Kundalini, exploring different types of yoga can enrich your overall well-being, fostering harmony between the body, mind, and spirit. Regardless of which style resonates with you, the essence of yoga lies in its ability to cultivate self-awareness, inner peace, and a deeper connection to the present moment.')
         ('https://picsum.photos/200/300', 'Certainly! Here's an article on "Exercises for Everyday Movement and Functionality', 'Incorporating exercises into your routine that mimic everyday movements can significantly enhance your overall functionality and quality of life. These exercises focus on improving your body's ability to perform tasks you encounter in your daily life, such as bending, lifting, reaching, and twisting. By targeting functional movements, you not only build strength but also enhance flexibility, balance, and coordination, leading to a more efficient and injury-resistant body.
One essential exercise for everyday functionality is the squat. Squatting mimics the motion of sitting down and standing up, which is something we do countless times throughout the day. To perform a squat, stand with your feet shoulder-width apart, toes slightly turned out, and lower your body by bending your knees and hips, as if you were sitting back into a chair. Keep your chest up and your weight on your heels as you lower down, then push through your heels to return to the standing position. Squats engage multiple muscle groups, including the quadriceps, hamstrings, glutes, and core, making them an excellent functional exercise for building lower body strength and mobility. Another vital exercise for everyday movement is the lunge. Lunges simulate the act of stepping forward or backward, which is essential for activities like climbing stairs or walking on uneven terrain. To perform a lunge, start by standing tall with your feet hip-width apart. Take a big step forward with one foot, lowering your body until both knees are bent at a 90-degree angle, with your front knee aligned over your ankle. Keep your chest up and your core engaged as you push through your front heel to return to the starting position. Lunges target the quadriceps, hamstrings, glutes, and calves, helping to improve leg strength, balance, and stability. Additionally, incorporating exercises that challenge balance and stability, such as single-leg deadlifts or standing calf raises, can further enhance your everyday functionality. These exercises not only strengthen your muscles but also improve proprioception and coordination, reducing the risk of falls and injuries as you navigate daily activities. In conclusion, focusing on exercises that mimic everyday movements is crucial for improving functionality and enhancing overall quality of life. By incorporating squats, lunges, and balance exercises into your routine, you can build strength, flexibility, and coordination, making everyday tasks easier and more manageable. So, whether you're lifting groceries, playing with your kids, or simply navigating through your day, these functional exercises will help you move with ease and confidence.')
         ('https://picsum.photos/200/300', 'Incorporating Mindfulness into Your Fitness Practice', 'In today's fast-paced world, where distractions are abundant and stress is often a constant companion, incorporating mindfulness into your fitness practice can offer a profound sense of balance and well-being. Mindfulness, the practice of being fully present and engaged in the current moment without judgment, can transform your workouts from mere physical exertion to a holistic experience that nourishes both your body and mind.
When you step into your fitness routine with mindfulness, you bring a heightened awareness to every movement, every breath, and every sensation. Instead of allowing your mind to wander or become preoccupied with external concerns, you cultivate a deep connection with your body and its capabilities. Whether you're lifting weights, running, practicing yoga, or engaging in any other form of exercise, mindfulness invites you to savor the experience fully. One of the keys to incorporating mindfulness into your fitness practice is to approach each session with intention and purpose. Before you begin, take a few moments to center yourself and set an intention for your workout. It could be as simple as focusing on your breath, listening to your body's cues, or cultivating gratitude for the opportunity to move and strengthen yourself. As you move through your workout, pay attention to the sensations in your body—the feeling of your muscles contracting and releasing, the rhythm of your breath, the beat of your heart. Notice any thoughts or emotions that arise without judgment, allowing them to pass like clouds in the sky. By staying present and attentive, you can deepen your connection to the present moment and cultivate a sense of inner calm and clarity. Mindfulness can also enhance the effectiveness of your workouts by helping you tune in to your body's signals and respond accordingly. Instead of pushing through pain or discomfort, you learn to listen to your body's wisdom and adjust your intensity or technique as needed. This not only reduces the risk of injury but also fosters a sense of self-compassion and self-care in your fitness practice. Incorporating mindfulness into your fitness routine is not just about the time you spend exercising; it's about cultivating a mindful approach to your entire lifestyle. By bringing mindfulness into your workouts, you can carry that same sense of presence and awareness into other areas of your life, fostering greater balance, resilience, and overall well-being. So the next time you lace up your sneakers or roll out your yoga mat, remember to bring mindfulness along for the journey—it may just transform the way you move, think, and live.')
         ('https://picsum.photos/200/300', 'What to Eat and When', ' A Guide to Optimizing Nutrition for Your Fitness Goals Proper nutrition plays a crucial role in achieving your fitness goals, whether it's building muscle, losing weight, or improving overall health. Knowing what to eat and when to eat can make a significant difference in your performance and results. Firstly, it's essential to fuel your body with the right nutrients before a workout. Aim for a balanced meal that includes carbohydrates, protein, and healthy fats about 1-2 hours before exercising. Carbohydrates provide the energy your muscles need for optimal performance, while protein supports muscle repair and growth. Consider options like oatmeal with fruits and nuts, a turkey sandwich on whole grain bread, or a smoothie with protein powder, spinach, and banana. During your workout, hydration is key. Drink plenty of water before, during, and after exercise to stay hydrated and maintain performance. If your workout lasts longer than an hour or is particularly intense, consider a sports drink to replenish electrolytes lost through sweat. Post-workout nutrition is equally important for recovery and muscle repair. Aim to eat a meal or snack containing both carbohydrates and protein within 30-60 minutes after exercise. This helps replenish glycogen stores and promotes muscle protein synthesis. Opt for options like a chicken quinoa bowl, Greek yogurt with berries, or a protein shake with banana.')
         ('https://picsum.photos/200/300', 'How to Avoid Common Workout Injuries and Stay Safe', 'When embarking on a fitness journey, it's crucial to prioritize safety to prevent common workout injuries. Firstly, always start with a proper warm-up session to prepare your muscles and joints for the upcoming activity. This can include dynamic stretches and light cardio to increase blood flow and flexibility. Additionally, pay close attention to your form and technique during exercises to avoid strain or overuse injuries. Gradually increase the intensity and duration of your workouts to allow your body to adapt and minimize the risk of injury. Incorporating rest days into your routine is equally important to give your muscles time to recover and repair. Lastly, listen to your body and don't push through pain – it's a signal that something might be wrong. By following these guidelines and being mindful of your body's signals, you can enjoy your workouts safely and effectively.')
         ('https://picsum.photos/200/300', 'Tailoring Workouts for Children, Adults, and Seniors', 'Fitness isn't one-size-fits-all; it's a journey that evolves with age and lifestyle. Tailoring workouts to suit different age groups is essential for promoting health and well-being across the lifespan. Let's explore how exercise routines can be customized for children, adults, and seniors.
Children:
For children, physical activity is crucial for growth and development. Focus on making exercise fun and engaging to instill healthy habits from a young age. Incorporate activities like running, jumping, and playing sports to enhance coordination, balance, and cardiovascular health. Emphasize the importance of structured playtime and limit sedentary behaviors, such as excessive screen time. Encourage a variety of activities to keep them interested and motivated.
Adults:
Adults often have diverse fitness goals, ranging from weight management to stress reduction. Tailor workouts to individual preferences and lifestyles. High-intensity interval training (HIIT) and strength training are effective for burning calories and building muscle. Incorporate flexibility exercises like yoga or Pilates to improve mobility and prevent injuries. Emphasize the importance of consistency and finding activities that align with personal interests to maintain long-term adherence to fitness routines.
 Seniors: As we age, prioritizing functional fitness becomes paramount for maintaining independence and quality of life. Focus on exercises that improve balance, flexibility, and strength to reduce the risk of falls and injuries. Low-impact activities such as walking, swimming, or tai chi are gentle on aging joints while still providing significant health benefits. Encourage regular physical activity as part of a daily routine and consider modifications to accommodate any mobility limitations.
In conclusion, tailoring workouts for children, adults, and seniors is essential for promoting overall health and vitality at every stage of life. By customizing exercise routines to meet the specific needs and abilities of each age group, individuals can enjoy the lifelong benefits of staying active and fit. Remember, it's never too early or too late to start prioritizing your health and well-being through regular physical activity.')
 `;


 
//     await pool.query(insertQuery);

//     // Fetch all data after insertion
//     const result = await pool.query('SELECT * FROM fitness_stats');
//     const data = result.rows;

//     console.log('Inserted data:', data);
//     res.json(data);
//   } catch (error) {
//     console.error('Error inserting data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.get('/api/migrations', async (req, res) => {
//   try {
//     await pool.query(createTableQuery);
//     res.send({ message: 'Table created successfully' });
//   } catch (error) {
//     console.error('Error creating table:', error);
//     res.send({ error: 'Internal Server Error' });
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

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });












const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3001;


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'fitnessapp',
    password: '1234',
    port: 5432,
});

app.use(bodyParser.json());


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];
        if (!user) {
            return res.status(400).send('Invalid credentials');
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).send('Invalid credentials');
        }
        res.status(200).send('Login successful');
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Internal server error');
    }
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, hashedPassword]);
        res.status(201).send('User created');
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).send('Internal server error');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
