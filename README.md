# KGT Cyber Defense — Tunisia SOC

Interface de simulation de centre d'opérations cybernétiques, en français, conçue pour GitHub Pages. Le projet fonctionne côté navigateur sans backend ni installation.

## Fonctionnalités
- Tableau de bord responsive et horloge locale.
- Radar animé avec balises fictives.
- Carte schématique de Tunisie avec sept nœuds de démonstration (Tunis, Bizerte, Nabeul, Sousse, Kairouan, Sfax, Tozeur).
- Terminal local avec commandes de simulation : `help`, `status`, `scan-demo`, `nodes`, `clear`, `whoami`.
- Simulation Satellite & SIM avec états fictifs.
- Évaluateur local de robustesse d'un mot de passe de test. La valeur n'est pas transmise ni enregistrée.
- Générateur de lien de page 404 de démonstration, via `?demo404=...`.
- Visualiseur audio animé sans accès au microphone et sans capture de conversations.
- Journal d'événements et interactions de démonstration.

## Déploiement sur GitHub Pages
1. Créez un dépôt GitHub nommé `kgt-cyber-defense` (ou choisissez un dépôt existant).
2. Téléversez `index.html`, `styles.css`, `app.js` et `README.md` à la racine du dépôt.
3. Dans le dépôt, ouvrez **Settings → Pages**.
4. Dans **Build and deployment**, choisissez **Deploy from a branch**.
5. Choisissez la branche `main` et le dossier `/(root)`, puis cliquez sur **Save**.
6. Patientez quelques minutes. GitHub affichera l'URL publiée dans la section Pages.

## Test du lien 404 de démonstration
Après publication, cliquez sur **Créer une page 404 de démo**. Le lien produit ouvre une superposition visuelle de type 404 sur cette application. Il ne désactive aucun site externe.

## Limites importantes
Ce site est une simulation éducative. Les positions sur la carte sont schématiques et fictives. Il ne suit pas les numéros de téléphone ou les cartes SIM, n'intercepte pas les appels, ne casse pas les mots de passe de comptes réels et ne désactive pas de sites tiers. Le terminal n'envoie aucune commande à un serveur.

## Personnalisation
- Couleurs, espacements et responsive : `styles.css`
- Textes, structure et modules : `index.html`
- Interactions locales : `app.js`

La police Google Fonts est chargée depuis un CDN lorsqu'une connexion est disponible ; le site reste utilisable sans elle.
