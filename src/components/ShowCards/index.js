import { Card } from "react-bootstrap";
import "./show-card.css";
function ShowCards({ data }) {
  return (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Img className="img-flag" variant="top" src={data.flags.png} />
      <Card.Body>
        <Card.Title className="country-name">{data.name.common}</Card.Title>
        <div className="parent-details">
          <Card.Text className="details">
            Population: {data.population}
          </Card.Text>
          <Card.Text className="details">Region: {data.region}</Card.Text>
          <Card.Text className="details">Capital: {data.capital}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ShowCards;
