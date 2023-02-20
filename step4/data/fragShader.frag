#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_circleGap;
uniform float u_lineThickness;

void main() {

  vec4 color = vec4(vec3(0.0),1.0);
  
  vec2 center = u_resolution.xy/2.0;
  float dist = distance(gl_FragCoord.xy,center);
  if (mod(dist,u_circleGap)<u_lineThickness)
		color = vec4(1.0);
  
  gl_FragColor = color;
}