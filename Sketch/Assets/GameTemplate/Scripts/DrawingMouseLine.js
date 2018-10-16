private var line : LineRenderer ; // Reference to LineRenderer
		private var mousePos : Vector3;    
		private var startPos : Vector3;    // Start position of line
		private var endPos : Vector3;// End position of line
		var emptyPos : Transform;
		private var empty : boolean = true;
		private var d : boolean = true;
	var lineMaterial : Material;

function Start(){
//include the type of control that is selected
if(PlayerPrefs.GetInt("Control") == 1){
gameObject.GetComponent(DrawingTouchLine).enabled = true;
gameObject.GetComponent(DrawingMouseLine).enabled = false;
}
}

		function Update(){
		//if time is not stopped in the game
		if(Time.timeScale > 0){
		//calculate the position of the mouse on the screen
								mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
	if(empty == true){
	//calculate the position of the empty object on the screen
	emptyPos.position = Camera.main.ScreenToWorldPoint(Input.mousePosition);
	}
	// On mouse down new line will be created 
			if(Input.GetMouseButtonDown(0) )
			{
			empty = false;
				if(line == null) {

					createLine();

				mousePos.z = 0;
				line.SetPosition(0,mousePos);
				startPos = mousePos;
				}
			}
			else if(Input.GetMouseButtonUp(0))
			{
			empty = true;
				if(line)
				{

					mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
					mousePos.z = 0;
					line.SetPosition(1,mousePos);
					endPos = mousePos;
					addColliderToLine();
					line = null;
				}
			}
			else if(Input.GetMouseButton(0))
			{
				if(line)
				{
					mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
					mousePos.z = 0;
					line.SetPosition(1,mousePos);
					if(Vector2.Distance(emptyPos.position,Camera.main.ScreenToWorldPoint(Input.mousePosition)) > 0.01){
										line.material =  lineMaterial;
										}
				}
			}
		
	}
	}
		private function createLine()
		{
			line = new GameObject("Line").AddComponent(LineRenderer);

			line.SetVertexCount(2);
			line.SetWidth(0.07f,0.07f);
			line.SetColors(Color.white, Color.white);
			line.useWorldSpace = true;   

					
		}
		
				private function addColliderToLine()
		{
		 
		 //create Collider
		 
		if(Vector2.Distance(emptyPos.position,Camera.main.ScreenToWorldPoint(Input.mousePosition)) < 0.08){
Destroy(line);
}
		
		if(Vector2.Distance(emptyPos.position,Camera.main.ScreenToWorldPoint(Input.mousePosition)) >= 0.08){

							if(PlayerPrefs.GetInt("SoundBoolean") == 0){
gameObject.GetComponent(AudioSource).Play();
}
			var col : BoxCollider2D = new GameObject("Collider").AddComponent(BoxCollider2D);
			col.gameObject.AddComponent(LineRemoval);
						
			col.transform.parent = line.transform; // Collider is added as child object of line
			
		
			 var lineLength : float = Vector3.Distance (startPos, endPos); // length of line
			col.size = new Vector3 (lineLength, 0.07f, 1f); // size of collider is set where X is length of line, Y is width of line, Z will be set as per requirement
			var midPoint : Vector3 = (startPos + endPos)/2;
			col.transform.position = midPoint; // setting position of collider object
			// Following lines calculate the angle between startPos and endPos
			var angle: float = (Mathf.Abs (startPos.y - endPos.y) / Mathf.Abs (startPos.x - endPos.x));
			if((startPos.y<endPos.y && startPos.x>endPos.x) || (endPos.y<startPos.y && endPos.x>startPos.x))
			{
				angle*=-1;
			}
			angle = Mathf.Rad2Deg * Mathf.Atan (angle);
			col.transform.Rotate (0, 0, angle);
			}

}