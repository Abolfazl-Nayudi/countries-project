import useFetch from "../useFetch";
import SpinnerLoading from "../Spinner";
import ShowCards from "../ShowCards";
import { Row } from "react-bootstrap";
import "./card-list.css";
function CardList({ data }) {
  console.log(data);
  const { loading, error } = useFetch();
  if (loading) return <SpinnerLoading variant="primary" />;
  if (error) console.log(error);

  const listOfCards = data?.map((item, index) => {
    return <ShowCards data={item} key={index} />;
  });

  return (
    <Row className="row">
      {/* {listOfCards} */}
      {listOfCards}
    </Row>
  );
}

export default CardList;
