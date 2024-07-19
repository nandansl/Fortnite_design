import Card from "react-bootstrap/Card";
import "./Content.css";
import fighter from "../assets/fighter.png";
import Fighter1 from "../assets/Fighter1.png";
import fighter3 from "../assets/fighter3.png";

const Content = () => {
  return (
    <>
      <div className="card-container container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <Card className="card" style={{ width: "100%" }}>
              <Card.Img variant="top" src={fighter} />
              <Card.Body>
                <Card.Text>
                  Explore large, destructible environments where no two games
                  are ever the same.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="card" style={{ width: "100%" }}>
              <Card.Img variant="top" src={Fighter1} />
              <Card.Body>
                <Card.Text>
                  Team up with friends by sprinting, climbing and smashing your
                  way to earn your Victory Royale
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="card" style={{ width: "100%" }}>
              <Card.Img variant="top" src={fighter3} />
              <Card.Body>
                <Card.Text>
                  Discover even more ways to play across thousands of
                  creator-made game genres
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div className=" justify-content-center mt-5">
        <p className=" font text-center fs-1">Our Contribution</p>
        <p className=" headers container text-center fs-6">
          Our core offering extends beyond mere profit generation; we emphasize
          the growth and active involvement of our user <br />
          community. Collaborating with us represents an investment, rather than
          a mere expenditure. Our dedication to providing
          <br /> distinctive digital interactions guarantees unparalleled
          benefits for our clientele.
        </p>
      </div>
      <br></br>
      <div className=" font flex-container container">
        <div>
          5M
          <h6>
            Daily User <br />
            Engagements{" "}
          </h6>
        </div>

        <div>
          $100K
          <h6>
            Revenue Surge for
            <br /> an Platform{" "}
          </h6>
        </div>

        <div>
          10X
          <h6>
            ROAS on all our <br />
            marketing campaigns
          </h6>
        </div>
      </div>
    </>
  );
};

export default Content;
