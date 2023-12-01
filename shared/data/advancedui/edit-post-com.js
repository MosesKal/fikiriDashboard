import React, { useState } from 'react'
import { Breadcrumb, Card, Col, Form, FormGroup, Row } from 'react-bootstrap';
import Link from "next/link";
import { FromInlineEditEditor } from '../form/InlineEditeditor';
import Select from 'react-select';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css'

const EditPostCom = () => {
  const [filesimade, setFilesimage] = useState([]);
  const classes = {previewChip: {
    minWidth: 160,
    maxWidth: 210,
  }};
  const FormSize = [
    {
      "value": "1",
      "label": "IT",
    },
    {
      "value": "2",
      "label": "Language",
    },
    {
      "value": "3",
      "label": "Science",
    },
    {
      "value": "4",
      "label": "Health",
    },
    {
      "value": "5",
      "label": "Humanities",
    },
    {
      "value": "6",
      "label": "Business",
    },
    {
      "value": "7",
      "label": "Maths",
    },
    {
      "value": "8",
      "label": "Marketing",
    }
  ];
  return (
    <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">EDIT POST</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#!">
            Advanced UI
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="breadcrumb-item "
            active
            aria-current="page"
          >
            Edit-Post
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row>
      <Col lg={12}md={12} >
        <Card>
          <Card.Body>
            <FormGroup>
              <Form.Label className="form-label text-dark">Course Title</Form.Label>
              <input
                type="text"
                className="form-control"
                defaultevalue="Advanced Web Develpment"
              />
            </FormGroup>
            <FormGroup>
              <Form.Label className="form-label text-dark">Category</Form.Label>
              <Select classNamePrefix="selectform" options={FormSize} placeholder='Select' onChange={(e) => {console.log(e.value)}} />
            </FormGroup>
            <FormGroup>
              <Form.Label className="form-label text-dark">Instructor</Form.Label>
              <select className="form-control select2 form-select">
                <option>Select</option>
                <option defaultevalue="1" >
                  Pedro Cox
                </option>
                <option defaultevalue="2">Vera Guzman</option>
                <option defaultevalue="3">Glenda Long</option>
                <option defaultevalue="4">Joel Anderson</option>
                <option defaultevalue="5">Blanche Henderson</option>
              </select>
            </FormGroup>
            <FormGroup>
              <Form.Label className="form-label text-dark">Type of mode</Form.Label>
              <div className="d-md-flex ad-post-details">
                <Form.Label className="custom-control custom-radio mb-2 me-4">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="radios2"
                    defaultevalue="option1"
                    defaultChecked
                  />
                  <span className="custom-control-label">
                    <Link href="#!" className="">
                      Online{" "}
                    </Link>
                  </span>
                </Form.Label>
                <Form.Label className="custom-control custom-radio  mb-2">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="radios2"
                    defaultevalue="option2"
                  />
                  <span className="custom-control-label">
                    <Link href="#!" className="">
                      Offline
                    </Link>
                  </span>
                </Form.Label>
              </div>
            </FormGroup>
            <div className="ql-wrapper border">
              
              <FromInlineEditEditor />
            </div>
            <FormGroup>
              <Form.Label className="form-label text-dark">Course Type</Form.Label>
              <div className="d-md-flex ad-post-details">
                <Form.Label className="custom-control custom-radio mb-2 me-4">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="radios12"
                    defaultevalue="option1"
                    defaultChecked
                  />
                  <span className="custom-control-label">
                    <Link href="#!" className="">
                      Free{" "}
                    </Link>
                  </span>
                </Form.Label>
                <Form.Label className="custom-control custom-radio  mb-2">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="radios12"
                    defaultevalue="option2"
                  />
                  <span className="custom-control-label">
                    <Link href="#!" className="">
                      Paid
                    </Link>
                  </span>
                </Form.Label>
              </div>
            </FormGroup>
            <FormGroup className="p-4 border mb-4 form-group">
              <FilePond className=''
                  files={filesimade}
                  allowReorder={true}
                  allowMultiple={false}
                  onupdatefiles={setFilesimage}
                  labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                />
            </FormGroup>
            <FormGroup>
              <Form.Label className="form-label">Upload Video URL</Form.Label>
              <input
                type="text"
                className="form-control"
                placeholder="https://videos.com"
                defaultevalue="https://www.youtube.com/embed/tMWkeBIohBs"
              />
            </FormGroup>
            <div className="control-group form-group  mb-0">
              <Form.Label className="form-label text-dark">
                Course Post Package
              </Form.Label>
              <div className=" border p-3 br-7">
                <div className="d-md-flex ad-post-details">
                  <Form.Label className="custom-control custom-radio mb-0 me-5">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="radios1"
                      defaultevalue="option7"
                    />
                    <span className="custom-control-label">30 Days Free</span>
                  </Form.Label>
                  <Form.Label className="custom-control custom-radio  mb-0 me-4">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="radios1"
                      defaultevalue="option8"
                      defaultChecked
                    />
                    <span className="custom-control-label">
                      60 days / <span className="font-weight-bold">$20</span>
                    </span>
                  </Form.Label>
                  <Form.Label className="custom-control custom-radio  mb-0 me-4">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="radios1"
                      defaultevalue="option9"
                    />
                    <span className="custom-control-label">
                      6months /<span className="font-weight-bold">$50</span>
                    </span>
                  </Form.Label>
                  <Form.Label className="custom-control custom-radio  mb-0">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="radios1"
                      defaultevalue="option10"
                    />
                    <span className="custom-control-label">
                      1 year / <span className="font-weight-bold">$80</span>
                    </span>
                  </Form.Label>
                </div>
              </div>
            </div>
          </Card.Body>
          <div className="card-footer ">
            <Link href="#!" className="btn btn-secondary">
              Save to Draft
            </Link>
            <Link href="#!" className="btn btn-primary float-end">
              Publish Now
            </Link>
          </div>
        </Card>
      </Col>
    </Row>
    {/* <!-- /row --> */}
  </div>
  )
}

export default EditPostCom