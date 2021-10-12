
const code: Record<string, string> = { 
  '12': 'Aventura',
  '14': 'Fantasia',
  '16': 'Animação',
  '18': 'Drama',
  '27': 'Terror',
  '28': 'Ação',
  '35': 'Comédia',
  '36': 'História',
  '37': 'Ocidental',
  '53': 'Thriller',
  '80': 'Crime',
  '99': 'Ducumentário',
  '878': 'Ficção científica',
  '9648': 'Mistério',
  '10402': 'Música',
  '10749': 'Romance',
  '10751': 'Família',
  '10752': 'Guerra',
  '10770': 'Filme de TV',
}

interface aa {
  item: string
}


export const codeToText = (codes: Array<number>): string => 
  codes.map(item => code[item.toString()]).join('/')
