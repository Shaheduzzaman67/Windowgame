var part1 : GameObject;
var part2 : GameObject;
var part3 : GameObject;
private var empty : boolean;
function OnMouseDown () {
if(PlayerPrefs.GetInt("SoundBoolean") == 0){
//play sounds when it is switched on.
gameObject.GetComponent.<AudioSource>().Play();
}
//button color becomes darkened
gameObject.GetComponent(SpriteRenderer).color = Color(0.6,0.6,0.6,1);
empty = true;
}
function OnMouseUp () {
//button becomes a standard color
gameObject.GetComponent(SpriteRenderer).color = Color(1,1,1,1);
//if the object name LeftSlider
if(gameObject.name == "LeftSlider"){
//if the part1 included
if(part1.activeSelf == true && empty == true){
//turn off part1
part1.SetActive(false);
//turn on part3
part3.SetActive(true);
empty = false;
}
//if the part2 included
if(part2.activeSelf == true && empty == true){
//turn off part2
part2.SetActive(false);
//turn on part1
part1.SetActive(true);
empty = false;
}
//if the part3 included
if(part3.activeSelf == true && empty == true){
//turn off part3
part3.SetActive(false);
//turn on part2
part2.SetActive(true);
empty = false;
}






}
//if the object name RightSlider
if(gameObject.name == "RightSlider"){
//if the part1 included
if(part1.activeSelf == true && empty == true){
//turn off part1
part1.SetActive(false);
//turn on part2
part2.SetActive(true);
empty = false;
}
//if the part2 included
if(part2.activeSelf == true && empty == true){
//turn off part2
part2.SetActive(false);
//turn on part3
part3.SetActive(true);
empty = false;
}
//if the part3 included
if(part3.activeSelf == true && empty == true){
//turn off part3
part3.SetActive(false);
//turn on part1
part1.SetActive(true);
empty = false;
}





}
}