precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 pos = u_mouse/u_resolution;
  float dist = 1.0 - distance(uv,pos);
  gl_FragColor = vec4(dist/1.5);
  
  
}