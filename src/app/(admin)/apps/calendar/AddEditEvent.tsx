import {Button, Col, Modal, Row} from 'react-bootstrap';
import {SelectInput, TextInput} from '@/components/Form';
import {SubmitEventType} from "@/app/(admin)/apps/calendar/useCalendar";
import {useEffect} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import * as yup from 'yup'
import {CalendarFormType} from "@/app/(admin)/apps/calendar/types";

const AddEditEvent = ({
                          eventData, isEditable, onAddEvent, onRemoveEvent, onUpdateEvent, open, toggle
                      }: CalendarFormType) => {

    const eventFormSchema = yup.object({
        title: yup.string().required('Please enter event title'),
        category: yup.string().required('Please select event category'),
    })

    type FormValues = yup.InferType<typeof eventFormSchema>

    const {handleSubmit, control, setValue, reset} = useForm<FormValues>({
        resolver: yupResolver(eventFormSchema),
        defaultValues: {
            title: eventData?.title ?? '',
            category: eventData?.className ? String(eventData.className) : 'bg-danger',
        },
    })

    useEffect(() => {
        if (eventData?.title) {
            setValue('title', String(eventData?.title))
            setValue('category', String(eventData?.className))
        }
    }, [eventData,])

    useEffect(() => {
        if (!open) reset()
    }, [open])

    const onSubmitEvent = (data: SubmitEventType) => {
        isEditable ? onUpdateEvent(data) : onAddEvent(data)
    }

    return (
        <Modal show={open} onHide={toggle} backdrop="static" keyboard={false}>
            <Modal.Header className="pb-2 px-4 border-bottom-0" closeButton>
                <Modal.Title>
                    <h5> {isEditable ? 'Edit Event' : 'Add New Event'} </h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4 pb-4 pt-0">
                <form onSubmit={handleSubmit(onSubmitEvent)}>
                    <Row>
                        <Col sm={12}>
                            <TextInput control={control} containerClass="mb-3" type="text" label="Event Name"
                                       name="title"
                                       placeholder="Insert Event Name"/>
                        </Col>
                        <Col sm={12}>
                            <SelectInput control={control} name="category" label="Category"
                                         containerClass="mb-3">
                                <option value="bg-danger" defaultChecked>
                                    Danger
                                </option>
                                <option value="bg-success">Success</option>
                                <option value="bg-primary">Primary</option>
                                <option value="bg-info">Info</option>
                                <option value="bg-dark">Dark</option>
                                <option value="bg-warning">Warning</option>
                            </SelectInput>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={4}>
                            {isEditable ? (
                                <Button variant="danger" onClick={onRemoveEvent}>
                                    Delete
                                </Button>
                            ) : null}
                        </Col>
                        <Col xs={8} className="text-end">
                            <Button className="btn btn-light me-1" onClick={toggle}>
                                Close
                            </Button>
                            <Button variant="success" type="submit" className="btn btn-success">
                                Save
                            </Button>
                        </Col>
                    </Row>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default AddEditEvent;
