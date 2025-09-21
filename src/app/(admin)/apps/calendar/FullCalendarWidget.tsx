import FullCalendar from '@fullcalendar/react';
import { EventClickArg, EventDropArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg, DropArg } from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import BootstrapTheme from '@fullcalendar/bootstrap';
import {CalendarProps} from "@/app/(admin)/apps/calendar/types";


const FullCalendarWidget = ({ events, onDateClick, onDrop, onEventClick, onEventDrop }: CalendarProps) => {

	const handleDateClick = (arg: DateClickArg) => {
		onDateClick(arg)
	}
	const handleEventClick = (arg: EventClickArg) => {
		onEventClick(arg)
	}
	const handleDrop = (arg: DropArg) => {
		onDrop(arg)
	}
	const handleEventDrop = (arg: EventDropArg) => {
		onEventDrop(arg)
	}

	return (
		<>
			{/* full calendar control */}
			<div id="calendar">
				<FullCalendar
					initialView="dayGridMonth"
					plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin, BootstrapTheme]}
					handleWindowResize={true}
					themeSystem="bootstrap"
					buttonText={{
						today: 'Today',
						month: 'Month',
						week: 'Week',
						day: 'Day',
						list: 'List',
						prev: 'Prev',
						next: 'Next',
					}}
					headerToolbar={{
						left: 'prev,next today',
						center: 'title',
						right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
					}}
					editable={true}
					selectable={true}
					droppable={true}
					events={events}
					dateClick={handleDateClick}
					eventClick={handleEventClick}
					drop={handleDrop}
					eventDrop={handleEventDrop}
				/>
			</div>
		</>
	);
};

export default FullCalendarWidget;
