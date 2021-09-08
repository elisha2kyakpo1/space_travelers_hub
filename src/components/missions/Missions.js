import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getMissionsApi, selectedMissions } from '../../redux/missions/actions/missionsAction';
import './mission.css';

export const Missions = () => {
  const missionsLists = useSelector((state) => state.missions);
  let selectedMissionsItems = [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissionsApi());
  }, []);

  const handleMemberStatus = (id, name) => (e) => {
    e.preventDefault();
    if (e.target.id === id) {
      if (e.target.value === 'Join Mission') {
        e.target.value = 'Leave Mission';
        document.getElementById(`status-${id}`).innerHTML = 'Active Memebr';
        document.getElementById(`status-${id}`).className = 'active';
        document.getElementById(id).className = 'btn-member';
        selectedMissionsItems.push(name);
        dispatch(selectedMissionsItems);
        console.log(selectedMissions(selectedMissionsItems));
      } else {
        e.target.value = 'Join Mission';
        document.getElementById(`status-${id}`).innerHTML = 'NOT A MEMBER';
        document.getElementById(`status-${id}`).className = 'not-active';
        document.getElementById(id).className = 'btn-notmember';
        selectedMissionsItems = selectedMissionsItems.filter((item) => item !== name);
        dispatch(selectedMissions(selectedMissionsItems));
        console.log(selectedMissionsItems);
      }
    }
    return true;
  };
  return (

    <div className="missions">
      <div className="list-items header-mission">
        <div className="miss-name">Mission Name</div>
        <div className="miss-desc">Description</div>
        <div className="status-h"> Status</div>
        <div className="btnjoin" />
      </div>
      {missionsLists.map((item) => {
        const id = uuidv4();
        return (
          <div key={id} className="list-items">
            <div className="miss-name">{item.mission_name}</div>
            <div className="miss-desc">{item.description}</div>
            <div className="status">
              {' '}
              <span id={`status-${id}`} className="not-active">NOT A MEMBER </span>
              {' '}
            </div>
            <div className="btnjoin">
              <input type="button" value="Join Mission" className="btn-notmember" onClick={handleMemberStatus(id, item.mission_name)} id={id} />
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default Missions;
