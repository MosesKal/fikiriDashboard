import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

import { useRouter } from "next/router";

import axios from "@/pages/api/axios";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";

import { Breadcrumb, Col, Row, Card, Button, Form } from "react-bootstrap";
import Link from "next/link";
import Select from "react-select";

import * as Dashboarddata from "../../../shared/data/dashboards/dashboards1";
import {
  COLUMNS,
  DATATABLE,
  GlobalFilter,
} from "../../../shared/data/dashboards/dashboards1";


const Dashboard = () => {

  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: DATATABLE,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  let navigate = useRouter();

  const FormSize = [
    { value: "5", label: "Show 5" },
    { value: "10", label: "Show 10" },
    { value: "15", label: "Show 15" },
  ];

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  useEffect(() => {
    axios
      .get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
        },
      })
      .then((response) => {
        localStorage.setItem("ACCESS_ACCOUNT", JSON.stringify(response.data.data));
        localStorage.setItem("status", JSON.stringify({isLogged : true}))
      })
      .catch(() => {
        setIsLogged(false);
        location.push("/");
      });
  }, []);

  return (
    <>
      <Seo title={"Tableau de bord"} />
      <React.Fragment>
        <div className="breadcrumb-header justify-content-between">
          <div className="left-content">
            <span className="main-content-title mg-b-0 mg-b-lg-1">
              TABLEAU DE BORD
            </span>
          </div>
          <div className="justify-content-center mt-2">
            <Breadcrumb>
              <Breadcrumb.Item className=" tx-15" href="#!">
                Tableau de bord
              </Breadcrumb.Item>
              <Breadcrumb.Item active aria-current="page">
                Accueil
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row>
          <Col xxl={5} xl={12} lg={12} md={12} sm={12}>
            <Row>
              <Col xl={12} lg={12} md={12} xs={12}>
                <Card>
                  <Card.Body>
                    <Row>
                      <Col xl={9} lg={7} md={6} sm={12}>
                        <div className="text-justified align-items-center">
                          <h3 className="text-dark font-weight-semibold mb-2 mt-0">
                            Bienvenu sur le tableau de bord
                            <span className="text-primary">{" Fikiri"}</span>
                          </h3>
                          <p className="text-dark tx-14 mb-3 lh-3">
                            Gérez la plateforme en toute simplicité
                          </p>
                          {/* <Button variant="" className="btn btn-primary shadow">
                          Upgrade Now
                        </Button> */}
                        </div>
                      </Col>
                      <Col
                        xl={3}
                        lg={5}
                        md={6}
                        sm={12}
                        className="d-flex align-items-center justify-content-center upgrade-chart-circle"
                      >
                        {/* <div className="chart-circle float-md-end mt-4 mt-md-0">
                        <ReactApexChart
                          options={Dashboarddata.Radialbar.options}
                          series={Dashboarddata.Radialbar.series}
                          type="radialBar"
                          height={180}
                        />
                        <div className="chart-circle-value circle-style">
                          <div className="tx-18 font-weight-semibold">85%</div>
                        </div>
                      </div> */}
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={6} lg={12} md={12} xs={12}>
                <Card className=" sales-card">
                  <Row>
                    <div className="col-8">
                      <div className="ps-4 pt-4 pe-3 pb-4">
                        <div className="">
                          <h6 className="mb-2 tx-12 ">{"Projets validés"}</h6>
                        </div>
                        <div className="pb-0 mt-0">
                          <div className="d-flex">
                            <h4 className="tx-20 font-weight-semibold mb-2">
                              50
                            </h4>
                          </div>
                          {/* <p className="mb-0 tx-12 text-muted">
                          Last week
                          <i className="fa fa-caret-up mx-2 text-success"></i>
                          <span className="text-success font-weight-semibold">
                            +427
                          </span>
                        </p> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="circle-icon bg-primary-transparent text-center align-self-center overflow-hidden">
                        <i className="fe fe-shopping-bag tx-16 text-primary"></i>
                      </div>
                    </div>
                  </Row>
                </Card>
              </Col>
              <Col xl={6} lg={12} md={12} xs={12}>
                <Card className="sales-card">
                  <Row>
                    <div className="col-8">
                      <div className="ps-4 pt-4 pe-3 pb-4">
                        <div className="">
                          <h6 className="mb-2 tx-12">
                            {"Projets en attentes"}
                          </h6>
                        </div>
                        <div className="pb-0 mt-0">
                          <div className="d-flex">
                            <h4 className="tx-20 font-weight-semibold mb-2">
                              20
                            </h4>
                          </div>
                          {/* <p className="mb-0 tx-12 text-muted">
                          Last week
                          <i className="fa fa-caret-down mx-2 text-danger"></i>
                          <span className="font-weight-semibold text-danger">
                            -453
                          </span>
                        </p> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="circle-icon bg-info-transparent text-center align-self-center overflow-hidden">
                        <i className="fe fe-dollar-sign tx-16 text-info"></i>
                      </div>
                    </div>
                  </Row>
                </Card>
              </Col>
              <Col xl={6} lg={12} md={12} xs={12}>
                <Card className=" sales-card">
                  <Row>
                    <div className="col-8">
                      <div className="ps-4 pt-4 pe-3 pb-4">
                        <div className="">
                          <h6 className="mb-2 tx-12">
                            {"Projets non validés"}
                          </h6>
                        </div>
                        <div className="pb-0 mt-0">
                          <div className="d-flex">
                            <h4 className="tx-20 font-weight-semibold mb-2">
                              30
                            </h4>
                          </div>
                          {/* <p className="mb-0 tx-12 text-muted">
                          Last week
                          <i className="fa fa-caret-up mx-2 text-success"></i>
                          <span className=" text-success font-weight-semibold">
                            +788
                          </span>
                        </p> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="circle-icon bg-secondary-transparent text-center align-self-center overflow-hidden">
                        <i className="fe fe-external-link tx-16 text-secondary"></i>
                      </div>
                    </div>
                  </Row>
                </Card>
              </Col>
              <Col xl={6} lg={12} md={12} xs={12}>
                <Card className="sales-card">
                  <Row>
                    <div className="col-8">
                      <div className="ps-4 pt-4 pe-3 pb-4">
                        <div className="">
                          <h6 className="mb-2 tx-12">
                            {"Projets Cartographiés"}
                          </h6>
                        </div>
                        <div className="pb-0 mt-0">
                          <div className="d-flex">
                            <h4 className="tx-22 font-weight-semibold mb-2">
                              50
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="circle-icon bg-warning-transparent text-center align-self-center overflow-hidden">
                        <i className="fe fe-credit-card tx-16 text-warning"></i>
                      </div>
                    </div>
                  </Row>
                </Card>
              </Col>
              <Col xl={12} lg={12} md={12} xs={12}>
                <Card>
                  <Card.Header className="pb-1">
                    <h3 className="card-title mb-2">Projets récents</h3>
                  </Card.Header>
                  <Card.Body className=" p-0">
                    <div className="browser-stats">
                      <div className="d-flex align-items-center item  border-bottom my-2">
                        <div className="d-flex">
                          <img
                            src={"../../../assets/img/svgicons/report.svg"}
                            alt="img"
                            className="ht-30 wd-30 me-2"
                          />
                          <div className="">
                            <h6 className="">
                              {"Mise en place d'un réseau..."}
                            </h6>
                            <span className="text-muted tx-12">
                              JONATHAN KIMBA
                            </span>
                          </div>
                        </div>
                        <div className="ms-auto my-auto">
                          <div className="d-flex">
                            <span className="me-3 mt-1 font-weight-semibold tx-16">
                              {"Inclusion financière..."}
                            </span>
                            <span className="text-success fs-13 my-auto">
                              <i className="fe fe-trending-up text-success mx-2 my-auto"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center item  border-bottom my-2">
                        <div className="d-flex">
                          <img
                            src={"../../../assets/img/svgicons/report.svg"}
                            alt="img"
                            className="ht-30 wd-30 me-2"
                          />
                          <div className="">
                            <h6 className="">
                              {"Developpement d'une solution..."}
                            </h6>
                            <span className="text-muted tx-12">
                              {"CHRINOVIC ZIONGO"}
                            </span>
                          </div>
                        </div>
                        <div className="ms-auto my-auto">
                          <div className="d-flex">
                            <span className="me-3 mt-1 font-weight-semibold tx-16">
                              {"Mécanisation légère agri..."}
                            </span>
                            <span className="text-success">
                              <i className="fe fe-trending-down text-danger mx-2 my-auto"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xxl={7} xl={12} lg={12} md={12} sm={12}>
            <Card className=" custom-card overflow-hidden">
              <Card.Header className=" border-bottom-0">
                <div>
                  <h3 className="card-title mb-2 ">Projets</h3>
                  <span className="d-block tx-12 mb-0 text-muted"></span>
                </div>
              </Card.Header>
              <Card.Body>
                {/* <div id="statistics1"> */}
                <Dashboarddata.Statistics1 />

                {/* </div> */}
              </Card.Body>
            </Card>
            <Row>
              <Col sm={12} lg={12} xl={6}>
                <Card className="card overflow-hidden">
                  <Card.Header className=" pb-1">
                    <h3 className="card-title mb-2">Utilisateurs récents</h3>
                  </Card.Header>
                  <Card.Body className="p-0 customers mt-1">
                    <div className="list-group list-lg-group list-group-flush">
                      <Link href="#!" className="border-0">
                        <div className="list-group-item list-group-item-action border-0">
                          <div className="media mt-0">
                            <img
                              className="avatar-lg rounded-circle me-3 my-auto shadow"
                              src={"../../../assets/img/faces/2.jpg"}
                              alt=""
                            />
                            <div className="media-body">
                              <div className="d-flex align-items-center">
                                <div className="mt-0">
                                  <h5 className="mb-1 tx-13 font-weight-sembold text-dark">
                                    Samantha Melon
                                  </h5>
                                  <p className="mb-0 tx-12 text-muted">
                                    User ID: #1234
                                  </p>
                                </div>
                                <span className="ms-auto wd-45p tx-14">
                                  <span className="float-end badge badge-success-transparent">
                                    <span className="op-7 text-success font-weight-semibold">
                                      paid
                                    </span>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link href="#!" className="border-0">
                        <div className="list-group-item list-group-item-action border-0">
                          <div className="media mt-0">
                            <img
                              className="avatar-lg rounded-circle me-3 my-auto shadow"
                              src={"../../../assets/img/faces/1.jpg"}
                              alt=""
                            />
                            <div className="media-body">
                              <div className="d-flex align-items-center">
                                <div className="mt-1">
                                  <h5 className="mb-1 tx-13 font-weight-sembold text-dark">
                                    Allie Grater
                                  </h5>
                                  <p className="mb-0 tx-12 text-muted">
                                    User ID: #1234
                                  </p>
                                </div>
                                <span className="ms-auto wd-45p tx-14">
                                  <span className="float-end badge badge-danger-transparent ">
                                    <span className="op-7 text-danger font-weight-semibold">
                                      Pending
                                    </span>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={12} xl={6}>
                <Card>
                  <Card.Header className="pb-3">
                    <h3 className="card-title mb-2">MAIN TASKS</h3>
                  </Card.Header>
                  <Card.Body className="p-0 customers mt-1">
                    <div className="">
                      <label className="p-2 d-flex">
                        <span className="check-box mb-0 ms-2">
                          <span className="ckbox">
                            <input type="checkbox" />
                            <span></span>
                          </span>
                        </span>
                        <span className="mx-3 my-auto">
                          accurate information at any given point.
                        </span>
                        <span className="ms-auto">
                          <span className="badge badge-primary-transparent font-weight-semibold px-2 py-1 tx-11 me-2">
                            Today
                          </span>
                        </span>
                      </label>
                      <label className="p-2 mt-2 d-flex">
                        <span className="check-box mb-0 ms-2">
                          <span className="ckbox">
                            <input type="checkbox" />
                            <span></span>
                          </span>
                        </span>
                        <span className="mx-3 my-auto">
                          sharing the information with clients or stakeholders.
                        </span>
                        <span className="ms-auto">
                          <span className="badge badge-primary-transparent font-weight-semibold px-2 py-1 tx-11 me-2">
                            Today
                          </span>
                        </span>
                      </label>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          {/* <!-- </div> --> */}
        </Row>
        {/* <!-- row closed --> */}
        <Row>
          <Col sm={12} className="col-12">
            <Card>
              <Card.Header>
                <h4 className="card-title">Projets</h4>
              </Card.Header>
              <Card.Body className="pt-0 example1-table">
                <div className="table-responsive">
                  <>
                    <div className="d-sm-flex">
                      <Form.Group className="mb-3">
                        <Select
                          classNamePrefix="selectform"
                          options={FormSize}
                          placeholder="Select"
                          onChange={(e) => setPageSize(Number(e.value))}
                        />
                      </Form.Group>
                      <GlobalFilter
                        filter={globalFilter}
                        setFilter={setGlobalFilter}
                      />
                    </div>
                    <table
                      {...getTableProps()}
                      className="table table-bordered text-nowrap mb-0"
                    >
                      <thead>
                        {headerGroups.map((headerGroup) => (
                          <tr
                            key={Math.random()}
                            {...headerGroup.getHeaderGroupProps()}
                          >
                            {headerGroup.headers.map((column) => (
                              <th
                                key={Math.random()}
                                {...column.getHeaderProps(
                                  column.getSortByToggleProps()
                                )}
                                className={column.className}
                              >
                                <span className="tabletitle">
                                  {column.render("Header")}
                                </span>
                                <span>
                                  {column.isSorted ? (
                                    column.isSortedDesc ? (
                                      <i className="fa fa-angle-down"></i>
                                    ) : (
                                      <i className="fa fa-angle-up"></i>
                                    )
                                  ) : (
                                    ""
                                  )}
                                </span>
                              </th>
                            ))}
                          </tr>
                        ))}
                      </thead>
                      <tbody {...getTableBodyProps()}>
                        {page.map((row) => {
                          prepareRow(row);
                          return (
                            <tr
                              key={Math.random()}
                              className="text-center"
                              {...row.getRowProps()}
                            >
                              {row.cells.map((cell) => {
                                return (
                                  <td
                                    key={Math.random()}
                                    {...cell.getCellProps()}
                                  >
                                    {cell.render("Cell")}
                                  </td>
                                );
                              })}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <div className="d-block d-sm-flex mt-4 ">
                      <span className="">
                        Page{" "}
                        <strong>
                          {pageIndex + 1} of {pageOptions.length}
                        </strong>{" "}
                      </span>
                      <span className="ms-sm-auto ">
                        <Button
                          variant=""
                          className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
                          onClick={() => gotoPage(0)}
                          disabled={!canPreviousPage}
                        >
                          {" Previous "}
                        </Button>
                        <Button
                          variant=""
                          className="btn-default tablebutton me-2 my-1"
                          onClick={() => {
                            previousPage();
                          }}
                          disabled={!canPreviousPage}
                        >
                          {" << "}
                        </Button>
                        <Button
                          variant=""
                          className="btn-default tablebutton me-2 my-1"
                          onClick={() => {
                            previousPage();
                          }}
                          disabled={!canPreviousPage}
                        >
                          {" < "}
                        </Button>
                        <Button
                          variant=""
                          className="btn-default tablebutton me-2 my-1"
                          onClick={() => {
                            nextPage();
                          }}
                          disabled={!canNextPage}
                        >
                          {" > "}
                        </Button>
                        <Button
                          variant=""
                          className="btn-default tablebutton me-2 my-1"
                          onClick={() => {
                            nextPage();
                          }}
                          disabled={!canNextPage}
                        >
                          {" >> "}
                        </Button>
                        <Button
                          variant=""
                          className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
                          onClick={() => gotoPage(pageCount - 1)}
                          disabled={!canNextPage}
                        >
                          {" Next "}
                        </Button>
                      </span>
                    </div>
                  </>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    </>
  );
};

Dashboard.layout = "Contentlayout";

export default Dashboard;
