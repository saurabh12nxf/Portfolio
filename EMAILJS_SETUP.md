# 📧 EmailJS Contact Form Setup Guide

## Overview
Your portfolio now has a fully functional contact form powered by EmailJS. Visitors can send you messages directly without any page redirects!

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's FREE!)
3. Sign up with your email or Google account

### Step 2: Add Email Service
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - Outlook
   - Yahoo
   - Or any other provider
4. Click **"Connect Account"** and authorize
5. **Copy the Service ID** (looks like `service_xxxxxxx`)

### Step 3: Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template content:

```
Subject: New Message from {{from_name}} - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Copy the Template ID** (looks like `template_xxxxxxx`)

### Step 4: Get Your Public Key
1. Go to **"Account"** → **"General"**
2. Find **"Public Key"** section
3. **Copy your Public Key** (looks like `xxxxxxxxxxxxxxxx`)

### Step 5: Update Your Portfolio
1. Open `emailjs-contact.js` in your PortFolio folder
2. Find these lines (around line 10-12):
```javascript
this.publicKey = 'YOUR_PUBLIC_KEY';
this.serviceId = 'YOUR_SERVICE_ID';
this.templateId = 'YOUR_TEMPLATE_ID';
```

3. Replace with your actual values:
```javascript
this.publicKey = 'your_actual_public_key';
this.serviceId = 'service_xxxxxxx';
this.templateId = 'template_xxxxxxx';
```

4. **Save the file**

---

## ✅ That's It! You're Done!

Now when someone fills out your contact form:
1. They click "Send Message"
2. Form shows "Sending message..."
3. Email is sent to your inbox via EmailJS
4. Success message appears with confetti! 🎉
5. Form resets automatically

---

## 🎨 Features Included

✅ **No Page Reload** - Messages send without redirecting  
✅ **Loading States** - Shows "Sending..." with spinner  
✅ **Success Animation** - Confetti effect on successful send  
✅ **Error Handling** - Shows error if something goes wrong  
✅ **Auto-Reset** - Form clears after successful send  
✅ **Status Messages** - Clear feedback for users  
✅ **Spam Protection** - EmailJS has built-in protection  

---

## 📧 Email Template Variables

The template uses these variables from your form:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_name}}` - Your name (Saurabh Singh)

---

## 🔧 Customization

### Change Success Message
In `emailjs-contact.js`, line ~48:
```javascript
this.showStatus('✅ Your custom message here!', 'success');
```

### Change Error Message
In `emailjs-contact.js`, line ~59:
```javascript
this.showStatus('❌ Your custom error message!', 'error');
```

### Disable Confetti
In `emailjs-contact.js`, comment out line ~54:
```javascript
// this.animateSuccess();
```

### Change Form Fields
Edit `index.html` around line 701-720 to add/remove fields.

---

## 📊 EmailJS Free Tier Limits

- ✅ **200 emails/month** (FREE)
- ✅ Unlimited templates
- ✅ Unlimited services
- ✅ Email support

**Need more?** Upgrade to paid plan for higher limits.

---

## 🐛 Troubleshooting

### "Failed to send message"
1. Check your Public Key, Service ID, and Template ID are correct
2. Make sure you authorized your email service
3. Check browser console for errors (F12)

### Emails not arriving
1. Check your spam folder
2. Verify template is set up correctly
3. Make sure email service is connected

### Form not submitting
1. Check browser console (F12) for errors
2. Make sure EmailJS SDK is loaded
3. Verify form has `id="contactForm"`

---

## 🔒 Security Notes

- ✅ Public Key is safe to expose (it's meant to be public)
- ✅ EmailJS handles all email sending securely
- ✅ Your email credentials are never exposed
- ✅ Built-in spam protection included

---

## 📱 Mobile Support

The contact form is fully responsive and works perfectly on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Desktops
- 🖥️ Large screens

---

## 🎯 Testing

1. Fill out your contact form
2. Use a real email address
3. Click "Send Message"
4. Check your inbox (the one connected to EmailJS)
5. You should receive the email!

---

## 📚 Resources

- **EmailJS Docs**: https://www.emailjs.com/docs/
- **Dashboard**: https://dashboard.emailjs.com/
- **Support**: https://www.emailjs.com/support/

---

## 💡 Pro Tips

1. **Test First**: Send yourself a test message to verify setup
2. **Custom Reply-To**: Set up reply-to in EmailJS template settings
3. **Auto-Reply**: Create a second template to auto-reply to senders
4. **Analytics**: Check EmailJS dashboard for email statistics

---

**Your contact form is ready to use!** 🚀

Just add your EmailJS credentials and start receiving messages!
