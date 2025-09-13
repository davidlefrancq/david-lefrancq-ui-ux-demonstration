import Image from "next/image";
import Card from "../components/Card";

export default function Pages() {
  return (
    <main className="l-container">
      <h2>Utilities</h2>
      <Card horizontal>
        <Image src="/card-image.png" alt="Sample" width={1024} height={1024} />
        <div className="c-card-content">
          <h3>Card title</h3>
          <p>This is the content of card.</p>
        </div>
      </Card>

      <Card>
        <Image src="/card-image.png" alt="Sample" width={1024} height={1024} />
        <div className="c-card-content">
          <h3>Card title</h3>
          <p>This is the content of card.</p>
        </div>
      </Card>
    </main>
  );
}
