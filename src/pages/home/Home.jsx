import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar'
import './home.scss'
import 'firebase/auth'


const Home = () => {
  const locale = 'en';
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  React.useEffect(() => {
      const timer = setInterval(() => { // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    }
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

  const hour = today.getHours();
  const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'} `;

  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
return (
    <div className='home'>
    <Sidebar/>
    <div className='homeContainer'>
    <Navbar/>
    <div className='greetings'>
    {date},
    {time},
    {wish} 
    </div>
    <div class="container">
    <div class="box">
            <div class="imgBox">
                <img src="https://img.freepik.com/free-photo/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign_273609-30676.jpg?size=626&ext=jpg" alt=""/>
            </div>
            <div class="content">
                <div><h2>Karan Singh</h2><span>Graphic Designer</span></div>
            </div>
        </div>
        <div class="box">
            <div class="imgBox">
                <img src="https://img.freepik.com/free-photo/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign_273609-30676.jpg?size=626&ext=jpg" alt=""/>
            </div>
            <div class="content">
                <div><h2>Karan Singh</h2><span>Graphic Designer</span></div>
            </div>
        </div>
        <div class="box">
            <div class="imgBox">
                <img src="https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt="" />
            </div>
            <div class="content">
                <div><h2>Dolly Seth</h2><span>Digital Marketing</span></div>
            </div>
        </div>
        <div class="box">
            <div class="imgBox">
                <img src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" alt="" />
            </div>
            <div class="content">
                <div><h2>Aakash Agrawal</h2><span>Accountant</span></div>
            </div>
        </div>
        <div class="box">
            <div class="imgBox">
                <img src="https://img.freepik.com/free-photo/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign_273609-30676.jpg?size=626&ext=jpg" alt=""/>
            </div>
            <div class="content">
                <div><h2>Karan Singh</h2><span>Graphic Designer</span></div>
            </div>
        </div>
        <div class="box">
            <div class="imgBox">
                <img src="https://img.freepik.com/free-photo/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign_273609-30676.jpg?size=626&ext=jpg" alt=""/>
            </div>
            <div class="content">
                <div><h2>Karan Singh</h2><span>Graphic Designer</span></div>
            </div>
        </div>
        <div class="box">
            <div class="imgBox">
                <img src="https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt="" />
            </div>
            <div class="content">
                <div><h2>Dolly Seth</h2><span>Digital Marketing</span></div>
            </div>
        </div>
        <div class="box">
            <div class="imgBox">
                <img src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" alt="" />
            </div>
            <div class="content">
                <div><h2>Aakash Agrawal</h2><span>Accountant</span></div>
            </div>
        </div>
    </div>
    
    </div>
    </div>
    
  );
  
};

export default Home;