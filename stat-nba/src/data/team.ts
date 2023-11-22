export interface Team {
  id: number,
  teamId: string;
}

const teams: Team[] = [
  {
    id: 0,
    teamId:'Atlanta Hawks'
  },
  {
    id: 1,
    teamId:'Boston Celtics'
  },
  {
    id: 2,
    teamId:'Brooklyn Nets'
  },
  {
    id: 3,
    teamId:'Charlotte Hornets'
  },
  {
    id: 4,
    teamId:'Chicago Bulls'
  },
  {
    id: 5,
    teamId:'Cleveland Cavaliers'
  },
  {
    id: 6,
    teamId:'Dallas Mavericks'
  },
];

export const getTeams = () => teams;

export const getTeam = (id: number) => teams.find(i => i.id === id);


