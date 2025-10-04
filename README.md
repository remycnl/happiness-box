# 📦✨ Boîte du Bonheur 

Une application mignonne et simple pour conserver vos plus beaux souvenirs ! Ajoutez des textes, photos ou vidéos dans votre boîte magique du bonheur et redécouvrez-les de manière chronologique ou laissez le hasard vous surprendre.

## 🌟 Fonctionnalités

- **📝 Souvenirs texte** : Écrivez vos pensées, citations favorites, ou moments mémorables
- **📸 Souvenirs photo** : Conservez vos images précieuses avec des descriptions
- **🎥 Souvenirs vidéo** : Gardez vos vidéos souvenirs en sécurité
- **📅 Vue chronologique** : Parcourez tous vos souvenirs dans l'ordre chronologique
- **🎲 Souvenir surprise** : Laissez le hasard choisir un souvenir pour vous
- **🏷️ Tags** : Organisez vos souvenirs avec des mots-clés
- **📱 Design responsive** : Fonctionne parfaitement sur mobile et desktop

# � Boîte à Souvenirs

Une application moderne et responsive pour conserver vos pensées précieuses et les redécouvrir quand le cœur vous en dit.

## ✨ Fonctionnalités

- ✍️ **Écrire des lettres** : Rédigez vos souvenirs, pensées ou moments précieux
- 🎲 **Lettre surprise** : Découvrez une lettre aléatoire de votre collection
- 📚 **Vue chronologique** : Consultez toutes vos lettres triées par date
- 📱 **Responsive** : Interface optimisée pour mobile, tablette et desktop
- 🎨 **Design moderne** : Interface épurée avec Tailwind CSS
- ⚡ **Performance** : Optimisé avec Nuxt 3 et PostgreSQL

## 🚀 Installation

### Prérequis

- Node.js 18+ 
- npm ou yarn
- Base de données PostgreSQL (Neon recommandé)

### Configuration

1. **Cloner le projet**
```bash
git clone <repository-url>
cd happiness-box
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer la base de données**

Créez un fichier `.env` à la racine du projet :
```env
DATABASE_URL="postgresql://username:password@your-neon-host/dbname?sslmode=require"
```

4. **Configurer Prisma**
```bash
# Générer le client Prisma
npx prisma generate

# Créer et appliquer les migrations
npx prisma migrate dev --name init
```

5. **Lancer l'application**
```bash
npm run dev
```

L'application sera accessible à `http://localhost:3000`

## 📦 Structure du projet

```
happiness-box/
├── app/
│   ├── components/          # Composants Vue réutilisables
│   ├── pages/              # Pages de l'application
│   └── assets/             # Assets CSS et images
├── server/
│   └── api/                # API endpoints
├── prisma/
│   └── schema.prisma       # Schéma de base de données
└── lib/
    └── prisma.ts          # Configuration Prisma
```

## 🗄️ Base de données

L'application utilise PostgreSQL avec Prisma ORM. Le modèle principal :

```prisma
model Letter {
  id        String   @id @default(cuid())
  content   String   // Contenu de la lettre
  title     String?  // Titre optionnel
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🔧 API Endpoints

- `GET /api/letters` : Récupérer toutes les lettres (triées par date)
- `POST /api/letters` : Créer une nouvelle lettre
- `GET /api/letters/random` : Récupérer une lettre aléatoire

## 🎨 Technologies utilisées

- **Framework** : Nuxt 3
- **Base de données** : PostgreSQL + Prisma ORM
- **Styling** : Tailwind CSS
- **Language** : Vue 3 (Composition API)
- **Hébergement DB** : Neon (recommandé)

## 🚀 Déploiement

### Avec Vercel (recommandé)

1. Push votre code sur GitHub
2. Connectez votre repo à Vercel
3. Ajoutez la variable d'environnement `DATABASE_URL`
4. Déployez !

### Variables d'environnement en production

```env
DATABASE_URL="votre-url-neon-postgresql"
```

## 📱 Utilisation

1. **Écrire une lettre** : Cliquez sur "Écrire une lettre", rédigez votre contenu et déposez-la dans la boîte
2. **Découvrir une surprise** : Cliquez sur "Lettre surprise" pour voir une lettre aléatoire
3. **Voir toutes les lettres** : Consultez chronologiquement tous vos souvenirs

## 🛠️ Développement

```bash
# Mode développement
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview

# Lancer Prisma Studio (interface graphique DB)
npx prisma studio
```

## 📝 Licence

MIT License - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

Créé avec ❤️ pour conserver vos moments précieux

## 🛠️ Technologies utilisées

- **Nuxt 3** - Framework Vue.js pour le frontend et backend
- **Prisma** - ORM pour la gestion de base de données
- **SQLite** - Base de données locale simple
- **TailwindCSS** - Framework CSS pour le design
- **TypeScript** - Typage statique pour JavaScript

## 📁 Structure du projet

```
happiness-box/
├── app/
│   ├── app.vue                 # Page principale
│   ├── assets/css/main.css     # Styles personnalisés
│   └── generated/prisma/       # Client Prisma généré
├── components/
│   ├── AddMemoryForm.vue       # Formulaire d'ajout
│   ├── MemoryTimeline.vue      # Affichage chronologique
│   └── RandomMemoryModal.vue   # Modal pour souvenir aléatoire
├── server/api/
│   ├── memories.get.ts         # API récupération souvenirs
│   ├── memories.post.ts        # API création souvenirs
│   └── memories/random.get.ts  # API souvenir aléatoire
├── prisma/
│   ├── schema.prisma          # Schéma de base de données
│   └── dev.db                 # Base de données SQLite
└── public/uploads/            # Dossier pour les fichiers uploadés
```

## 💡 Comment utiliser

### Ajouter un souvenir

1. Cliquez sur "➕ Ajouter un souvenir"
2. Choisissez le type (Texte, Photo, ou Vidéo)
3. Remplissez les informations :
   - **Titre** (optionnel) : Donnez un nom à votre souvenir
   - **Contenu** : Votre texte ou description
   - **Fichier** : Pour photos/vidéos, glissez-déposez ou cliquez pour choisir
   - **Tags** (optionnel) : Mots-clés séparés par des virgules
4. Cliquez sur "✨ Ajouter à ma boîte du bonheur"

### Parcourir vos souvenirs

- **Chronologie** : Cliquez sur "📅 Chronologie" pour voir tous vos souvenirs du plus récent au plus ancien
- **Souvenir surprise** : Cliquez sur "🎲 Souvenir surprise" pour découvrir un souvenir choisi au hasard

### Organiser avec des tags

Utilisez des tags pour categoriser vos souvenirs :
- `vacances, été, plage`
- `famille, anniversaire`
- `travail, réussite`
- `amis, soirée`

## 🎨 Personnalisation

L'application utilise un système de design coloré et mignon avec :
- **Gradients colorés** pour les arrière-plans
- **Animations douces** pour les interactions
- **Emojis** pour rendre l'expérience joyeuse
- **Design responsive** pour tous les appareils

## 🔧 Scripts disponibles

```bash
npm run dev          # Démarrer en mode développement
npm run build        # Construire pour la production
npm run preview      # Prévisualiser la version de production
npm run generate     # Générer une version statique
```

## 📝 Base de données

L'application utilise SQLite avec Prisma. Le modèle de données inclut :

```prisma
model Memory {
  id          Int      @id @default(autoincrement())
  type        String   // 'TEXT', 'PHOTO', 'VIDEO'
  title       String?
  content     String?
  filePath    String?  // Chemin vers le fichier
  fileName    String?  // Nom original
  fileSize    Int?     // Taille en bytes
  tags        String?  // Tags séparés par virgules
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## 🚀 Déploiement

Pour déployer en production :

1. **Build de production**
   ```bash
   npm run build
   ```

2. **Démarrer le serveur**
   ```bash
   npm run preview
   ```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer de nouvelles fonctionnalités
- Améliorer le design
- Optimiser le code

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

Créé avec ❤️ pour conserver vos plus beaux moments 🌟
