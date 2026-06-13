import Carousel from 'react-bootstrap/Carousel';


function CustomCorousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img style={{height:'50vh',width:'100vw'}} src='https://images.pexels.com/photos/7064766/pexels-photo-7064766.jpeg' text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'50vh',width:'100vw'}} src='https://images.pexels.com/photos/7064766/pexels-photo-7064766.jpeg' text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'50vh',width:'100vw'}} src='https://images.pexels.com/photos/7064766/pexels-photo-7064766.jpeg' text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCorousel;