'use client';
import { createContext, useContext, useState } from 'react';

//# 1
const reservationContext = createContext();
//# 2
const initialState = { from: undefined, to: undefined };
//# 3
function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <reservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </reservationContext.Provider>
  );
}
//# 4
function useReservation() {
  const context = useContext(reservationContext);

  if (context === undefined)
    throw new Error('Context was used outside of provider');

  return context;
}
//# 5
export { ReservationProvider, useReservation };
