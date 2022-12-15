import { About } from "./pages/About";
import { DogList } from "./pages/DogList";
import { Dog } from "./pages/Dog";
import { Link, Route, Routes } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Bootstrap } from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const LOCAL_STORAGE_KEY = "dogApp.dogs";

function App() {
  const [dogs, setDogs] = useState([]);
  const dogNameRef = useRef();
  const dogInfoRef = useRef();

  useEffect(() => {
    const storedDogs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedDogs) setDogs(storedDogs);
    console.log(storedDogs);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dogs));
  }, []);

  function toggleDog(id) {
    const newDogs = [...dogs];
    const dog = newDogs.find((dog) => dog.id === id);
    dog.complete = !dog.complete;
    setDogs(newDogs);
  }

  function handleAddDog(e) {
    const name = dogNameRef.current.value;
    const info = dogInfoRef.current.value; //...//
    if (name === "" && info === "") return;
    setDogs((prevDogs) => {
      return [
        ...prevDogs,
        { id: uuidv4(), name: name, info: info, complete: false },
      ];
    });
    dogNameRef.current.value = null;
    dogInfoRef.current.value = null; //...//
  }

  function handleClearDogs(e) {
    const newDogs = dogs.filter((dog) => !dog.complete);
    setDogs(newDogs);
  }

  return (
    <div className="container">
      <>
        {/* <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/breeds">Dog Breeds</Link>
          </li>
          <li>
            <Link to="/profile">Dog Profile</Link>
          </li>
        </ul>
      </nav> */}
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">Furfriend Finder</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="link-secondary" to="/">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link-secondary" to="/breeds">
                    Dog Breeds{" "}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="link-secondary" to="/profile">
                    Dog Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/breeds" element={<DogList />} />
          <Route path="/profile" element={<Dog />} />
        </Routes>

        <>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input ref={dogNameRef} className="form-control" type="text" />
          </div>
          <div>
            <label className="form-label">
              How does your dog like to play?
            </label>
            <input
              ref={dogInfoRef}
              className="form-control"
              type="text"
              rows="5"
              cols="5"
            />
          </div>
          <br></br>
          <button className="btn btn-success" onClick={handleAddDog}>
            Add Dog
          </button>
          <button className="btn btn-warning" onClick={handleClearDogs}>
            Remove Checked Dogs
          </button>
          <br></br>
          <br></br>
          <div>
            {dogs.filter((dog) => !dog.complete).length} dogs still need to find
            playmates!
          </div>
          <br></br>
          <form>
            <DogList dogs={dogs} toggleDog={toggleDog} />
          </form>
        </>
      </>
    </div>
  );
}

export default App;
