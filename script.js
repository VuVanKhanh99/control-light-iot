
var status1=false,status2=false,status3=false,status4=false;
const firebaseConfig={
    apiKey :"AIzaSyBwQiFgxbIqfyYtettDzdhsbyIo5T1T-XE" , 
    authDomain : "toi2812-9h47.firebaseapp.com" ,     
    databaseURL : "https://toi2812-9h47-default-rtdb.firebaseio.com" ,     
    projectId : "toi2812-9h47" ,    
    storageBucket : "toi2812-9h47.appspot.com" ,     
    messagingSenderId : "324383941 " ,     
    appId : "1:324383941:web:c5137a85e2b8929365ecac" ,     
    measurementId : "G-1QN111SLCC "
}
firebase.initializeApp(firebaseConfig);
const data=firebase.database();
let S1,S2,S3,S4,S5,S6,S7;

data.ref().on('value',(snap)=>{
    S1=snap.val().S1;
    S2=snap.val().S2;
    S3=snap.val().S3;
    S4=snap.val().S4;
    S5=snap.val().S5;
    S6=snap.val().S6;
    S7=snap.val().S7;
    if(S1=="ON"){
        status1=true;
    }
    else{
        status1=false;
    }
    if(S2=="ON"){
        status2=true;    
    }
    else{
        status2=false;
    }
    //
    if(S3=="ON"){
        status3=true;
    }
    else{
        status3=false;
    }
    //
    $('.slider').val(S5);
    //
    if(S4 =="O"){
        status4=true;
    }
    else{
        status4=false;
    }
    $('p.temp').text(S6+" °C");
    $('p.humi').text(S7+" %");
    
   
});

$('.light1').click(function(){
    var S1=data.ref().child("S1");
    if(status1==false){
        S1.set("ON");
        status1=true;
    }
    else{ 
        S1.set("OFF");
        status1=false;
    }
    
})
//

$('.light2').click(function(){
    var S2=data.ref().child("S2");
    if(status2==false){
        S2.set("ON");
        status2=true;
    }
    else{
        S2.set("OFF");
        status2=false;
    }
});
//

$('.light3').click(function(){
    var S3=data.ref().child("S3");
    if(status3==false){
        S3.set("ON");
        status3=true;
    }
    else{
        S3.set("OFF");
        status3=false;
    }
});
//

$('.slider').on('input',()=>{
    var S5_value=data.ref().child("S5");
    S5_value.set($('.slider').val());
});
//
$('.door').click(function(){
    var S4=data.ref().child("S4");
    if(status4==false){
        S4.set("O");
        status4=true;
    }
    else{
        S4.set("C");
        status4=false;
    }
    if(status4 == true){
        $('.message').slideDown(200).delay(3500).slideUp(200);
           
           $('.message-temp').text('Nhiệt độ đang là '+S6+' °C');
           $('.message-humi').text('Độ ẩm là '+S7+' %');
            if(S6 <= 15){
                $('.message-result').css('color','#fff');
                $('.message-result').text('Chú ý mặc áo ấm nhé !!!');
                
            }
            else if(S6 >15 && S6 <30){
                $('.message-result').css('color','#F2F271');
                $('.message-result').text('Thời tiết có vẻ khá ổn !!!');                
            }
            else if(S6>30 && S7<20){
                $('.message-result').css('color','#25E8F5');
                $('.message-result').text('Thời tiết có vẻ hơi hanh khô !!!');
            }
            else if(S6>30 && S6<40){
                $('.message-result').css('color','#F7DF48');
                $('.message-result').text('Nhiệt độ nhà đang cao ,hãy đề phòng !!!');
            }
           
    } 
    
});

//
setInterval(checkStatus,10);
function checkStatus(){
    if(status1==true){
        $('.light1').css('left','50%');
        $('.status1').addClass('on-light');
    }
    else {
        $('.light1').css('left','0');
        $('.status1').removeClass('on-light');
    }
if(status2==true){
    $('.light2').css('left','50%');
    $('.status2').addClass('on-light');
}
else{
    $('.light2').css('left','0');
    $('.status2').removeClass('on-light');
}
if(status3==true){
    $('.light3').css('left','50%');
    $('.status3').addClass('on-light');
}
else{
    $('.light3').css('left','0');
    $('.status3').removeClass('on-light');

}
if(status4==true){
    $('.door').css('left','50%');
    $('.status4').addClass('on-light'); 
}
else{
    $('.door').css('left','0');
    $('.status4').removeClass('on-light');
}
if(S6 >40){
    $('.message').slideDown(200).delay(3200).slideUp(200);
           
    $('.message-temp').text('Nhiệt độ đang là '+S6+' °C');
    $('.message-humi').text('Độ ẩm là '+S7+' %');
    $('.message-result').css('color','#fff');
    $('.message-result').text('Hình như đang có cháy trong nhà bạn,nguy hiểm !!!'); 
}
}

