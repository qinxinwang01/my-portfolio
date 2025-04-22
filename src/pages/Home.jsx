import '../styles/pages/home.css';
import backgroundImage from '../assets/images/background.jpg';

function Home() {
  return (
    <div className="home-page"
    style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay">
        <div className="welcome-text">
          <h1>Hi, I’m a Digital Media student</h1>
          <p>with a passion for creativity and design.</p>
          <p>Welcome to my personal portfolio — a showcase of my work, skills, and interests.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
