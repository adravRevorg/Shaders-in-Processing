#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_cellCount;

/*
Tried to draw a checker pattern
*/

void main() {

  vec4 color = vec4(vec3(0.0),1.0);
  
  vec2 cellSize = u_resolution.xy/u_cellCount.xy;
  float cellRow = floor(gl_FragCoord.y/cellSize.y);
  float cellCol = floor(gl_FragCoord.x/cellSize.x);
  
  if (mod(cellRow,2.0)==0.0){
		if (mod(cellCol,2.0)==0.0)	color = vec4(1.0);
		}
  else if (mod(cellCol,2.0)!=0.0)	color = vec4(1.0);
  
  gl_FragColor = color;
}