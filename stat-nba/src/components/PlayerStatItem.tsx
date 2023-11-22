// PlayerListComponent.tsx

import React from 'react';
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { PlayerStat } from '../data/playerStat';

interface PlayerStatItemProps {
  playerStat: PlayerStat;
}

const PlayerStatItem: React.FC<PlayerStatItemProps> = ({ playerStat }) => {
  return (
    <IonList>
        <IonItem>
          <IonLabel><h2>{playerStat.playerName}</h2></IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel><p>{playerStat.team}</p></IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel><p>M: {playerStat.M}</p></IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel><p>MJ: {playerStat.MJ}</p></IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel><p>PPM: {playerStat.PPM}</p></IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel><p>RPM: {playerStat.RPM}</p></IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel><p>PDPM: {playerStat.PDPM}</p></IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel><p>MPM: {playerStat.MPM}</p></IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel><p>EFF: {playerStat.EFF}</p></IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel><p>FG%: {playerStat.FGPercentage}</p></IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel><p>3P%: {playerStat.ThreePPercentage}</p></IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel><p>%LF: {playerStat.FTPercentage}</p></IonLabel>
        </IonItem>
    </IonList>
    
  );
};

export default PlayerStatItem;
