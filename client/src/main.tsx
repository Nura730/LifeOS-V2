import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "./App"
import "./index.css"
import { Toaster } from "react-hot-toast"

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: "#18181b",
      color: "#fff",
      border: "1px solid #27272a",
    },
  }}
/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)