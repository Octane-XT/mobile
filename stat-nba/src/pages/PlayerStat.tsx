import React, { useState } from 'react';
import { PlayerStat, getPlayerStats } from '../data/playerStat';
import { IonPage, IonHeader, IonList, IonToolbar, IonTitle, IonContent, useIonViewWillEnter } from '@ionic/react';
import PlayerStatItem from '../components/PlayerStatItem';
import PlayerList from '../components/PlayerListItem';

const PlayerStats: React.FC = () => {
  const [playerStat, setPlayerStat] = useState<PlayerStat[]>([]);

  useIonViewWillEnter(() => {
    const playerStat = getPlayerStats();
    setPlayerStat(playerStat);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Statistique</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {playerStat.map(i => <PlayerStatItem key={i.id} playerStat={i} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PlayerStats;
