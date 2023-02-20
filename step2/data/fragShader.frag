#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

/*
Calculate quadrants based on glFragCoord.
If, both x<width/2,y<height/2, or both greater -> then black quadrant. Else white.
*/

void main() {

  vec4 color = vec4(vec3(0.0),1.0);
  bool lowerX = false, lowerY = false;
  if (gl_FragCoord.y<u_resolution.y/2.0)	lowerY = true;
  if (gl_FragCoord.x<u_resolution.x/2.0)	lowerX = true;
  
  bool res = lowerX^^lowerY;
  if (res)
	color = vec4(1.0);

  gl_FragColor = color;
}