import React, { useCallback, useState } from 'react'
import { Breadcrumb, Col, Pagination, Row } from "react-bootstrap";
import ImageViewer from "react-simple-image-viewer";
import {images} from "./profile"

const Gallerycom = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div>
        {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">GALLERY</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#!">
              Pages
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Gallery
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      <Row className="masonry">
          {images.map((image,index) => {
            return (
              <Col xl={3} lg={4} sm={6} key={Math.random()}>
                <div className="brick">
                  <img src={image} group="group1" onClick={() => openImageViewer(index)} />
                </div>
              </Col>
            );
          })}
      </Row>
        {isViewerOpen && (
                    <ImageViewer
                    src={images}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    disableScroll={false}
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)"
                    }}
                    closeOnClickOutside={true}
                    />
        )}

      {/* <!-- Pagination --> */}
      <Row className=" mb-5">
        <Col md={6} className="mt-1 d-none d-md-block text-dark">
          1 - 10 of 234 photos
        </Col>
        <Pagination className="pagination product-pagination ms-auto float-end">
          <Pagination.Item className="page-item page-prev disabled">
            Prev
          </Pagination.Item>
          <Pagination.Item className="page-item active">1</Pagination.Item>
          <Pagination.Item className="page-item">2</Pagination.Item>
          <Pagination.Item className="page-item">3</Pagination.Item>
          <Pagination.Item className="page-item">4</Pagination.Item>
          <Pagination.Item className="page-item page-next">Next</Pagination.Item>
        </Pagination>
      </Row>
      {/* <!-- Pagination --> */}
    </div>
  )
}

export default Gallerycom