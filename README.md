<div align="center">

# ☕ Coffee

### A sleek AI-powered recipe web app for coffee lovers

<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black" alt="GSAP" />
</p>
<p>
  <img src="https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white" alt="LangChain" />
  <img src="https://img.shields.io/badge/LangGraph-1C3C3C?style=for-the-badge" alt="LangGraph" />
  <img src="https://img.shields.io/badge/Mistral_AI-FF7000?style=for-the-badge&logo=mistralai&logoColor=white" alt="Mistral AI" />
  <img src="https://img.shields.io/badge/Tavily_Search-0B0F19?style=for-the-badge" alt="Tavily" />
</p>

<p><em>A sleek, dark-themed presentation web app with full-page scroll snapping, GSAP micro-interactions, and a stateful LangGraph agent that researches coffee live on the web.</em></p>

</div>

<br/>

## 📸 Preview

<div align="center">

**Recipe landing page**
<img src="https://ik.imagekit.io/2xanijumqs/coffee/hero-latte.png" alt="Classic Latte hero section" width="100%" />

<br/>

**Structured recipe detail — serving, prep time, difficulty, ingredients & tools**
<img src="https://ik.imagekit.io/2xanijumqs/coffee/recipe-latte.png" alt="Classic Latte recipe details" width="100%" />

<br/>

**🔍 Search → 🤖 AI Agent searches the web → 📦 Structured recipe output**
<img src="https://ik.imagekit.io/2xanijumqs/coffee/search-americano.png" alt="Search bar with AI agent finding a coffee recipe from the web" width="100%" />

<br/>

<img src="https://ik.imagekit.io/2xanijumqs/coffee/recipe-americano.png" alt="Cold Americano recipe details" width="100%" />

</div>

<br/>

## ✨ Overview

**Coffee** is a recipe web app for exploring the world of coffee — brewing recipes, origins, and trends — brought to life with buttery-smooth scroll animations on the frontend and a real, reasoning AI agent on the backend.

Instead of static, hardcoded recipes, the app is backed by a **cyclic LangGraph agent** that combines **Mistral AI** reasoning with **live Tavily web search**, so brewing recipes and coffee data stay grounded in current, real-world information rather than stale training knowledge.

<br/>

## 🎯 Features

| | |
|---|---|
| 🎯 **Full-Page Scroll Snap** | Smooth vertical scrolling that locks cleanly onto each recipe section |
| 🎭 **GSAP Motion & Animations** | Cinema-grade scroll-driven micro-interactions and element reveals via GreenSock |
| 📌 **Fixed Sidebar Navigation** | A pinned left-hand index (`01`, `02`, `03`...) as recipe content dynamically flows |
| 🤖 **Stateful AI Workflow** | Cyclic LangGraph agent managing conversation state, coffee knowledge & recipe recommendations |
| 🌐 **Real-Time Web Search** | Tavily-powered, context-aware search for the latest brewing recipes, trends & origin data |
| 🧠 **Mistral AI Intelligence** | Fast, capable open-weight LLM driving intelligent coffee chat, recipes and insights |
| 🎨 **Modern Dark UI** | Custom dark palette centered on `#1B222C`, styled with Tailwind + Poppins |
| ⚡ **Optimized Asset Pipeline** | Static assets served via Vite for near-instant loads |

<br/>

## 🛠️ Tech Stack

<table>
<tr>
<td valign="top" width="50%">

**Frontend**
- ⚛️ React + Vite
- 🎨 Tailwind CSS
- 🎬 GSAP (ScrollTrigger)
- 🔤 React Icons (`cg`)
- ✍️ Google Fonts — Poppins

</td>
<td valign="top" width="50%">

**AI Backend**
- 🔗 LangChain + LangGraph
- 🧠 Mistral AI (`@langchain/mistralai`)
- 🌐 Tavily Search API
- 🟦 TypeScript

</td>
</tr>
</table>

<br/>

## 🧩 How the AI Agent Works

```
┌─────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  User Query  │ ──▶ │  LangGraph Agent  │ ──▶ │  Mistral AI LLM  │
└─────────────┘     │   (stateful,      │     └─────────────────┘
                     │    cyclic graph)  │              │
                     └──────────────────┘              ▼
                              │              ┌─────────────────────┐
                              └────────────▶ │  Tavily Web Search   │
                                             │ (live coffee data)   │
                                             └─────────────────────┘
                                                        │
                                                        ▼
                                          Grounded, up-to-date response
```

The graph maintains conversation state across turns, deciding when to answer directly and when to reach out to Tavily for fresh, real-world coffee data — brewing recipes, origins, roast trends, brewing parameters — before responding.

<br/>

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- API keys for **Mistral AI** and **Tavily**

### Installation

```bash
# Clone the repository
git clone https://github.com/devbysandeepkumar/coffee.git
cd coffee

# Install frontend dependencies
npm install

# Install backend dependencies
cd server && npm install
```

### Environment Variables

Create a `.env` file in the backend directory:

```env
MISTRAL_API_KEY=your_mistral_api_key
TAVILY_API_KEY=your_tavily_api_key
```

### Run Locally

```bash
start the frontend
npm run dev
```

Then open **http://localhost:5173** in your browser. ☕

<br/>

## 🎨 Design Language

- **Base palette:** `#1B222C` dark canvas with warm coffee-toned accents
- **Typography:** Poppins for clean, modern presentation-style hierarchy
- **Motion philosophy:** subtle, purposeful reveals — nothing moves without meaning

<br/>

## 🗺️ Roadmap

- [ ] Voice-driven recipe recommendations
- [ ] Persisted chat/session history
- [ ] Multi-origin brewing recipe comparison view
- [ ] Saved/favorite recipes
- [ ] Mobile-optimized scroll interactions

<br/>

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a PR.

<br/>

<div align="center">

**Built with ☕ and a lot of scroll listeners.**

</div>
