'use client';
import {Card, CardBody, Col, Row} from 'react-bootstrap';
import SimpleMDEReact, {SimpleMDEReactProps} from 'react-simplemde-editor';
import dynamic from "next/dynamic";

// styles
import 'easymde/dist/easymde.min.css';

const ReactQuill = dynamic(() => import("react-quill-new"), {ssr: false});

const content = `<h3><span class="ql-size-large">Hello World!</span></h3>
    <p><br/></p>
    <h3>This is a simple editable area.</h3>
    <p><br/></p>
    <ul>
      <li>Select a text to reveal the toolbar.</li>
      <li>Edit rich document on-the-fly, so elastic!</li>
    </ul>
<p><br/></p>
<p>End of simple area</p>`

const SnowEditor = () => {
    const modules = {
        toolbar: [
            [{font: []}, {size: []}],
            ['bold', 'italic', 'underline', 'strike'],
            [{color: []}, {background: []}],
            [{script: 'super'}, {script: 'sub'}],
            [{header: [false, 1, 2, 3, 4, 5, 6]}, 'blockquote', 'code-block'],
            [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}],
            ['direction', {align: []}],
            ['link', 'image', 'video'],
            ['clean'],
        ],
    }
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-3">Quill Editor</h4>
                <p className="text-muted font-14 mb-3">Snow is a clean, flat toolbar theme.</p>

                <ReactQuill modules={modules} defaultValue={content} theme="snow"/>
            </CardBody>
        </Card>
    )
}

const BubbleEditor = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-3">Bubble Editor</h4>
                <p className="text-muted font-14 mb-3">Bubble is a simple tooltip based theme.</p>

                <ReactQuill defaultValue={content} theme="bubble"/>
            </CardBody>
        </Card>
    )
}

const SimpleMDE = () => {

    const delay = 1000;
    const options: SimpleMDEReactProps['options'] = {
        autosave: {
            enabled: true,
            uniqueId: '1',
            delay,
        },
    };

    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-3">SimpleMDE</h4>
                <p className="text-muted font-14 mb-3">SimpleMDE is a light-weight, simple, embeddable, and
                    beautiful JS markdown editor</p>

                <SimpleMDEReact options={options}/>
            </CardBody>
        </Card>
    )
}

const AllEditor = () => {

    return (
        <Row>
            <Col sm={12}>
                <SnowEditor/>
            </Col>
            <Col sm={12}>
                <BubbleEditor/>
            </Col>
            <Col sm={12}>
                <SimpleMDE/>
            </Col>
        </Row>
    );
};

export default AllEditor;
