function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser (response) {
	console.log('changeuser response is');
	console.log(response.picture.data);
	document.getElementsByClassName('facebookLogin')[0].style.visibility = 
		'hidden';
	document.getElementsByClassName('facebookLogin')[1].style.display = 
		'none';
	document.getElementById('name').innerHTML = response.name;
	console.log(response.picture)
	document.getElementById('photo').src = 
		response.picture.data.url
	}

