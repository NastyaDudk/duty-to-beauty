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
    origin: "*",
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

app.get("/", (_, res) => {
  res.send("RE-SILK API WORKING");
});

/* =========================
   TELEGRAM
========================= */

async function sendToTelegram(name, email, phone, message) {
  if (!TG_TOKEN || !TG_CHAT_ID) return;

  try {
    await axios.post(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
      chat_id: TG_CHAT_ID,
      text:
        `🧾 New lead\n` +
        `📍 Source: re-silk\n` +
        `👤 Name: ${name}\n` +
        (email ? `📧 Email: ${email}\n` : "") +
        `📞 Phone: ${phone}\n` +
        `💬 Message: ${message || "—"}`,
    });
  } catch (e) {
    console.error("Telegram error:", e.message);
  }
}

/* =========================
   HUBSPOT
========================= */

async function sendToHubSpot(name, email, phone, message) {
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
          source_custom: "re-silk",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${HUBSPOT_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    );
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

  console.log("NEW RE-SILK LEAD:", phone);

  res.json({ ok: true });

  sendToTelegram(name, email, phone, message);
  sendToHubSpot(name, email, phone, message);
});

/* =========================
   START
========================= */

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
