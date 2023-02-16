import SpinnerLoading from "../Spinner";
import useFetch from "../useFetch";
import ShowCards from "../ShowCards";
import { Row } from "react-bootstrap";
import "./card-list.css";
function CardList() {
  const { data, loading, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );
  if (loading) return <SpinnerLoading variant="primary" />;
  if (error) console.log(error);
  console.log(data);
  const listOfCards = data?.map((item, index) => {
    return <ShowCards data={item} key={index} />;
  });
  return <Row className="row">{listOfCards}</Row>;
}

export default CardList;
