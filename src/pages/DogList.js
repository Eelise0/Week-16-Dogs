import { Dog } from "./Dog";

export function DogList({ dogs, toggleDog }) {
  return dogs.map((dog) => {
    return <Dog key={dog.id} dog={dog} toggleDog={toggleDog} />;
  });
}
