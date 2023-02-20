PShader shader;

void setup() {
  size(800, 800, P2D);
  noStroke();

  shader = loadShader("frag0.frag");
}

void draw() {
  shader.set("u_resolution", float(width), float(height));
  shader.set("u_mouse", float(mouseX), float(height-mouseY));
  shader(shader);
  rect(0,0,width,height);
}
