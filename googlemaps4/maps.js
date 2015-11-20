	//variables for my points
	var als = new google.maps.LatLng(-36.856601, 174.762271);
	var flamingOnion = new google.maps.LatLng(-36.801600, 174.734391);
	var littleBird = new google.maps.LatLng(-36.851516, 174.744158); 
	var mimosa = new google.maps.LatLng(-36.789493, 174.772865);
	var birdWire = new google.maps.LatLng(-36.787364, 174.772351); 

	function initialize() { 
		var mapProp = {
			center: als,
			zoom: 10,
			mapTypeId: google.maps.MapTypeId.ROADMAP, //creates plain map scenario

		};
		map = new google.maps.Map(document.getElementById('googleMap'), mapProp); //puts map in the div

		var markerAls = new google.maps.Marker({
			position: als,
			title:'Click to zoom'
		});

		markerAls.setMap(map);


		var markerFlaming = new google.maps.Marker({
			position: flamingOnion,
			title:'Click to zoom'
		});

		markerFlaming.setMap(map);



		var markerLittleBird = new google.maps.Marker({
			position: littleBird,
			title:'Click to zoom'
		});

		markerLittleBird.setMap(map);

		

		var markerMimosa = new google.maps.Marker({
			position: mimosa,
			title:'Click to zoom'
		});

		markerMimosa.setMap(map);



		var markerBirdWire = new google.maps.Marker({
			position: birdWire,
			title:'Click to zoom'
		});

		markerBirdWire.setMap(map);


 //info windows
		var infoAls = {
			content: '<h3>Als Deli: Best Bagel Feasts</h3> <br> <p>This old-school diner has enormous shakes, delectable donuts, and the best bagels ever eaten by humankind.<br>GF available</p>'
		};
		var infoWindowOne = new google.maps.InfoWindow(infoAls);
		google.maps.event.addListener(markerAls,'click',function(e){
  
  		infoWindowOne.open(map, markerAls);
  
		});
		var infoFlaming = {
			content: "<h3>Flaming Onion: Best Gourmet Burgers</h3><br><p>Probably one of Auckland's best kept secrets, this place has the most delightful burgers to choose from, whether you are a picky or an adventurous eater<br>GF available</p>"
		};
		var infoWindowTwo = new google.maps.InfoWindow(infoFlaming);
		google.maps.event.addListener(markerFlaming,'click',function(e){
  
  		infoWindowTwo.open(map, markerFlaming); 
  	});
		var infoLittle = {
			content: '<h3>Little Bird Unbakery: Best Raw Vegan Cakes</h3><br><p>Little Bird is an all raw vegan cafe, and the highlight is their amazing selection of desserts in the cabinet.<b>All cabinet desserts GF and DF</p>' 
		};

		var infoWindowThree = new google.maps.InfoWindow(infoLittle);
		google.maps.event.addListener(markerLittleBird,'click',function(e){
  
  		infoWindowThree.open(map, markerLittleBird); 
  	});
		var infoMimosa = {
		content: '<h3>Mimosa: Best GF All-Rounders</h3><br><p>Mimosa is, first of all, adorable. But more importantly, Mimosa has an all GF selection of food, for breakfast and lunch, as well as GF and DF options for snacks, drinks and desserts.<br>All GF and DF available</p>'
	};
		var infoWindowFour = new google.maps.InfoWindow(infoMimosa);
		google.maps.event.addListener(markerMimosa,'click',function(e){
  
  		infoWindowFour.open(map, markerMimosa); 
  	});

		var infoBirdWire = {
			content: '<h3>Bird On A Wire: Best Guilt Free Takeaway</h3><br><p>Bird On A Wire is a free-range rotisserie chicken takeaway (or you can eat-in). Locations are in Ponsonby, CBD, and Takapuna. choose from a range of fresh salads or roast potatoes to go with your chosen amount of chicken, or alternatively go for a roast chicken sandwich.<br>GF and DF available</p>'
		};
		var infoWindowFive = new google.maps.InfoWindow(infoBirdWire);
		google.maps.event.addListener(markerBirdWire,'click',function(e){
  
  		infoWindowFive.open(map, markerBirdWire); 
  	});
}	
	google.maps.event.addDomListener(window, 'load', initialize); //creates a document ready scenario