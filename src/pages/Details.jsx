import {useNavigate, useParams} from 'react-router-dom';
import {IoArrowBack} from 'react-icons/io5';

import {Button} from '../components/Button';
import {Info} from '../components/Info';
import {useDispatch, useSelector} from 'react-redux';
import {selectDetails} from '../store/datail/detail-selectors';
import {useEffect} from 'react';
import {clearDetails, loadCountryByName} from '../store/datail/detail-actions';

export const Details = () => {
  const {name} = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {currentCountry, status, error} = useSelector(selectDetails);

  const handleBackPage = () => {
    navigate(-1);
    dispatch(clearDetails());
  };

  useEffect(() => {
    dispatch(loadCountryByName(name));
    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);

  return (
    <div>
      <Button onClick={handleBackPage}>
        <IoArrowBack /> Back
      </Button>
      {error && <h2>{error}</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
