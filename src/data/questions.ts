export type ColorKey = 'red' | 'yellow' | 'green' | 'blue'

export type ColorWeights = Record<ColorKey, number>

export type Option = {
  id: string
  label: string
  weights: ColorWeights
}

export type Question = {
  id: number
  prompt: string
  vibe: 'party' | 'daily'
  options: Option[]
}

export const questions: Question[] = [
  {
    id: 1,
    vibe: 'party',
    prompt: 'Premier jour dans une nouvelle equipe. Ton entree en scene :',
    options: [
      { id: 'a', label: 'Je serre des mains, je prends la salle, je mets mon drapeau.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je sors une vanne borderline et bizarrement ca marche.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je capte la personne sympa et je lance une discussion cool.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je scan les egos 5 minutes avant de bouger un cil.', weights: { red: 0, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 2,
    vibe: 'daily',
    prompt: 'Ton agenda de la semaine, version non mensongere :',
    options: [
      { id: 'a', label: 'Blindee. J enchaine les taches comme un boss en mode turbo.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Chargee, mais je laisse de la place pour les plans debiles.', weights: { red: 1, yellow: 3, green: 0, blue: 1 } },
      { id: 'c', label: 'Cadence stable, respiration, et dispo pour depanner.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Matrice militaire: couleurs, blocs, alertes, rien ne depasse.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 3,
    vibe: 'party',
    prompt: 'Le trajet en voiture devient long et l ambiance meurt. Tu fais quoi ?',
    options: [
      { id: 'a', label: 'Je prends la main sur la musique et je relance la machine.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je lance un blind test honteux ou tout le monde crie.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je mets un son chill qui calme les nerfs de tout le monde.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je fais une file d attente sonore propre, sans faute de gout.', weights: { red: 0, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 4,
    vibe: 'daily',
    prompt: 'Gros choix au boulot, 6 personnes parlent, zero decision :',
    options: [
      { id: 'a', label: 'Je tranche. Oui c est brutal, mais au moins on avance.', weights: { red: 3, yellow: 0, green: 0, blue: 2 } },
      { id: 'b', label: 'Je vends l option qui motive le groupe, meme les ronchons.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je choisis celle qui evite que ca se deteste lundi matin.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je compare les risques comme un control freak certifie.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 5,
    vibe: 'party',
    prompt: 'Tu renverses ton cafe sur ton clavier en visio. Reponse immediate :',
    options: [
      { id: 'a', label: 'Plan de crise: je coupe tout, je sauve le matos, je commande.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Je lache une punchline et je transforme le drame en sketch.', weights: { red: 0, yellow: 3, green: 1, blue: 1 } },
      { id: 'c', label: 'Je garde mon calme et je demande de quoi j ai besoin.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je nettoie proprement, methodiquement, sans theatre.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 6,
    vibe: 'daily',
    prompt: 'Dans un chat de groupe, ton style c est plutot :',
    options: [
      { id: 'a', label: 'Une ligne, un verbe, une mission. Pas de roman.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'GIF, emoji, reaction, chaos organise et energie.', weights: { red: 0, yellow: 3, green: 1, blue: 1 } },
      { id: 'c', label: 'Je reformule pour que personne se sente largue.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Message propre, contexte, bullet points, merci bonsoir.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 7,
    vibe: 'party',
    prompt: 'Invitation vague: tenue libre. Ton outfit du jour :',
    options: [
      { id: 'a', label: 'Look qui dit clairement: je suis le personnage principal.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Piece flashy qui frise le mauvais gout, et j assume.', weights: { red: 1, yellow: 3, green: 0, blue: 1 } },
      { id: 'c', label: 'Stylish mais comfy, mon corps ne negocie pas.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Simple, coupe nette, details calibres au millimetre.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 8,
    vibe: 'daily',
    prompt: 'Ton planning explose a 10h12. Ton reflexe :',
    options: [
      { id: 'a', label: 'Je recoupe les priorites et je coupe le gras sans piete.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Je garde le smile et je remotive la troupe.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je rassure tout le monde avant de repartir.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je rebuild le plan comme un architecte en nerfs.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 9,
    vibe: 'party',
    prompt: 'Pause dej avec des potes. Tu proposes quoi :',
    options: [
      { id: 'a', label: 'Petit challenge debile et competitif, que le meilleur survive.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Un jeu social qui met meme les timides dans le bain.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Un truc tranquille ou personne ne se ridiculise.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Une activite propre avec regles nettes et timing clair.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 10,
    vibe: 'daily',
    prompt: 'Tu dois apprendre un nouvel outil relou :',
    options: [
      { id: 'a', label: 'Je clique partout, je casse tout, j apprends vite.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je veux un buddy et des exemples vivants.', weights: { red: 0, yellow: 3, green: 1, blue: 1 } },
      { id: 'c', label: 'Je prends mon temps, je veux rester lucide.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Doc officielle, etapes numerotees, zero freestyle.', weights: { red: 0, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 11,
    vibe: 'party',
    prompt: 'Reunion qui traine, tout le monde a la tete dans le vide :',
    options: [
      { id: 'a', label: 'Je secoue le truc: decision maintenant, pas demain.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je relance avec une idee fun qui reveille la salle.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je garde une vibe tranquille pour eviter le clash.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Pause de 5 min, puis agenda clair et propre.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 12,
    vibe: 'daily',
    prompt: 'Dans un projet collectif, ton role naturel c est :',
    options: [
      { id: 'a', label: 'Je donne la direction et je pousse le train.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je connecte les gens, je mets du jus, je fluidifie.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je garde la paix sociale quand ca chauffe.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je structure les taches et je traque les trous.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 13,
    vibe: 'party',
    prompt: 'Au diner, quelqu un parle de lui depuis 12 minutes non stop :',
    options: [
      { id: 'a', label: 'Je coupe net mais poli: on partage le micro.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je recadre avec humour et une pique bien placee.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je glisse une transition douce pour inclure les autres.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'J attends la bonne ouverture, puis je reroute la table.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 14,
    vibe: 'daily',
    prompt: 'Tu recois un feedback sec comme un toast oublie :',
    options: [
      { id: 'a', label: 'Je prends le fond utile et je corrige direct.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Je souffle un coup, je dedramatise, je repars.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je restaure le climat avant de parler process.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je demande des exemples precis, pas des vibes.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 15,
    vibe: 'party',
    prompt: 'Photo improvisee avec les potes. Tu te places ou :',
    options: [
      { id: 'a', label: 'Au centre, menton haut, charisme en 4K.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Pose absurde mais iconique, j offre du contenu.', weights: { red: 1, yellow: 3, green: 0, blue: 1 } },
      { id: 'c', label: 'Je check que personne ne soit coupe ou exclu.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je regle angle et lumiere avant le clic final.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 16,
    vibe: 'daily',
    prompt: 'Ta relation aux deadlines, sans filtre :',
    options: [
      { id: 'a', label: 'Deadline serree = dopamine. Je me reveille enfin.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je carbure avec la dynamique de groupe, pas seul.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je prefere le rythme durable, pas le sprint permanent.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'J anticipe pour ne jamais negocier avec la panique.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 17,
    vibe: 'party',
    prompt: 'Brunch de dimanche improvise chez toi. Ton niveau de prep :',
    options: [
      { id: 'a', label: 'Je sors le grand jeu, playlist, menu, timing, domination.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je fais ca showtime, decors improv et energie folle.', weights: { red: 1, yellow: 3, green: 0, blue: 1 } },
      { id: 'c', label: 'Version cosy, simple, et personne ne se prend la tete.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je fais minimal chic, details soignes, execution propre.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 18,
    vibe: 'daily',
    prompt: 'Un pote te dit: je suis dans la sauce, aide moi :',
    options: [
      { id: 'a', label: 'Je propose un plan concret en deux minutes chrono.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Je remonte le moral et je redonne de l elan.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'J ecoute d abord, je conseille ensuite.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je decoupe le probleme avant de sortir une solution.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 19,
    vibe: 'party',
    prompt: 'Cuisine en vrac apres repas. Ton mode rangement :',
    options: [
      { id: 'a', label: 'Je lance un plan de bataille et je distribue les roles.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je mets du son et je transforme ca en choregraphie.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je fais ma part tranquille, sans sermon, sans drama.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je trie, j optimise, je rends ca presque satisfaisant.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 20,
    vibe: 'daily',
    prompt: 'Dans une embrouille, ton automatisme c est :',
    options: [
      { id: 'a', label: 'Je vais au fond direct. On arrache le pansement.', weights: { red: 3, yellow: 0, green: 0, blue: 2 } },
      { id: 'b', label: 'Je detends l air pour parler sans s entre devorer.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je calme les tensions avant de traiter le fond.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je separe les faits, les interpretations et les films.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 21,
    vibe: 'party',
    prompt: 'Un pote annule un plan a la derniere minute :',
    options: [
      { id: 'a', label: 'Je reconfigure le plan en 30 secondes, next.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je sors une nouvelle idee et je relance l energie.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je check que personne ne se sente laisse sur le carreau.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je reequilibre horaires, trajet, budget, tout propre.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 22,
    vibe: 'daily',
    prompt: 'Ton bureau ou ton sac, niveau realite terrain :',
    options: [
      { id: 'a', label: 'Essentiel pur, utile seulement, le reste degage.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Chaos creatif. Moi seul sais ou sont les choses.', weights: { red: 0, yellow: 3, green: 1, blue: 1 } },
      { id: 'c', label: 'Pratique et accueillant, pas de stress visuel.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Zones, etiquettes, logique. Meme un stagiaire s y retrouve.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 23,
    vibe: 'party',
    prompt: 'On te demande de parler 30 secondes devant tout le monde :',
    options: [
      { id: 'a', label: 'Message court, percutant, mic drop.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je mets de l humour et je fais rire la salle.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je parle avec coeur pour inclure tout le monde.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Structure propre: intro, point, sortie, merci.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 24,
    vibe: 'daily',
    prompt: 'Si on devait resumer ta facon de fonctionner :',
    options: [
      { id: 'a', label: 'Je fonce, j ajuste, je gagne du terrain.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je connecte les gens, les idees et les opportunites.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je stabilise le groupe et je fluidifie les tensions.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je structure, je securise, je fiabilise.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
]
