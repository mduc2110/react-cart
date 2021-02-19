import './Backdrop.css';
import { Link } from 'react-router-dom';

const Backdrop = ({ click, show }) => {
    return show && <div className="backdrop" onClick={click}></div>;
  };

export default Backdrop;