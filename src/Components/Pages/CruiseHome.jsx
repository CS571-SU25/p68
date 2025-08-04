import { Container, Row, Col } from "react-bootstrap";

export default function CruiseHome(props) {
    return <div>
        <h1>Welcome to Cruise Ship Explorer!</h1>
        <br/>
         <Container fluid={true}>
            <Row>
                <Col>
                <p>By 2026, Carnival Cruise Line will have 29 ships, Norwegian Cruise Line will have 21 ships, and Royal Caribbean will have 31 ships, so use this website to explore all those ships!</p>
                <br/>
                <img src = {"https://yt3.googleusercontent.com/tyhaGNZVOXndyO_mLpvHQLYGh8yCzN0IsjirIlesD4qprE11mCNygBJELps59wwrbVMhPYa4rA=s900-c-k-c0x00ffffff-no-rj"} alt = {"image of Carnival Cruise Line Logo"} width = {"33.3%"} height = {625} />
                <img src = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRewWYnNtgl1H5UoD1vq8Aneb6lmX56JtQJw&s"} alt = {"image of Norwegian Cruise Line Logo"} width = {"33.3%"} height = {625}/>
                <img src = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdwEyvw1gDpjSai0kdddSqArj93C0UaFS5g&s"} alt = {"image of Royal Caribbean Logo"} width = {"33.3%"} height = {625}/>
                </Col>
            </Row>
         </Container>
    </div>
}