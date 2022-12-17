import Card from "react-bootstrap/Card";
import { DogList } from "./DogList";

function BodyOnlyExample() {
  return (
    <Card>
      <Card.Body>This dog still needs a playmate!</Card.Body>
    </Card>
  );
}

export default BodyOnlyExample;
