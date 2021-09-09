import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionsApi, reserveMission } from '../../redux/missions/actions/missionsAction';
import './mission.css';

export const Missions = () => {
  const missionsLists = useSelector((state) => state.missions);
  console.log(missionsLists);
  // let selectedMissionsItems = [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissionsApi());
    console.log(missionsLists);
  }, []);

  const handleMemberStatus = (id) => {
    console.log(id);
    dispatch(reserveMission(id));
  };
  return (

    <div className="missions">
      <div className="list-items header-mission">
        <div className="miss-name">Mission Name</div>
        <div className="miss-desc">Description</div>
        <div className="status-h"> Status</div>
        <div className="btnjoin" />
      </div>
      {missionsLists.map(({ missionId, missionName, description }) => (
        <div key={missionId} className="list-items">
          <div className="miss-name">{missionName}</div>
          <div className="miss-desc">{description}</div>
          <div className="status">
            {' '}
            <span id={`status-${missionId}`} className="not-active">NOT A MEMBER </span>
            {' '}
          </div>
          <div className="btnjoin">
            <input type="button" value="Join Mission" className="btn-notmember" onClick={() => handleMemberStatus(missionId)} />
          </div>
        </div>
      ))}

    </div>
  );
};

export default Missions;
