import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../store/navSlice';

const WatchVideoPage = () => {

const dispatch = useDispatch();
useEffect(() => {
 dispatch(closeMenu())
}, []);


  return (
    <div>
      WatchVideoPage
    </div>
  )
}

export default WatchVideoPage
