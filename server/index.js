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
   ENV (Render / .env)
========================= */
const TG_TOKEN = process.env.TG_BOT_TOKEN;
const TG_CHAT_ID = process.env.TG_CHAT_ID;
const HUBSPOT_TOKEN = process.env.HUBSPOT_TOKEN;

/* =========================
   HEALTH
========================= */
app.get("/", (_, res) => res.send("✅ API running"));
app.get("/api/test", (_, res) => res.json({ ok: true }));

/* =========================
   TELEGRAM
========================= */
async function sendToTelegram({ name, email, phone, message }) {
  if (!TG_TOKEN || !TG_CHAT_ID) {
    console.error("❌ Telegram ENV missing");
    return;
  }

  try {
    await axios.post(
      `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`,
      {
        chat_id: TG_CHAT_ID,
        text:
          `🧾 New lead\n` +
          `📍 Source: re-silk\n` +
          `👤 Name: ${name}\n` +
          (email ? `📧 Email: ${email}\n` : "") +
          `📞 Phone: ${phone}\n` +
          `💬 Message: ${message || "—"}\n`,
      },
      { timeout: 5000 },
    );

    console.log("✅ Telegram sent:", phone);
  } catch (e) {
    console.error("❌ Telegram error:", e.message);
  }
}

/* =========================
   HUBSPOT
========================= */
async function sendToHubSpot({ name, email, phone, message }) {
  if (!HUBSPOT_TOKEN) {
    console.error("❌ HUBSPOT_TOKEN missing");
    return;
  }

  if (!email) {
    console.warn("⚠️ No email → HubSpot skipped");
    return;
  }

  const [firstname, ...rest] = name.trim().split(" ");
  const lastname = rest.join(" ") || "";

  try {
    const res = await axios.post(
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
        timeout: 10000,
      },
    );

    console.log("✅ HubSpot contact saved:", res.data.id);
  } catch (err) {
    console.error(
      "❌ HubSpot ERROR:",
      err.response?.status,
      JSON.stringify(err.response?.data, null, 2),
    );
  }
}

/* =========================
   LEAD ENDPOINT
========================= */
app.post("/api/lead", (req, res) => {
  const { name, email = "", phone, message = "" } = req.body || {};

  console.log("📩 Lead received:", phone);

  if (!name || !phone) {
    return res.status(400).json({ ok: false });
  }

  // быстрый ответ фронту
  res.json({ ok: true });

  // отправка в фоне
  sendToTelegram({ name, email, phone, message });
  sendToHubSpot({ name, email, phone, message });
});

/* =========================
   START
========================= */
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});
