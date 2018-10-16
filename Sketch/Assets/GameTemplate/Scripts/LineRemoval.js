var p : Transform;

function OnMouseDown () {
//if time is not stopped in the game
if(Time.timeScale > 0){
p = transform.parent;
//destroy the parent object
Destroy(p.gameObject);
}
}