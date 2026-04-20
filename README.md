# Color Dress Test

Webapp mobile-friendly sans backend pour faire un test de personnalite par couleurs (Rouge, Jaune, Vert, Bleu) et proposer une tenue fun pour une soiree a la maison.

## Fonctions

- Quiz de 12 questions tirees au hasard dans une banque de questions
- Reponses a choix multiples avec scoring pondere multi-couleurs
- Repartition complete en pourcentage (total = 100)
- Couleur dominante + secondaire
- Description de personnalite pour chaque couleur
- Resume rigolo, legerement moqueur mais sympa
- Suggestion tenue souple selon le profil

## Gestion interne des versions de questions

Le projet supporte plusieurs jeux de questions versionnes, sans UI dediee.

- Dossier: `src/data/question-sets/`
- Chaque fichier JSON contient:
  - `id`: slug unique du set (ex: `default`, `fr-terreaterre-rigolo`)
  - `description`: contexte de generation du set
  - `createdAt` (optionnel): date ISO courte
  - `questions`: tableau de questions
    - `contexte`: `quotidien` ou `sortie`

Exemple:

```json
{
  "id": "default",
  "description": "Version de base, melange quotidien/sortie",
  "createdAt": "2026-04-20",
  "questions": []
}
```

### Selection du set au runtime

Depuis l'ecran d'accueil, un selecteur affiche automatiquement tous les fichiers presents dans `src/data/question-sets/`.
Tu choisis le set puis le quiz se lance avec ce set.

Priorite de resolution:

1. Parametre GET `?set=<id>`
2. Variable `VITE_QUESTION_SET`
3. Fallback sur `default`

Si un set demande est inconnu, l'app repasse sur `default` et log un warning technique.

Exemples:

- URL: `http://localhost:5173/?set=fr-terreaterre-rigolo`
- Env: creer un `.env.local` avec `VITE_QUESTION_SET=fr-enfants-rigolo`

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
