$(document).ready(function() {
    $(".sub-btn").on('click', function(){
        let email = $("#email").val();
        let name = $("#name").val();
        let phone = $("#phone").val();
        let skype = $("#skype-id").val();
        let birthday = $("#birthday").val();
        let aadhar = $("#addhar").val();
        let qualification = $("#qualification").val();
        let department = $("#department").val();
        let passing = $("#passing-year").val();
        let file = $("#file").val();
        var a=document.getElementById("wb");
        var b=document.getElementById("wf");
        var c=document.getElementById("aj");



        if(email.length == ""){
            alert("enter your email id");
        }else if(name.length == ""){
            alert("enter your name");
        }else if(phone.length == ""){
            alert("enter your phone number");
        }else if(skype.length == ""){
            alert("enter your skype id");
        }else if(birthday.length == ""){
            alert("enter your date of birth");
        }else if(aadhar.length == ""){
            alert("enter your aadhar id");
        }else if(qualification.length == ""){
            alert("enter your qualification");
        }else if(department.length == ""){
            alert("enter your department");
        }else if(passing.length == ""){
            alert("enter your passing year");
        }else if(file.length == ""){
            alert("upload file");
        }else if(a.checked==false && b.checked==false && c.checked==false){
            alert("pleace choose your course");
            return false;
        }else{
            alert("Congrats!");
        }
       


        

    });
});

function hanyaAngka(event) {
    var angka = (event.which) ? event.which : event.keyCode
    if (angka != 46 && angka > 31 && (angka < 48 || angka > 57))
      return false;
    return true;
}

addhar.addEventListener('keyup',function (e) {
    // console.log(e.keyCode);
    if (e.keyCode !== 8) {
      if (this.value.length === 4 || this.value.length === 9 || this.value.length === 14) {
        this.value = this.value += ' ';
      }
    }
  });
