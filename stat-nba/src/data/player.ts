export interface Player {
  id: number,
  teamId: number;
  name: string;
}

const players: Player[] = [

  {
    id: 1,
    teamId: 1,
    name:'P1'
  },
  {
    id: 2,
    teamId:1,
    name:'P2'
  },
  {
    id: 3,
    teamId:1,
    name:'P3'
  },
  {
    id: 4,
    teamId:1,
    name:'P4'
  },
  {
    id: 5,
    teamId:1,
    name:'P5'
  },
  {
    id: 6,
    teamId:2,
    name:'P6'
  }
];

export const getPlayers = () => players;

export const getPlayer = (id: number) => players.find(i => i.id === id);
