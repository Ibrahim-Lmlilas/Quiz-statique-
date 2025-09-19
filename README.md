# 🎮 Quiz Statique - Application de Quiz Interactif

## 📖 Table des Matières
- [🚀 Aperçu](#-aperçu)
- [✨ Fonctionnalités](#-fonctionnalités)
- [🏗️ Structure du Projet](#️-structure-du-projet)
- [🎯 Utilisation](#-utilisation)
- [🎨 Technologies Utilisées](#-technologies-utilisées)

## 🚀 Aperçu

Une application de quiz interactive avec un design gaming rétro, développée avec HTML, CSS et JavaScript vanilla. L'application propose des quiz sur trois thèmes principaux : HTML, CSS et JavaScript, avec un système de scoring avancé et génération de PDF.

## ✨ Fonctionnalités

### 🎯 Fonctionnalités Principales
- **🏷️ Saisie du nom d'utilisateur** - Validation obligatoire (minimum 4 caractères)
- **🎨 Sélection de thème** - HTML, CSS ou JavaScript
- **⏱️ Timer global** - Suivi du temps total du quiz
- **⏰ Timer par question** - 30 secondes par question avec passage automatique
- **🎲 Types de questions mixtes** - Questions à choix unique et multiple
- **📊 Système de scoring avancé** - Calcul précis avec crédit partiel
- **📄 Génération PDF** - Rapport détaillé des résultats
- **🔄 Fonction Recommencer** - Reset complet pour refaire un quiz
- **💾 Sauvegarde locale** - Historique des résultats dans localStorage

### 🎮 Interface Gaming
- **🎨 Design rétro** - Thème gaming avec police "Press Start 2P"
- **🖱️ Curseurs personnalisés** - Expérience immersive
- **🌈 Animations fluides** - Transitions et effets visuels
- **🎥 Arrière-plans animés** - GIFs thématiques pour chaque sujet
- **💡 Feedback visuel** - Couleurs pour réponses correctes/incorrectes

### 📊 Système d'Évaluation
- **✅ Questions simples** - 1 point par bonne réponse
- **🔢 Questions multiples** - Crédit partiel possible
- **⏱️ Pénalité temps** - Feedback sur la vitesse de réponse
- **📈 Pourcentage final** - Calcul automatique
- **🏆 Catégories de performance** - Excellent, Bien, Peut mieux faire, Il faut réviser

## 🏗️ Structure du Projet

```
Quiz-statique/
├── 📄 index.html         
├── 🎨 style.css           
├── ⚡ script.js           
├── 📚 README.md         
└── 🖼️ img              
 




```

## 🎯 Utilisation

### 🎮 Démarrage du Quiz
1. **👤 Saisir votre nom** (minimum 4 caractères)
2. **🎨 Choisir un thème** - HTML, CSS ou JavaScript
3. **▶️ Cliquer sur "Start Quiz"**

### 🏃‍♂️ Pendant le Quiz
- **⏰ 30 secondes par question** - Timer visible en haut
- **🎯 Questions à choix unique** - Clic direct sur la réponse
- **🔢 Questions à choix multiple** - Cocher les cases + "Confirmer"
- **⏭️ Passage automatique** - Si le temps expire

### 📊 Résultats
- **📈 Score détaillé** - Points obtenus/total
- **⏱️ Temps de completion** - Performance temporelle
- **🏆 Évaluation qualitative** - Feedback personnalisé
- **📄 Export PDF** - Rapport complet
- **🔄 Recommencer** - Nouveau quiz

## 🎨 Technologies Utilisées

### 🖥️ Frontend
- **🌐 HTML5** - Structure sémantique
- **🎨 CSS3** - Styles avancés et animations
- **⚡ JavaScript (ES6+)** - Logique interactive
- **🔤 Google Fonts** - Police "Press Start 2P"

### 📚 Librairies
- **📄 jsPDF** - Génération de documents PDF
- **💾 localStorage** - Stockage navigateur

#### 🎨 Couleurs (style.css)
```css
/* Variables de couleurs principales */
--primary-gold: #facc15;
--primary-blue: #14adff;
--dark-bg: #1a1a2e;
--success-green: #4CAF50;
```
