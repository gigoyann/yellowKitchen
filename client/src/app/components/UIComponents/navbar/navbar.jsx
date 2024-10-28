import "./navbar.scss"
import { Container, Row, Col } from "reactstrap"

export default function Navbar(params) {
    return (
        <div className="Navbar">
            <Container>
                <Row>
                    <Col lg="4">
                        <img src="/logo.png"></img>
                    </Col>
                    <Col lg="4">
                        <img src="/logo.png"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
} 