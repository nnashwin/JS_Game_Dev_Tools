var array = [];

function TileMaker (canvasWidth, canvasHeight, tileSize, mapArray){
	this.pxWidth = canvasWidth/tileSize; 
	this.pxHeight= canvasHeight/tileSize;
	for(i = 0; i <= this.pxWidth; i++) {
		mapArray.push([0]);
		for(j = 0; j <= this.pxHeight; j++) {
			mapArray[i].push(0);
		}
	}
}



var tile = new TileMaker(512, 480, 32, array);
console.log(tile);
console.log(array);