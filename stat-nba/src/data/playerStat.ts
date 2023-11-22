export interface PlayerStat {
  id: number;
  playerName: string;
  team: string;
  M: number;
  MJ: number;
  PPM: number;
  RPM: number;
  PDPM: number;
  MPM: number;
  EFF: number;
  FGPercentage: number;
  ThreePPercentage: number;
  FTPercentage: number;
}

const playerStats: PlayerStat[] = [
    {
      id:0,
      playerName:'player A',
      team: 'Team A',
      M: 30,
      MJ: 25,
      PPM: 12,
      RPM: 8,
      PDPM: 4,
      MPM: 20,
      EFF: 15,
      FGPercentage: 45,
      ThreePPercentage: 33,
      FTPercentage: 80,
    }
];

export const getPlayerStats = () => playerStats;

export const getPlayerStat = (id: number) => playerStats.find(i => i.id === id);
