import React from 'react';
import './page.css'

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/about" className="active">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Introduction Section */}
        <section id="about-intro">
          <h1>About Us</h1>
          <p>Welcome to our website! Learn more about who we are, our mission, and what we stand for.</p>
        </section>

        {/* Team Section */}
        <section id="team">
          <h2>Meet Our Team</h2>
          <div className="team-member">
            <img src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="Jane Doe" />
            <h3>Jane Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="John Smith" />
            <h3>John Smith</h3>
            <p>Chief Technology Officer</p>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission">
          <h2>Our Mission</h2>
          <p>Our mission is to deliver innovative solutions that make life easier for our users.</p>
        </section>

        {/* History Section */}
        <section id="history">
          <h2>Our History</h2>
          <p>Founded in 2020, we started as a small team with a big dream to make a difference.</p>
        </section>
      </main>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2025 BEYYOND.in . All Rights Reserved.</p>
        <ul>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default About;
