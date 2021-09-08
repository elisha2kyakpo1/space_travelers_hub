import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionsApi } from '../../redux/missions/actions/missionsAction';
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

  const handleMemberStatus = (id, name) => (e) => {
    e.preventDefault();
    console.log(id);
    console.log(name);
  };
  return (

    <div className="missions">
      <div className="list-items header-mission">
        <div className="miss-name">Mission Name</div>
        <div className="miss-desc">Description</div>
        <div className="status-h"> Status</div>
        <div className="btnjoin" />
      </div>
      {missionsLists.map((item) => (
        <div key={item.mission_id} className="list-items">
          <div className="miss-name">{item.mission_name}</div>
          <div className="miss-desc">{item.description}</div>
          <div className="status">
            {' '}
            <span id={item.mission_id} className="not-active">NOT A MEMBER </span>
            {' '}
          </div>
          <div className="btnjoin">
            <input type="button" value="Join Mission" className="btn-notmember" onClick={handleMemberStatus(item.mission_id, item.mission_name)} />
          </div>
        </div>
      ))}

    </div>
  );
};

export default Missions;
