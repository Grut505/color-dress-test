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
    prompt: 'Tu debarques en retard en reunion, tout le monde te fusille du regard. Tu fais :',
    options: [
      { id: 'a', label: 'Bon, on coupe le cinema. Priorite, decision, execution.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je m auto-roast 10 secondes, puis je relance la salle.', weights: { red: 1, yellow: 3, green: 0, blue: 1 } },
      { id: 'c', label: 'Je m excuse sans roman et je recolle tout le monde.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je veux le recap factuel, pas la version drama.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 2,
    vibe: 'party',
    prompt: 'Le groupe est incapable de choisir un resto depuis 25 minutes :',
    options: [
      { id: 'a', label: 'Je tranche. Adresse envoyee. Ceux qui suivent, suivent.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Je lance un duel de deux spots et je fais le show.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je choisis ce qui evite de laisser quelqu un sur le carreau.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je calcule distance, prix, attente. Oui, je suis cette personne.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 3,
    vibe: 'daily',
    prompt: 'Message recu: On peut parler deux minutes ? sans aucun contexte.',
    options: [
      { id: 'a', label: 'On y va maintenant. Le suspense, c est non.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Je reponds avec un gif catastrophe pour tuer la tension.', weights: { red: 1, yellow: 3, green: 0, blue: 1 } },
      { id: 'c', label: 'Je demande d abord si la personne va bien.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je demande le sujet exact. J aime savoir ou je mets les pieds.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 4,
    vibe: 'party',
    prompt: 'Tu cuisines pour des potes et la cuisine part en accident industriel :',
    options: [
      { id: 'a', label: 'Je distribue les ordres et je reprends le cockpit.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je transforme la cata en anecdote legendaire.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je garde le groupe cool, nourri, et pas en guerre.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je simplifie, je sequence, je sauve le service.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 5,
    vibe: 'daily',
    prompt: 'Telephone a 8 pourcent, aucun chargeur, journee encore longue :',
    options: [
      { id: 'a', label: 'Mode survie: je coupe tout et je garde l essentiel.', weights: { red: 2, yellow: 0, green: 1, blue: 2 } },
      { id: 'b', label: 'Je spam mes contacts: quelqu un a une prise, bordel ?', weights: { red: 1, yellow: 3, green: 0, blue: 1 } },
      { id: 'c', label: 'Je previens les personnes impactees pour eviter les malentendus.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je planifie ma recharge comme une operation militaire.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 6,
    vibe: 'party',
    prompt: 'Chat de groupe: 132 messages non lus et 80 pourcent inutiles. Tu fais :',
    options: [
      { id: 'a', label: 'Je fais le resume executif et je ferme le debat.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Je reacts partout, je mets de l ambiance, zero regrets.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je check qui est largue avant de relancer.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je lis tout comme un detective fatigue mais methodique.', weights: { red: 0, yellow: 1, green: 1, blue: 3 } },
    ],
  },
  {
    id: 7,
    vibe: 'daily',
    prompt: 'On te balance un feedback sec devant tout le monde :',
    options: [
      { id: 'a', label: 'Recu. Je corrige. On avance. Pas de theatre.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Je contre avec une blague pour eviter l incendie interne.', weights: { red: 1, yellow: 3, green: 0, blue: 1 } },
      { id: 'c', label: 'Je calme le jeu avant que ca devienne personnel.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je demande du concret. Les vibes ne se corrigent pas.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 8,
    vibe: 'party',
    prompt: 'Week-end entre amis: 9 avis, 0 decision, 100 pourcent fatigue.',
    options: [
      { id: 'a', label: 'Je pose un plan final. Oui/non. Le reste m ennuie.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Je fais voter en mode fun pour embarquer les relous.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je cherche le compromis qui evite un schisme.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Tableau comparatif complet, parce que quelqu un doit le faire.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 9,
    vibe: 'daily',
    prompt: 'Nouveau logiciel incomprehensible, deadline hier :',
    options: [
      { id: 'a', label: 'Je fonce en test reel. Si ca casse, on apprendra vite.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je veux une demo claire avec une voix qui me tient eveille.', weights: { red: 0, yellow: 3, green: 0, blue: 2 } },
      { id: 'c', label: 'Je demande de l aide avant de m auto-detruire.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Doc, protocole, test. Pas sexy, mais ca marche.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 10,
    vibe: 'party',
    prompt: 'Au diner, une personne monopolise la parole depuis une eternite :',
    options: [
      { id: 'a', label: 'Je coupe avec tact ferme. On partage la scene.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je recadre avec une blague bien sentie.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je glisse une transition pour ramener les silencieux.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'J attends une ouverture et je reroute proprement.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 11,
    vibe: 'daily',
    prompt: 'Ta to-do est un incendie et ton cerveau veut quitter le pays :',
    options: [
      { id: 'a', label: 'Trois priorites. Le reste attendra son tour.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Je me lance un challenge debile pour me remettre en selle.', weights: { red: 1, yellow: 3, green: 0, blue: 1 } },
      { id: 'c', label: 'Je prends un rythme tenable, sinon je m explose.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je bloque le planning en mode precision chirurgicale.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 12,
    vibe: 'party',
    prompt: 'Si on devait resumer ton style social sans langue de bois :',
    options: [
      { id: 'a', label: 'Je prends de la place et je donne le rythme.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je mets de la vie la ou ca commencait a mourir.', weights: { red: 1, yellow: 3, green: 0, blue: 1 } },
      { id: 'c', label: 'Je rends les interactions plus fluides pour tout le monde.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je rends le chaos lisible. C est mon super-pouvoir suspect.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
]
