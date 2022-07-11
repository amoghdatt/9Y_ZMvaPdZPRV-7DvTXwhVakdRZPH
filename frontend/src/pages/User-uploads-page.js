import { useState, useEffect } from "react";
import { Button, Col, Container, Row, Table, Form } from "react-bootstrap";
import ApiCaller from "../api-callers";
const apiCaller = new ApiCaller();

function FileAction({ handleFileDelete, guid }) {
  return (
    <>
      <td>
        <Button variant="danger" onClick={handleFileDelete(guid)}>
          Delete
        </Button>
      </td>
      <td>
        <Button variant="warning">Share</Button>
      </td>
    </>
  );
}

function UserFiles({ userFiles, handleFileDelete }) {
  return userFiles.map((fileDetails) => {
    return (
      <tr key={fileDetails.guid}>
        <td>{fileDetails.filename}</td>
        <td>{fileDetails.fileType}</td>
        <td>{fileDetails.description}</td>
        <FileAction
          guid={fileDetails.guid}
          handleFileDelete={handleFileDelete}
        />
      </tr>
    );
  });
}

export default function UserUploadPage({ userId }) {
  const [userFiles, setUserFiles] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isFileDeleted, setIsFileDeleted] = useState(false);
  const [fileDescription, setFileDescription] = useState("");

  useEffect(() => {
    apiCaller.userApiCaller.fetchAllFiles(userId).then((result) => {
      console.log(result);
      setUserFiles(result.data.files);
      setIsFileDeleted(false);
    });
  }, [isUploaded, isFileDeleted]);

  const handleUpload = async (e) => {
    const form = document.getElementById("formFile");
    const fileDetails = new FormData();
    fileDetails.append("description", fileDescription);
    fileDetails.append("file", form.files[0]);
    const result = await apiCaller.userApiCaller.uploadUserFile({
      file: fileDetails,
      userId,
    });
    console.log(result);
    setFileDescription("");
    setIsUploaded(true);
    console.log(form);
  };

  const handleFileDelete = (fileId) => {
    return async () => {
      console.log(apiCaller.userApiCaller);
      const result = await apiCaller.userApiCaller.deleteUserFile({
        fileId,
        userId,
      });

      setIsFileDeleted(true);

      console.log(result);
    };
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
        <Col>
          <Form.Control
            type="text"
            placeholder="Enter description for the file"
            value={fileDescription}
            onChange={(e) => setFileDescription(e.target.value)}
          />
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
            <UserFiles
              userFiles={userFiles}
              handleFileDelete={handleFileDelete}
            />
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
