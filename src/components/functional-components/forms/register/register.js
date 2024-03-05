import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const RegisterExample=()=>{
    return(
        <>
            <h1>Registration</h1>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>UserName</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" placeholder="Enter Number" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Language:</Form.Label>
                <Form.Label>Teugu</Form.Label>
                <Form.Control type="checkbox" placeholder="telugu" />
                <Form.Label>Hindi</Form.Label>
                <Form.Control type="checkbox" placeholder="telugu" />
                <Form.Label>English</Form.Label>
                <Form.Control type="checkbox" placeholder="telugu" />
            </Form.Group>

            <Form.Select aria-label="Default select example">
                <option>Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Others</option>
                </Form.Select>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
                
        </>
    )
}
export default RegisterExample