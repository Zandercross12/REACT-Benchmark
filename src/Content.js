import talkieLogo from "./assets/topics/Talkie.png";
import rabbitLogo from "./assets/topics/Rabbit.png";
import shieldLogo from "./assets/topics/Shield.png";
import { Link } from 'react-router-dom';

const Content = () => {

  const apiURL = "https://api.mwi.dev/content/home";

  async function fetchURL(url) {
    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    if (response) {

      const talkieText = data.data[0].content;
      const rabbitText = data.data[1].content;
      const shieldText = data.data[2].content;

      document.getElementById("talkieText").innerHTML = talkieText;
      document.getElementById("rabbitText").innerHTML = rabbitText;
      document.getElementById("shieldText").innerHTML = shieldText;

    }
  }

  fetchURL(apiURL);
  
  return (
    <div className="content">
      <div className="contentblock">
        <div className="talkie">
          <img src={talkieLogo} alt="Talkie Logo" />
          <h2>Heading Two</h2>
          <p id="talkieText">
            Integer accumsan molestie nisl, id faucibus urna accumsan quis.
            Proin vulputate, mauris semper maximus.
          </p>
          <Link to="./">Learn More</Link>
        </div>
      </div>

      <div className="contentblock">
        <div className="rabbit">
          <img src={rabbitLogo} alt="Rabbit Logo" />
          <h2>Heading Two</h2>
          <p id="rabbitText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <Link to="./">Learn More</Link>
        </div>
      </div>

      <div className="contentblock">
        <div className="shield">
          <img src={shieldLogo} alt="Shield Logo" />
          <h2>Heading Two</h2>
          <p id="shieldText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <Link to="./">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
