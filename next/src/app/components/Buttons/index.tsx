"use client";

import { useState } from "react";
import { Button } from "./Button";

export default function ButtonDemo() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [inProcess, setInProcess] = useState(false);

  const simulateSend = async () => {
    // prevent spamming
    if (inProcess) return;

    // simulate async action
    setInProcess(true);
    setState("loading");
    await new Promise((r) => setTimeout(r, 900));
    setState(Math.random() > 0.3 ? "success" : "error");
    await new Promise((r) => setTimeout(r, 1200));
    setState("idle");
    setInProcess(false);
  };

  return (
    <div className="c-button-demo">
      <h2 className="c-button-demo__title">Buttons</h2>

      <div className="c-button-demo__group">
        <Button onClick={simulateSend} state={state}>
          Send
        </Button>
        <Button state="loading">Loading</Button>
        <Button state="success">Success</Button>
        <Button state="error">Error</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      <div className="c-button-demo__force-state">
        <span className="c-button-demo__label">Force state:</span>
        <Button variant="solid" onClick={() => setState("idle")}>
          idle
        </Button>
        <Button variant="solid" onClick={() => setState("loading")}>
          loading
        </Button>
        <Button variant="solid" onClick={() => setState("success")}>
          success
        </Button>
        <Button variant="solid" onClick={() => setState("error")}>
          error
        </Button>
      </div>
    </div>
  );
}
