import { Dog } from "./Dog";
import App from "../App";
import { toggleDog } from "../App";

export function DogList({ dogs, toggleDog }) {
  return dogs.map((dog) => {
    return <Dog key={dog.id} dog={dog} toggleDog={toggleDog} />;
  });
}
