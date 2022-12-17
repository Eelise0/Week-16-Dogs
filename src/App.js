import { About } from "./pages/About";
import { DogList } from "./pages/DogList";
import { Dog } from "./pages/Dog";
import { Link, Route, Routes } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Card } from "react-bootstrap";
import { Explore } from "./pages/Explore";
import { Bootstrap } from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import Contact from "./pages/Contact";

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
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">Furfriend Finder</a>

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
                <Link className="link-secondary" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/breeds" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <>
          <br></br>
          <div className="mb-3">
            <label className="form-label">Dog's Name:</label>
            <input ref={dogNameRef} className="form-control" type="text" />
          </div>
          <div>
            <label className="form-label">
              How does your dog like to play?
            </label>
            <input ref={dogInfoRef} className="form-control" type="text" />
          </div>
          <br></br>
          <button className="btn btn-success" onClick={handleAddDog}>
            Add Dog
          </button>
          <button className="btn btn-warning" onClick={handleClearDogs}>
            Clear Checked Dogs
          </button>

          <br></br>
          <br></br>
          <Card>
            <Card.Header>Note:</Card.Header>
            <Card.Body>
              If you see a dog that you think will play well with yours, "check"
              their box and clear them from the list by clicking the "Clear
              Checked Dogs" button.
            </Card.Body>
          </Card>
          <br></br>
          <Card>
            <Card.Body>
              <Card border="warning">
                <Card.Body>
                  {dogs.filter((dog) => !dog.complete).length} dogs still need
                  to find playmates!
                </Card.Body>
              </Card>
              <br></br>
              <h6>Looking for playmates:</h6>
              <DogList dogs={dogs} toggleDog={toggleDog} />
            </Card.Body>
          </Card>
        </>
      </>
      <br />
      <br />
    </div>
  );
}

export default App;
