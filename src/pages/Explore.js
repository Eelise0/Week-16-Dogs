import Card from "react-bootstrap/Card";

export function Explore() {
  return (
    <>
      <br />
      <h1>Glossary of Dog Breeds</h1>
      <br></br>
      <Card className="container" border="warning">
        <Card.Body>
          <Card.Header>
            <h3>Shiba Inu</h3>
            <h6>Country of Origin: Japan</h6>
          </Card.Header>
          <br />
          <Card.Text>
            A very confident dog, the Shiba Inu temperament is alert, loyal and
            lively and they tend to form strong bonds with their owners.
            However, they can also be quite independent and territorial with a
            strong hunting instinct.
          </Card.Text>
        </Card.Body>
        <br />
        <Card.Img
          className="container"
          variant="bottom"
          height={500}
          src="https://cdn.britannica.com/71/234471-050-093F4211/shiba-inu-dog-in-the-snow.jpg"
        />
        <br />
      </Card>
      <br />
      <Card className="container" border="warning">
        <Card.Body>
          <Card.Header>
            <h3>Shar-Pei</h3>
            <h6>Country of Origin: China</h6>
          </Card.Header>
          <br />
          <Card.Text>
            They tend to be aloof with strangers, but are fiercely loyal and
            affectionate with their own people and love to spend time in the
            company of their families.
          </Card.Text>
        </Card.Body>
        <br />
        <Card.Img
          className="container"
          variant="bottom"
          height={500}
          src="https://www.akc.org/wp-content/uploads/2017/11/Chinese-Shar-Pei-standing-on-the-sidewalk.jpg"
        />
        <br />
      </Card>
      <br />
      <Card className="container" border="warning">
        <Card.Body>
          <Card.Header>
            <h3>Australian Cattle Dog</h3>
            <h6>Country of Origin: Australia</h6>
          </Card.Header>
          <br />
          <Card.Text>
            Bred to perform demanding tasks, the Australian cattle dog is
            extremely alert, intelligent, watchful and courageous. Highly
            trustworthy and reliable, they have a tenacious sense of duty.
          </Card.Text>
        </Card.Body>
        <br />
        <Card.Img
          className="container"
          variant="bottom"
          height={500}
          src="https://images.ctfassets.net/440y9b545yd9/4LMoGmdS7pew3Re42mtZtf/29b7f2adf591a70f1410e453746e60b4/Australian_cattle850.jpg"
        />
        <br />
      </Card>
      <br />
      <Card className="container" border="warning">
        <Card.Body>
          <Card.Header>
            <h3>Chihuahua</h3>
            <h6>Country of Origin: Mexico</h6>
          </Card.Header>
          <br />
          <Card.Text>
            These little dogs have big personalities and range from feisty and
            outgoing to shy and timid. Intelligent and fiercely loyal to the
            people they love, Chihuahuas will happily accompany their owners
            anywhere and everywhere.
          </Card.Text>
        </Card.Body>
        <br />
        <Card.Img
          className="container"
          variant="bottom"
          height={500}
          src="https://media-be.chewy.com/wp-content/uploads/2021/04/20144004/Chihuahua_Feature-Image-1024x615.jpg"
        />
        <br />
      </Card>
      <br />
      <Card className="container" border="warning">
        <Card.Body>
          <Card.Header>
            <h3>Pembroke Welsh Corgi</h3>
            <h6>Country of Origin: Wales</h6>
          </Card.Header>
          <br />
          <Card.Text>
            Among the most agreeable of all small housedogs, the Pembroke Welsh
            Corgi is a strong, athletic, and lively little herder who is
            affectionate and companionable without being needy. They are one the
            world's most popular herding breeds
          </Card.Text>
        </Card.Body>
        <br />
        <Card.Img
          className="container"
          variant="bottom"
          height={500}
          src="https://img.dog-learn.com/dog-breeds/pembroke-welsh-corgi/pembroke-welsh-corgi-sz5.jpg"
        />
        <br />
      </Card>
      <br />
      <Card className="container" border="warning">
        <Card.Body>
          <Card.Header>
            <h3>German Shepherd</h3>
            <h6>Country of Origin: Germany</h6>
          </Card.Header>
          <br />
          <Card.Text>
            German shepherd dogs get along well with children and other pets if
            raised with them, but in keeping with their guarding instincts, they
            tend to be leery of strangers. The breed is considered to be smart
            and easy to train.
          </Card.Text>
        </Card.Body>
        <br />
        <Card.Img
          className="container"
          variant="bottom"
          height={500}
          src="https://assets-au-01.kc-usercontent.com/ab37095e-a9cb-025f-8a0d-c6d89400e446/847c2667-3547-4c22-908f-9e4d4b81f632/article-german-shepherd-hero.jpg"
        />
        <br />
      </Card>
      <br />
    </>
  );
}

export default Explore;
