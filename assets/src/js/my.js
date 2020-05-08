jQuery(document).ready(function($) {
	$('.phoneInput').inputmask("+7 (999) 999-99-99");


	$('.nextQst').click(function(event) {
		event.preventDefault();
		if ($(this).hasClass('desabled')) {return;}
		$(this).parents(".testFormItem").attr('hidden', true);
		$("#"+$(this).attr('href')).removeAttr('hidden');
	});

	$('#testForm input').click(function(event) {
		$(this).parents(".testFormItem").find('.desabled').removeClass('desabled');
	});

	$('#sidebarForm').validate({
	        rules: {
	            name: {
	                required: true,
	                maxlength: 100,
	            },
	            phone: {
	                required: true
	            },
	            policy: {
	                required: true
	            },
	            email: {
	                email: true
	            },
	        },
	        messages: {
	            name: {
	                required: "Поле обязательно для заполнения",
	                maxlength: "",
	            },
	            phone: {
	                required: "Поле обязательно для заполнения"
	            },
	            policy: {
	                required: "Примите условия"
	            },
	            email: {
	                email: "Неверный формат email"
	            },
	        },
	        errorClass: "uk-form-danger",
	        validClass: "uk-form-success",
	        submitHandler: function(form) {
	        	$.ajax({
	        		url: '/ajax.php',
	        		type: 'POST',
	        		dataType: 'json',
	        		data: $(form).serialize(),
	        	}).done(function(res) {
	        		if (res == "ok") {
	        			
	        			$.ajax({
	        				url: '/success.php',
	        				dataType: 'html',
	        			}).done(function(result) {
	        				UIkit.modal(result).toggle();
	        			});
	        			
	        		} else {
	        			console.log(res);
	        		}
	        	});
			}
	    }
	);

	$('#callMeForm').validate({
	        rules: {
	            name: {
	                required: true,
	                maxlength: 100,
	            },
	            phone: {
	                required: true
	            },
	            policy: {
	                required: true
	            },
	            email: {
	                email: true
	            },
	        },
	        messages: {
	            name: {
	                required: "Поле обязательно для заполнения",
	                maxlength: "",
	            },
	            phone: {
	                required: "Поле обязательно для заполнения"
	            },
	            policy: {
	                required: "Примите условия"
	            },
	            email: {
	                email: "Неверный формат email"
	            },
	        },
	        errorClass: "uk-form-danger",
	        validClass: "uk-form-success",
	        submitHandler: function(form) {
	        	$.ajax({
	        		url: '/ajax.php',
	        		type: 'POST',
	        		dataType: 'json',
	        		data: $(form).serialize(),
	        	}).done(function(res) {
	        		if (res == "ok") {
	        			
	        			$.ajax({
	        				url: '/success.php',
	        				dataType: 'html',
	        			}).done(function(result) {
	        				UIkit.modal(result).toggle();
	        			});
	        			
	        		} else {
	        			console.log(res);
	        		}
	        	});
			}
	    }
	);
	
	$('#footerFormForm').validate({
	        rules: {
	            name: {
	                required: true,
	                maxlength: 100,
	            },
	            phone: {
	                required: true
	            },
	            policy: {
	                required: true
	            },
	            email: {
	                email: true
	            },
	        },
	        messages: {
	            name: {
	                required: "Поле обязательно для заполнения",
	                maxlength: "",
	            },
	            phone: {
	                required: "Поле обязательно для заполнения"
	            },
	            policy: {
	                required: "Примите условия"
	            },
	            email: {
	                email: "Неверный формат email"
	            },
	        },
	        errorClass: "uk-form-danger",
	        validClass: "uk-form-success",
	        submitHandler: function(form) {
	        	$.ajax({
	        		url: '/ajax.php',
	        		type: 'POST',
	        		dataType: 'json',
	        		data: $(form).serialize(),
	        	}).done(function(res) {
	        		if (res == "ok") {
	        			
	        			$.ajax({
	        				url: '/success.php',
	        				dataType: 'html',
	        			}).done(function(result) {
	        				UIkit.modal(result).toggle();
	        			});
	        			
	        		} else {
	        			console.log(res);
	        		}
	        	});
			}
	    }
	);
	$('#testForm').validate({
	        rules: {
	            name: {
	                required: true,
	                maxlength: 100,
	            },
	            phone: {
	                required: true
	            },
	            policy: {
	                required: true
	            },
	            email: {
	                email: true
	            },
	        },
	        messages: {
	            name: {
	                required: "Поле обязательно для заполнения",
	                maxlength: "",
	            },
	            phone: {
	                required: "Поле обязательно для заполнения"
	            },
	            policy: {
	                required: "Примите условия"
	            },
	            email: {
	                email: "Неверный формат email"
	            },
	        },
	        errorClass: "uk-form-danger",
	        validClass: "uk-form-success",
	        submitHandler: function(form) {
	        	$.ajax({
	        		url: '/test.php',
	        		type: 'POST',
	        		dataType: 'json',
	        		data: $(form).serialize(),
	        	}).done(function(res) {
	        		if (res == "ok") {
	        			
	        			$.ajax({
	        				url: '/success.php',
	        				dataType: 'html',
	        			}).done(function(result) {
	        				UIkit.modal(result).toggle();
	        			});
	        			
	        		} else {
	        			console.log(res);
	        		}
	        	});
			}
	    }
	);
	$('#contactsForm').validate({
	        rules: {
	            name: {
	                required: true,
	                maxlength: 100,
	            },
	            phone: {
	                required: true
	            },
	            policy: {
	                required: true
	            },
	            email: {
	                email: true
	            },
	        },
	        messages: {
	            name: {
	                required: "Поле обязательно для заполнения",
	                maxlength: "",
	            },
	            phone: {
	                required: "Поле обязательно для заполнения"
	            },
	            policy: {
	                required: "Примите условия"
	            },
	            email: {
	                email: "Неверный формат email"
	            },
	        },
	        errorClass: "uk-form-danger",
	        validClass: "uk-form-success",
	        submitHandler: function(form) {
	        	$.ajax({
	        		url: '/ajax.php',
	        		type: 'POST',
	        		dataType: 'json',
	        		data: $(form).serialize(),
	        	}).done(function(res) {
	        		if (res == "ok") {
	        			
	        			$.ajax({
	        				url: '/success.php',
	        				dataType: 'html',
	        			}).done(function(result) {
	        				UIkit.modal(result).toggle();
	        			});
	        			
	        		} else {
	        			console.log(res);
	        		}
	        	});
			}
	    }
	);
	$('#crisysForm').validate({
	        rules: {
	            name: {
	                required: true,
	            },
	            phone: {
	                required: true
	            },
	            policy: {
	                required: true
	            },
	        },
	        messages: {
	            name: {
	                required: "Поле обязательно для заполнения",
	            },
	            phone: {
	                required: "Поле обязательно для заполнения"
	            },
	            policy: {
	                required: ""
	            },
	        },
	        errorClass: "uk-form-danger",
	        validClass: "uk-form-success",
	        submitHandler: function(form) {
	        	$.ajax({
	        		url: '/ajax.php',
	        		type: 'POST',
	        		dataType: 'json',
	        		data: $(form).serialize(),
	        	}).done(function(res) {
	        		if (res == "ok") {
	        			
	        			$.ajax({
	        				url: '/success.php',
	        				dataType: 'html',
	        			}).done(function(result) {
	        				UIkit.modal(result).toggle();
	        			});
	        			
	        		} else {
	        			console.log(res);
	        		}
	        	});
			}
	    }
	);

	if ($(window).width() < 640) {
		$('#testModal').addClass('uk-modal-full');
	};

	$(window).scroll(function() {
		if ($(this).scrollTop() != 0) {
			$('.uk-totop').fadeIn();
		} else {
			$('.uk-totop').fadeOut();
		}
	});

	$('.servWrap')
	.on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
	  		relX = e.pageX - parentOffset.left,
	  		relY = e.pageY - parentOffset.top;
			$(this).find('.bgHover').css({top:relY, left:relX})
	})
	.on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
	  		relX = e.pageX - parentOffset.left,
	  		relY = e.pageY - parentOffset.top;
		$(this).find('.bgHover').css({top:relY, left:relX})
	});

	$('.modalFormTrigger').click(function(event) {
		event.preventDefault();

		var title = $(this).data("title") ? $(this).data("title") : $(this).text();
		$('.callMeTitle').text(title);
		$('#callMeTheme').val($(this).data("theme"));
		UIkit.modal($(this).data("target")).show();
	});
	
	if($('#instagramWrap').length > 0) {
		var name = "instagramWrap";
		$.get("https://www.instagram.com/unkleweb/", function(html) {
			if (html) {
				var regex = /_sharedData = ({.*);<\/script>/m,
					json = JSON.parse(regex.exec(html)[1]),
					edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges;

				$.each(edges.slice(0, 6), function(n, edge) {
					var node = edge.node;
					var elem = '<div><a href="https://instagr.am/p/'+node.shortcode+'" class="uk-inline"><img src="#" alt="" data-uk-img="" data-src="'+node.thumbnail_src+'" data-width="" data-height></a></div>'
					$('#instagramWrap').append(elem);
				});
			}
		});
	}

	function heightFun() {
		var hDescr = 0,
			hWho = 0,
			hInclude = 0,
			hTitle = 0;
		$('.targetingPrice.seoPrice .descr').removeAttr('style');
		$('.targetingPrice.seoPrice .forWho').removeAttr('style');
		$('.targetingPrice.seoPrice .include').removeAttr('style');
		$('.targetingPrice.seoPrice .title').removeAttr('style');
		$('.targetingPrice.seoPrice').each(function() {
			if ($(this).find('.descr').height() > hDescr) {
				hDescr = $(this).find('.descr').height();
			}
			if ($(this).find('.forWho').height() > hWho) {
				hWho = $(this).find('.forWho').height();
			}
			if ($(this).find('.include').height() > hInclude) {
				hInclude = $(this).find('.include').height();
			}
			if ($(this).find('.title').height() > hTitle) {
				hTitle = $(this).find('.title').height();
			}
		});
		$('.targetingPrice.seoPrice .descr').height(hDescr + 20);
		$('.targetingPrice.seoPrice .forWho').height(hWho + 20);
		$('.targetingPrice.seoPrice .include').height(hInclude + 20);
		$('.targetingPrice.seoPrice .title').height(hTitle);
	}
	if ($(window).width() > 640) {
		setTimeout(heightFun, 500);

		$(window).resize(heightFun);
		
	}

	$(document).on('click', '.showHidden', function(event) {
		event.preventDefault();
		($(this).find(".text").text() === 'Развернуть') ? $(this).find(".text").text('Скрыть') : $(this).find(".text").text('Развернуть');
		$(this).parent().find('.expandHidden').toggle();
	});
});