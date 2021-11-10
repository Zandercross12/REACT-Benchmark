import "./Contact.css";
import { Helmet } from "react-helmet";

const Contact = () => {

  const apiURL = "https://api.mwi.dev/content/contact";

  async function fetchURL(url) {
    // Gets data from url
    const response = await fetch(url);
    // Converts the data from url into .json
    const data = await response.json();
    
    if (response) {
      // Pulls text from array
      const text = JSON.stringify(data.data[0].content);

      // Slices the string into two separate strings. Also removes quotations.
      const textSlice = text.slice(1, 134);
      const textSlice2 = text.slice(135, 135 + 103);

      document.getElementById("topP").innerHTML = textSlice;
      document.getElementById("bottomText").innerHTML = textSlice2;

    }

  }

  fetchURL(apiURL);

  return (
    <div className="contact">
      <Helmet>
        <title>Contact Page</title>
      </Helmet>

      <div className="contentleft">
        <div className="title">
          <h1 className="underline">Heading</h1>
          <h1> One</h1>
        </div>

        <p id="topP">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos
          eiusmod tempor incididunt ut labore et trace dolore magna aliqua.
        </p>
        <p id="bottomText">
          Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum
          varius duis at consectetur lorem.
        </p>
      </div>

      <div className="contentright">

        <h2>Heading Two</h2>

        <form action="https://api.mwi.dev/contact" method="POST">

          <input type="text" id="firstname" name="firstname" placeholder="First Name"/>
          <input type="text" id="lastname" name="lastname" placeholder="Last Name"/><br />
          <input type="text" id="title" name="title" placeholder="Title"/>
          <input type="text" id="email" name="email" placeholder="Email" required/><br />
          <textarea name="message" id="message" cols="76" rows="6" placeholder="Message"></textarea>
          <br />
          <input type="submit" value="Submit" id="submit"/>

        </form>

      </div>
    </div>
  );
};

export default Contact;
