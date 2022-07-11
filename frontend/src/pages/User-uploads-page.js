import { useState, useEffect } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import ApiCaller from "../api-callers";
const apiCaller = new ApiCaller();

function FileAction() {
  return (
    <>
      <td>
        <Button variant="danger">Delete</Button>
      </td>
      <td>
        <Button variant="warning">Share</Button>
      </td>
    </>
  );
}

function UserFiles({ userFiles }) {
  return userFiles.map((fileDetails) => {
    return (
      <tr key={fileDetails.guid}>
        <td>{fileDetails.filename}</td>
        <td>{fileDetails.fileType}</td>
        <td>{fileDetails.filename}</td>
        <FileAction />
      </tr>
    );
  });
}

export default function UserUploadPage() {
  const [userFiles, setUserFiles] = useState([]);

  useEffect(() => {
    apiCaller.userApiCaller
      .fetchAllFiles("183438c9-6e1f-44ac-9c33-7e5a1b408074")
      .then((result) => {
        setUserFiles(result.data.files);
      });
  }, []);

  const handleUpload = async (e) => {
    const form = document.getElementById("formFile");
    const fileDetails = new FormData();
    fileDetails.append("file", form.files[0]);
    const result = await apiCaller.userApiCaller.uploadUserFile({
      file: fileDetails,
      userId: "183438c9-6e1f-44ac-9c33-7e5a1b408074",
    });
    console.log(result);
  };

  return (
    <Container>
      <Row className="justify-content-center uploadBar ">
        <p></p>
        <Col xs lg="4">
          <div>
            <input className="form-control" type="file" id="formFile" />
          </div>
        </Col>
        <Col xs md={3}>
          <Button onClick={handleUpload}>UPLOAD</Button>
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
            <UserFiles userFiles={userFiles} />
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
