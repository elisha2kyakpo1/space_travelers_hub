import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionsApi } from '../../redux/missions/actions/MissionsAction';
import { reserveMission, cancelMission } from '../../redux/missions/actions/missionsAction';
import './mission.css';

export const Missions = () => {
  const missionsLists = useSelector((state) => state.missions);
  console.log(missionsLists);
  // let selectedMissionsItems = [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissionsApi());
  }, []);

  const handleMemberStatus = (id) => (e) => {
    e.preventDefault();
    if (e.target.id === id) {
      if (e.target.value === 'Join Mission') {
        e.target.value = 'Leave Mission';
        document.getElementById(`status-${id}`).innerHTML = 'Active Memebr';
        document.getElementById(`status-${id}`).className = 'active';
        document.getElementById(id).className = 'btn-member';
      } else {
        e.target.value = 'Join Mission';
        document.getElementById(`status-${id}`).innerHTML = 'NOT A MEMBER';
        document.getElementById(`status-${id}`).className = 'not-active';
        document.getElementById(id).className = 'btn-notmember';
      }
    }
    return true;
    console.log(missionsLists);
  };

  const handleMemberStatus = (id) => (e) => {
    if (e.target.value === 'Join Mission') dispatch(reserveMission(id));
    else dispatch(cancelMission(id));
  };
  return (

    <div className="missions">
      <div className="list-header">
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
    </div>
  );
};

export default Missions;