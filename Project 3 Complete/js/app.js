//jQuery method for focus on the first text bar,
//if another text bar is added above it would focus on that which seems preferred
//jQuery code goes here

$("input:text:visible:first").focus();

$("#cf_1268591").attr("readonly", "readonly");

$(document).ready(function() {
  $("#credit_card").prop("selected", true);
});

$(document).ready(function() {
  $("#other_field")
    .attr("selected", false)
    .attr("hidden", true);
});

//Hides the other field until other is selected, this method displays the field if JS is disabled
$("#title").change(function() {
  if (this.value == "other") {
    $("#other_field")
      .attr("selected", true)
      .attr("hidden", false);
  } else {
    $("#other_field")
      .attr("selected", false)
      .attr("hidden", true);
  }
});

// original code pulled from Unit-3 Slack user 'maryrobinrose' March 22nd post
//Code was refactored with IDs added to HTML, last statement changed so
//new else if' added to show full list when theme chosen

$("#design").change(function() {
  if (this.value == "js puns") {
    $(".pun")
      .attr("selected", true)
      .attr("hidden", false);
    $(".love")
      .attr("selected", false)
      .attr("hidden", true);
  } else if (this.value == "heart js") {
    $(".pun")
      .attr("selected", false)
      .attr("hidden", true);
    $(".love")
      .attr("selected", true)
      .attr("hidden", false);
  } else if (this.value == "select theme") {
    $(".pun")
      .attr("selected", true)
      .attr("hidden", false);
    $(".love")
      .attr("selected", true)
      .attr("hidden", false);
  }
});
//Used to create total and add as boxes are checked.
//howdy and yall exist to see if button clicks are being logged for future functionality
$("input:checkbox").change(function() {
  var total = 0;
  $("input:checkbox:checked").each(function() {
    total += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
  });

  $("#total").val(total);
});

$("#all").click(function() {
  var thisCheck = $(this);
  if (thisCheck.is(":checked")) {
    console.log("howdy");
  } else if (thisCheck.attr("checked", false)) {
    console.log("yall");
  }
});
$("#js-frameworks").click(function() {
  var thisCheck = $(this);
  if (thisCheck.is(":checked")) {
    $("#express").attr("disabled", "disabled");
  } else if (thisCheck.attr("checked", false)) {
    $("#express").removeAttr("disabled");
  }
});
$("#js-libs").click(function() {
  var thisCheck = $(this);
  if (thisCheck.is(":checked")) {
    $("#node").attr("disabled", "disabled");
  } else if (thisCheck.attr("checked", false)) {
    $("#node").removeAttr("disabled");
  }
});
$("#express").click(function() {
  var thisCheck = $(this);
  if (thisCheck.is(":checked")) {
    $("#js-frameworks").attr("disabled", "disabled");
  } else if (thisCheck.attr("checked", false)) {
    $("#js-frameworks").removeAttr("disabled");
  }
});
$("#node").click(function() {
  var thisCheck = $(this);
  if (thisCheck.is(":checked")) {
    $("#js-libs").attr("disabled", "disabled");
  } else if (thisCheck.attr("checked", false)) {
    $("#js-libs").removeAttr("disabled");
  }
});
$("#build-tools").click(function() {
  var thisCheck = $(this);
  if (thisCheck.is(":checked")) {
    console.log("howdy");
  } else if (thisCheck.attr("checked", false)) {
    console.log("yall");
  }
});
$("#npm").click(function() {
  var thisCheck = $(this);
  if (thisCheck.is(":checked")) {
    console.log("howdy");
  } else if (thisCheck.attr("checked", false)) {
    console.log("yall");
  }
});
//At docuement load, hide Paypal and Bitcoin as Credit card is the most likely cchoice for payment
//Then, unhide relevant payment methods when selected, all can be seen with JS disabled
$(document).ready(function() {
  $(".Paypal")
    .attr("selected", false)
    .attr("hidden", true);
  $(".Bitcoin")
    .attr("selected", false)
    .attr("hidden", true);
});

$("#payment").change(function() {
  if (this.value == "credit card") {
    $(".credit-card")
      .attr("selected", true)
      .attr("hidden", false);
    $(".Paypal")
      .attr("selected", false)
      .attr("hidden", true);
    $(".Bitcoin")
      .attr("selected", false)
      .attr("hidden", true);
  } else if (this.value == "paypal") {
    $(".Paypal")
      .attr("selected", true)
      .attr("hidden", false);
    $(".Bitcoin")
      .attr("selected", false)
      .attr("hidden", true);
    $(".credit-card")
      .attr("selected", false)
      .attr("hidden", true);
  } else if (this.value == "bitcoin") {
    $(".Bitcoin")
      .attr("selected", true)
      .attr("hidden", false);
    $(".Paypal")
      .attr("selected", false)
      .attr("hidden", true);
    $(".credit-card")
      .attr("selected", false)
      .attr("hidden", true);
  }
});

$("input:checkbox").change(function() {
  var total = 0;
  $("input:checkbox:checked").each(function() {
    total += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
  });

  $("#total").val(total);
});
//Name can literally anything, not judging
function validateName() {
  var input = $("#contact_name");
  var isName = input.val();
  if (isName) {
    input.removeClass("invalid").addClass("valid");
    return true;
  } else {
    input.removeClass("valid").addClass("invalid");
    return false;
  }
}
$("#contact_name").on("input", validateName);

// Email must be an email
function validateEmail() {
  var input = $("#contact_email");
  var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var isEmail = re.test(input.val());
  if (isEmail) {
    input.removeClass("invalid").addClass("valid");
    return true;
  } else {
    input.removeClass("valid").addClass("invalid");
    return false;
  }
}

//checkbox must have something checked
function validateCheckBox() {
  var input = $(":checkbox");
  var output = $("#makeMeRed");
  if ($("#contact input:checkbox:checked").length > 0) {
    return true;
  } else {
    output.addClass("red");
    return false;
  }
}

$("#contact_email").on("input", validateEmail);

function paymentInfoNotRequired() {
  return (
    $("#payment option:selected").text() === "PayPal" ||
    $("#payment option:selected").text() === "Bitcoin"
  );
}
// must be valid cc number
function validateCreditCard() {
  var input = $("#contact_cc-num");
  var re = /[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4}/;
  var is_ccnum = re.test(input.val());
  console.log($("#payment option:selected").text());
  if (is_ccnum || paymentInfoNotRequired()) {
    input.removeClass("invalid").addClass("valid");
    return true;
  } else {
    input.removeClass("valid").addClass("invalid");
    return false;
  }
}
$("#contact_cc-num").on("input", validateCreditCard);
// must be valid zip code
function validateZipCode() {
  var input = $("#contact_zip");
  var re = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
  var is_zip = re.test(input.val());
  if (is_zip || paymentInfoNotRequired()) {
    input.removeClass("invalid").addClass("valid");
    return true;
  } else {
    input.removeClass("valid").addClass("invalid");
    return false;
  }
}
$("#contact_zip").on("input", validateZipCode);

// must be valid cvv
function validateCvv() {
  var input = $("#contact_cvv");
  var re = /^[0-9]{3,4}$/;
  var is_cvv = re.test(input.val());
  if (is_cvv || paymentInfoNotRequired()) {
    input.removeClass("invalid").addClass("valid");
    return true;
  } else {
    input.removeClass("valid").addClass("invalid");
    return false;
  }
}
$("#contact_cvv").on("input", validateCvv);

/*function notCC() {
  if ($("#paypal option: selected") || $("#bitcoin option: selected")) 
  $("#payment").change(function(event) {
    console.log("not a cc");
    $("#contact_cc-num")
      .removeClass("invalid")
      .addClass("valid");
    $("#contact_zip")
      .removeClass("invalid")
      .addClass("valid");
    $("#contact_cvv")
      .removeClass("invalid")
      .addClass("valid");
  })*/

//Function
$("#contact_submit button").click(function(event) {
  var isValidName = validateName();
  var isValidEmail = validateEmail();
  var isValidCreditCard = validateCreditCard();
  var isValidZipCode = validateZipCode();
  var isValidCvv = validateCvv();
  var isValidCheckBox = validateCheckBox();
  /*notCC();*/
  console.log(
    isValidName,
    isValidEmail,
    isValidCreditCard,
    isValidZipCode,
    isValidCvv,
    isValidCheckBox
  );
  if (
    !isValidName ||
    !isValidEmail ||
    !isValidCreditCard ||
    !isValidZipCode ||
    !isValidCvv ||
    !isValidCheckBox
  ) {
    event.preventDefault();
  }
});

/////////////////////////////////////////////RegEx Graveyard for Later Pop-Ups///////////////////////////////////////////////////////////////

// function validateEmail($email) {
//   var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//   return emailReg.test( $email );
// }

// $(document).ready(function(){
//   $("#go").click(function(){
//        var nameReg=/^[a-zA-Z ]$/;
//        var emailReg=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//        var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
//        var name = $('#name').val(),
//            mail = $('#mail').val();

//        var errors=false;
//       if(name == '' ||  !nameReg.test(name)){
//         $(this).css('border', '2px solid red');
//         e.preventDefault();
//       }
//       if(mail == '' || !emailReg.test(mail)){
//           $('#mail').after('<span class="errors">missing mail</span>');
//           errors=true;
//       }
//       if(credit-card == '' || !visaRegEx.test(credit-card)){
//         $('#credit-card').after('<span class="errors">missing mail</span>');
//         errors=true;
//       }
//       if($('#pwd').val()==''){
//           $('#pwd').after('<span class="errors">missing password</span>');
//           errors=true;
//       }
//       if($('#addr1').val()==''){
//           $('#addr1').after('<span class="errors">missing address</span>');
//           errors=true;
//       }
//       if($('#addr2').val()==''){
//           $('#addr2').after('<span class="errors">missing address</span>');
//           errors=true;
//       }
//       if(errors==true){
//           return false;
//       }else{
//           return true;
//       }
//   }); });

// const emailInput = document.getElementById("mail");
// const creditCardInput = document.getElementById("cc-num");

// emailInput.addEventListener("input", createListener(isValidEmail));

// creditCardInput.addEventListener("input", createListener(isValidTelephone));

// function isValidEmail(email) {
//   return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);

// }

// function isValidTelephone(telephone) {
//   return /^\(\d{3}\)\s\d{3}-\d{4}$/.test(telephone);
// }

// function showOrHideTip(show, element) {
//   // show element when show is true, hide when false
//   if (show) {
//     element.style.display = "inherit";
//   } else {
//     element.style.display = "none";
//   }
// }

// function createListener(validator) {
//   return e => {
//     const text = e.target.value;
//     const valid = validator(text);
//     const showTip = text !== "" && !valid;
//     const tooltip = e.target.nextElementSibling;
//     showOrHideTip(showTip, tooltip);
//   };
// }

// $(function() {
//   $(':submit').click(function(e) {
//           $(':text, textarea').each(function() {
//                   if ($(this).val().length == 0) {
//                           $(this).css('border', '2px solid red');
//                           e.preventDefault();
//                   }
//           });
//   });
// });

// wrap all event in button
// $("#contact_submit button").click(function(event) {
//   var form_data = $("#contact").each();
//   var error_free = true;
//   for (var input in form_data) {
//     var valid = element.hasClass("valid");
//     var error_element = $("span", element.parent());
//     if (!valid) {
//       error_element.removeClass("error").addClass("error_show");
//       error_free = false;
//     } else {
//       error_element.removeClass("error_show").addClass("error");
//     }
//   }
//   if (!error_free) {
//     event.preventDefault();
//     console.log('free');
//     alert("Please fill out all fields");
//   } else {
//     alert("No errors: Form will be submitted");
//   }
// });
