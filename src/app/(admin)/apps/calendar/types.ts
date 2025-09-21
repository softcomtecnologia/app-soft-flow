import {EventClickArg, EventDropArg, EventInput} from "@fullcalendar/core";
import {DateClickArg, DropArg} from "@fullcalendar/interaction";

export type OffcanvasControlType = {
	open: boolean
	toggle: () => void
}

export type CalendarFormType = {
	isEditable: boolean
	eventData?: EventInput
	onUpdateEvent: (data: any) => void
	onRemoveEvent: () => void
	onAddEvent: (data: any) => void
} & OffcanvasControlType

export type CalendarProps = {
	onDateClick: (arg: DateClickArg) => void
	onEventClick: (arg: EventClickArg) => void
	onDrop: (arg: DropArg) => void
	onEventDrop: (arg: EventDropArg) => void
	events: EventInput[]
}