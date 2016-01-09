//MAPS

function initMap() {
  var myLatLng = {lat: 66.543746, lng: 25.847221};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 10
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Pere Noel'
  });
}

// FORM

function traitementForm(){

  var prenom = $("#prenom").val();
  var nom = $("#nom").val();
  var email = $("#email").val();
  var demande = $("input[type='radio']:checked").val();
  var message = $("#message").val();

  alert("Merci pour ta " + demande + " " + prenom + ". Nous te répondrons à cette adresse :" + email);

  //Reinitialisation des champs
  $("form")[0].reset();
}
