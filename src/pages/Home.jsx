import { Container, Row, Col } from "react-bootstrap";
import AppLayout from "../layout/AppLayout";

export default function Home() {
    return(
        <AppLayout>
            <Container>
                <Row>
                    <Col>
                    <h3>HI</h3>
                    <br/>
                    <p>Welcome home.</p>
                    </Col>
                </Row>
            </Container>
        </AppLayout>
    )
}