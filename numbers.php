<?php include 'views/header.php';?>

<!-- numbers Page Content for show weekly  winning numbers go Here -->
<section class="panel">
	<div class="row">
		<div class="column large-12">
			<h2>Weekly Winning Numbers</h2>
			<h3>PowerBall Winning Numbers</h3>
			<h5><i>Drawings are held every Wednesday and Saturday</i></h5>

			  <div class="small-4 large-6 columns"><h3><b>Wining Numbers</b></h3>
				  	<div class="small-block-grid-12" id="contanerTable">
						
						<!-- Table content comes Here from update.js -->
						<table id="tableId">
						  <thead>
						    <tr>
						      <th id="dateId"></th>
						      <th id="numbersId"></th>
						    </tr>  
						  </thead>

						  <tbody id="tableBody">
							  <tr id="tableRow1"></tr>
							  	<th id="tCol1"></th>
							  	<th id="tCol2"></th>
						  </tbody>

						</table>
					</div>
			  </div>

		</div>
	</div>
</section>

<?php include 'views/footer.php';?>