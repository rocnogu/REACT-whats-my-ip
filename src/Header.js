import Card from "react-bootstrap/Card";

export default function Header() {
  return (
    <Card className="text-center">
      <Card.Header style={{ color: "black" }}>
        React App: What’s my IP location
      </Card.Header>
    </Card>
  );
}
