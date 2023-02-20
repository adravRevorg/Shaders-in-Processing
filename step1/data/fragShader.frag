#ifdef GL_ES
precision mediump float;
#endif

void main() {

  vec4 color;
  if (gl_FragCoord.x==gl_FragCoord.y)
	color = vec4(vec3(0.0),1.0);
  else
	color = vec4(1.0);
  gl_FragColor = color;
  
}