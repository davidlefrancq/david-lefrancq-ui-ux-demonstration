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
import Tabs from "../components/Tabs";
import Accordion from "../components/Accordion/Accordion";

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

      {/* Tabs section */}
      <section className="u-utilities__section">
        <h3 className="u-utilities__title">Tabs</h3>
        <Tabs>
          <Tabs.Tab label="Onglet 1">
            <div>Contenu du premier onglet</div>
          </Tabs.Tab>
          <Tabs.Tab label="Onglet 2">
            <div>Contenu du second onglet</div>
          </Tabs.Tab>
          <Tabs.Tab label="Onglet 3">
            <div>Contenu du troisième onglet</div>
          </Tabs.Tab>
        </Tabs>
      </section>

      {/* Accordion section */}
      <section className="u-utilities__section">
        <h3 className="u-utilities__title">Accordion</h3>
        <Accordion>
          <Accordion.Item title={"Qu'est-ce qu'un Accordion ?"}>
            <p>
              Un <b>Accordion</b> est un composant d’interface qui permet
              d’afficher ou masquer du contenu de façon progressive. Il est
              utile pour organiser l’information et améliorer l’expérience
              utilisateur.
            </p>
          </Accordion.Item>
          <Accordion.Item title="Accessibilité">
            <p>
              Ce composant gère les attributs ARIA pour une meilleure
              accessibilité et supporte l’ouverture simple ou multiple des
              panneaux.
            </p>
          </Accordion.Item>
          <Accordion.Item title="Personnalisation">
            <ul>
              <li>Style via SCSS</li>
              <li>Supporte plusieurs panneaux ouverts</li>
              <li>Contenu flexible (texte, listes, etc.)</li>
            </ul>
          </Accordion.Item>
        </Accordion>
      </section>

      {/* Cards section */}
      <section className="u-utilities__section">
        <h3 className="u-utilities__title">Cards</h3>
        <div style={{ marginTop: "1rem" }}>
          <Card horizontal>
            <Image
              src="/card-image.png"
              alt="Sample"
              width={1024}
              height={1024}
            />
            <div className="c-card-content">
              <h3>Card title</h3>
              <p>This is the content of card.</p>
            </div>
          </Card>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <Card>
            <Image
              src="/card-image.png"
              alt="Sample"
              width={1024}
              height={1024}
            />
            <div className="c-card-content">
              <h3>Card title</h3>
              <p>This is the content of card.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Modal section */}
      <section className="u-utilities__section">
        <h3 className="u-utilities__title" style={{ marginBottom: "1rem" }}>
          Modals
        </h3>
        <div className="u-utilities__card-demo">
          <div className="u-utilities__card-demo-item">
            <h3 className="u-utilities__card-demo-item-title">
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
          <div className="u-utilities__card-demo-item">
            <h3 className="u-utilities__card-demo-item-title">
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
      <section className="u-utilities__section">
        <h3 className="u-utilities__title">Tooltip</h3>
        <div className="u-utilities__tooltip-demo">
          <Tooltip text="Ceci est un tooltip classique" position="top">
            <span className="u-utilities__tooltip-demo-item">Survolez-moi</span>
          </Tooltip>
          <Tooltip text="Tooltip à gauche" position="left">
            <span className="u-utilities__tooltip-demo-item">À gauche</span>
          </Tooltip>
          <Tooltip text="Tooltip en bas" position="bottom">
            <span className="u-utilities__tooltip-demo-item">En bas</span>
          </Tooltip>
          <Tooltip text="Tooltip à droite" position="right">
            <span className="u-utilities__tooltip-demo-item">À droite</span>
          </Tooltip>
        </div>
      </section>

      {/* Toast notifications section */}
      <section className="u-utilities__section">
        <h3 className="u-utilities__title">Notifications</h3>
        <Button
          type="button"
          label={<BtnLabel label="Ajouter une notification" />}
          defaultIcon={false}
          onClick={handleAddToast}
        />
        <ToastPannel toasts={toastList} removeToast={removeToast} />
      </section>
    </main>
  );
}
