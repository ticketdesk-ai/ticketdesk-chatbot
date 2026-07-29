# Ticketdesk Widget

[![version](https://img.shields.io/npm/v/ticketdesk-chatbot.svg)](https://www.npmjs.com/package/ticketdesk-chatbot)
[![license](https://img.shields.io/npm/l/ticketdesk-chatbot.svg)](https://www.npmjs.com/package/ticketdesk-chatbot)
[![hits per month](https://data.jsdelivr.com/v1/package/npm/ticketdesk-chatbot/badge)](https://www.jsdelivr.com/package/npm/ticketdesk-chatbot)

Ticketdesk chat widget to embed on any website for live customer support + AI chatbot helpdesk, providing instant automated responses, smart self-service, and handoff to human agents when needed for a superior customer support experience.

![Ticketdesk AI Chatbot](/assets/ticketdesk-ai-chatbot.png)

You can:

- 🚀 Embed it across **multiple domains**
- 📚 **Train with your own data** (website, docs, FAQs)
- 🤖 Connect with **multiple AI models** (ChatGPT, Gemini, Claude, Perplexity, etc.)
- 👩‍💼 Add human agents for live support
- 🎨 Customize branding, inbox, escalation rules and automations

---

## 🚀 Setup Instructions

1. Login to your [Ticketdesk AI](https://ticketdesk.ai) account.
2. Create a Sites from Settings > Sites.
3. Copy your Ticketdesk ID  
   (e.g: `d-xxxx-xxxx-s-xxxxsxxx`).
4. Paste the ID into the script inside your webpage.

---

## 📦 Using CDN (Recommended)

You can load the chatbot script directly from the Ticketdesk AI CDN:

```html
<script>
  window.TICKETDESK_ID = 'd-xxxx-xxxx-s-xxxxsxxx'; // Replace with your ID
</script>
<script src="https://ticketdesk.ai/ticketdesk-chatbot.min.js"></script>
```

Or, download the `ticketdesk-chatbot.min.js` locally.

```
<script src="/js/ticketdesk-chatbot.min.js"></script>
```

## Change log

### July 2026
- Added suggestions feature
![Ticketdesk AI Chatbot](/assets/chat-suggestions.png)

## Support

If you face issues while setting up the chatbot:

- Visit our [Help Center](https://ticketdesk.ai/docs)
- Reach out via email: support@ticketdesk.ai
- Or open a ticket directly from your Ticketdesk AI dashboard
