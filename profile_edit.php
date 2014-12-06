
<?php include 'views/header.php';?>


<!-- profile_edit e Page Content user edit their profile go Here -->
<section>
	<div class="row">
		<div class="column large-8 large-centered text-center panel">
			<h2>Edit Your Profile</h2>
			<form>
				<fieldset>
					<div class="alert-box alert">
						<!-- Error Alert -->
						This is an error message!
						<a href="#" class="close">&times;</a>
					</div>

					<label>
						<input type="text" placeholder="First Name" required/>
					</label>
					<label>
						<input type="text" placeholder="Last Name" required/>
					</label>
					<label>
						<input type="email" placeholder="Email Address" required/>
					</label>
					<label>
						<input type="password" placeholder="Password" required/>
					</label>
					<label>
						<input type="password" placeholder="Confirm Password" required/>
					</label>
					<label>
						<input type="text" placeholder="City" required/>
					</label>
					<label>
						<textarea placeholder="Please tell us a little bit about your self."></textarea>
					</label>
					
					<a href="profile.php" class="button secondary left">Cancel</a>
					<button type="submit" class="right">Update</button>
				</fieldset>
			</form>
		</div>
	</div>
</section>


<?php include 'views/footer.php';?>




