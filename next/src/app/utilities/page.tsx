"use client";

import Image from "next/image";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { useState } from "react";
import { Button } from "../components/Buttons/Button";

export default function Pages() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalWithImage, setModalWithImage] = useState(false);

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

      <section style={{ margin: "2rem 0", padding: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          <div
            style={{
              flex: 1,
              textAlign: "center",
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "0.5rem",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontWeight: 700,
                fontSize: "1.25rem",
                letterSpacing: "0.02em",
              }}
            >
              Modal classique
            </h3>
            <Button
              type="button"
              label="Ouvrir"
              defaultIcon={true}
              onClick={() => setModalOpen(true)}
              style={{ marginTop: "0.75rem", minWidth: "120px" }}
            />
            <Modal
              title="Modal Title"
              open={modalOpen}
              onClose={() => setModalOpen(false)}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sodales gravida eros, vitae dapibus leo convallis ut.
                Vestibulum sit amet tincidunt magna. Aliquam erat volutpat.
                Mauris luctus, enim quis sollicitudin lobortis, nibh nunc
                ullamcorper mauris, ac elementum massa nunc in purus. Proin
                fringilla, urna ut pellentesque venenatis, urna mauris finibus
                urna, ut pellentesque risus enim quis leo. Phasellus feugiat mi
                quis ultrices eleifend. Mauris molestie orci lacus, ut tincidunt
                tortor volutpat sed. Nulla convallis, dolor eget blandit mattis,
                quam enim molestie mi, in imperdiet orci augue vitae est.
                Vivamus vehicula eleifend nulla, non imperdiet velit faucibus
                eget. Praesent pulvinar elit nec tellus ultricies, et bibendum
                orci cursus. Cras nisl justo, vehicula et tellus vitae, cursus
                mollis felis. Sed hendrerit tortor risus, id accumsan nisi
                fringilla volutpat.
              </p>
            </Modal>
          </div>
          <div
            style={{
              flex: 1,
              textAlign: "center",
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "0.5rem",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontWeight: 700,
                fontSize: "1.25rem",
                letterSpacing: "0.02em",
              }}
            >
              Modal avec image
            </h3>
            <Button
              type="button"
              label="Ouvrir"
              defaultIcon={true}
              onClick={() => setModalWithImage(true)}
              style={{ marginTop: "0.75rem", minWidth: "120px" }}
            />
            <Modal
              title="Modal Title"
              imageSrc="/card-image.png"
              open={modalWithImage}
              onClose={() => setModalWithImage(false)}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sodales gravida eros, vitae dapibus leo convallis ut.
                Vestibulum sit amet tincidunt magna. Aliquam erat volutpat.
                Mauris luctus, enim quis sollicitudin lobortis, nibh nunc
                ullamcorper mauris, ac elementum massa nunc in purus. Proin
                fringilla, urna ut pellentesque venenatis, urna mauris finibus
                urna, ut pellentesque risus enim quis leo. Phasellus feugiat mi
                quis ultrices eleifend. Mauris molestie orci lacus, ut tincidunt
                tortor volutpat sed. Nulla convallis, dolor eget blandit mattis,
                quam enim molestie mi, in imperdiet orci augue vitae est.
                Vivamus vehicula eleifend nulla, non imperdiet velit faucibus
                eget. Praesent pulvinar elit nec tellus ultricies, et bibendum
                orci cursus. Cras nisl justo, vehicula et tellus vitae, cursus
                mollis felis. Sed hendrerit tortor risus, id accumsan nisi
                fringilla volutpat.
              </p>
            </Modal>
          </div>
        </div>
      </section>
    </main>
  );
}
