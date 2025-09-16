"use client";

import Image from "next/image";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { useState } from "react";
import { Button } from "../components/Buttons/Button";
import Tooltip from "../components/Tooltip";
import {
  CircleAlert,
  CircleCheckBig,
  CircleDot,
  CircleMinus,
  MousePointerClick,
} from "lucide-react";
import ToastPannel, { IToastItem } from "../components/Toast/ToastPannel";

const BtnLabel = ({ label }: { label: string }) => (
  <div style={{ display: "flex", gap: "0.35rem", alignItems: "center" }}>
    <div>
      <MousePointerClick />
    </div>
    <div>{label}</div>
  </div>
);

export default function Pages() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalWithImage, setModalWithImage] = useState(false);
  const [toastList, setToastList] = useState<IToastItem[]>([]);
  const [toastExemples, setToastExemples] = useState<IToastItem[]>([
    {
      id: 1,
      type: "success",
      message: (
        <div className="u-flex u-flex-row">
          <CircleCheckBig size={18} />
          Opération réussie !
        </div>
      ),
    },
    {
      id: 2,
      type: "error",
      message: (
        <div className="u-flex u-flex-row">
          <CircleMinus size={18} />
          Une erreur est survenue.
        </div>
      ),
    },
    {
      id: 3,
      type: "info",
      message: (
        <div className="u-flex u-flex-row">
          <CircleDot size={18} />
          Voici une information importante.
        </div>
      ),
    },
    {
      id: 4,
      type: "warning",
      message: (
        <div className="u-flex u-flex-row">
          <CircleAlert size={18} />
          Attention, ceci est un avertissement.
        </div>
      ),
    },
  ]);

  const addToast = (toast: IToastItem) => {
    setToastList((prev) => [...prev, toast]);
  };

  const removeToast = (id: number) => {
    const toast = toastList.find((t) => t.id === id);
    if (toast) {
      toastExemples.push(toast);
      setToastList((prev) => prev.filter((toast) => toast.id !== id));
      setToastExemples([...toastExemples]);
    }
  };

  const handleAddToast = () => {
    const list = [...toastExemples];
    const toast = list.pop();
    if (toast) {
      addToast(toast);
      setToastExemples(list);
    }
  };

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
              label={<BtnLabel label="Ouvrir" />}
              defaultIcon={false}
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
              label={<BtnLabel label="Ouvrir" />}
              defaultIcon={false}
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

      {/* Tooltip section */}
      <section style={{ margin: "2rem 0", padding: "1.5rem" }}>
        <h2 style={{ margin: 0, fontWeight: 700, fontSize: "1.5rem" }}>
          Tooltip
        </h2>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            marginTop: "1.5rem",
          }}
        >
          <Tooltip text="Ceci est un tooltip classique" position="top">
            <span
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #ccc",
                borderRadius: "0.25rem",
              }}
            >
              Survolez-moi
            </span>
          </Tooltip>
          <Tooltip text="Tooltip à gauche" position="left">
            <span
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #ccc",
                borderRadius: "0.25rem",
              }}
            >
              À gauche
            </span>
          </Tooltip>
          <Tooltip text="Tooltip en bas" position="bottom">
            <span
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #ccc",
                borderRadius: "0.25rem",
              }}
            >
              En bas
            </span>
          </Tooltip>
          <Tooltip text="Tooltip à droite" position="right">
            <span
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #ccc",
                borderRadius: "0.25rem",
              }}
            >
              À droite
            </span>
          </Tooltip>
        </div>
      </section>

      {/* Toast notifications */}
      <section style={{ margin: "2rem 0", padding: "1.5rem" }}>
        <h2 style={{ margin: 0, fontWeight: 700, fontSize: "1.5rem" }}>
          Notifications
        </h2>
        {/* Button to transfert toast exemple to toast list one to one when clicked */}
        <Button
          type="button"
          label={<BtnLabel label="Ajouter une notification" />}
          defaultIcon={false}
          onClick={handleAddToast}
        />
        {/* ToastPannel component to display the toast list */}
        <ToastPannel toasts={toastList} removeToast={removeToast} />
      </section>
    </main>
  );
}
