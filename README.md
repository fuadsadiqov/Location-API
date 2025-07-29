# 🌍 IP Location Info App

This is a simple Angular app that fetches and displays detailed information about the current user's IP address using a public IP geolocation API.

🔗 **Live Demo:** [https://location-api.netlify.app/](https://location-api.netlify.app/)

---

## 📌 What It Does

- Automatically gets your public IP address
- Uses a public API to fetch detailed location data
- Displays everything in a clean, card-style UI
- No input required – just visit and view

---

## 🛠 Tech Stack

- [Angular](https://angular.io/)
- [SCSS](https://sass-lang.com/) for custom styles
- Public IP Geolocation API (e.g., `ipwho.is` or similar)
- TypeScript interface for type safety

---

## 🧾 IP Data Displayed

The app shows detailed information using this interface:

```ts
export interface LocationInterface {
  asn: string;
  city: string;
  continent_code: string;
  country: string;
  ...
}
```

🚀 Getting Started
To run it locally:

```bash
git clone https://github.com/your-username/ip-location-app.git
cd ip-location-app
npm install
ng serve

```
Visit http://localhost:4200 in your browser.

🧱 Folder Structure
```graphql

src/
├── app/
│   ├── components/  
│   ├── services/      
│   ├── models/      
│   └── app.component.ts  
├── assets/               
└── styles/               
```

✅ Example Use Cases
Debugging or testing IP-based features

Demo for Angular + external API integration

Learning resource for working with interfaces and HTTP in Angular

🙋‍♂️ Author
Built by @fuadsadiqov
Made with ✨ and a little IP magic
