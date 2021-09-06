import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getMissionsApi } from '../../redux/missions/actions/missionsAction';

export const missions = () => {
  const missionsLists = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissionsApi());
    console.log(missionsLists);
  }, []);
  return (

    <div className="missions">
      {missionsLists.map((item) => (
        <div key={uuidv4()} className="list-items">
          <div className="miss-name">{item.mission_name}</div>
          <div className="miss-desc">{item.description}</div>
          <div className="status" />
        </div>

      ))}

    </div>
  );
};

export default missions;
