
export interface Game {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  description: string;
}

export const GAMES: Game[] = [
  {
    id: 'fbwg-1',
    title: 'Fireboy and Watergirl 1: Forest Temple',
    url: 'https://unblocked-games.s3.amazonaws.com/fireboy-and-watergirl.html',
    thumbnail: 'https://picsum.photos/seed/firewater1/400/300',
    description: 'Explore the Forest Temple in the first installment of the series.'
  },
  {
    id: 'fbwg-2',
    title: 'Fireboy and Watergirl 2: Light Temple',
    url: 'https://unblocked-games.s3.amazonaws.com/fireboy-and-watergirl.html',
    thumbnail: 'https://picsum.photos/seed/firewater2/400/300',
    description: 'Use light rays to navigate the mysterious Light Temple.'
  },
  {
    id: 'fbwg-3',
    title: 'Fireboy and Watergirl 3: Ice Temple',
    url: 'https://unblocked-games.s3.amazonaws.com/fireboy-and-watergirl.html',
    thumbnail: 'https://picsum.photos/seed/firewater3/400/300',
    description: 'Master the elements in the freezing Ice Temple.'
  },
  {
    id: 'fbwg-4',
    title: 'Fireboy and Watergirl 4: Crystal Temple',
    url: 'https://unblocked-games.s3.amazonaws.com/fireboy-and-watergirl.html',
    thumbnail: 'https://picsum.photos/seed/firewater4/400/300',
    description: 'Teleport through portals in the Crystal Temple.'
  }
];
