var drawGround;
var groundVertexPositionBuffer;
var groundVertexColorBuffer;
var groundVertexIndexBuffer;

function initGround() {
  groundVertexPositionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, groundVertexPositionBuffer);
  vertices = [
    1.0, 1.0,  0.0,   //Eckpunkte vom Quadrat
    -1.0, 1.0, 0.0,
    1.0, -1.0,  0.0,
    -1.0, -1.0,  0.0
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  groundVertexPositionBuffer.itemSize = 3;
  groundVertexPositionBuffer.numItems = 4;

  groundVertexColorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, groundVertexColorBuffer);
  var color = [
    1, 0, 0, 1, //farbpunkte für Boden red, green, blue and alpha
    1, 1, 0, 1,
    1, 0, 1, 1,
    1, 0, 0, 1
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(color), gl.STATIC_DRAW);
  groundVertexColorBuffer.itemSize = 4;
  groundVertexColorBuffer.numItems = 4;

  /*
  var indices = [
    0, 1, 2,  0, 2, 3 //ground
  ];
  */

  /*
  groundVertexPositionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, groundVertexPositionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  groundVertexPositionBuffer.itemSize = 3; //x,y,z koordinatensystem
  groundVertexPositionBuffer.numItems = 4; //anzahl der eckpunkte

  groundVertexIndexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, groundVertexIndexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
  groundVertexIndexBuffer.itemSize = 1;
  groundVertexIndexBuffer.numItems = 6;

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
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, groundVertexIndexBuffer);

    gl.drawElements(gl.TRIANGLES, groundVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);

  };
  */
}
