import React, { useState } from 'react';
import { Player, getPlayers } from '../data/player';
import { IonPage, IonHeader, IonList, IonToolbar, IonTitle, IonContent, useIonViewWillEnter } from '@ionic/react';
import PlayerStatItem from '../components/PlayerStatItem';
import PlayerList from '../components/PlayerListItem';

const Playerz: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useIonViewWillEnter(() => {
    const pl = getPlayers();
    setPlayers(pl);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Liste des joueurs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {players.map(i => <PlayerList key={i.id} player={i} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Playerz;
