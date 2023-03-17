import React from "react";

function Table() {
  return (
    <>
      <div className="mohit">
        <div className="box" id="box-1">
          <div className="container">
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-5">
                <table className="table table-striped">
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
        <div className="box" id="box-2">
          <div className="col-lg-5 ps-lg-2 mb-3">
            <div className="card h-lg-100">
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
              <div className="card-body h-100 pe-0">
                <div
                  className="echart-line-total-sales h-100"
                  data-echart-responsive="true"
                  echarts_instance="ec_1678782469907"
                ></div>
                <canvas data-zr-dom-id="zr_0" width="401" height="283"></canvas>
              </div>
              <div className="ab">Mar 15, 50</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
