
import React from "react";
import '../App.css'



const NewBoxes = () => {

	


	return (

		<>

			{/* <div class="app-wrapper">

				<div class="app-content pt-3 p-md-3 p-lg-4">
					<div class="row g-4 mb-4">
						<div class="col-6 col-lg-3">
							<div class="app-card app-card-stat shadow-sm h-100">
								<div class="app-card-body p-3 p-lg-4">
									<h4 class="stats-type mb-1">Total user</h4>
									<div class="stats-figure">₹ 12,628</div>

								</div>
								<a class="app-card-link-mask" Link="#"></a>
							</div>
						</div>

						<div class="col-6 col-lg-3">
							<div class="app-card app-card-stat shadow-sm h-100">
								<div class="app-card-body p-3 p-lg-4">
									<h4 class="stats-type mb-1">Total Donation</h4>
									<div class="stats-figure">₹ 2,250</div>

								</div>
								<a class="app-card-link-mask" Link="#"></a>
							</div>
						</div>
						<div class="col-6 col-lg-3">
							<div class="app-card app-card-stat shadow-sm h-100">
								<div class="app-card-body p-3 p-lg-4">
									<h4 class="stats-type mb-1">Total BLOOD UNIT</h4>
									<div class="stats-figure">540</div>
									<div class="stats-meta">
										Unit</div>
								</div>
								<a class="app-card-link-mask" Link="#"></a>
							</div>
						</div>
						<div class="col-6 col-lg-3">
							<div class="app-card app-card-stat shadow-sm h-100">
								<div class="app-card-body p-3 p-lg-4">
									<h4 class="stats-type mb-1">TOTAL EMPLOYEE</h4>
									<div class="stats-figure">115</div>
									<div class="stats-meta">employees</div>
								</div>
								<a class="app-card-link-mask" Link="#"></a>
							</div>
						</div>
					</div>

				</div>
			</div> */}


			<div className="app-wrapper">

			<div class="app-content pt-3 p-md-3 p-lg-4">
		

               <div class="row g-4 mb-4">
			        <div class="col-12 col-lg-6">
				        <div class="app-card app-card-chart h-100 shadow-sm">
					        <div class="app-card-header p-3">
						        <div class="row justify-content-between align-items-center">
							        <div class="col-auto">
						                <h4 class="app-card-title">Employee Work Detail Chart</h4>
							        </div>
							        <div class="col-auto">
								        <div class="card-header-action">
									        <a href="charts.html">More charts</a>
								        </div>
							        </div>
						        </div>
					        </div>
					        <div class="app-card-body p-3 p-lg-4">
							    <div class="mb-3 d-flex">   
							        <select class="form-select form-select-sm ms-auto d-inline-flex w-auto">
									    <option value="1" selected>This week</option>
									    <option value="2">Today</option>
									    <option value="3">This Month</option>
									    <option value="3">This Year</option>
									</select>
							    </div>
						        <div class="chart-container">
				                    <canvas id="canvas-linechart" ></canvas>
						        </div>
					        </div>
				        </div>
			        </div>
			        <div class="col-12 col-lg-6">
				        <div class="app-card app-card-chart h-100 shadow-sm">
					        <div class="app-card-header p-3">
						        <div class="row justify-content-between align-items-center">
							        <div class="col-auto">
						                <h4 class="app-card-title">Donation Chart</h4>
							        </div>
							        <div class="col-auto">
								        <div class="card-header-action">
									        <a href="charts.html">More charts</a>
								        </div>
							        </div>
						        </div>
					        </div>
					        <div class="app-card-body p-3 p-lg-4">
							    <div class="mb-3 d-flex">   
							        <select class="form-select form-select-sm ms-auto d-inline-flex w-auto">
									    <option value="1" selected>This week</option>
									    <option value="2">Today</option>
									    <option value="3">This Month</option>
									    <option value="3">This Year</option>
									</select>
							    </div>
						        <div class="chart-container">
				                    <canvas id="canvas-barchart" ></canvas>
						        </div>
					        </div>
				        </div>
			        </div>
			        
			    </div>

				</div>

				</div>


			



		    


		</>
	)
}

export default NewBoxes;