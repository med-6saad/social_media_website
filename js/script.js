var boll=true;
const div=document.getElementsByClassName('test');

function togle(){
    if(boll){
        div[0].setAttribute('style','display:none');
        boll=false;
    }else{
        div[0].setAttribute('style','display:show');
        boll=true;
    }
    console.log(a)
}