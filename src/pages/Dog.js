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
          {dog.name}
          <br></br>
          {dog.info}
        </div>
      </label>
    </div>
  );
}
