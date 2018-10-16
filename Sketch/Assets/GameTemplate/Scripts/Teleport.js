var otherTeleport : GameObject;
function OnTriggerEnter2D(collider : Collider2D) {
if(collider.gameObject.tag == "Ball") {
//if the trigger was tagged object Ball
if(PlayerPrefs.GetInt("SoundBoolean") == 0){
//play sounds when it is switched on.
gameObject.GetComponent(AudioSource).Play();
}
//turn animation
gameObject.GetComponent(Animation).Play();
//turn animation
otherTeleport.GetComponent(Animation).Play();
//object entered the trigger is moved to another position teleport
collider.transform.position = otherTeleport.transform.position;
//the object entered the trigger deprived tag
collider.gameObject.tag = "Untagged";
}
}
