import styles from "./AsideCalendar.module.scss";
import React from "react";
import { HoverBox, TextButton } from "../../../Buttons/Buttons";
import { FontSizes } from "../../../../appStyles/font";

// Helper function to get the number of days in a month
const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

// Helper function to get the first day of the month
const getFirstDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay();
};

// Helper function to get month name
const getMonthName = (month: number): string => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[month];
};

export const AsideCalendar: React.FC = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);

  // Get days from the previous month
  const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  const lastDayOfPrevMonth = getDaysInMonth(prevYear, prevMonth);

  // Generate days for the calendar
  const calendarDays = [];

  interface DayDataProps {
    className?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any;
  }

  const DayData: React.FC<DayDataProps> = ({ className, children }) => {
    return (
      <div className={`${styles["day-data"]} ${className}`}>
        {children}
        <HoverBox mode="onLight" />
      </div>
    );
  };

  // Fill in the last days of the previous month
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    calendarDays.push(
      <DayData key={`prev-${i}`} className={styles["not-current-month"]}>
        {lastDayOfPrevMonth - i}
      </DayData>
    );
  }

  // Fill in the current month days
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(
      <DayData key={day} className={day === currentDate ? styles["today"] : ""}>
        {day}
      </DayData>
    );
  }

  // Calculate how many days required to fill the last week
  const nextDaysStart = calendarDays.length % 7;

  // Fill in the first days of the next month
  if (nextDaysStart !== 0) {
    const nextFillDays = 7 - nextDaysStart;
    for (let i = 1; i <= nextFillDays; i++) {
      calendarDays.push(
        <DayData key={`next-${i}`} className="not-current-month">
          {i}
        </DayData>
      );
    }
  }

  const weeks: JSX.Element[] = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(
      <div className={styles["row"]} key={i}>
        {calendarDays.slice(i, i + 7)}
      </div>
    );
  }

  return (
    <div className={`${styles["aside-calendar"]} ${FontSizes.smaller}`}>
      <div className={styles[`calendar-title`]}>{`${getMonthName(
        currentMonth
      )} ${currentYear}`}</div>
      <div className={styles[`calendar-table`]}>
        <div className={`calendar-header`}>
          <div className={styles[`week-days`]}>
            <div className={`week-day`}>S</div>
            <div className={`week-day`}>M</div>
            <div className={`week-day`}>T</div>
            <div className={`week-day`}>W</div>
            <div className={`week-day`}>T</div>
            <div className={`week-day`}>F</div>
            <div className={`week-day`}>S</div>
          </div>
        </div>
        <div className={styles[`calendar-body`]}>{weeks}</div>
      </div>

      <TextButton
        className={styles["view-calendar-btn"]}
        text={"View Calendar"}
        size={FontSizes.smaller}
        fillMode={"fill"}
        onDark={false}
        inline={false}
      />
    </div>
  );
};
