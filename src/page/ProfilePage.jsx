import { useContext, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { UserContext } from "../context/UserContext";

const ProfilePage = () => {
  const { emailUser, logout, userData } = useContext(UserContext);

  // Fetch user data when the component mounts
  useEffect(() => {
    userData();
  }, [userData]);

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <Card.Body>
          <Card.Title className="text-center">Profile</Card.Title>
          <Card.Text>
            <strong>Email:</strong> {emailUser}
          </Card.Text>
          <Button variant="danger" className="w-100" onClick={logout}>
            Logout
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProfilePage;
