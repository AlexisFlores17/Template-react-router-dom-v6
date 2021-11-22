import React, { useEffect } from 'react'
import { AppRouter } from './routes/AppRouter';
import { AuthStore } from './store/authStore';

export const App = () => {

  const localAuth = localStorage.getItem("authLocal");
  const { changeAuth } = AuthStore( state => state );

  const setAuthLocal = () => {
      if (localAuth) {
          changeAuth(true)
      }
  }

  useEffect(() => {
      setAuthLocal()
      return () => {
          setAuthLocal()
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <AppRouter />
  )
}
