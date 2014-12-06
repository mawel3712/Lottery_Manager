<?php include 'views/header.php';?>



<!-- contact Page Content go Here -->
<!-- signup Page Content registration form to become a member go Here -->
<section>
	<div class="row">
		<div class="column large-8 large-centered text-center panel">
			<h2>Contact Me</h2>
			<form>

				<div class="alert-box alert">
					<!-- Error Alert -->
					This is an error message!
					<a href="#" class="close">&times;</a>
				</div>

				<label>
					<input type="text" placeholder="Your Name" required />
				</label>
				<label>
					<input type="email" placeholder="Email Address" required />
				</label>
				<label>
					<textarea placeholder="How may I help you?"></textarea>
				</label>
				
				<button type="submit" >Send</button>
			</form>
		</div>
	</div>
</section>



<?php include 'views/footer.php';?>