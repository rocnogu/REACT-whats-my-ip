import Card from "react-bootstrap/Card";

export default function Footer() {
  return (
    <Card className="text-center">
      <Card.Footer className="text-muted" style={{ color: "black" }}>
        Created by <a href="https://rocnogu.com/">rocnogu</a>
      </Card.Footer>
    </Card>
  );
}
