import React, {useEffect} from 'react';
// import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../redux/messages/message';

function Greeting() {
  const dispatch = useDispatch();

  const random_msg = useSelector(
    (state) => state.messageReducer
  )

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch])


  return (
  <p>{random_msg.msg}</p>
  );
}

export default Greeting