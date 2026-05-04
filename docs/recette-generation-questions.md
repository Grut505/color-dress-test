# Recette reutilisable de generation des questions/reponses

Cette recette sert de reference pour ce projet et pour de futurs tests du meme esprit.

## Intention produit

On s'inspire d'un cadre type DISC (Rouge/Jaune/Vert/Bleu), mais en version simplifiee, concrete et accessible.
Le but n'est pas un diagnostic psychologique strict: on veut une experience fun, utile et facile a jouer.

Objectif final: faire ressortir 1 a 2 couleurs dominantes pour proposer des idees de tenues vestimentaires pour une soiree entre potes, en mode a la cool.

## Principes editoriaux

- Questions ancrees dans des situations du quotidien (maison, groupe d'amis, petits imprevus, organisation simple).
- Ton sympa, leger, pas prise de tete, jamais culpabilisant.
- Reponses courtes, claires, naturelles, choisies spontanement.
- Options plausibles et toutes defensables socialement (pas de "bonne reponse" evidente).
- Vocabulaire adapte au public cible (adulte/enfant) sans changer la logique de fond.

## Profondeur des couleurs (pas de caricature)

Chaque couleur represente un style de fonctionnement profond:

- Rouge: action, decision, capacite a trancher, orientation resultat.
- Jaune: influence sociale, expression, enthousiasme, capacite a embarquer et donner de l'elan.
- Vert: stabilite relationnelle, ecoute, fiabilite, constance, cohesion.
- Bleu: rigueur, structure, precision, clarte, coherence.

Regle de base: ne jamais reduire une couleur a un stereotype (ex: Jaune = "clown du groupe").

## Principes de generation des options

- 6 options par question, correspondant a 6 styles de reaction.
- Une couleur principale + une nuance secondaire par option (pas de reponse totalement neutre).
- Formulations non evidentes: l'utilisateur ne doit pas pouvoir mapper facilement "cette phrase = cette couleur".
- Eviter les formulations caricaturales trop directes qui rendent le code couleur lisible au premier coup d'oeil.
- Varier les tournures d'une question a l'autre pour une meme couleur.

## Exigences de ponderation et de resultat

- Eviter les resultats plats (ex: 25/25/25/25).
- Chercher une repartition qui fait emerger 1 ou 2 couleurs dominantes.
- Garder des ponderations coherentes et stables entre les questions d'un meme set.
- Verifier que les options d'une meme question discriminent reellement les styles.

## Structure technique attendue (JSON)

- `id`, `description`, `createdAt` (optionnel), `questions`.
- Chaque question: `id`, `prompt`, `contexte` (`quotidien` ou `sortie`), `options`.
- Chaque option: `id`, `label`, `weights` (`red`, `yellow`, `green`, `blue`).
- Garder un bon equilibre `quotidien` / `sortie` pour limiter les biais de contexte.

## Checklist qualite avant publication d'un set

- [ ] Le ton est sympa, accessible, quotidien, pas prise de tete.
- [ ] Les 4 couleurs sont traitees avec respect et profondeur.
- [ ] Le Jaune n'est pas reduit a "faire rire", il porte aussi influence et mobilisation.
- [ ] Les reponses ne sont pas evidentes a decoder par couleur.
- [ ] Les ponderations favorisent des dominantes plutot qu'un profil plat.
- [ ] Le set reste exploitable pour l'objectif tenue de soiree entre amis.
