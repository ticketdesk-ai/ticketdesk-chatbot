# Ticketdesk AI Chatbot

Ticketdesk AI Chatbot widget to embed on any website for **customer support on chat**.  
You can:

![Ticketdesk AI Chatbot](/assets/ticketdesk-ai-chatbot.png)

- 🚀 Embed it across **multiple domains**  
- 📚 **Train with your own data** (website, docs, FAQs)  
- 🤖 Connect with **multiple AI models** (ChatGPT, Gemini, Claude, Perplexity, etc.)  
- 👩‍💼 Add human agents for live support
- 🎨 Customize branding, inbox, escalation rules and automations

---

## 🚀 Setup Instructions

1. Login to your [Ticketdesk AI](https://ticketdesk.ai) account.  
2. Create a Chatbot from Settings > Chatbots.  
3. Copy your Chatbot ID  
   (e.g: `cb_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`).  
4. Paste the ID into the script inside your webpage.  

---

## 📦 Using CDN (Recommended)

You can load the chatbot script directly from the Ticketdesk AI CDN:  

```html
<script>
  window.TICKETDESK_CHATBOT_ID = 'cb_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'; // Replace with your ID
</script>
<script src="https://ticketdesk.ai/chatbot.umd.js"></script>
```

Or, download the `ticketdesk-chatbot.umd.js` locally.

```
<script src="/js/ticketdesk-chatbot.umd.js"></script>
```

## Support

If you face issues while setting up the chatbot:

- Visit our [Help Center](https://ticketdesk.ai/docs)
- Reach out via email: support@ticketdesk.ai
- Or open a ticket directly from your Ticketdesk AI dashboard