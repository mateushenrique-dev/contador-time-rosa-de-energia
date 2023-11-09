import { useEffect, useState } from 'react';
import { api } from '../services/axios/api'

export default function useDaysLeft(daysLeft?: number) {
  const [daysPassed, setDaysPassed] = useState(daysLeft);
  
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