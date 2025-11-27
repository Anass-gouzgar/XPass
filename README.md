# 🛡️ XPass - Professional Security Toolkit

XPass is a modern, all-in-one security toolkit designed to help users generate secure credentials, analyze password strength, store sensitive data locally, and get AI-powered security advice. Built with privacy and user experience in mind, it features a sleek, responsive interface with dark mode support and full internationalization (English, Arabic, French).

![XPass Banner](public/XPass%20Banner.png)

## ✨ Features

- **🔑 Advanced Password Generator**: Create high-entropy passwords, passphrases, and PINs with customizable options (length, character sets, separators).
- **🛡️ Strength Analyzer**: Real-time password strength evaluation with visual feedback and integrated breach detection (simulated).
- **🔒 Encrypted Vault**: Securely store logins and notes locally in your browser. Data is encrypted using AES-GCM with a master password that never leaves your device.
- **🛠️ Security Tools**:
  - **Hash Generator**: Support for SHA-1, SHA-256, SHA-384, SHA-512.
  - **UUID Generator**: Generate standard v4 UUIDs.
  - **Identity Generator**: Create random usernames.
  - **API Key Generator**: Generate cryptographically secure API keys.
- **📊 Audit Dashboard**: Visualize the health of your vault with charts showing password strength distribution, reuse rates, and category breakdowns.
- **🤖 AI Security Advisor**: Chat with an AI assistant (powered by Google Gemini) to get instant answers to your cybersecurity questions.
- **🌍 Internationalization**: Full support for **English**, **Arabic (RTL)**, and **French**.
- **🎨 Modern UI**: Responsive design with smooth GSAP animations and a "hacker-chic" dark mode (plus light mode).

## 🚀 Tech Stack

- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [GSAP](https://gsap.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **AI Integration**: [Google Generative AI SDK](https://ai.google.dev/)

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anass-gouzgar/XPass.git
   cd xpass
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your Google Gemini API Key:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
   > **Note**: You can get an API key from [Google AI Studio](https://aistudio.google.com/).

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open the app**
   Visit `http://localhost:3000` (or the port shown in your terminal) to view the application.

## 🔒 Security Note

- **Local Encryption**: The Vault feature uses the Web Crypto API (AES-GCM) to encrypt data *before* saving it to `localStorage`. Your master password is used to derive the encryption key and is **never stored** or transmitted.
- **Client-Side Only**: This is a client-side application. No data is sent to any backend server (except for the AI Advisor which sends chat prompts to Google's Gemini API).

## 📂 Project Structure

```
xpass/
├── src/
│   ├── components/         # React components
│   │   ├── layout/         # Layout components (Sidebar, MobileHeader)
│   │   ├── ui/             # Reusable UI components (ThemeToggle)
│   │   ├── AiAdvisor.tsx
│   │   ├── AuditDashboard.tsx
│   │   ├── PasswordGenerator.tsx
│   │   ├── SecurityTools.tsx
│   │   ├── StrengthAnalyzer.tsx
│   │   └── Vault.tsx
│   ├── services/           # Core logic and services
│   │   ├── breachService.ts    # Breach detection logic
│   │   ├── cryptoService.ts    # Encryption/Decryption utilities
│   │   ├── geminiService.ts    # AI integration
│   │   └── i18nService.ts      # Translations (EN, AR, FR)
│   ├── types/              # TypeScript interfaces
│   ├── App.tsx             # Main application layout
│   └── index.css           # Global styles
├── index.html              # Entry HTML
└── tailwind.config.js      # Tailwind configuration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


---

Made with ❤️ by [Anass GOUZGAR](https://anassgouzgar.com)
