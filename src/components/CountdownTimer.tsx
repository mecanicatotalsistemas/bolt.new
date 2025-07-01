import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-4">⏰ Oferta Expira Em:</h3>
      <div className="flex justify-center space-x-4">
        <div className="bg-white/20 backdrop-blur rounded-lg p-4 min-w-[80px]">
          <div className="text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className="text-sm opacity-80">Horas</div>
        </div>
        <div className="flex items-center text-2xl font-bold">:</div>
        <div className="bg-white/20 backdrop-blur rounded-lg p-4 min-w-[80px]">
          <div className="text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <div className="text-sm opacity-80">Minutos</div>
        </div>
        <div className="flex items-center text-2xl font-bold">:</div>
        <div className="bg-white/20 backdrop-blur rounded-lg p-4 min-w-[80px]">
          <div className="text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <div className="text-sm opacity-80">Segundos</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;