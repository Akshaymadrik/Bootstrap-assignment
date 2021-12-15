import React, { Component } from 'react'
import { Carousel,Button } from 'react-bootstrap'
export class Casoroll extends Component {
    render() {
        return (
            <Carousel className="mt-5">
                <Carousel.Item>
                    <img
                    className="d-block w-100  "
                    style={{height:"80vh"}}
                    src="/imsges/U.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1>EXPLORE THE WORLD</h1>
                      <h3>Earth is a mistiries place. <br/> A lot is discovered ,A lot need to discover <br/><br/></h3>
                      <Button variant="info" className="text-light px-4 py-2">LAUNCH</Button>
                      
                      <br/><br/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    style={{height:"80vh"}}
                    src="/images/V.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption className="text-dark text-shadow" >
                    <h1><i><b>WORLD WIDE FASHION</b></i></h1>
                    <h5>Check out the work & master piece of international designers<br/><br/><br/></h5>
                    <Button variant="light" className="shadow text-grey px-4 py-2 fw-bolder">JOIN US</Button>
                    <br/><br/><br/><br/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    style={{height:"80vh"}}
                    src="/images/W.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1>TRY DIFFERENT & COOL STYLES</h1>
                        <br/>
                    <h3>look for the look that suits you the <br/>most & Give a charm to you personality <br/><br/><br/></h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Casoroll
