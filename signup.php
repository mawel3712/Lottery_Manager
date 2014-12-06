
<?php include 'views/header.php';?>





<!-- signup Page Content registration form to become a member go Here -->
<section>
	<div class="row">
		<div class="column large-8 large-centered text-center panel">
			<h2>Register for Lotto Generator</h2>
			<form>

				<div class="alert-box alert">
					<!-- Error Alert -->
					This is an error message!
					<a href="#" class="close">&times;</a>
				</div>

				<label>
					<input type="text" placeholder="First Name" required />
				</label>
				<label>
					<input type="text" placeholder="Last Name" required />
				</label>
				<label>
					<input type="email" placeholder="Email Address" required />
				</label>
				<label>
					<input type="password" placeholder="Password" required />
				</label>
				<label>
					<input type="text" placeholder="City" required />
				</label>
				
				<button type="submit" >Sign up</button>
			</form>
		</div>
	</div>
</section>




<?php include 'views/footer.php';?>




