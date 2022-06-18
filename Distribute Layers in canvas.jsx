// Distribute your layers one beside the other in your canvas.
// All layers need to be the same size
// The script calculates the columns based on the canvas width
// The script resizes the canvas height based on the quantity of rows needed

	var docRef = app.activeDocument;
    var dlg = new Window('dialog', 'Distribute layers',[100,100,650,250], closeButton=true);
    dlg.btnPnl = dlg.add('panel', [25,15,525,125], 'Distribute layers in canvas');
	dlg.btnPnl.testTxt = dlg.btnPnl.add('statictext', [15,10,470,50], 'Remember to import all the images as individual layers and to delete any empty layer.');
    dlg.btnPnl.testBtn = dlg.btnPnl.add('button', [15,60,305,50], 'Distribute', {name:'ok'});
    dlg.btnPnl.testBtn.onClick = dobuild;
    dlg.show();
	
    function dobuild() {
		var doc = app.activeDocument;
		var layersCount = doc.layers.length;
		var capas = doc.layers;

		//Layers measures
		var theBounds = app.activeDocument.activeLayer.bounds; 
		var layerWidth = theBounds[2] - theBounds[0]; 
		var layerHeight = theBounds[3] - theBounds[1];
		
		//Canvas measures
		var canvasAncho = doc.width;
		var canvasAlto = doc.Height;
		
		//Calculate the canvas needed height
			//calculates de columns based on the canvas width
			var qtyHorizontal = Math.floor(canvasAncho/layerWidth);
			var repeticiones = Math.ceil(layersCount/qtyHorizontal);
			var newCanvasHeight = layerHeight*repeticiones;
		
		//Canvas resizing to the needed height
			doc.resizeCanvas (canvasAncho, newCanvasHeight);

		var i;
		var j;

		try{
			app.displayDialogs = DialogModes.NO;
			var strtRulerUnits = app.preferences.rulerUnits;
			var strtTypeUnits = app.preferences.typeUnits;
			app.preferences.rulerUnits = Units.PIXELS;
			app.preferences.typeUnits = TypeUnits.PIXELS;
			
			//Iterate first based on rows and then based on column	
			var capa=0;
			for(i=0; i<repeticiones; i++){ //ROWS
				for(j=0; j<qtyHorizontal; j++){ //COLUMNS
					if(capa>=layersCount){break;}
					var currentLayer = capas[capa];
					var nombre = currentLayer.name;
					activeDocument.activeLayer = activeDocument.artLayers.getByName(nombre);
					var LB = activeDocument.activeLayer.bounds;
					var X = layerWidth*j;
					var Y = layerHeight*i;
					activeDocument.activeLayer.translate(X-LB[0].value,Y-LB[1].value);	
					capa++;						
				}
			}
		}
		catch(e){
			alert(e + "\nLine number = " + e.line);
		}
		finally{
		app.preferences.rulerUnits = strtRulerUnits;
		app.preferences.typeUnits = strtTypeUnits;
		}
        dlg.close();
	}