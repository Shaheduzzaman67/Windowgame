var touch : boolean = false;
var mouse : boolean = true;

function Update () {
//select control
if(touch == true && mouse == false){
PlayerPrefs.SetInt("Control", 1);
}
if(mouse == true && touch == false){
PlayerPrefs.SetInt("Control", 2);
}
}