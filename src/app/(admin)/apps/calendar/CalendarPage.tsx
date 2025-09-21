'use client';
import { Row, Col, Card, Button, CardBody } from 'react-bootstrap';
import FullCalendarWidget from './FullCalendarWidget';
import SidePanel from './SidePanel';
import AddEditEvent from './AddEditEvent';
import '@fullcalendar/react';
import useCalendar from "@/app/(admin)/apps/calendar/useCalendar";

const CalendarPage = () => {
	const {
		createNewEvent,
		eventData,
		events,
		isEditable,
		onAddEvent,
		onCloseModal,
		onDateClick,
		onDrop,
		onEventClick,
		onEventDrop,
		onRemoveEvent,
		onUpdateEvent,
		show,
	} = useCalendar()
	return (
		<>
			<Card>
				<CardBody>
					<Row>
						<Col xl={3}>
							<div className="d-grid">
								{/* add events */}
								<Button className="btn btn-lg font-16 btn-danger" id="btn-new-event" onClick={createNewEvent}>
									<i className="mdi mdi-plus-circle-outline"></i> Create New Event
								</Button>
							</div>

							<SidePanel />
						</Col>
						<Col xl={9}>
							{/* fullcalendar control */}
							<FullCalendarWidget events={events} onDateClick={onDateClick} onDrop={onDrop} onEventClick={onEventClick} onEventDrop={onEventDrop} />
						</Col>
					</Row>
				</CardBody>
			</Card>

			{/* add new event modal */}
			<AddEditEvent
				eventData={eventData}
				isEditable={isEditable}
				onAddEvent={onAddEvent}
				onRemoveEvent={onRemoveEvent}
				onUpdateEvent={onUpdateEvent}
				open={show}
				toggle={onCloseModal}
			/>
		</>
	);
};

export default CalendarPage;
