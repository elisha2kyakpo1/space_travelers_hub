import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  Card,
} from 'react-bootstrap';
import { getRocketData } from '../../redux/rockets/Rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRocketData());
    }
  }, []);

  return (
    <Card style={{ margin: '0 28px' }}>
      <div>
        {rockets.map((rocket) => (
          <div key={rocket.id}>
            <Card style={{ boxShadow: 'none' }}>
              <div>
                image=
                {rocket.flickrImages[0]}
                title=
                {rocket.name}
              </div>
              <div>
                <div style={{ padding: '0 1rem' }}>
                  <h1 component="h6" variant="h6">
                    {rocket.name}
                  </h1>
                  <h2
                    component="p"
                    color="textSecondary"
                  >
                    {rocket.description}
                  </h2>
                </div>
                <div>
                  <Button variant="outline-secondary" color="primary" style={{ margin: '1rem' }}>
                    Reserve a ticket
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Rockets;
