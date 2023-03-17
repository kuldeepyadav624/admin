import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Boxs from "./Boxs";
import Table from "./Table";
import Bar from "./Bar";
function Admin() {

  return (
    <>
      {/* <Sidebar/>
    {/* <Header/> }
    <Boxs/>
    <Table/> 
    <Bar/> */}

      <div className="cont">

        <div className="box" id="box-1">

          <div className="slide">
            <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white m-2">
              <div class="position-sticky">
                <div class="list-group list-group-flush mx-3 mt-4">
                  <a
                    href="#"
                    class="list-group-item list-group-item-action py-2 ripple"
                    aria-current="true"
                  >
                    <i class="fas fa-tachometer-alt fa-fw me-3"></i>
                    <span>Ngo dashboard</span>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action py-2 ripple active"
                  >
                    <i class="fas fa-chart-area fa-fw me-3"></i>
                    <span></span>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action py-2 ripple"
                  >
                    <i class="fas fa-lock fa-fw me-3"></i>
                    <span>Password</span>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action py-2 ripple"
                  >
                    <i class="fas fa-money-bill fa-fw me-3"></i>
                    <span>Analytics</span>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action py-2 ripple"
                  >
                    <i class="fas fa-money-bill fa-fw me-3"></i>
                    <span>SEO</span>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action py-2 ripple"
                  >
                    <i class="fas fa-chart-bar fa-fw me-3"></i>
                    <span>Orders</span>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action py-2 ripple"
                  >
                    <i class="fas fa-globe fa-fw me-3"></i>
                    <span>International</span>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action py-2 ripple"
                  >
                    <i class="fas fa-building fa-fw me-3"></i>
                    <span>Partners</span>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action py-2 ripple"
                  >
                    <i class="fas fa-calendar fa-fw me-3"></i>
                    <span>Calendar</span>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action py-2 ripple"
                  >
                    <i class="fas fa-users fa-fw me-3"></i>
                    <span>Users</span>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action py-2 ripple"
                  >
                    <i class="fas fa-money-bill fa-fw me-3"></i>
                    <span>Sales</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="box" id="box-2">
          <div className="header">
            <div class="container-fluid">
              <div class="row py-0">
                <div class="col">
                  <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a href="" class="navbar-brand">
                      
                    </a>
                    <div class="collapse navbar-collapse" id="mynavbar">
                      <ul class="navbar-nav">

                        <li class="nav-item">
                          <a href="/" class="nav-link">
                            Home
                          </a>
                        </li>

                        <li class="nav-item">
                          <a href="#" class="nav-link">
                            About Us
                          </a>
                        </li>

                        <li class="nav-item dropdown">
                          <a
                            href=""
                            class="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            Service
                          </a>
                          <ul class="dropdown-menu">
                            <a href="" class="dropdown-item">
                              One
                            </a>
                            <a href="" class="dropdown-item">
                              Two
                            </a>
                            <a href="" class="dropdown-item">
                              Three
                            </a>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="content-box">


            <div className="boxes">
              <div className="container-fluid" style={{ margin: "20px"  }}>
                <div className="row">
                  {/* <div className="col-sm-2"></div> */}
                  <div className="col-sm-2 ">
                    <div className="card  ">
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With additional content.
                        </p>

                      </div>
                    </div>
                  </div>
                  <div className="col-sm-2 ">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With additional content.
                        </p>

                      </div>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With additional content.
                        </p>

                      </div>
                    </div>
                  </div>
                  {/* <div className="col-sm-2">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With  content.
                        </p>

                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-sm-2">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With additional content.
                        </p>

                      </div>
                    </div>
                  </div> */}

                  <div className="col-sm-2">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With additional content.
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="chart">

              <div className="chart1">
                <div className="box" id="box-m">
                  <div className="container">
                    <div className="row">

                      <div className="col-sm-5 w-100">
                        <table className="table table-striped w-90">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">First</th>
                              <th scope="col">Last</th>
                              <th scope="col">Handle</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </div>


              <div className="chart2">


                <div className="col-lg-5 ps-lg-2 mb-3 w-100 cal">
                  <div className="card h-lg-100 ch">
                    <div className="card-header">
                      <div className="row flex-between-center">
                        <div className="col-auto">
                          <h6 className="mb-0">Total Sales</h6>
                        </div>
                        <div className="col-auto d-flex">
                          <select className="form-select form-select-sm select-month me-2">
                            <option value="0">January</option>
                            <option value="1">February</option>
                            <option value="2">March</option>
                            <option value="3">April</option>
                            <option value="4">May</option>
                            <option value="5">Jun</option>
                            <option value="6">July</option>
                            <option value="7">August</option>
                            <option value="8">September</option>
                            <option value="9">October</option>
                            <option value="10">November</option>
                            <option value="11">December</option>
                          </select>
                          <div className="dropdown font-sans-serif btn-reveal-trigger">
                            <button
                              className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                              type="button"
                              id="dropdown-total-sales"
                              data-bs-toggle="dropdown"
                              data-boundary="viewport"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <svg
                                className="svg-inline--fa fa-ellipsis-h fa-w-16 fs--2"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="ellipsis-h"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                                ></path>
                              </svg>
                            </button>
                            <div
                              className="dropdown-menu dropdown-menu-end border py-2"
                              aria-labelledby="dropdown-total-sales"
                            >
                              <a className="dropdown-item" href="#!">
                                View
                              </a>
                              <a className="dropdown-item" href="#!">
                                Export
                              </a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item text-danger" href="#!">
                                Remove
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                 
                  </div>
                </div>


              </div>



            </div>
          </div>
        </div>

      </div>







    </>
  );
}

export default Admin;