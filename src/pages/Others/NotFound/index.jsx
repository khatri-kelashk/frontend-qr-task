import { useNavigate } from "react-router-dom";
import { URLS } from '../../../constants/constants';
import './styles.css';
import '../../Auth/styles.css';

const NotFound = ({ }) => {
  const navigate = useNavigate();
  const handleMainBtn = () => navigate(URLS.DASHBOARD);

  return (
    <div className={"notFoundPage"}>
      <div className={"head"}>
        <h1 className={"pageHeader"}>404</h1>
        <h2 className={"pageHeader"}>Page Not Found</h2>
      </div>
      <p className={"pageDescription"}>
        Requested page does not exist. Return to the home page by clicking the button below.
      </p>
      <div>
        <button className="form-button btnWidth" onClick={handleMainBtn}>Go to Dashboard</button>
      </div>
    </div>
  );
};

export default NotFound;