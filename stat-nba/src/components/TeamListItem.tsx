import {
  IonItem,
  IonLabel,
  IonNote,
  IonImg
  } from '@ionic/react';
import { Message } from '../data/messages';
import { Team } from '../data/team';
import './MessageListItem.css';

interface TeamListItemProps {
  team: Team;
}

const TeamListItem: React.FC<TeamListItemProps> = ({ team }) => {
  return (
    <IonItem routerLink={`/teams/${team.id}`} detail={false}>
      <IonImg src="C:\Users\Octane\Pictures\untitled.PNG" alt="" /> 
      <IonLabel className="ion-text-wrap">
        <h2>
          {team.teamId}
        </h2>
      </IonLabel>
    </IonItem>
  );
};

export default TeamListItem;
