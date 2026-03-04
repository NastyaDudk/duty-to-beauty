import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

/* =========================
   MIDDLEWARE
========================= */

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "https://nastyadudk.github.io",
      "https://nastyadudk.github.io/duty-to-beauty",
      "https://re-silk.silk4.me",
    ],
  }),
);

/* =========================
   ENV
========================= */

const TG_TOKEN = process.env.TG_BOT_TOKEN;
const TG_CHAT_ID = process.env.TG_CHAT_ID;
const HUBSPOT_TOKEN = process.env.HUBSPOT_TOKEN;

/* =========================
   HEALTH
========================= */

app.get("/", (_, res) => res.send("API running"));

/* =========================
   SOURCE DETECTION
========================= */

function detectSource(req) {
  const referer = req.headers.referer || "";

  if (referer.includes("re-silk")) {
    return "re-silk";
  }

  if (referer.includes("duty-to-beauty")) {
    return "duty-to-beauty";
  }

  if (referer.includes("blck")) {
    return "BLCK";
  }

  return "BLCK"; // fallback
}

/* =========================
   TELEGRAM
========================= */

async function sendToTelegram({ name, email, phone, message, source }) {
  if (!TG_TOKEN || !TG_CHAT_ID) return;

  try {
    await axios.post(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
      chat_id: TG_CHAT_ID,
      text:
        `🧾 New lead\n` +
        `📍 Source: ${source}\n` +
        `👤 Name: ${name}\n` +
        (email ? `📧 Email: ${email}\n` : "") +
        `📞 Phone: ${phone}\n` +
        `💬 Message: ${message || "—"}\n`,
    });

    console.log("Telegram sent");
  } catch (e) {
    console.error("Telegram error:", e.message);
  }
}

/* =========================
   HUBSPOT
========================= */

async function sendToHubSpot({ name, email, phone, message, source }) {
  if (!HUBSPOT_TOKEN) return;
  if (!email) return;

  const [firstname, ...rest] = name.trim().split(" ");
  const lastname = rest.join(" ");

  try {
    await axios.post(
      "https://api.hubapi.com/crm/v3/objects/contacts?idProperty=email",
      {
        properties: {
          email,
          firstname,
          lastname,
          phone,
          lifecyclestage: "lead",
          message: message || "",
          source_custom: source,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${HUBSPOT_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    );

    console.log("HubSpot saved");
  } catch (err) {
    console.error("HubSpot error:", err.response?.data || err.message);
  }
}

/* =========================
   LEAD
========================= */

app.post("/api/lead", (req, res) => {
  const { name, email = "", phone, message = "" } = req.body || {};

  if (!name || !phone) {
    return res.status(400).json({ ok: false });
  }

  const source = detectSource(req);

  console.log("Lead:", phone, "source:", source);

  res.json({ ok: true });

  sendToTelegram({ name, email, phone, message, source });
  sendToHubSpot({ name, email, phone, message, source });
});

/* =========================
   START
========================= */

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
