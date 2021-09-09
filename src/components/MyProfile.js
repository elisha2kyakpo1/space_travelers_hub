import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const myRockets = useSelector((state) => state.rocketReducer.filter((rocket) => rocket.reserved));
  const mission = useSelector((state) => state.missions.filter((mission) => mission.reserved));
  return (
    <div className="my-profile">
      <div className="mission-booked">
        <h3>My Missions</h3>
        <ul className="list">
          {!mission.length ? <li className="list-item">NO MISSIONS JOINED YET</li> : mission.map(({ id, name }) => (
            <li key={id} className="mission-name">{name}</li>
          ))}
        </ul>
      </div>
      <div className="rocket-booked">
        <h3>My Rockets</h3>
        <ul className="list">
          {!myRockets.length ? <li className="list-item">NO ROCKET BOOKED YET</li> : myRockets.map(({ id, name }) => (
            <li key={id} className="rocket-name">{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
