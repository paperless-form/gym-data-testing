
// Resize background
if($('.bgSquare:visible').length>0){
    var element = document.getElementById('entry-form');
    new ResizeSensor(element, function() {
        updateHeight(element.clientHeight);
    });
}
function updateHeight(h)
{
    h=h-261
    $('.bgSquare').animate({height:h},5);
}

// Form Validate
function validate(){
    var valid = true;
    $('input, select, .select2-selection').removeClass('danger')
    $(".alert-danger").remove();
    $(".required:visible, .mandatory:visible").each(function () {
        if ($(this).val() == "" || $(this).val() == null || ($(this).attr('type')=="checkbox" && !$(this).is(":checked"))) {
            $(this).closest("div").append('<div class="alert-danger ps-1">This field is required</div>');
            $(this).addClass('danger')
            valid = false;
        }                
    });
    $(".email:visible").each(function(){
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
        email_check =  emailReg.test($(this).val())
        if(email_check == false)
        {
            $(this).closest("div").append('<div class="alert-danger ps-1">Invalid email format</div>');
            $(this).addClass('danger')
            valid = false;
        }
    })
     
    if (!valid) {
        $("html, body").animate(
            {
                scrollTop: $(".alert-danger:first").offset().top-80,
            },
            100
        );
    }
    return valid;
}