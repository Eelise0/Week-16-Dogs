export function Dog({ dog, toggleDog }) {
  function handleDogClick() {
    toggleDog(dog.id);
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={dog.complete}
          onChange={handleDogClick}
        />
        <div>
          Dog's Name: {dog.name}
          <br></br>
          Play Style: {dog.info}
        </div>
      </label>
    </div>
  );
}
