import { useEffect, useState } from "react";

const stats = [
  { name: 'Free Machines', value: '12' },
  { name: 'Customers Satisfied', value: '3000+' },
  { name: 'Free Consultation', value: '30 Minutes' },
  { name: 'Paid off', value: 'Unlimited' },
]

export default function Home() {
  // const [stats, setStats] = useState<any>([]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/api/stats')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       setStats(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
     // }, []);

  return (
    <>
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="src\fitness.jpg"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl"> Elevate Your Fitness Journey</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Energize your fitness journey with FitPulse – the ultimate app for home workouts. From personalized plans to real-time progress tracking, we're your partner in achieving your fitness goals. Join the FitPulse community, where every heartbeat propels you closer to a stronger, healthier you!
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => ( 
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row p-8">
      <div className="md:w-1/2 pr-4">
        <h1 className="text-6xl font-bold mb-4 mr-32">
        EXPERT <br /> PERSONAL <br /> TRAINING
        </h1>
        <p className="text-lg text-black">
        FITNESS nGO Gyms has the best personal training program in the Port Saint Lucie area. Our certified personal trainers are experts in their craft. We create the perfect programs to help you reach your goals. Everything begins with our energy and figuring out how to evolve that, then the journey begins
        </p>
          
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0">
        <img 
        src="src\exercise.jpg"
        alt="Hero Image" className="w-80 h-82 rounded ml-52" />
      </div>
    </div>


    <div className="flex flex-col md:flex-row p-8">
    <div className="md:w-1/2 mt-4 md:mt-0">
        <img 
        src="src\run.jpg"
        alt="Hero Image" className="w-98 h-80 rounded" />
      </div>
      <div className="md:w-1/2 pr-4">
        <h1 className="text-5xl font-bold mb-8 mt-12 ml-20">
        The Experience
        </h1>
        <p className="text-lg text-black ml-20">
        Cleanliness & Friendliness, Guaranteed. Fitness nGo carries <br /> the latest and  greatest cardio and strength  training equipment  available,  exciting nGo classes, Personal Training, Tanning, Cryo-Therapy, Hydromassage, Kids Club, and the greatest atmosphere in the city.
        </p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row p-8">
    
      <div className="md:w-1/2 pr-4">
        <h1 className="text-6xl font-bold mb-8 mt-12 mr-40">
         THE BEST <br /> RECOVERY.
        </h1>
        <p className="text-lg text-black mr-40">
        Our ultimate tier membership gives you the best recovery equipment in Port Saint Lucie. The hydromassage and Cryo chairs alone are worth the becoming a member. 
        </p>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0">
        <img 
        src="src\mc.jpg"
        alt="Hero Image" className="w-100 h-90  ml-12" />
      </div>  
</div>
  <div className="flex flex-col md:flex-row p-8">   
      <div className="md:w-1/2 mt-4 md:mt-0">
        <img 
        src="src\dumbles.jpg"
        alt="Hero Image" className="w-90 h-100" />
      </div>
      <div className="md:w-1/2 pr-4">
        <h1 className="text-7xl font-bold mb-8 mt-12 mr-16">
        TURF ZONE
        </h1>
        <p className="text-lg text-black mr-40  ">
        The perfect place to knock out those athletic workouts, take content, and use the TANK.
        </p>
      </div>
      </div>
      <div className="flex flex-col md:flex-row p-8">   
      <div className="md:w-1/2 pr-4">
        <h1 className="text-6xl font-bold mb-8 mt-4 mr-16">
        ATMOSPHERE
        </h1>
        <p className="text-lg text-black mr-12">
        Our members tell us that they love our gym and the competitive
       atmosphere to be better. We are a gym for people that are serious
       about their health and fitness. Our gym is almost at capacity for monthly members because we want to make sure we don't get overcrowded.
        </p>
        <button className="bg-green-700 text-white font-bold py-2 px-6 rounded mr-4 mt-10">
    Start Your Journey
  </button>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0">
        <img 
        src="src\people.jpg"
        alt="Hero Image" className="w-90 h-100" />
        
      </div>
      </div>
      
</>
    
  )
}




// import React, { useEffect, useState } from "react";

// export default function Home() {
//   const [stats, setStats] = useState<any>([]);

//   useEffect(() => {
//   fetch('http://localhost:3000/api/stats')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       setStats(data);
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
// }, []);

//   return (
//     <>
//     hi
//       {stats.map((item: any) => (
//         <div key={item.id}>
//           <img src={item.photo} alt={item.heading} />
//           <h2>{item.heading}</h2>
//           <p>{item.description}</p>
//         </div>
//       ))}
//     </>
//   );
// }
