"use client";

import { useState } from "react";
import { Button } from "../components/Buttons/Button";

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
    <main className="l-container">
      <div className="c-button-demo">
        <h2 className="c-button-demo__title">Buttons</h2>

        <div className="c-button-demo__group">
          <Button onClick={simulateSend} state={state} size="md">
            Send
          </Button>
          <Button
            variant="ghost"
            onClick={simulateSend}
            state={state}
            size="md"
          >
            Ghost
          </Button>
          <Button state="loading" size="md">
            Loading
          </Button>
          <Button state="success" size="md">
            Success
          </Button>
          <Button state="error" size="md">
            Error
          </Button>
          <Button state="disabled" size="md">
            Disabled
          </Button>
        </div>

        <div className="c-button-demo__group">
          <span className="c-button-demo__label" style={{ width: "100px" }}>
            Force state:
          </span>
          <Button variant="solid" onClick={() => setState("idle")} size="md">
            idle
          </Button>
          <Button variant="solid" onClick={() => setState("loading")} size="md">
            loading
          </Button>
          <Button variant="solid" onClick={() => setState("success")} size="md">
            success
          </Button>
          <Button variant="solid" onClick={() => setState("error")} size="md">
            error
          </Button>
        </div>

        {/* Button sizes */}
        <div className="c-button-demo__group">
          <span className="c-button-demo__label" style={{ width: "100px" }}>
            Button sizes:
          </span>
          <Button onClick={simulateSend} state={state} size="sm">
            Send
          </Button>
          <Button onClick={simulateSend} state={state} size="md">
            Send
          </Button>
          <Button onClick={simulateSend} state={state} size="lg">
            Send
          </Button>
        </div>
      </div>
    </main>
  );
}
