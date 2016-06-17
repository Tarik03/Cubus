var drawGround;
var groundVertexPositionBuffer;
var groundVertexColorBuffer;

function buildGround(){
  vertices = [
    1.0,  0.0,  1.0,   //Eckpunkte vom Boden
    1.0,  0.0,  -1.0,
    -1.0, 0.0,  -1.0,
    -1.0, 0.0,  1.0
  ];

  color = [
    1.0, 0.0, 0.0, 1.0, //farbpunkte für Boden red, green, blue and alpha
    1.0, 1.0, 0.0, 1.0,
    1.0, 0.0, 1.0, 1.0,
    1.0, 0.0, 0.0, 1.0
  ];

  groundVertexPositionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, groundVertexPositionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  groundVertexPositionBuffer.itemSize = 3; //x,y,z koordinatensystem
  groundVertexPositionBuffer.numItems = 4; //anzahl der eckpunkte

  groundVertexColorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, groundVertexColorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(color), gl.STATIC_DRAW);
  groundVertexColorBuffer.itemSize = 4;
  groundVertexColorBuffer.numItems = 4;

  drawGround = function(context){
    gl.bindBuffer(gl.ARRAY_BUFFER, groundVertexColorBuffer);
    gl.vertexAttribPointer(context.shader.vertexColorAttribute, groundVertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, groundVertexPositionBuffer);
    gl.vertexAttribPointer(context.shader.vertexPositionAttribute, groundVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, groundVertexPositionBuffer);

    gl.drawArrays(gl.TRIANGLES, groundVertexPositionBuffer.numItems, gl.UNSIGNED_SHORT, 0);
  };
}
