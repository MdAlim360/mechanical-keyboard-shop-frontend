// import { useEffect, useState } from "react";

// interface TimeLeft {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

// interface CountDownTimerProps {
//   targetDate: string | number | Date;
// }

// const CountDownTimer: React.FC<CountDownTimerProps> = ({ targetDate }) => {
//   const calculateTimeLeft = (targetDate: string | number | Date): TimeLeft => {
//     const difference = new Date(targetDate).getTime() - new Date().getTime();
//     if (difference <= 0) {
//       return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//     }
//     const seconds = Math.floor((difference / 1000) % 60);
//     const minutes = Math.floor((difference / (1000 * 60)) % 60);
//     const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//     return { days, hours, minutes, seconds };
//   };

//   const [timeLeft, setTimeLeft] = useState<TimeLeft>(
//     calculateTimeLeft(targetDate)
//   );

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTimeLeft(calculateTimeLeft(targetDate));
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [targetDate]);

//   return (
//     <div className="countdown-timer">
//       <div className="flex justify-between gap-4 lg:-mr-[250px] lg:-mt-[100px]">
//         <div className="timer-unit border border-yellow-500 bg-white rounded-lg px-10 py-8">
//           <p className="text-xs absolute left-[970px] top-[160px] text-zinc-400">
//             DAYS
//           </p>
//           <p className="absolute top-[177px] font-bold text-2xl left-[990px]">
//             {`0${timeLeft.days}`}
//           </p>
//         </div>
//         <div className="timer-unit border border-yellow-500 bg-white rounded-lg px-10 py-8">
//           <p className="text-xs absolute left-[1065px] top-[160px] text-zinc-400">
//             HOURS
//           </p>
//           <p className="absolute top-[177px] font-bold text-2xl left-[1085px]">
//             {`${timeLeft.hours}`}
//           </p>
//         </div>
//         <div className="timer-unit border border-yellow-500 bg-white rounded-lg px-10 py-8">
//           <p className="text-xs absolute left-[1165px] top-[160px] text-zinc-400">
//             MINUTES
//           </p>
//           <p className="absolute top-[177px] font-bold text-2xl left-[1185px]">
//             {`${timeLeft.minutes}`}
//           </p>
//         </div>
//         <div className="timer-unit border border-yellow-500 bg-white rounded-lg px-10 py-8">
//           <p className="text-xs absolute left-[1260px] top-[160px] text-zinc-400">
//             SECONDS
//           </p>
//           <p className="absolute top-[177px] font-bold text-2xl left-[1280px]">
//             {`${timeLeft.seconds}`}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CountDownTimer;

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountDownTimerProps {
  targetDate: string | number | Date;
}

const CountDownTimer: React.FC<CountDownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (targetDate: string | number | Date): TimeLeft => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="countdown-timer">
      <div className="flex  justify-between gap-4 lg:mr-0 lg:mt-0">
        <div className="timer-unit border border-yellow-500  bg-white rounded-lg px-4 py-2 lg:px-7 lg:py-4">
          <p className="text-xs   text-zinc-400">DAYS</p>
          <p className="  font-bold text-xl lg:text-2xl lg:left-[990px]">
            {`0${timeLeft.days}`}
          </p>
        </div>
        <div className="timer-unit  border border-yellow-500 bg-white rounded-lg px-3 py-2 lg:px-6 lg:py-4">
          <p className="text-xs  text-zinc-400">HOURS</p>
          <p className="  font-bold text-xl lg:text-2xl lg:left-[1085px]">
            {`${timeLeft.hours}`}
          </p>
        </div>
        <div className="timer-unit border border-yellow-500 bg-white rounded-lg px-2 py-2 lg:px-4 lg:py-4">
          <p className="text-xs lg:top-[160px] text-zinc-400">MINUTES</p>
          <p className="  font-bold text-xl lg:text-2xl lg:left-[1185px]">
            {`${timeLeft.minutes}`}
          </p>
        </div>
        <div className="timer-unit border border-yellow-500 bg-white rounded-lg px-2 py-2 lg:px-4 lg:py-4">
          <p className="text-xs text-zinc-400">SECONDS</p>
          <p className=" font-bold text-xl lg:text-2xl lg:left-[1280px]">
            {`${timeLeft.seconds}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
