
  const form_validation=function(){
    const name=document.forms["myform"]["name"].value;
    const email=document.forms["myform"]["email"].value;
    const address =document.forms["myform"]["address"].value;
    const contact=document.forms["myform"]["contact"].value;
    const text=document.forms["myform"]["text"].value;
  
    if(name==''||email==''||address==''||contact==''||text==''){

        alert("please fill in all the forms");

    }
    else{

        alert("Thank you for filling the form");
    }

}


            