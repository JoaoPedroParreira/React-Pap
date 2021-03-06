import React from 'react'
import Nav from '../../components/Navtbar.js'
import Mainfooter from '../../components/Mainfooter.js'
import Homecss from '../../styles/Main.css'
import { Container, Row, Col, Button, Image, Jumbotron, Card } from 'react-bootstrap'


function Homepage() {
    return (
        <div className="backgroundimg">

            <Nav />
        
            <Container className="margem">
                <Row>
                    <Col sm={6} >
                        <Jumbotron >
                            <h4>π»ππ<br></br>π¨πππππππππ</h4>
                            <h5>Mostre que vocΓͺ Γ© capaz de eliminar os inimigos e sobreviver aos desafios</h5>
                            <form method="get" action="/Adventurer" >
                                <Button type="submit" class="btn btn-warning" className="Explore">Explore o Adventurer</Button>
                            </form>
                        </Jumbotron>
                    </Col>
                    <Col sm={6}></Col>
                </Row>
            </Container>

            <div className="Lancamentos">



                <Container className="ola">
                    <Row>
                        <Col sm={4}></Col>
                        <Col sm={4}>
                            <h2 className="letralan">Novos LanΓ§amentos</h2>
                        </Col>
                        <Col sm={4}></Col>
                    </Row>
                </Container>



                <Container  className="ola">
                    <Row>
                        <Col sm={4}>
                            <Card >
                                <Card.Img variant="top" src="laranja.jpg" />
                                <Card.Body>
                                    <Card.Title>Em Breve</Card.Title>
                                    
                                    <Card.Text>
                                    <h6>??/??/2021</h6><br></br>
                                        Vai ser um novo jogo de estrategia.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card >
                                <Card.Img variant="top" src="laranja.jpg" />
                                <Card.Body>
                                    <Card.Title>Em Breve</Card.Title>
                                    <Card.Text>
                                    <h6>??/??/2022</h6> <br></br>
                                        Vai ser um novo jogo de carros.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card >
                                <Card.Img variant="top" src="laranja.jpg" />
                                <Card.Body>
                                    <Card.Title>Em Breve</Card.Title>
                                    <Card.Text>
                                       <h6>??/??/2022</h6>  <br></br>
                                        Vai ser um novo jogo de AΓ§Γ£o.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>


                <Container className="ola">
                    <Row>
                        <Col sm={4}></Col>
                        <Col sm={4}>
                            <h2 className="letralan">ΓLTIMAS ATUALIZAΓΓES</h2>
                        </Col>
                        <Col sm={4}></Col>
                    </Row>
                </Container>



                <Container className="ola">
                    <Row>
                        <Col sm={4}>
                            <Card>
                                <Card.Img variant="top" src="aventureiro1.png" />
                                <Card.Body>
                                    <Card.Title>Fixed</Card.Title> 
                                    <Card.Text>
                                    <h6>04/05/2021</h6><br></br>
                                        Resolvemos o problema do personagem do Adventurer passar paredes
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card >
                                <Card.Img variant="top" src="mapboss.png" />
                                <Card.Body>
                                    <Card.Title>Novo Nivel</Card.Title>
                                    <Card.Text>
                                    <h6>04/03/2021</h6> <br></br>
                                        Criamos um mapa para o nosso primeiro Boss
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card >
                                <Card.Img variant="top" src="spider 1.png" />
                                <Card.Body>
                                    <Card.Title>Fixed</Card.Title>
                                    <Card.Text>
                                       <h6>12/02/2021</h6>  <br></br>
                                       A aranha do Adventurer nΓ£o estava a atacar e agora com a ΓΊltima atualizaΓ§Γ£o jΓ‘ funciona.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>






                <Mainfooter />
            </div>
        </div>
    );
}
export default Homepage;