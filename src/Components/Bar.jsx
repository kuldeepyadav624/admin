import React from 'react'

function Bar() {
  return (

    <>

      {/* <div class="row g-4 mb-4">
        <div class="col-12 col-lg-6">
          <div class="app-card app-card-progress-list h-100 shadow-sm">
            <div class="app-card-header p-3">
              <div class="row justify-content-between align-items-center">
                <div class="col-auto">
                  <h4 class="app-card-title">Activity</h4>
                </div>
                <div class="col-auto">
                  <div class="card-header-action">
                    <a href="#">All projects</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="app-card-body">
              <div class="item p-3">
                <div class="row align-items-center">
                  <div class="col">
                    <div class="title mb-1 ">Donation capms Activity</div>
                    <div class="progress">
                      <div class="progress-bar bg-red" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="col-auto">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </div>
                </div>
                <a class="item-link-mask" href="#"></a>
              </div>


              <div class="item p-3">
                <div class="row align-items-center">
                  <div class="col">
                    <div class="title mb-1 ">Employee Activity</div>
                    <div class="progress">
                      <div class="progress-bar bg-red" role="progressbar" style="width: 34%;" aria-valuenow="34" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="col-auto">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </div>
                </div>
                <a class="item-link-mask" href="#"></a>
              </div>

              <div class="item p-3">
                <div class="row align-items-center">
                  <div class="col">
                    <div class="title mb-1 ">Volunteer Acivity</div>
                    <div class="progress">
                      <div class="progress-bar bg-red" role="progressbar" style="width: 68%;" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="col-auto">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </div>
                </div>
                <a class="item-link-mask" href="#"></a>
              </div>
              <div class="item p-3">
                <div class="row align-items-center">
                  <div class="col">
                    <div class="title mb-1 ">Lorem, ipsum.</div>
                    <div class="progress">
                      <div class="progress-bar bg-red" role="progressbar" style="width: 52%;" aria-valuenow="52" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="col-auto">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </div>
                </div>
                <a class="item-link-mask" href="#"></a>
              </div>

            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="app-card app-card-stats-table h-100 shadow-sm">
            <div class="app-card-header p-3">
              <div class="row justify-content-between align-items-center">
                <div class="col-auto">
                  <h4 class="app-card-title">Enployee List</h4>
                </div>
                <div class="col-auto">
                  <div class="card-header-action">
                    <a href="#">View report</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="app-card-body p-3 p-lg-4">
              <div class="table-responsive">
                <table class="table table-borderless mb-0">
                  <thead>
                    <tr>
                      <th class="meta">Name</th>
                      <th class="meta stat-cell">Employee Id</th>
                      <th class="meta stat-cell">Today Work Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><a href="#">Mohit Sharma</a></td>
                      <td class="stat-cell">1</td>
                      <td class="stat-cell">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                        </svg>
                        30%
                      </td>
                    </tr>
                    <tr>
                      <td><a href="#">Akshay Sharma</a></td>
                      <td class="stat-cell">2</td>
                      <td class="stat-cell">23%</td>
                    </tr>
                    <tr>
                      <td><a href="#">Ankit Jangid</a></td>
                      <td class="stat-cell">3</td>
                      <td class="stat-cell">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down text-danger" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                        </svg>
                        20%
                      </td>
                    </tr>
                    <tr>
                      <td><a href="#">Pranjal Sharma</a></td>
                      <td class="stat-cell">4</td>
                      <td class="stat-cell">-</td>
                    </tr>
                    <tr>
                      <td><a href="#">Aman Sharma</a></td>
                      <td class="stat-cell">5</td>
                      <td class="stat-cell">15%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div class="app-wrapper">
        <div class="app-content pt-3 p-md-3 p-lg-4">
          <div class="col-12 col-lg-6">
            <div class="app-card app-card-stats-table h-100 shadow-sm">
              <div class="app-card-header p-3">
                <div class="row justify-content-between align-items-center">
                  <div class="col-auto">
                    <h4 class="app-card-title">Enployee List</h4>
                  </div>
                  <div class="col-auto">
                    <div class="card-header-action">
                      <a href="#">View report</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="app-card-body p-3 p-lg-4">
                <div class="table-responsive">
                  <table class="table table-borderless mb-0">
                    <thead>
                      <tr>
                        <th class="meta">Name</th>
                        <th class="meta stat-cell">Employee Id</th>
                        <th class="meta stat-cell">Today Work Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><a href="#">Mohit Sharma</a></td>
                        <td class="stat-cell">1</td>
                        <td class="stat-cell">
                          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                          </svg>
                          30%
                        </td>
                      </tr>
                      <tr>
                        <td><a href="#">Akshay Sharma</a></td>
                        <td class="stat-cell">2</td>
                        <td class="stat-cell">23%</td>
                      </tr>
                      <tr>
                        <td><a href="#">Ankit Jangid</a></td>
                        <td class="stat-cell">3</td>
                        <td class="stat-cell">
                          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down text-danger" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                          </svg>
                          20%
                        </td>
                      </tr>
                      <tr>
                        <td><a href="#">Pranjal Sharma</a></td>
                        <td class="stat-cell">4</td>
                        <td class="stat-cell">-</td>
                      </tr>
                      <tr>
                        <td><a href="#">Aman Sharma</a></td>
                        <td class="stat-cell">5</td>
                        <td class="stat-cell">15%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>

  )
}

export default Bar