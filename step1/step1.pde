PShader shader;

/* Draw the line x=y */

void setup() {
  size(800, 800, P2D);
  noStroke();

  shader = loadShader("fragShader.frag");
}

void draw() {
  shader(shader);
  rect(0,0,width,height);
  noLoop();
}
