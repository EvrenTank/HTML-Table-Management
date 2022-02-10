var buton=document.getElementById("button");
var isim=document.getElementById("isim"); // id yerine name yazdım hata verdi.
// Çünkü name özel bir kullaımı olan bir kelime. Buna dikkat !!!
var number=document.getElementById("number");
var mail=document.getElementById("email");
let table=document.getElementById('table1');
let tbody=document.getElementById('tbody1');
let thead=document.getElementById('thead1');
let name_colon=document.getElementById('name_colon');
let error_div=document.getElementById('error');
var search=document.getElementById('search_place');
var count=0;
var kayıt=[];
console.log(name);
//mail.style.backgroundColor="red";

function check_str(str) {
  return (/^[A-Za-z\s]*$/.test(str) && str.length<21 && str.length>0) ;
}

function check_mobile(str){
    return (/^[0-9]*$/.test(str) && str.length==3  && str.length>0);
}
function check_email(str) {
  return (str.length<40  && str.length>0);
}

buton.addEventListener('click',function() {
  //count++
  let a={index:"",isim:"",number:"",email:""};

  let isimcik=isim.value;
  let no=number.value;
  let email=mail.value;

  //console.log(thead_innerHTML);
  console.log(thead.innerText);
  console.log(thead.innerHTML);
  console.log(thead.textContent);
  if( check_str(isimcik) && check_mobile(no) && check_email(email)){
    count++;
    tbody.innerHTML= tbody.innerHTML+`<tr><td>${count}</td><td>${isimcik}</td><td>${no}</td><td>${email}</td></tr>`;
    //table.innerHTML=thead_innerHTML+tbody.innerHTML;
    a.index=count;
    a.isim=isimcik;
    a.number=no;
    a.email=email;
    kayıt.push(a);
    isim.value=null;
    number.value=null;
    mail.value=null;
    error_div.style.visibility="hidden";
  }
  else{
    error_div.style.visibility="visible";
  }
  console.log(kayıt);


});

var a= click_number=0;

name_colon.addEventListener('click',function () {
  click_number++;
  let new_kayıt;

//let satırlar=  tbody.querySelectorAll("tr");
//console.log(satırlar);
if(click_number %2 == 0){
  // Array sıralamak için mükemmel bir yöntem
  new_kayıt=kayıt.sort((a,b) => (a.isim.toLowerCase() > b.isim.toLowerCase()) ? 1: -1);
}
else if( click_number%2 == 1){
  new_kayıt=kayıt.sort((a,b) => (a.isim.toLowerCase() < b.isim.toLowerCase()) ? 1: -1);

}

console.log(new_kayıt);
tbody.innerHTML="";
for(let i of kayıt){

  tbody.innerHTML +=`<tr><td>${i.index}</td><td>${i.isim}</td><td>${i.number}</td><td>${i.email}</td></tr>`;
console.log(i);
}

})
// https://www.w3schools.com/howto/howto_js_filter_table.asp bu linkte search filter var.


search.addEventListener('input', function () {
  let written_number=this.value.toUpperCase();
  var tr=document.getElementsByTagName('tr');
  let matches_number=0;
  tbody.innerHTML = "";
  console.log("değişim");
  for(let i of kayıt){
    if(i.number.toUpperCase().indexOf(written_number) > -1){
      matches_number++;
      tbody.innerHTML +=`<tr><td>${i.index}</td><td>${i.isim}</td><td>${i.number}</td><td>${i.email}</td></tr>`;
    }
  }
  if(matches_number == 0){
    document.getElementById("noResult").style.visibility="visible";
  }
  if(matches_number != 0){
    document.getElementById("noResult").style.visibility="hidden";
  }

})
