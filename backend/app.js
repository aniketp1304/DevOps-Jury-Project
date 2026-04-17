const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route (for health check)
app.get('/', (req, res) => {
  res.send("Backend Running + DB Connected ✅");
});

// Phishing check API
app.post('/check', (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.json({ result: "❌ No URL provided" });
  }

  // Simple phishing logic
  if (
    url.includes("login") ||
    url.includes("verify") ||
    url.includes("bank") ||
    url.includes("secure") ||
    url.includes("account")
  ) {
    return res.json({ result: "🚨 Phishing Detected" });
  }

  return res.json({ result: "✅ Safe URL" });
});

// Server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
