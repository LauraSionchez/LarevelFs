var TableData = [];
var current_bar =1;
function loadFormStep() {

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

    var current ;
     current_bar =1;
    var next;
    var before;
    var steps = $("fieldset").length;

    setProgressBar(current_bar);


    $(".next-step").click(function () {

        current = $(this).parent();// fielset
        next = $(this).attr("data-step"); // id fielset
        

        continuar = current.find('input, select, textarea').valid();
        if(continuar == true){
            $("#progressbar li").removeClass( "current");
            $("#progressbar li[data-target='"+next+"']").addClass(["active", "current"]);
            current.fadeOut("fast", function (){
                $(next).fadeIn("fast");
            });
			console.log("next: "+current_bar);
            setProgressBar(++current_bar);

        }

    });

    $(".previous-step").click(function () {

        current = $(this).parent();
        before = $(this).attr("data-step");

        aux_li = $(this).attr("data-step").split("-");
        current_li  = aux_li[0]+"-"+(parseInt(aux_li[1], 10)+1);
        
        $("#progressbar li").removeClass("current");
        $("#progressbar li[data-target='"+before+"']").addClass("current");
        $("#progressbar li[data-target='"+current_li+"']").removeClass("active");
        
        current.fadeOut("fast", function (){
            $(before).fadeIn("fast");
        });
		console.log("pre: "+current_bar);
        setProgressBar(--current_bar);

    });

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
                .css("width", percent + "%")
    }

    $(".submit").click(function () {
        return false;
    });


    $("#progressbar li").on("click", function (){
        if ( $(this).hasClass("active") &&  !$(this).hasClass("current")  ){
            

            current_li      = $("#progressbar li.current");
            go_li           = $(this);
            current_fieldset= $($("#progressbar li.current").attr("data-target"));
            go_fieldset     = $($(this).attr("data-target"));

            num =  parseInt(go_li.attr("data-target").split("-")[1], 10);
            current_bar = num;

            $("#progressbar li").removeClass(["current", "active"]);
            go_li.addClass(["current"]);
            for(i=1; i<=num; i++){
                $("#progressbar li[data-target='#fieldset-"+i+"']").addClass("active");
            }

            current_fieldset.fadeOut("fast", function (){
                $(go_fieldset).fadeIn("fast");
            });


            setProgressBar(current_bar);

        }

    });
    

    $(".submit").click(function () {
        return false;
    })

}


const configUser = window.matchMedia('(prefers-color-scheme: dark)');
const localConfig = localStorage.getItem('tema');

$(function () {

	
	
    const boton = $('#switch');

    if (localConfig === 'dark') {
        // $('body').addClass('dark-theme');
        boton.addClass('active');

    } else if (localConfig === 'light') {
        // $('body').addClass('light-theme');
        boton.removeClass('active');

    }

    boton.on('click', function () {
        let colorTema;

        let css_theme;

        if ($("body").hasClass('dark-theme') && boton.hasClass('active')) {
            $('body').addClass('light-theme').removeClass('dark-theme');
            colorTema = 'light';
            css_theme = 'light-theme';
            theme_id = 1;


        } else {
            $('body').addClass('dark-theme').removeClass('light-theme');
            colorTema = 'dark';
            css_theme = 'dark-theme';
            theme_id = 2;
        }

        boton.toggleClass('active');

        $.get('theme/' + theme_id);

        localStorage.setItem('tema', colorTema);

    });




    $("a.menu-item").on('click', function (e) {
        e.preventDefault();
		/*
        $('main').html('Loading...');
        $("a.menu-item, #home").removeClass('current');
        $(".accordion-item").removeClass('in');
        $(this).addClass('current');
        $(this).parent().parent().parent('.accordion-item').addClass('in');
        loadingWait();
        $.get($(this).attr('href'), function (html) {
            $('main').html(html);
            applyFormats();
            ajaxLink();
            ajaxForm();
        }, 'html').fail(function () {
            Swal.close();
            alert('Error on AjAX');
        }).fail(function () {
            Swal.close();
        }).done(function () {
            Swal.close();
        });
		*/
    });

    $('.menu-bar').on('click', function () {
        $('.sidebar').toggleClass('hide');
        $('.main-content').toggleClass('large');
    });


});

function getMenuAction(obj, route){
	
	$('main').html('Loading...');
	$("a.menu-item, #home").removeClass('current');
	$(".accordion-item").removeClass('in');
	$(obj).addClass('current');
	$(obj).parent().parent().parent('.accordion-item').addClass('in');
	loadingWait();
	//$.get($(this).attr('href'), function (html) {
	$.get(route, function (html) {
		$('main').html(html);
		applyFormats();
		ajaxLink();
		ajaxForm();
	}, 'html').fail(function () {
		Swal.close();
		alert('Error on AjAX');
	}).fail(function () {
		Swal.close();
	}).done(function () {
		Swal.close();
	});
		
}

function ajaxLink() {
    $('main').find('a.link_ajax').on('click', function (e) {

        dataDataType = $(this).attr('data-dataType');

        e.preventDefault();
        if (dataDataType != null) {


            loadingWait();
            $.get($(this).attr('href'), function (html) {

                if (typeof (html) == "string") {
                    Swal.close();
                    $('main').html(html);
                    applyFormats();
                    ajaxLink();
                    ajaxForm();
                } else {
                    if (html.status == -1) {
                        alert(html.message);
                        document.location.reload();
                    } else {
                        if (html.status == 1) {
                            if (html.redirect != '') {
                                sendAjax(html.redirect);
                                /*
                                 $.get(html.redirect, function (html){
                                 //Swal.close();
                                 $("main").html('Loading...');
                                 $("main").html(html);
                                 applyFormats();
                                 
                                 
                                 ajaxLink();
                                 ajaxForm();
                                 }, 'html').fail(function (){ alert("Error")}).done(function (){ });
                                 */
                            }

                        }
                        Swal.fire({
                            html: html.message,
                            icon: html.type_message,
                            confirmButtonText: "Ok",
                            allowOutsideClick: false
                        });
                    }
                }
            }, dataDataType).fail(function () {
                //alert("Error");
                //Swal.close();
            }).done(function () { });
        } else {
            Swal.fire({
                html: 'wrong dataType',
                icon: 'error',
                confirmButtonText: "Ok",
                allowOutsideClick: false
            });
        }
    });
}


function sendAjax(url) {
    //$("main").html('Loading...');
    //loadingWait();
    $.get(url, function (response) {
        //Swal.close();
        //$('main').html('Loading...');
        $('main').html(response);

        applyFormats()
        ajaxLink();
        ajaxForm();
    }, 'html').fail(function () {
        alert('Error');
        Swal.close();
    });

}



function ajaxForm(tag) {
    tag = tag || "main";
    $(tag).find('form.validate').validate({

        errorPlacement: function (error, element) {
            $(element).parents('.form-group').append(error);
        },
        highlight: function (element, errorClass, validClass) {
            var elem = $(element);
            elem.parents('form').addClass("was-validated");
        },
        unhighlight: function (element, errorClass, validClass) {
            var elem = $(element);
            elem.parents('form').removeClass("was-validate");
        }
    });


    $(tag).find('form.validate').each(function (cont, obj) {
        DataType = $(obj).attr('data-dataType') || 'json';
        $(obj).ajaxForm({
            dataType: DataType,
            beforeSubmit: function (arr, Form, options) {
                if (Form.valid() == true) {
                    loadingWait();
                    return true;
                } else {
                    toastr.error(MSG_VALIDATION);
                    return false;
                }
            },
            complete: function () {
                //Swal.close();
            },
            error: function (response, status, err) {
                Swal.close();
                Swal.fire({
                    html: 'Error: ' + response.status,
                    icon: 'error',
                    confirmButtonText: "Ok",
                    allowOutsideClick: false
                }, function (){
                    window.location.reload();
                });
            },
            success: function (response, status, xhr) {
                if (DataType == 'json') {
                    if (response.status == -1) {
                        alert(response.message);
                        document.location.reload();
                    } else {
                        if (response.status == 1) {
                            if (response.redirect != '') {
                                Swal.fire({
                                    html: response.message,
                                    icon: response.type_message,
                                    confirmButtonText: "Ok",
                                    allowOutsideClick: false
                                });
                                sendAjax(response.redirect);
                                /*
                                 $.get(response.redirect, function (html){
                                 Swal.close();
                                 $('main').html('Loading...');
                                 $('main').html(html);
                                 
                                 applyFormats()
                                 ajaxLink();
                                 ajaxForm();
                                 
                                 
                                 }, 'html').fail(function (){ alert("Error")});
                                 */
                            } else {
                                Swal.close();
                                Swal.fire({
                                    html: response.message,
                                    icon: response.type_message,
                                    confirmButtonText: "Ok",
                                    allowOutsideClick: false
                                });
                                $(obj).not('.notClean').resetForm();
                                $('.dataTable').each(function(){
                                    $(this).dataTable().fnClearTable();
                                });
								
								if (response.call_function != 'undefined'){
									if (response.call_function != ''){
										eval(response.call_function);
									}	
								}
								
                            }
                        } else {

                            Swal.fire({
                                html: response.message,
                                icon: response.type_message,
                                confirmButtonText: "Ok",
                                allowOutsideClick: false
                            });
							
							if (response.call_function != 'undefined'){
								if (response.call_function != ''){
									eval(response.call_function);
								}	
							}
                        }
                    }
                } else {
                    Swal.close();

                    $(tag).html(response);

                    applyFormats();
                    ajaxLink();
                    ajaxForm();
                }
            }
        });
    });

}

function actToken(Token){
	$('[name=_token]').val(Token);
}


function applyFormats() {
    loadFormStep();
	
	TableData = [];
	
	$("table.dataTable").each(function (){
		PROPERTIES_DATATABLE = {responsive: true, language:{ url: URL_LANGUAJE_DATATABLE}};
		if (typeof ($(this).attr('data-pdatatable')) != 'undefined'){
			
			P = JSON.parse($(this).attr('data-pdatatable'));	
			for(i in P){
				PROPERTIES_DATATABLE[i]=P[i];
			}
		}
		
		TableData.push($(this).DataTable(PROPERTIES_DATATABLE));
		
	});
	/*
    $("table.dataTable").DataTable(
            {
                responsive: true,
                language: {
                    url: URL_LANGUAJE_DATATABLE
                }
   												  
            }
   
	

    );
	*/
    $("input[type=number]").on('input', function () {
        if ($(this).hasAttr('maxlength')) {
            if (this.value.length > this.maxLength) {
                this.value = this.value.slice(0, this.maxLength);
            }
        }
    });

    $("select.select2").select2();

    $('.alphanum').alphanum();
    $('.alpha').alpha();
    $('.number').numeric();



    $('.month').datepicker({
        format: 'mm',
        minViewMode: "months",
        autoclose: true,
        closeOnDateSelect: true,
    });
    $('.year').datepicker({
        format: 'yyyy',
        minViewMode: "years",
        autoclose: true,
        closeOnDateSelect: true,
    });
    $('.date_in').datepicker({
        format: 'dd/mm/yyyy',
        autoclose: true,
        closeOnDateSelect: true,
        endDate: new Date()
    });  

	$('.date_range').daterangepicker({
        maxDate         : new Date(),
        locale: {
            format      : 'DD/MM/YYYY',
            applyLabel  : rangepicker_apply,
            cancelLabel : rangepicker_cancel,
            daysOfWeek  : rangepicker_days,
            monthNames  : rangepicker_months,
        }
    });
      
    $('select.dependents').on('change', function () {

    })
    
    $('.email').inputmask("email");

    $('.maskmoney').maskMoney({thousands:'.', decimal:','});

    /*
     $('select.dependent').on('change', function  (){
     child = $( $(this).attr('data-child')  );
     child.children().not('[value=""]').remove();
     
     url_options = $(this).attr('data-url');
     if (this.value!=''){
     $.get(url_options+"/"+this.value, function (response){
     child.append(response);
     });	
     }
     });
     */


}

$.fn.hasAttr = function (name) {
    return this.attr(name) !== undefined;
};

function FullSerial(nr, n, str){
	n = n || 6;
	str = str || '0';
    return Array(n-String(nr).length+1).join(str||'0')+nr;
}

function checkPasswordStrength(password) {
    var number     = /([0-9])/;
    var upperCase  = /([A-Z])/;
    var lowerCase  = /([a-z])/;
    var specialCharacters = /([-,~,!,@,#,$,%,^,&,*,_,+,=,?,>,<,.])/;

    var characters     = (password.length >= 8 && password.length <= 15 );
    var capitalletters = password.match(upperCase) ? 1 : 0;
    var loweletters    = password.match(lowerCase) ? 1 : 0;
    var numbers        = password.match(number) ? 1 : 0;
    var special        = password.match(specialCharacters) ? 1 : 0;

    this.update_info('length', password.length >= 8 && password.length <= 15);
    this.update_info('capital', capitalletters);
    this.update_info('small', loweletters);
    this.update_info('number', numbers);
    this.update_info('special', special);

    var total = characters + capitalletters + loweletters + numbers + special;
    this.password_meter(total);
}

function update_info(criterion, isValid) {
    var $passwordCriteria = $('#passwordCriterion').find('li[data-criterion="' + criterion + '"]');
    if (isValid) {
        $passwordCriteria.removeClass('invalid').addClass('valid');
    } else {
        $passwordCriteria.removeClass('valid').addClass('invalid');
    }
}

function password_meter(total) {
    var meter = $('#password-strength-status');
    meter.removeClass();
    if (total === 0) {
        meter.html('');
    } else if (total === 1) {
        meter.addClass('veryweak-password').html(translation_msg.very_weak);
    } else if (total === 2) {
        meter.addClass('weak-password').html(translation_msg.weak);
    } else if (total === 3) {
        meter.addClass('medium-password').html(translation_msg.medium);
    } else if (total === 4) {
        meter.addClass('average-password').html(translation_msg.average);
    } else {
        meter.addClass('strong-password').html(translation_msg.strong);
    }
}

function passwordConfirmed(password, password2) {

    var confirmed = password == password2 ? 1 : 0;
    this.update_info2('confirmed', confirmed);

    var total = confirmed;
    this.password_meter2(total);
}

function update_info2(criterion, isValid) {
    var $passwordCriteria = $('#passwordCriterion2').find('li[data-criterion="' + criterion + '"]');
    if (isValid) {
        $passwordCriteria.removeClass('invalid').addClass('valid');
    } else {
        $passwordCriteria.removeClass('valid').addClass('invalid');
    }
}

function password_meter2(total) {
    var meter = $('#password-strength-status2');
    meter.removeClass();
    if (total === 0) {
        meter.addClass('veryweak-password').html(translation_msg.pass_not_match);
    }else {
        meter.addClass('strong-password').html(translation_msg.confirmed);
    }
}

function saveDate(f){
    f1 = f.split('/');
    return f1[2]+'-'+f1[1]+'-'+f1[0];
}
