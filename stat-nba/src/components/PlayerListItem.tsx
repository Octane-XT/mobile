// PlayerListComponent.tsx

import React from 'react';
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { Player } from '../data/player';

interface PlayerListComponentProps {
  player: Player;
}

const PlayerListComponent: React.FC<PlayerListComponentProps> = ({ player }) => {
  return (
    <IonItem routerLink={`/player/${player.id}`} detail={false}>
      <IonImg src="" alt="My Image" /> 
      <IonLabel className="ion-text-wrap">
        <h2>
          {player.teamId}
        </h2>
      </IonLabel>
    </IonItem>
  );
};

export default PlayerListComponent;
