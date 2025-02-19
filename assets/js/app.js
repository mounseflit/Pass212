$(function() {
	$('.contentCaptcha').load("/captcha"); 
	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#subject').val('');
			$('#numbar').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});
	$('body').off('submit', '.form_send_mail');
	$('body').on('submit', '.form_send_mail', function(event){ 
		var data = $(this).serialize();
		var thisS = $(this);
		var thisUrl = $(this).attr('action');
        $.ajax({
            type: 'post',
            url: thisUrl,
            data: data,
            success : function (json) {  
				// thisS.children('.tenor').show();
				// var json = JSON.parse(data);
				if(json === 'no'){
					$(".alert").css("background-color","#e1253791");
                	$(".msgAlert").text("Captcha Incorrect");
					$(".alert").show();  
					setTimeout(function() { $(".alert").hide(); }, 7000);
				}else if(json == 'ok'){
					document.getElementById("name").value = "";
					document.getElementById("fonction").value = "";
					document.getElementById("message").value = "";
					document.getElementById("entreprise").value = "";
					$("#objet").selectedIndex = -1;
					setTimeout(function(){
						$.confirm({
							title: 'Succès!',
							content: 'Votre email a été envoyé avec succès',
							type: 'green',
							typeAnimated: true,
							buttons: {
								close: function () {
								}
							}
						});
					}, 1000);
					$('.modal').modal('hide');
				}else{
					// $('.modal').modal('hide');
					setTimeout(function(){ 
						$.confirm({
							title: 'Error!',
							content: 'l\'email n\'a pas été envoyé, Svp essayez une autre fois',
							type: 'red',
							typeAnimated: true,
							buttons: {
								close: function () {
								}
							}
						});

					}, 1000);
				}
            } 
		});
		
		event.preventDefault();

	});

	$(window).scroll(function(){
		$('.enofpost').each(function(){
			if(isScrolledIntoView($(this))){
				number = $(this).data("number");
				media = $("#loadMorePost").data("media");

				$.ajax({
					type: 'post',
					url: '/presse/'+number,
					data: 'number='+number+'&media='+media,
					success : function (data) {
						$('#loadMorePost').html(data);
					} 
				});

			}
		});
	});

	function isScrolledIntoView(elem){
		var $elem = $(elem);
		var $window = $(window);
	
		var docViewTop = $window.scrollTop();
		var docViewBottom = docViewTop + $window.height();
	
		var elemTop = $elem.offset().top;
		var elemBottom = elemTop + $elem.height();
	
		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}


	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = window.location.search.substring(1),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;
	
		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');
	
			if (sParameterName[0] === sParam) {
				return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
			}
		}
		return false;
	};

	var languageParam = getUrlParameter('language');
	if(languageParam){
		$('a').each(function(){
			var HREF = $(this).attr('href');
			if(HREF.indexOf("language") > -1){
			}else{
				$(this).attr('href', HREF + '?language='+languageParam);
			}
		});
	}

	$('body').off('click', '.modal-flip');
    $('body').on('click', '.modal-flip', function(e){
		e.preventDefault(); 
    var href = $(this).attr("data-href") ;
    $('#ModalFlip').find("iframe").attr("src",href);
    $('#ModalFlip').modal('show');

	});

	
	$("#search-close").on("click",function(){
		$("#search-full-view").hide("slow");
	 });

});