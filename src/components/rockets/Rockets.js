import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  Card,
} from 'react-bootstrap';
import './rockets.css';
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
    <section>
      <div className="cont-rockets">
        {rockets.map((rocket) => (
          <div key={rocket.id}>
            <div className="img-desc">
              <div>
                <Card>
                  image=
                  {rocket.flickrImages[0]}
                  title=
                  {rocket.name}
                </Card>
              </div>
              <div>
                <div style={{ padding: '0 1rem' }}>
                  <h1>
                    {rocket.name}
                  </h1>
                  <p
                    color="textSecondary"
                  >
                    {rocket.description}
                  </p>
                </div>
                <div>
                  <Button variant="outline-secondary" color="primary" style={{ margin: '1rem' }}>
                    Reserve a ticket
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rockets;
