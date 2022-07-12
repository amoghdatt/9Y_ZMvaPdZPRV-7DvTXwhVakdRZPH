import { useState, useEffect } from "react";
import { Button, Col, Container, Row, Table, Form } from "react-bootstrap";
import ApiCaller from "../api-callers";
import { MAX_UPLOAD_SIZE } from "../constants";
import { ToastContainer, toast } from "react-toastify";
const apiCaller = new ApiCaller();

function FileAction({ handleFileDelete, handleFileShare, guid }) {
  return (
    <>
      <td>
        <Button variant="danger" onClick={handleFileDelete(guid)}>
          Delete
        </Button>
      </td>
      <td>
        <Button variant="warning" onClick={handleFileShare(guid)}>
          Share
        </Button>
      </td>
    </>
  );
}

function UserFiles({ userFiles, handleFileDelete, handleFileShare }) {
  return userFiles.map((fileDetails) => {
    return (
      <tr key={fileDetails.guid}>
        <td>{fileDetails.filename}</td>
        <td>{fileDetails.fileType}</td>
        <td>{fileDetails.description}</td>
        <FileAction
          guid={fileDetails.guid}
          handleFileDelete={handleFileDelete}
          handleFileShare={handleFileShare}
        />
      </tr>
    );
  });
}

function DownloadLink({ copyToClipboard, shareableDownloadLink }) {
  return (
    <Row className="justify-content-center">
      <Col xs md={3}>
        <Form.Control type="text" value={shareableDownloadLink} />
      </Col>
      <Col xs md={3}>
        <Button variant="outline-success" size="sm" onClick={copyToClipboard}>
          COPY
        </Button>
      </Col>
    </Row>
  );
}

export default function UserUploadPage({ userId }) {
  const [userFiles, setUserFiles] = useState([]);
  const [fileDescription, setFileDescription] = useState("");
  const [shareableDownloadLink, setShareableDownloadLink] = useState("");

  useEffect(() => {
    fetchAllUserFiles();
  }, []);

  const fetchAllUserFiles = () => {
    apiCaller.userApiCaller.fetchAllFiles(userId).then((result) => {
      setUserFiles(result.data.files);
    });
  };

  const isWithinSizeLimit = (fileSize) => {
    return fileSize <= MAX_UPLOAD_SIZE;
  };

  const handleUpload = async (e) => {
    const form = document.getElementById("formFile");
    if (!isWithinSizeLimit(form.files[0].size)) {
      toast.error("Size Limit exceeded", {
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const fileDetails = new FormData();
    fileDetails.append("description", fileDescription);
    fileDetails.append("file", form.files[0]);

    await apiCaller.userApiCaller.uploadUserFile({
      file: fileDetails,
      userId,
    });

    toast.success("Uploaded Successfully!", {
      position: "top-center",
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });

    fetchAllUserFiles();
    setFileDescription("");
  };

  const handleFileDelete = (fileId) => {
    return async () => {
      await apiCaller.userApiCaller.deleteUserFile({
        fileId,
        userId,
      });

      fetchAllUserFiles();
    };
  };

  const handleFileShare = (fileId) => {
    return async () => {
      const result = await apiCaller.userApiCaller.getShareableDownloadLink({
        fileId,
        userId,
      });

      setShareableDownloadLink(result.data.link);
    };
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareableDownloadLink);
  };

  return (
    <Container>
      <ToastContainer autoClose={500} />
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

      {shareableDownloadLink !== "" ? (
        <DownloadLink
          copyToClipboard={copyToClipboard}
          shareableDownloadLink={shareableDownloadLink}
        />
      ) : undefined}

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
              handleFileShare={handleFileShare}
            />
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
