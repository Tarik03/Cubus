
function buildTelescope(radius, height, density, colorTop, colorSide, colorBottom)
{
	var verticesTop = [],
		verticesBottom = [],
		verticesSide = [];

	for(var i = 0; i < Math.PI * 2; i += Math.PI * 2 / density)
	{
		verticesTop.push(Math.sin(i), -height / 2, Math.cos(i));
		verticesBottom.push(Math.sin(i), height / 2, Math.cos(i));
	}

	for(var i = 0; i <= (Math.PI * 2) + 0.1; i += Math.PI * 2 / density)
	{
		verticesSide.push(Math.sin(i), -height / 2, Math.cos(i));
		verticesSide.push(Math.sin(i), height / 2, Math.cos(i));
	}

	var telescopeTopBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, telescopeTopBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesTop), gl.STATIC_DRAW);
	telescopeTopBuffer.itemSize = 3;
	telescopeTopBuffer.numItems = verticesTop.length / 3;

	var telescopeBottomBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, telescopeBottomBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesBottom), gl.STATIC_DRAW);
	telescopeBottomBuffer.itemSize = 3;
	telescopeBottomBuffer.numItems = verticesBottom.length / 3;

	var telescopeSideBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, telescopeSideBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesSide), gl.STATIC_DRAW);
	telescopeSideBuffer.itemSize = 3;
	telescopeSideBuffer.numItems = verticesSide.length / 3;

	var telescopeColorTopBuffer,
		telescopeColorSideBuffer,
		telescopeColorBottomBuffer;

	var topColorArr = [],
		bottomColorArr = [];
	for(var i = 0; i < telescopeTopBuffer.numItems; i++)
	{
		topColorArr.push(colorTop[0], colorTop[1], colorTop[2], colorTop[3]);
		bottomColorArr.push(colorBottom[0], colorBottom[1], colorBottom[2], colorBottom[3]);
	}

	var sideColorArr = [];
	for(var i = 0 ; i < telescopeSideBuffer.numItems ; i++)
	{
		sideColorArr.push(colorSide[0], colorSide[1], colorSide[2], colorSide[3]);
	}

	telescopeColorTopBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, telescopeColorTopBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(topColorArr), gl.STATIC_DRAW);
	telescopeColorTopBuffer.itemSize = 4;
	telescopeColorTopBuffer.numItems = telescopeTopBuffer.numItems;

	telescopeColorBottomBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, telescopeColorBottomBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bottomColorArr), gl.STATIC_DRAW);
	telescopeColorBottomBuffer.itemSize = 4;
	telescopeColorBottomBuffer.numItems = telescopeBottomBuffer.numItems;

	telescopeColorSideBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, telescopeColorSideBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(sideColorArr), gl.STATIC_DRAW);
	telescopeColorSideBuffer.itemSize = 4;
	telescopeColorSideBuffer.numItems =  telescopeSideBuffer.numItems;

	var telescope = {
		top: telescopeTopBuffer,
		bottom: telescopeBottomBuffer,
		side: telescopeSideBuffer,
		topColor: telescopeColorTopBuffer,
		bottomColor: telescopeColorBottomBuffer,
		sideColor: telescopeColorSideBuffer
	};

	return function(context){
		gl.bindBuffer(gl.ARRAY_BUFFER, telescope.topColor);
		gl.vertexAttribPointer(context.shader.vertexColorAttribute, telescope.topColor.itemSize, gl.FLOAT, false, 0, 0);

		gl.bindBuffer(gl.ARRAY_BUFFER, telescope.top);
		gl.vertexAttribPointer(context.shader.vertexPositionAttribute, telescope.top.itemSize, gl.FLOAT, false, 0, 0);

		gl.drawArrays(gl.TRIANGLE_FAN, 0, telescope.top.numItems);


		gl.bindBuffer(gl.ARRAY_BUFFER, telescope.bottomColor);
		gl.vertexAttribPointer(context.shader.vertexColorAttribute, telescope.topColor.itemSize, gl.FLOAT, false, 0, 0);

		gl.bindBuffer(gl.ARRAY_BUFFER, telescope.bottom);
		gl.vertexAttribPointer(context.shader.vertexPositionAttribute, telescope.bottom.itemSize, gl.FLOAT, false, 0, 0);

		gl.drawArrays(gl.TRIANGLE_FAN, 0, telescope.bottom.numItems);

		gl.bindBuffer(gl.ARRAY_BUFFER, telescope.sideColor);
		gl.vertexAttribPointer(context.shader.vertexColorAttribute, telescope.sideColor.itemSize, gl.FLOAT, false, 0, 0);

		gl.bindBuffer(gl.ARRAY_BUFFER, telescope.side);
		gl.vertexAttribPointer(context.shader.vertexPositionAttribute, telescope.side.itemSize, gl.FLOAT, false, 0, 0);

		gl.drawArrays(gl.TRIANGLE_STRIP, 0, telescope.side.numItems);
	}
}
