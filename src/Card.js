import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from 'react';

function CustomCard(props) {
    const [toggle, setToggle] = useState(true)
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Button onClick={() => setToggle(!toggle)} variant="primary">Show/Hide details</Button>
                {toggle && (
                    <div>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>{props.email}</Card.Text>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
}

export default CustomCard;