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
    vibe: 'daily',
    prompt: 'Tu arrives en retard de 7 minutes a une reunion. Ton ouverture :',
    options: [
      { id: 'a', label: 'Je reprends la main direct: ok, on tranche et on avance.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je lance une vanne auto-clash, puis je remets de l energie.', weights: { red: 1, yellow: 3, green: 0, blue: 1 } },
      { id: 'c', label: 'Je m excuse vite et je check que personne n est braque.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je demande le recap et je remets le cadre proprement.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 2,
    vibe: 'party',
    prompt: 'Le groupe hesite 20 minutes sur ou manger. Ton move :',
    options: [
      { id: 'a', label: 'Je choisis un spot, j envoie l adresse, fin du debat.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Je propose 2 options hype et je fais voter en mode show.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je prends l option qui arrange les galeriens du groupe.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je filtre par distance, budget, attente. Romantique mais efficace.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 3,
    vibe: 'daily',
    prompt: 'Tu recois un message: On peut parler deux minutes ? sans contexte.',
    options: [
      { id: 'a', label: 'Oui, maintenant. Autant arracher le pansement vite.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Je reponds avec un gif dramatique pour detendre l ambiance.', weights: { red: 1, yellow: 3, green: 0, blue: 1 } },
      { id: 'c', label: 'Je demande si tout va bien avant de parler du sujet.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je demande le contexte, mon anxiete aime les bullet points.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 4,
    vibe: 'party',
    prompt: 'Tu cuisines pour des amis et ca tourne au chaos doux.',
    options: [
      { id: 'a', label: 'Je distribue les roles et je reprends le commandement.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je transforme le fiasco en moment culte avec du panache.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je garde tout le monde vivant et de bonne humeur, deja bien.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je simplifie le menu et je sauve le timing comme un robot sympa.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 5,
    vibe: 'daily',
    prompt: 'Ton tel tombe a 8 pourcent et tu n as pas de chargeur.',
    options: [
      { id: 'a', label: 'Je coupe tout ce qui consomme et je priorise mes appels utiles.', weights: { red: 2, yellow: 0, green: 1, blue: 2 } },
      { id: 'b', label: 'Je lance un avis de recherche de chargeur sur tous mes groupes.', weights: { red: 1, yellow: 3, green: 0, blue: 1 } },
      { id: 'c', label: 'Je previens les gens concernes pour eviter les faux dramas.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je passe en mode economie et je map mes options recharge.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 6,
    vibe: 'party',
    prompt: 'Dans un chat de groupe, 132 messages non lus. Tu fais :',
    options: [
      { id: 'a', label: 'Je resume en 2 lignes et je propose une decision.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Je react en rafale et je remets du vivant dans le bazar.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je verifie qui est perdu avant de relancer le fil.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je lis tout. Oui, tout. Oui, meme les messages inutiles.', weights: { red: 0, yellow: 1, green: 1, blue: 3 } },
    ],
  },
  {
    id: 7,
    vibe: 'daily',
    prompt: 'Tu recois un feedback sec, pas mechant mais pique.',
    options: [
      { id: 'a', label: 'Merci, recu. Je corrige et on passe a la suite.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Je decode avec humour pour ne pas finir en flammes.', weights: { red: 1, yellow: 3, green: 0, blue: 1 } },
      { id: 'c', label: 'Je cherche a retablir un bon climat avant le fond.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je demande des exemples precis, pas des impressions vagues.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 8,
    vibe: 'party',
    prompt: 'Tu organises un week-end entre amis avec 9 avis differents.',
    options: [
      { id: 'a', label: 'Je propose un plan final avec date et budget. A prendre ou a laisser.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Je fais un sondage fun et je motive meme les indecis chroniques.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je cherche le compromis qui frustre le moins de monde.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je fais un tableau options, couts, trajets. Sexy, evidemment.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 9,
    vibe: 'daily',
    prompt: 'Tu dois apprendre un nouvel outil imbitable pour hier.',
    options: [
      { id: 'a', label: 'Je teste direct sur un cas reel. Si ca casse, j apprends.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je cherche une demo video, mon cerveau veut du spectacle.', weights: { red: 0, yellow: 3, green: 0, blue: 2 } },
      { id: 'c', label: 'Je demande un coup de main a quelqu un de patient.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je lis la doc et je fais un mini protocole test.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 10,
    vibe: 'party',
    prompt: 'Au diner, quelqu un monopolise la parole sans respiration.',
    options: [
      { id: 'a', label: 'Je coupe avec tact: on donne la parole aux autres.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je recadre avec humour, version couteau suisse social.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je glisse une transition douce pour inclure tout le monde.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'J attends l ouverture et je reroute proprement la discussion.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 11,
    vibe: 'daily',
    prompt: 'Ta to-do explose et ton cerveau demande un exil fiscal.',
    options: [
      { id: 'a', label: 'Je fais 3 priorites brutales et je tue le reste.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Je me motive avec un petit defis debile mais efficace.', weights: { red: 1, yellow: 3, green: 0, blue: 1 } },
      { id: 'c', label: 'Je cale un rythme tenable, sinon je crash jeudi.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je time-blocke tout. Oui, meme ma pause respiration.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 12,
    vibe: 'party',
    prompt: 'Si on devait resumer ton style social en une phrase :',
    options: [
      { id: 'a', label: 'Je prends de la place et je donne le tempo.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je mets de la vie et j evite que ca sente la salle d attente.', weights: { red: 1, yellow: 3, green: 0, blue: 1 } },
      { id: 'c', label: 'Je rends le moment plus simple pour tout le monde.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je rends le bazar lisible, c est mon cote toxique utile.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
]
