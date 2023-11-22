import MessageListItem from '../components/MessageListItem';
import TeamListItem from '../components/TeamListItem';
import { useState } from 'react';
import { Team, getTeams } from '../data/team';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

  const [teams, setTeams] = useState<Team[]>([]);

  useIonViewWillEnter(() => {
    const tm = getTeams();
    setTeams(tm);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="team-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Liste des equipes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Inbox
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {teams.map(i => <TeamListItem key={i.id} team={i} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
