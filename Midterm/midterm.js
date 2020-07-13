function setInformationCookie() {
    var sal = document.getElementById("salutation");
    var Salutation = sal.options[sal.selectedIndex].text;
    setCookie("salutation", Salutation, 1);

    var fname = document.getElementById("fname").value;
    setCookie("fname", fname, 1);
    document.getElementById("fname").value = getCookie("fname");

    var lname = document.getElementById("lname").value;
    setCookie("lname", lname, 1);
    document.getElementById("lname").value = getCookie("lname");

    var pnumber = document.getElementById("number").value;
    setCookie("number", pnumber, 1);
    document.getElementById("number").value = getCookie("number");

    var email = document.getElementById("email").value;
    setCookie("email", email, 1);
    document.getElementById("email").value = getCookie("email");

    var todaysDate = 0;
    todaysDate = new Date();
    var option = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    //setCookie("dtfield", todaysDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }), 1);
    setCookie("dtfield", todaysDate.toLocaleString('en-US', option), 1);
    // setCookie("dtfield", todaysDate,1);
    // document.getElementById("dtfield").value = getCookie("dtfield");





}

function sanitizeHours(date) {
    var h = date.getHours();
    var m = date.getMinutes();
    var daytime = h >= 12 ? 'pm' : 'am';
    h = h % 12;
    h = h ? h : 12; // the hour '0' should be '12'
    m = m < 10 ? '0' + m : m;
    var strTime = h + ':' + m + ' ' + daytime;
    return strTime;
}


/*
 * http://www.w3schools.com/js/js_cookies.asp
 */
function setCookie(cookieName, cookieValue, length) {
    var date = new Date();
    date.setTime(date.getTime() + (length * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toGMTString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

/*
 * http://www.w3schools.com/js/js_cookies.asp
 */
function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);

    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function welcome() {
    var message = getCookie("fname") + " " + getCookie("lname");
    document.getElementById("lname").innerHTML = message;
}

function welcomepage3() {

    var message = getCookie("salutation") + ". " + getCookie("fname") + ", your visit started on " + getCookie("dtfield").substr(8, 7) + " at " + getCookie("dtfield").substr(23, 28);
    /*     var message =  getCookie("salutation") + " " + getCookie("fname") + ", your visit started on " + months[getCookie("dtfield").getMonth()] + ", " + getCookie("dtfield").getDate() + " at " + sanitizeHours(getCookie("dtfield"));*/

    document.getElementById("date").innerHTML = message;
}




// Convert
function convertToMillimetres(val) {
    var mm = parseFloat(0);
    mm = val * 25.4;

    document.getElementById("mm").value = mm.toFixed(2);

}

function convertToInch(val) {
    // conversts imperial amount 'val' into cms
    var inch = parseFloat(0);
    inch = val / 25.4;

    document.getElementById("inch").value = inch.toFixed(2);
    document.getElementById("mm").value = null;
    document.getElementById("Celsius").value = null;
    document.getElementById("Fahrenheit").value = null;
    document.getElementById("cm").value = null;
    document.getElementById("squareInch").value = null;
    document.getElementById("KILOMETRE").value = null;
    document.getElementById("MILES ").value = null;
    document.getElementById("litres").value = null;
    document.getElementById("gallon").value = null;
    document.getElementById("grain").value = null;

}

function convertToCelsius(val) {
    var celsius = parseFloat(0);
    celsius = (val - 32) / 1.8;

    document.getElementById("Celsius").value = celsius.toFixed(2);
     document.getElementById("inch").value = null;
    document.getElementById("mm").value = null;
    document.getElementById("Fahrenheit").value = null;
    document.getElementById("cm").value = null;
    document.getElementById("squareInch").value = null;
    document.getElementById("KILOMETRE").value = null;
    document.getElementById("MILES ").value = null;
    document.getElementById("litres").value = null;
    document.getElementById("gallon").value = null;
    document.getElementById("grain").value = null;




}

function convertToFahrenheit(val) {
    var Fahrenheit = parseFloat(0);
    Fahrenheit = (val * 1.8) + 32;

    document.getElementById("Fahrenheit").value = Fahrenheit;
    document.getElementById("Celsius").value  = null;
     document.getElementById("inch").value = null;
    document.getElementById("mm").value = null;
    document.getElementById("cm").value = null;
    document.getElementById("squareInch").value = null;
    document.getElementById("KILOMETRE").value = null;
    document.getElementById("MILES ").value = null;
    document.getElementById("litres").value = null;
    document.getElementById("gallon").value = null;
    document.getElementById("grain").value = null;


}

function convertToCm(val) {
    var cm = parseFloat(0);
    cm = val * 6.4516;

    document.getElementById("cm").value = cm.toFixed(2);
     document.getElementById("Fahrenheit").value = null;
    document.getElementById("Celsius").value  = null;
     document.getElementById("inch").value = null;
    document.getElementById("mm").value = null;
   
    document.getElementById("squareInch").value = null;
    document.getElementById("KILOMETRE").value = null;
    document.getElementById("MILES ").value = null;
    document.getElementById("litres").value = null;
    document.getElementById("gallon").value = null;
    document.getElementById("grain").value = null;




}

function convertToInch_AREA(val) {
    var squareInch = parseFloat(0);
    squareInch = val / 6.4516;

    document.getElementById("squareInch").value = squareInch.toFixed(2);
    
    document.getElementById("cm").value = null;
     document.getElementById("Fahrenheit").value = null;
    document.getElementById("Celsius").value  = null;
     document.getElementById("inch").value = null;
    document.getElementById("mm").value = null;
   
   
    document.getElementById("KILOMETRE").value = null;
    document.getElementById("MILES ").value = null;
    document.getElementById("litres").value = null;
    document.getElementById("gallon").value = null;
    document.getElementById("grain").value = null;





}


function convertToKILOMETRE(val) {
    var KILOMETRE = parseFloat(0);
    KILOMETRE = val * 1.60934;

    document.getElementById("KILOMETRE").value = KILOMETRE.toFixed(2);
     document.getElementById("squareInch").value = null;
    
    document.getElementById("cm").value = null;
     document.getElementById("Fahrenheit").value = null;
    document.getElementById("Celsius").value  = null;
     document.getElementById("inch").value = null;
    document.getElementById("mm").value = null;
   
   
   
    document.getElementById("MILES ").value = null;
    document.getElementById("litres").value = null;
    document.getElementById("gallon").value = null;
    document.getElementById("grain").value = null;




}

function convertToMILES(val) {
    var MILES = parseFloat(0);
    MILES = val / 1.60934;

    document.getElementById("MILES ").value = MILES.toFixed(2);
    document.getElementById("KILOMETRE").value = null;
     document.getElementById("squareInch").value = null;
    
    document.getElementById("cm").value = null;
     document.getElementById("Fahrenheit").value = null;
    document.getElementById("Celsius").value  = null;
     document.getElementById("inch").value = null;
    document.getElementById("mm").value = null;
   
   
   
    
    document.getElementById("litres").value = null;
    document.getElementById("gallon").value = null;
    document.getElementById("grain").value = null;



}

function convertTolitres(val) {
    var litres = parseFloat(0);
    litres = val * 3.785;

    document.getElementById("litres").value = litres.toFixed(2);
     document.getElementById("MILES ").value = null;
    document.getElementById("KILOMETRE").value = null;
     document.getElementById("squareInch").value = null;
    
    document.getElementById("cm").value = null;
     document.getElementById("Fahrenheit").value = null;
    document.getElementById("Celsius").value  = null;
     document.getElementById("inch").value = null;
    document.getElementById("mm").value = null;
   
   
   
    
   
    document.getElementById("gallon").value = null;
    document.getElementById("grain").value = null;



}

function convertTogallon(val) {
    var gallon = parseFloat(0);
    gallon = val / 3.785;

    document.getElementById("gallon").value = gallon.toFixed(2);
    document.getElementById("litres").value = null;
     document.getElementById("MILES ").value = null;
    document.getElementById("KILOMETRE").value = null;
     document.getElementById("squareInch").value = null;
    
    document.getElementById("cm").value = null;
     document.getElementById("Fahrenheit").value = null;
    document.getElementById("Celsius").value  = null;
     document.getElementById("inch").value = null;
    document.getElementById("mm").value = null;
   
   
   
    
   
  
    document.getElementById("grain").value = null;



}

function convertToGram(val) {
    var gram = parseFloat(0);
    gram = val * 0.065;

    document.getElementById("gram").value = gram.toFixed(2);
     document.getElementById("gallon").value = null;
    document.getElementById("litres").value = null;
     document.getElementById("MILES ").value = null;
    document.getElementById("KILOMETRE").value = null;
     document.getElementById("squareInch").value = null;
    
    document.getElementById("cm").value = null;
     document.getElementById("Fahrenheit").value = null;
    document.getElementById("Celsius").value  = null;
     document.getElementById("inch").value = null;
    document.getElementById("mm").value = null;
   
   
   
    
   
  


}

function convertToGrain(val) {
    var grain = parseFloat(0);
    grain = val / 0.065;

    document.getElementById("grain").value = grain.toFixed(2);


}




/**
 *https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_length_converter_feet_to_meters
 */
/*
function convertToMetric(val) {
    // conversts imperial amount 'val' into cms
    var inch = parseFloat(0);
    inch = val * 25.4;
    
    // push back into metric value
    document.getElementById("inch").value = inch.toFixed(2);
    
    // change the background colours
    document.getElementById("inch").setAttribute("class", "output");
    document.getElementById("mm").setAttribute("class", "input");
    
}

function convertToImperial(val) {
    // conversts imperial amount 'val' into cms
    var mm = parseFloat(0);
    mm = val /25.4;
    
    // push back into metric value
    document.getElementById("mm").value = feet.toFixed(2);
    
    // change the background colours
    document.getElementById("mm").setAttribute("class", "output");
    document.getElementById("inch").setAttribute("class", "input");
    
}
*/
function InchtoMmConverter(valNum) {
    document.getElementById("outputMeters1").innerHTML = (valNum * 25.4).toFixed(2);
}

function MmtoInchConverter(valNum) {
    document.getElementById("outputMeters2").innerHTML = (valNum / 25.4).toFixed(2);
}


function getValueOfCheckbox(name) {
    extras = "";
    var checkbox = document.getElementsByName(name);
    var total = 0;

    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == true) {
            if (extras.length > 0) {
                extras += ",";
            }

            extras = extras + checkbox[i].id;
            total = total + parseFloat(checkbox[i].value);
        }
    }
    return total;

}


function getInforCookie() {

    document.getElementById("ofname").value = getCookie("fname");
    document.getElementById("olname").value = getCookie("lname");
    document.getElementById("onumber").value = getCookie("number");
    document.getElementById("oemail").value = getCookie("email");
}




function vadidateOrder() {

    if (document.getElementById("Full").checked == true) {
        document.getElementById("tiers1/4").style.display = "none";
        document.getElementById("lb1/4").style.display = "none";

        document.getElementById("radius").style.display = "none";
        document.getElementById("lbradius").style.display = "none";

        document.getElementById("tiers1/2").style.display = "block"
        document.getElementById("lb1/2").style.display = "block"

        document.getElementById("width").style.display = "block";
        document.getElementById("lbwidth").style.display = "block";

        document.getElementById("length").style.display = "block";
        document.getElementById("lblength").style.display = "block";

        if (document.getElementById("tiers1/2").checked == true) {
            document.getElementById("tiers1/4").style.display = "block";
            document.getElementById("lb1/4").style.display = "block";

            document.getElementById("width").style.display = "block";
            document.getElementById("lbwidth").style.display = "block";

            document.getElementById("length").style.display = "block";
            document.getElementById("lblength").style.display = "block";
        }
    }


    if (document.getElementById("half").checked == true) {

        document.getElementById("tiers1/2").disable == true;
        //document.getElementById("tiers1/2").style.display = "none";
        document.getElementById("lb1/2").style.display = "none";

        document.getElementById("radius").style.display = "none";
        document.getElementById("lbradius").style.display = "none";

        document.getElementById("tiers1/4").style.display = "block";
        document.getElementById("lb1/4").style.display = "block";

        document.getElementById("width").style.display = "block";
        document.getElementById("lbwidth").style.display = "block";

        document.getElementById("length").style.display = "block";
        document.getElementById("lblength").style.display = "block";

    }


    if (document.getElementById("quater").checked == true) {
        document.getElementById("tiers1/2").style.display = "none";
        document.getElementById("lb1/2").style.display = "none";

        document.getElementById("tiers1/4").style.display = "none";
        document.getElementById("lb1/4").style.display = "none";

        document.getElementById("radius").style.display = "none";
        document.getElementById("lbradius").style.display = "none";

        document.getElementById("width").style.display = "block";
        document.getElementById("lbwidth").style.display = "block";

        document.getElementById("length").style.display = "block";
        document.getElementById("lblength").style.display = "block";

    }




    if (document.getElementById("Cylin").checked == true) {
        document.getElementById("tiers1/2").style.display = "none";
        document.getElementById("lb1/2").style.display = "none";

        document.getElementById("tiers1/4").style.display = "none";
        document.getElementById("lb1/4").style.display = "none";

        document.getElementById("width").style.display = "none";
        document.getElementById("lbwidth").style.display = "none";

        document.getElementById("length").style.display = "none";
        document.getElementById("lblength").style.display = "none";

        document.getElementById("radius").style.display = "block";
        document.getElementById("lbradius").style.display = "block";


    }



}
/*
    } else if (!document.getElementById("Full").checked == true || !document.getElementById("½").checked == true || !document.getElementById("¼").checked == true) {
        document.getElementById("Cylin").style.display = "block";
        document.getElementById("radius").style.display = "block";

    } else if (document.getElementById("Cylin").checked == true) {
        document.getElementById("Full").style.display = "none";
        document.getElementById("½").style.display = "none";
        document.getElementById("¼").style.display = "none";
        document.getElementById("width").style.display = "none";
        document.getElementById("length").style.display = "none";
    }


}

|| document.getElementById("½").checked == true || document.getElementById("¼").checked == true
   else if (document.getElementById("½").checked == true) {
       document.getElementById("Cylin").style.display = "none";
       document.getElementById("radius").style.display = "none";
       document.getElementById("Full").style.display = "none";
   }
  
       else if (!document.getElementById("½").checked == true){
          document.getElementById("Cylin").style.display = "block";
          document.getElementById("radius").style.display = "block";  
            document.getElementById("Full").style.display = "block";
            }

          else if (document.getElementById("¼").checked == true){
          document.getElementById("Cylin").style.display = "none";
          document.getElementById("radius").style.display = "none";  
            document.getElementById("Full").style.display = "none";
              document.getElementById("½").style.display = "none";
            }
          
          
      
   


function checkVadidate() {

    var contactFName = "";
    var contactAddress = "";
    var contactLName = "";
    var phoneNumber = "";
    var  city = "";
    var  postalCode  = "";
    var  email= "";


    contactAddress = document.getElementById("oaddress");
    contactFName = document.getElementById("ofname");
    contactLName = document.getElementById("olname");
    phoneNumber = document.getElementById("onumber");
    city = document.getElementById("city");
    postalCode = document.getElementById("postalcode");
    email = document.getElementById("oemail");


    //
    // variable to contain error message (if any exists)
    //
    var message = "";

    //
    // firstname check
    //
    var boolNameCheck = checkField(contactFName.value);
    if (!boolNameCheck) {
        message += "'Firstname' must be supplied before an order can be completed\n";
        changeClass(contactFName, "error");

    } else {
        changeClass(contactFName, "");
    }

    // lastname check
    //
    var boolLNameCheck = checkField(contactLName.value);
    if (!boolLNameCheck) {
        message += "'Lastname' must be supplied before an order can be completed\n";
        changeClass(contactLName, "error");

    } else {
        changeClass(contactLName, "");
    }


    //
    // address check

    var boolAddressCheck = checkField(contactAddress.value);
    if (!boolAddressCheck) {
        message += "'Address' must be supplied before an order can be completed\n";
        changeClass(contactAddress, "error");

    } else {
        changeClass(contactAddress, "");
    }

    // phone number check
    //
    var verifyPhoneNumber = checkField(phoneNumber.value);
    if (!verifyPhoneNumber) {
        message += "Phone number' must be supplied before an order can be completed\n";
        changeClass(phoneNumber, "error");

    } else {
        changeClass(phoneNumber, "");
    }
    // city
    var boolCity = checkField(city.value);
    if (!boolCity) {
        message += "City must be supplied before an order can be completed\n";
        changeClass(city, "error");

    } else {
        changeClass(city, "");
    }
    
     // postalcode
   
    var boolPostalCode = checkField(city.value);
    if (!boolPostalCode) {
        message += "Postal Code must be supplied before an order can be completed\n";
        changeClass(postalCode, "error");

    } else {
        changeClass(postalCode, "");
    }
   // postalcode
    var boolemail = checkField(city.value);
    if (!boolemail) {
        message += "Postal Code must be supplied before an order can be completed\n";
        changeClass(email, "error");

    } else {
        changeClass(email, "");
    }


}
*/

function changeClass(field, newValue) {
    field.setAttribute("class", newValue);
}

//
// function to validate content entered by the user
//
function checkField(fieldValue) {
    var check = true;

    fieldValue = fieldValue.trim();
    if (fieldValue.length == 0) {
        check = false;
        return check;
    }

    return check;
}


function TotalCalculate() {
    var V = 0;
    var V3 = 0;
    var V1 = 0;
    var V2 = 0;
    var cost = 0;
    var cost1 = 0;
    var cost2 = 0;
    var cost3 = 0;
    var tiers = " ";
    var type = " ";
    var contactFName = "";
    var contactAddress = "";
    var contactLName = "";
    var phoneNumber = "";
    var city = "";
    var postalCode = "";
    var email = "";
    var width = 0;
    var length = 0;
    var heigh = 0;
    var radius = 0;


    contactAddress = document.getElementById("oaddress");
    contactFName = document.getElementById("ofname");
    contactLName = document.getElementById("olname");
    phoneNumber = document.getElementById("onumber");
    city = document.getElementById("city");
    postalCode = document.getElementById("postalcode");
    email = document.getElementById("oemail");
    width = document.getElementById("width");
    heigh = document.getElementById("heigh");
    length = document.getElementById("length");
    radius = document.getElementById("radius");

    // variable to contain error message (if any exists)
    var message = "";

    // firstname check
    var boolNameCheck = checkField(contactFName.value);
    var fNamePatern = /^[a-zA-Z]+$/;
    if (!boolNameCheck) {
        message += "'Firstname' must be supplied before an order can be completed\n";
        changeClass(contactFName, "error");

    } else {
        if (!fNamePatern.test(contactFName.value)) {
            alert('Invalid First name given!');
        }
        changeClass(contactFName, "");
    }

    // lastname check
    //
    var LNamePatern = /^[a-zA-Z]+$/;
    var boolLNameCheck = checkField(contactLName.value);
    if (!boolLNameCheck) {
        message += "'Lastname' must be supplied before an order can be completed\n";
        changeClass(contactLName, "error");
    }
    if (!LNamePatern.test(contactLName.value)) {
        alert('Invalid Last name given!');




    } else {
        changeClass(contactLName, "");
    }


    //
    // address check
    //
    var boolAddressCheck = checkField(contactAddress.value);
    if (!boolAddressCheck) {
        message += "'Address' must be supplied before an order can be completed\n";
        changeClass(contactAddress, "error");

    } else {
        changeClass(contactAddress, "");
    }

    // phone number check
    //
    var verifyPhoneNumber = checkField(phoneNumber.value);
    var parternPhone = /^[0-9]+$/;
    //https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
    if (!verifyPhoneNumber) {
        message += "Phone number' must be supplied before an order can be completed\n";
        changeClass(phoneNumber, "error");
    }
    if (!parternPhone.test(phoneNumber.value)) {
        alert('Invalid Phone given!');

    } else {
        changeClass(phoneNumber, "");
    }
    // city
    var CityNamePatern = /^[a-zA-Z]+$/;
    //https://stackoverflow.com/questions/4244109/regular-expression-to-accept-only-characters-a-z-in-a-textbox
    var boolCity = checkField(city.value);
    if (!boolCity) {
        message += "City must be supplied before an order can be completed\n";
        changeClass(city, "error");
    }
    if (!CityNamePatern.test(city.value)) {
        alert('Invalid City name given!');


    } else {
        changeClass(city, "");
    }

    // postalcode

    var boolPostalCode = checkField(city.value);
    if (!boolPostalCode) {
        message += "Postal Code must be supplied before an order can be completed\n";
        changeClass(postalCode, "error");

    } else {
        changeClass(postalCode, "");
    }
    // email
    var emailPartern = /\S+@\S+\.\S+/;
    //http://www.regexlib.com/Search.aspx?k=email&AspxAutoDetectCookieSupport=1
    var boolemail = checkField(email.value);
    if (!boolemail) {
        message += "Email must be supplied before an order can be completed\n";
        changeClass(email, "error");
    }
    if (!emailPartern.test(email.value)) {
        alert('Invalid Email given!');

    } else {
        changeClass(email, "");
    }
    /*    
     var  widthPartern = /^[0-9]+$/;
      var boolwidth = checkField(width.value);
      if (!boolwidth) {
          message += "width must be supplied before an order can be completed\n";
          changeClass(width, "error");}
      if (!widthPartern.test(width.value)) {
          alert('Invalid width given!');


      } else {
          changeClass(width, "");
      }
    
       var boolheigh = checkField(heigh.value);
      if (!boolheigh) {
          message += "heigh must be supplied before an order can be completed\n";
          changeClass(heigh, "error");}
      if (!widthPartern.test(heigh.value)) {
          alert('Invalid heigh given!');

      } else {
          changeClass(heigh, "");
      }
      
       var boollength = checkField(length.value);
      if (!boollength) {
          message += "length must be supplied before an order can be completed\n";
          changeClass(length, "error");
          }
      if (!widthPartern.test(length.value)) {
          alert('Invalid length given!');

      } else {
          changeClass(length, "");
      }
      
       var boolradius = checkField(radius.value);
      if (!boolradius) {
          message += "radius must be supplied before an order can be completed\n";
          changeClass(radius, "error");}
      if (!widthPartern.test(radius.value)) {
          alert('Invalid radius given!');


      } else {
          changeClass(radius, "");
      }
      
      */


    //CALCULATE


    if (document.getElementById("Full").checked == true) {
        V1 = document.getElementById("heigh").value * document.getElementById("width").value * document.getElementById("length").value;
        cost1 = document.getElementById("Full").value * V1;
        V = V1;
        cost = cost1;
        type = " Full slab (rectangle-shaped)";
        tiers = "none";
        //console.log(cost);
        if (document.getElementById("tiers1/2").checked == true) {
            V2 = (1 / 2 * (document.getElementById("heigh").value * document.getElementById("width").value * document.getElementById("length").value));
            cost2 = document.getElementById("tiers1/2").value * V2;

            V = V1 + V2;
            cost = cost1 + cost2;
            tiers = " ½ slab (rectangle-shaped)";

            if (document.getElementById("tiers1/4").checked == true) {
                V3 = (1 / 4 * (document.getElementById("heigh").value * document.getElementById("width").value * document.getElementById("length").value));
                cost3 = document.getElementById("tiers1/4").value * V3;
                tiers = " ½ slab (rectangle-shaped), ¼ slab (rectangle-shaped)";
            }

        }
        V = V1 + V2 + V3;
        cost = cost1 + cost2 + cost3;
    }
    if (document.getElementById("half").checked == true) {
        V1 = (1 / 2 * (document.getElementById("heigh").value * document.getElementById("width").value * document.getElementById("length").value));
        cost1 = document.getElementById("half").value * V1;

        V = V1;
        cost = cost1;
        type = " 1/2 slab (rectangle-shaped)";
        tiers = "none";

        if (document.getElementById("tiers1/4").checked == true) {
            V2 = (1 / 4 * (document.getElementById("heigh").value * document.getElementById("width").value * document.getElementById("length").value));
            cost2 = document.getElementById("Full").value * V2;
        }
        V = V1 + V2;
        cost = cost1 + cost2;
        tiers = "¼ slab (rectangle-shaped)";
    }
    if (document.getElementById("quater").checked == true) {
        V = (1 / 4 * (document.getElementById("heigh").value * document.getElementById("width").value * document.getElementById("length").value));
        cost = document.getElementById("quater").value * V;
        type = " 1/4 slab (rectangle-shaped)";
        tiers = "none";
    }


    if (document.getElementById("Cylin").checked == true) {
        V = (Math.PI * (document.getElementById("radius").value * document.getElementById("radius").value) * document.getElementById("heigh").value);
        cost = document.getElementById("Cylin").value * V;
        type = " Cylindrical cake";
        tiers = "none";
    }
    if (boolNameCheck && fNamePatern.test(contactFName.value) && boolLNameCheck && LNamePatern.test(contactLName.value) && boolAddressCheck && verifyPhoneNumber && parternPhone.test(phoneNumber.value) && boolCity && CityNamePatern.test(city.value) && boolPostalCode && boolemail && emailPartern.test(email.value)) {

        var confirmation = "<h3>Order Form</h3>";
        // Last Name, First Name Street Address City, Province Postal Code 
        confirmation += "<p Name: >" + document.getElementById("olname").value + ", " + document.getElementById("ofname").value + "<br/>";
        var prov = document.getElementById("province");
        var province = prov.options[prov.selectedIndex].text;
        confirmation += "<p>" + document.getElementById("oaddress").value;
        confirmation += "<p>" + document.getElementById("city").value + ", " + province + " " + document.getElementById("postalcode").value + "<br/>";;

        confirmation += "<br/";


        //confirmation += "Address: " +contactAddress.value+ "<br/>";
        confirmation += "<p class=\"cost\">Type of cake: " + type;
        confirmation += "<p class=\"cost\">Tiers: " + tiers;
        confirmation += "<p class=\"cost\">Volume: " + parseFloat(V).toFixed(2) + "</p>";
        confirmation += "<p class=\"cost\">Total Cost: " + parseFloat(cost).toFixed(2) + "</p>";

        document.getElementById("orderdetails").innerHTML = confirmation;


    } else {
        alert(message);
        document.getElementById("orderdetails").innerHTML = "<p></p>";
    }
    return false;


}
