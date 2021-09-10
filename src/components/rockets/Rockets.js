import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  Badge,
} from 'react-bootstrap';
import './rockets.css';
import { cancelRocketTicket, getRocketData, reserveRocketTicket } from '../../redux/rockets/Rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRocketData());
    }
  }, []);

  const handleTicketBooking = (id) => dispatch(reserveRocketTicket(id));
  const handleTicketCancellation = (id) => dispatch(cancelRocketTicket(id));

  return (
    <div title="Rockets-div" className="cont-rockets">
      {rockets.map(({
        id, name, description, flickrImages, reserved,
      }) => (
        <div key={id} className="img-desc">
          <div className="img-div">
            <img src={flickrImages[0]} alt="img" />
          </div>
          <div style={{ padding: '0 1rem' }}>
            <div>
              <h4>
                {name}
              </h4>
              <p
                className="para"
                color="textSecondary"
              >
                {reserved && <Badge bg="info">Reserved</Badge>}
                {description}
              </p>
            </div>
            <div>
              {!reserved && (
                <Button title="Reserve-rocket" variant="primary" onClick={() => handleTicketBooking(id)}>
                  Reserve rocket
                </Button>
              )}
              {reserved && (
                <Button role="button" variant="outline-secondary" onClick={() => handleTicketCancellation(id)}>
                  Cancel reservation
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
