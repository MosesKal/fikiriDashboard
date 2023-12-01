import React, { useCallback, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import Link from "next/link";
import ImageViewer from "react-simple-image-viewer";

const Gallerycom = () => {
    const images = [
            "../../../assets/img/photos/1.jpg",
            "../../../assets/img/photos/2.jpg",
            "../../../assets/img/photos/3.jpg",
            "../../../assets/img/photos/4.jpg",
            "../../../assets/img/photos/5.jpg",
            "../../../assets/img/photos/6.jpg",
            "../../../assets/img/photos/7.jpg",
            "../../../assets/img/photos/8.jpg",
            "../../../assets/img/photos/9.jpg",
    ];
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
        <Card className="custom-card overflow-hidden">
            <Card.Header className="border-bottom">
              <h3 className="card-title mb-1">Gallery</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-center demo-gallery">
                <div className="mt-2">
                  <Row className="masonry">
                    {images.map((image,index) => {
                        return (
                            <Col key={Math.random()} xl={4} lg={4} sm={6}>
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
                </div>
              </div>
            </Card.Body>
          </Card>
    </div>
  )
}

export default Gallerycom