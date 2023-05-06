import hydrate from "ultra/hydrate.js";
import App from "./src/app.jsx";

function ClientApp() {
  return <App />;
}

hydrate(document, <ClientApp />);
