import bg from "../SVG/bg.svg";
import birds from "../SVG/birds.svg";
import Container from "react-bootstrap/Container";
import "../App.css";

const Homepage = () => (
  <Container>
    <img
      src={bg}
      className="bg"
      style={{ alignContent: "center" }}
      alt="Imaged"
    />
    <img
      src={birds}
      className="Birds"
      style={{ alignContent: "center" }}
      alt="Imaged"
    />
  </Container>
);
export default Homepage;
