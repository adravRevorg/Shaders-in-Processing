PShader shader;

void setup() {
  size(800, 800, P2D);
  noStroke();

  shader = loadShader("fragShader.frag");
}

void draw() {
  shader.set("u_resolution", float(width), float(height));
  shader.set("u_cellCount", 20.0, 20.0);
  shader(shader);
  rect(0,0,width,height);
  noLoop();
}
