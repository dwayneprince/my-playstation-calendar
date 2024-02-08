"use client";
import React, { useEffect, useState } from "react";
import { weekNames, monthNames } from "../../../../utils/strings";

import { fetchEvents } from "../../../../utils/apiConfig";
import Header from "../../../../components/Header";
import ExpandedEventDetails from "../../../../components/ExpandedEventDetails";
import { useParams, useRouter } from "next/navigation";
import Event from "@/components/Event";

const Calendar = () => {
  const router = useRouter();
  const [events, setEvents] = useState<any[]>([]);
  const [expandedEventId, setExpandedEventId] = useState(null);
  const { year, month } = useParams();

  const yearNum = parseInt(year as string, 10);
  const monthNum = parseInt(month as string, 10);

  const isValidMonth = monthNum >= 1 && monthNum <= 12;
  const isValidYear = yearNum >= 1;
  const isDateValid = isValidMonth && isValidYear;

  useEffect(() => {
    if (!isDateValid) {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;

      router.push(`/calendar/${currentYear}/${currentMonth}`);
    } else {
      const getEvents = async () => {
        const eventsData = await fetchEvents();
        setEvents(eventsData as any[]);
      };

      getEvents();
    }
  }, [year, month, isDateValid, router]);

  const generateCalendarDays = (year: number, month: number): Date[] => {
    const date = new Date(year, month - 1, 1);
    const days = [];
    while (date.getMonth() === month - 1) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const getEventsOnDate = (date: Date) => {
    return events?.filter((event) => {
      const eventDate = new Date(event.launchDate);
      return (
        eventDate.getFullYear() === date.getFullYear() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getDate() === date.getDate()
      );
    });
  };

  const calendarDays = generateCalendarDays(yearNum, monthNum);

  const firstDayOfMonth = new Date(yearNum, monthNum - 1, 1).getDay();

  const goToPreviousMonth = () => {
    const newYear = monthNum === 1 ? yearNum - 1 : yearNum;
    const newMonth = monthNum === 1 ? 12 : monthNum - 1;
    router.push(`/calendar/${newYear}/${newMonth}`);
  };

  const goToNextMonth = () => {
    const newYear = monthNum === 12 ? yearNum + 1 : yearNum;
    const newMonth = monthNum === 12 ? 1 : monthNum + 1;
    router.push(`/calendar/${newYear}/${newMonth}`);
  };

  const renderWeeks = () => {
    const totalCells =
      Math.ceil((firstDayOfMonth + calendarDays.length) / 7) * 7;
    const weeks = [];
    let weekDays = [];
    let weekEvents = [];

    for (let cell = 0; cell < totalCells; cell++) {
      const dateIndex = cell - firstDayOfMonth;
      const date = calendarDays[dateIndex];

      if (date) {
        const dayEvents = getEventsOnDate(date);
        const hasEvent = dayEvents?.length > 0;
        if (hasEvent) {
          weekEvents.push(dayEvents[0]);
        }

        weekDays.push(
          <div
            key={date.toString()}
            className={`date-cell   ${hasEvent ? "event-day" : ""}`}
            onClick={() => {
              if (hasEvent) {
                setExpandedEventId(
                  expandedEventId === dayEvents[0].id ? null : dayEvents[0].id
                );
              }
            }}
          >
            <span className="date-number">{date.getDate()}</span>
            <div className="events">
              {dayEvents?.map((event) => (
                <div key={event.id} className="event">
                  {dayEvents?.map((event) => (
                    <Event key={event.id} event={event} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      } else {
        weekDays.push(
          <div key={`empty-${cell}`} className="date-cell empty"></div>
        );
      }

      // Check if the week is complete, or if we're at the end of the calendar cells
      if ((cell + 1) % 7 === 0 || cell === totalCells - 1) {
        weeks.push(
          <div key={`week-${weeks.length}`} className="flex justify-between ">
            {weekDays}
          </div>
        );
        weekEvents.forEach((event) => {
          if (expandedEventId === event.id) {
            weeks.push(
              <div key={`details-${event.id}`} className="event-details-row">
                <ExpandedEventDetails event={event} />
              </div>
            );
          }
        });

        // Reset for the next week
        weekDays = [];
        weekEvents = [];
      }
    }

    return weeks;
  };

  return (
    <div className="p-3 ">
      <Header
        monthName={monthNames[monthNum - 1]}
        year={yearNum}
        goToPreviousMonth={goToPreviousMonth}
        goToNextMonth={goToNextMonth}
      />
      <div className="grid grid-cols-7">
        {weekNames.map((day) => (
          <div
            key={day}
            className={`py-5 flex items-center border-t justify-center border-gray-300  font-mono text-xs md:text-base`}
          >
            {day}
          </div>
        ))}
      </div>
      <div className=" ">{renderWeeks()}</div>
    </div>
  );
};

export default Calendar;
