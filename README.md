# Color Dress Test

Webapp mobile-friendly sans backend pour faire un test de personnalite par couleurs (Rouge, Jaune, Vert, Bleu) et proposer une tenue fun pour une soiree a la maison.

## Fonctions

- Quiz de 24 questions (mix soiree + quotidien)
- Reponses a choix multiples avec scoring pondere multi-couleurs
- Repartition complete en pourcentage (total = 100)
- Couleur dominante + secondaire
- Description de personnalite pour chaque couleur
- Resume rigolo, legerement moqueur mais sympa
- Suggestion tenue souple selon le profil

## Lancer en local

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
npm run preview
```

## Deploiement GitHub Pages

Le repo contient un workflow `/.github/workflows/deploy-pages.yml` qui deploie automatiquement sur GitHub Pages a chaque push sur `main`.

Checklist GitHub:

1. Push le projet sur GitHub.
2. Dans `Settings > Pages`, choisis `GitHub Actions` comme source.
3. Push sur `main` et attends la fin du workflow.

Le `base` Vite est configure automatiquement pour GitHub Actions via `GITHUB_REPOSITORY`, ce qui evite de modifier la config selon le nom du repo.
