import Card from "react-bootstrap/Card";

import {
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
} from "react-share";

//         default function             default function           default function
export default function Footer() {
  return (
    <Card className="text-center">
      <Card.Footer className="text-muted" style={{ color: "black" }}>
        © 2021 Copyright by{" "}
        <a
          href="https://rocnogu.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          rocnogu
        </a>
        <p>
          Contact with{" "}
          <a
            href="https://rocnogu.com/"
            rel="noreferrer noopener"
            target="_blank"
          >
            rocnogu
          </a>
          :
        </p>
        <a
          href="https://www.facebook.com/rocnogu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon size={32} round />
        </a>
        <a
          href="https://www.linkedin.com/in/pavel-petkov-3639b8b5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon size={32} round />
        </a>
        <a
          href="https://t.me/rocnogu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon size={32} round />
        </a>
        <a
          href="https://wa.me/004915776419361?text=I%20come%20from%20your%20recipe%20blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsappIcon size={32} round />
        </a>
        <p>
          <a
            href="https://github.com/rocnogu"
            rel="noreferrer noopener"
            target="_blank"
            style={{ color: "red" }}
          >
            rocnogu Git
          </a>
        </p>
      </Card.Footer>
      <footer className="page-footer font-small blue pt-4"></footer>
    </Card>
  );
}
