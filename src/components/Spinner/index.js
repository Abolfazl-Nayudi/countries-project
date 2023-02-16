import Spinner from "react-bootstrap/Spinner";
import "./spinner.css";
function SpinnerLoading({ variant }) {
  return (
    <div className="parent-spinner">
      <Spinner className="spinner" animation="border" variant={variant} />
    </div>
  );
}

export default SpinnerLoading;
