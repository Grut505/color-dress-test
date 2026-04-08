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
    prompt: 'Tu arrives a la soiree et tu ne connais presque personne. Tu fais quoi ?',
    options: [
      { id: 'a', label: 'Je prends direct la temperature et je me presente.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je lance une blague et je trouve vite un groupe.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je repere quelqu un de tranquille et je discute calmement.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je regarde la dynamique avant de me greffer.', weights: { red: 0, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 2,
    vibe: 'daily',
    prompt: 'Ton agenda de la semaine ressemble plutot a quoi ?',
    options: [
      { id: 'a', label: 'Dense et efficace, objectif par objectif.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Charge mais avec de la place pour improviser.', weights: { red: 1, yellow: 3, green: 0, blue: 1 } },
      { id: 'c', label: 'Equilibre, je garde de la marge pour aider les autres.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Planifie au cordeau, avec rappels et checklists.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 3,
    vibe: 'party',
    prompt: 'La playlist est en roue libre depuis 20 minutes.',
    options: [
      { id: 'a', label: 'Je prends la main et je remets de l energie.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je fais participer tout le monde avec des hits.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je propose un truc consensuel qui passe partout.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je construis une suite propre, transition par transition.', weights: { red: 0, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 4,
    vibe: 'daily',
    prompt: 'Quand il y a une decision a prendre au boulot :',
    options: [
      { id: 'a', label: 'Je coupe court et je choisis.', weights: { red: 3, yellow: 0, green: 0, blue: 2 } },
      { id: 'b', label: 'Je prends l option qui embarque le plus de monde.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je cherche celle qui garde une bonne cohesion.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je compare les risques avant de valider.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 5,
    vibe: 'party',
    prompt: 'Quelqu un renverse son verre. Ta reaction instantanee :',
    options: [
      { id: 'a', label: 'Je coordonne vite qui fait quoi.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Je detends l ambiance avec une vanne.', weights: { red: 0, yellow: 3, green: 1, blue: 1 } },
      { id: 'c', label: 'Je rassure la personne et je l aide.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je nettoie proprement pour eviter le bazar.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 6,
    vibe: 'daily',
    prompt: 'Ton style de message dans un chat de groupe :',
    options: [
      { id: 'a', label: 'Court, direct, avec action a faire.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Anime, emojis, et pas mal d enthousiasme.', weights: { red: 0, yellow: 3, green: 1, blue: 1 } },
      { id: 'c', label: 'Diplomate, je veille a ce que tout le monde suive.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Clair, structure, et contextuel.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 7,
    vibe: 'party',
    prompt: 'Le dress code n est pas clair. Tu t habilles comment ?',
    options: [
      { id: 'a', label: 'Affirme, je veux marquer le coup.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Original, avec une piece qui parle toute seule.', weights: { red: 1, yellow: 3, green: 0, blue: 1 } },
      { id: 'c', label: 'Confort + style soft, ambiance chill.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Clean, bien coupe, detail soigne.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 8,
    vibe: 'daily',
    prompt: 'Face a un gros imprvu dans la journee :',
    options: [
      { id: 'a', label: 'Je tranche vite et je redefinis la priorite.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Je garde le moral et je motive l equipe.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je stabilise le groupe avant tout.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je refais le plan pour limiter les impacts.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 9,
    vibe: 'party',
    prompt: 'Tu proposes une activite de soiree. Ton move :',
    options: [
      { id: 'a', label: 'Un mini challenge qui reveille tout le monde.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Un jeu social ou tout le monde participe.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Un truc simple et inclusif, zero pression.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Une activite bien reglee avec des regles claires.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 10,
    vibe: 'daily',
    prompt: 'Quand tu apprends quelque chose de nouveau :',
    options: [
      { id: 'a', label: 'Je teste direct et j ajuste en route.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je prefere apprendre avec des gens.', weights: { red: 0, yellow: 3, green: 1, blue: 1 } },
      { id: 'c', label: 'Je prends mon temps, je veux comprendre sans stress.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je lis la doc et je suis les etapes.', weights: { red: 0, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 11,
    vibe: 'party',
    prompt: 'A minuit, l energie du groupe baisse un peu :',
    options: [
      { id: 'a', label: 'Je relance: on bouge, on change de rythme.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je chauffe la salle avec une idee fun.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je garde une vibe cool pour que ca reste agreable.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je propose une pause et je recadre le timing.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 12,
    vibe: 'daily',
    prompt: 'Dans un projet de groupe, ton reflexe naturel :',
    options: [
      { id: 'a', label: 'Donner la direction et fixer le cap.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Connecter les gens et faire circuler l energie.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Maintenir une bonne cohesion du groupe.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Organiser les taches et verifier la qualite.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 13,
    vibe: 'party',
    prompt: 'Quelqu un monopolise la discussion depuis 10 minutes.',
    options: [
      { id: 'a', label: 'Je coupe poliment et je redistribue la parole.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je rebondis avec humour pour ouvrir le cercle.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je glisse une transition douce pour inclure les autres.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'J attends le bon moment pour recentrer.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 14,
    vibe: 'daily',
    prompt: 'On te donne un feedback un peu sec.',
    options: [
      { id: 'a', label: 'Je prends ce qui est utile et je passe a l action.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Je decompresse vite et je relativise.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je cherche a retablir un bon climat.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je demande des exemples concrets pour progresser.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 15,
    vibe: 'party',
    prompt: 'Photo de groupe improvisee. Tu te places comment ?',
    options: [
      { id: 'a', label: 'Au centre, posture assumee.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Avec une pose creative, evidemment.', weights: { red: 1, yellow: 3, green: 0, blue: 1 } },
      { id: 'c', label: 'Je verifie que tout le monde est bien sur la photo.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je corrige l angle et la lumiere avant.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 16,
    vibe: 'daily',
    prompt: 'Ta relation avec les deadlines :',
    options: [
      { id: 'a', label: 'J adore les deadlines serrees, ca me booste.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je carbure mieux avec de l energie collective.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je prefere un rythme stable pour tenir dans le temps.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je planifie en avance pour eviter le rush.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 17,
    vibe: 'party',
    prompt: 'Le theme de la soiree est kitsch chic. Ton niveau d engagement :',
    options: [
      { id: 'a', label: 'J y vais fort, on est la pour marquer les esprits.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'J adore, je mets une tenue meme un peu theatrale.', weights: { red: 1, yellow: 3, green: 0, blue: 1 } },
      { id: 'c', label: 'Version soft, je garde mon confort.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'J interprete le theme avec finesse et details.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 18,
    vibe: 'daily',
    prompt: 'Quand quelqu un te demande de l aide :',
    options: [
      { id: 'a', label: 'Je propose une solution rapide et concrete.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Je motive et je donne de l elan.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je prends le temps d ecouter avant tout.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je clarifie le probleme avant de repondre.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 19,
    vibe: 'party',
    prompt: 'Fin de soiree, il reste un peu de rangement :',
    options: [
      { id: 'a', label: 'Je lance un mini plan d attaque en 2 minutes.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je transforme ca en moment fun a plusieurs.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je fais ma part tranquillement, sans drame.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je trie proprement, rapide et methodique.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 20,
    vibe: 'daily',
    prompt: 'Dans les conflits, ton automatisme :',
    options: [
      { id: 'a', label: 'Je vais au fond du sujet rapidement.', weights: { red: 3, yellow: 0, green: 0, blue: 2 } },
      { id: 'b', label: 'Je cherche a detendre pour pouvoir parler.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je veux d abord apaiser les tensions.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je pose les faits avant les interpretations.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 21,
    vibe: 'party',
    prompt: 'Un invite annule au dernier moment.',
    options: [
      { id: 'a', label: 'Je reajuste vite le plan et on continue.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je rebondis avec une idee qui relance tout.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je m assure que personne ne se sente mis de cote.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je reequilibre logistique et timing.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 22,
    vibe: 'daily',
    prompt: 'Ton bureau (ou ton sac) ressemble plutot a :',
    options: [
      { id: 'a', label: 'Essentiel et efficace, pas de deco inutile.', weights: { red: 3, yellow: 0, green: 1, blue: 1 } },
      { id: 'b', label: 'Un joyeux bazar creatif qui vit bien.', weights: { red: 0, yellow: 3, green: 1, blue: 1 } },
      { id: 'c', label: 'Chaleureux et pratique, rien d agressif.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Range, etiquette, zone par zone.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 23,
    vibe: 'party',
    prompt: 'On te demande un toast improvise.',
    options: [
      { id: 'a', label: 'Court, impactant, tout le monde leve son verre.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Drole et chaleureux, ambiance immediate.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Sincere et bienveillant, avec une pensee pour chacun.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Simple, bien formule, sans digression.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
  {
    id: 24,
    vibe: 'daily',
    prompt: 'Si on decrit ton style en une phrase :',
    options: [
      { id: 'a', label: 'J avance, puis je peaufine.', weights: { red: 3, yellow: 1, green: 0, blue: 1 } },
      { id: 'b', label: 'Je connecte les gens et les idees.', weights: { red: 1, yellow: 3, green: 1, blue: 0 } },
      { id: 'c', label: 'Je stabilise et je fluidifie.', weights: { red: 0, yellow: 1, green: 3, blue: 1 } },
      { id: 'd', label: 'Je structure et je securise.', weights: { red: 1, yellow: 0, green: 1, blue: 3 } },
    ],
  },
]
