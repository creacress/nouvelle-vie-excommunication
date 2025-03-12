### 📌 **README.md**
```md
# Nouvelle Vie après l’Excommunication - Site Web 📢

Bienvenue sur le **site officiel de l'association "Nouvelle Vie après l’Excommunication"**.  
Ce projet vise à aider les personnes excommuniées en leur offrant un soutien moral, social et juridique.  

🛠️ **Technologies utilisées :**  
✅ **Next.js 15** (SSG & API routes)  
✅ **React & Tailwind CSS** (Frontend moderne)  
✅ **Nodemailer** (Envoi d'email via Hostinger SMTP)  
✅ **GitHub Actions** (Déploiement sécurisé & CI/CD)  
✅ **Hostinger** (Hébergement & gestion des emails)  

## 🚀 **Fonctionnalités principales**
- 📄 **Site statique (SSG) avec pages optimisées pour le SEO**  
- 📩 **Formulaire de contact avec validation & envoi d'email sécurisé**  
- 🔐 **Stockage des variables sensibles via GitHub Secrets (pas de `.env` en prod)**  
- 📜 **Données structurées JSON-LD pour un meilleur référencement**  

## 📦 **Installation locale**
### 1️⃣ **Cloner le projet**
```sh
git clone https://github.com/ton-utilisateur/ton-repo.git
cd ton-repo
```

### 2️⃣ **Installer les dépendances**
```sh
npm install
```

### 3️⃣ **Créer un fichier `.env.local`** (Pour le dev uniquement)
```env
SMTP_USER=ton-email@ton-site.com
SMTP_PASS=ton-mot-de-passe
```

### 4️⃣ **Lancer le serveur de développement**
```sh
npm run dev
```
Le site sera accessible sur **http://localhost:3000** 🚀

### **Déploiement automatique**
À chaque **push sur `main`**, GitHub Actions :
1. **Récupère les variables SMTP**
2. **Construit l’application**
3. **Déploie sur l’hébergement (Hostinger/Vercel/autre)**

## 📬 **Fonctionnalité d'envoi d'email**
L’API Route `/api/contact` permet d'envoyer des emails via **Hostinger SMTP**.  

### **Exemple de requête `POST` :**
```json
{
  "name": "Jean Dupont",
  "email": "jean@example.com",
  "message": "Bonjour, j'aimerais en savoir plus sur l'association."
}
```

L'email est envoyé à l’adresse de contact définie dans l’API (`contact@ton-site.com`).

## 🛠️ **Structure du projet**
```
📂 ton-repo/
├── 📂 app/
│   ├── 📂 api/
│   │   ├── 📂 contact/
│   │   │   ├── 📜 route.ts   # API d'envoi d'email
│   ├── 📂 components/
│   │   ├── 📜 ContactForm.tsx  # Formulaire de contact
│   ├── 📂 styles/
│   │   ├── 📜 Contact.module.css  # Styles du formulaire
│   ├── 📜 page.tsx  # Page principale
├── 📜 next.config.js  # Configuration Next.js
├── 📜 README.md  # Documentation
├── 📜 package.json  # Dépendances
```
## 📌 **Améliorations futures**
🔹 **Ajout d’un CAPTCHA anti-spam**  
🔹 **Sauvegarde des messages dans une base de données (PostgreSQL ou Firebase)**  
🔹 **Intégration d’une notification Slack/Discord pour chaque message reçu**  

## 🏆 **Contribuer au projet**
Les contributions sont les bienvenues ! 🚀  
- **Fork** le repo  
- **Crée une branche** (`git checkout -b feature-nouvelle-fonction`)  
- **Commit & push** (`git commit -m "Ajout d'une nouvelle fonctionnalité" && git push origin feature-nouvelle-fonction`)  
- **Ouvre une Pull Request**  

## 📧 **Contact**
📩 Email : [contact@webcresson.com](mailto:contact@webcresson.com)  
🌍 Site web : [[https://ton-site.com](https://www.webcresson.com/)]([https://ton-site.com](https://www.webcresson.com/))  

### **🛠️ Développé avec ❤️ en Next.js 15**
```md
🚀 Si ce projet t’aide, laisse une ⭐ sur GitHub !
```
## **📌 Explication rapide des points clés**
✅ **Installation simple** → `git clone`, `npm install`, et c'est parti !  
✅ **Déploiement auto avec GitHub Actions** → Plus besoin de `.env` en prod.  
✅ **API d’envoi d'email sécurisée** → Protection contre le spam.  
✅ **Code bien structuré** → Facile à comprendre et à améliorer.  


💡 **Tu veux ajouter un webhook ou stocker les emails en base de données ?** On peut le faire ensemble ! 🚀
---
