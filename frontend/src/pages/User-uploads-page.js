import { Button, Col, Container, Row, Table } from "react-bootstrap";

export default function UserUploadPage() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={4} sm={4} md={4}>
          <Button variant="primary"> UPLOAD</Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Table>
          <thead>
            <tr>
              <td>Filename</td>
              <td>FileType</td>
              <td>Description</td>
              <td colSpan={2} className="justify-content-center">
                Actions
              </td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Example name</td>
              <td>JPEG</td>
              <td>Some lame description</td>
              <td>
                <Button variant="danger">Delete</Button>
              </td>
              <td>
                <Button variant="warning">Share</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
