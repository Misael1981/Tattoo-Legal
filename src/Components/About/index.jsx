import "./About.css";
import Tatuador from "/images/alan.PNG";

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about-description">
          <h2>Sobre o Tatueiro</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste rerum
            et quam vel recusandae inventore dolores reprehenderit at excepturi
            quos!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste rerum
            et quam vel recusandae inventore dolores reprehenderit at excepturi
            quos!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste rerum
            et quam vel recusandae inventore dolores reprehenderit at excepturi
            quos!
          </p>
        </div>
        <div className="about-image">
          <img src={Tatuador} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
