import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelMission, getMissionsApi, reserveMission } from '../../redux/missions/actions/MissionsAction';
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

  const handleMemberStatus = (id) => (e) => {
    if (e.target.value === 'Join Mission') dispatch(reserveMission(id));
    else dispatch(cancelMission(id));
  };
  return (

    <div className="missions">
      <div className="list-items header-mission">
        <div className="miss-name">Mission Name</div>
        <div className="miss-desc">Description</div>
        <div className="status-h"> Status</div>
        <div className="btnjoin" />
      </div>
      {missionsLists.map(({
        missionId, missionName, description, reserved,
      }) => (
        <div key={missionId} className="list-items">
          <div className="miss-name">{missionName}</div>
          <div className="miss-desc">{description}</div>
          <div className="status">
            {' '}
            <span id={`status-${missionId}`} className={reserved ? 'active' : 'not-active'}>
              { reserved ? 'Active Member' : 'NOT A MEMBER'}
              {' '}
            </span>
            {' '}
          </div>
          <div className="btnjoin">
            <input type="button" value={reserved ? 'Leave Mission' : 'Join Mission'} className={reserved ? 'btn-member' : 'btn-notmember'} onClick={handleMemberStatus(missionId)} />
          </div>
        </div>
      ))}

    </div>
  );
};

export default Missions;