import { useEffect, useState } from 'react';
import { api } from '../services/axios/api'

export default function useDaysLeft() {

  const [daysPassed, setDaysPassed] = useState(0);

  useEffect(() => {
    api.get('/')
      .then(response => response.data)
      .then((daysPassed) => {
        setDaysPassed(daysPassed.daysPassed)
      })
  }, [])  
  
  async function resetCounter() {
    setDaysPassed(0)

    await api.put('/', {
      date: new Date()
    })
  }
  
  return {
    daysPassed,
    resetCounter
  }
}