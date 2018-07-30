///////////////////////////////////////////////////////////////////////////
//
// AUTHOR: Lemark Sibala
// EMAIL: lemarksibala@gmail.com
// DATE UPDATED: 11/2015 VERSION: 1.0.1
// DATE CREATED: 09/2015 VERSION: 1.0
// CURRENT VERSION: 1.0.1
// MESSAGE: Thank you for using this tool!
//
///////////////////////////////////////////////////////////////////////////

"use strict";

var MODE_NONE =    parseInt('0000000000',2);
var MODE_NORMAL=   parseInt('0000000001',2);
var MODE_ICON =    parseInt('0000000010',2);


function Bounds(x,y,w,h){
	return [x,y,(x+w),(y+h)];
}

function stringToBool(aBoolString){
	if(aBoolString === "true")
		return true;
	if(aBoolString === "false")
		return false;
}

function clearArray(arrayToClear){

	var len = arrayToClear.length;
	var i = 0;

	for(;i<len;i++)
		arrayToClear.pop();
}

////////////

function TInstruction(w,h,p,rw,rh,t){
	this.resizeWidth = w;
	this.resizeHeight = h;
	this.resizeProportional = p; 
	this.useRatioWidth = rw;
	this.useRatioHeight = rh;
	this.trimImage = t;
}

TInstruction.prototype.toString = function(){
	var str = "W:" + (this.resizeWidth & 1) + 
			  "/ H:" + (this.resizeHeight & 1) +
			  "/ P:" + (this.resizeProportional & 1) + 
			  "/ RW:" + (this.useRatioWidth & 1) + 
			  "/ RH:" + (this.useRatioHeight & 1) +
			  "/ Trim:" + (this.trimImage & 1);

	return str;
}

TInstruction.prototype.toStringSave = function(){
	var str = "({" + 
			  "resizeWidth:'" + this.resizeWidth +
			  "',resizeHeight:'" + this.resizeHeight +
			  "',resizeProportional:'" + this.resizeProportional +
			  "',useRatioWidth:'" + this.useRatioWidth +
			  "',useRatioHeight:'" + this.useRatioHeight +
			  "',trimImage:'" + this.trimImage +
			  "'})";
	return str;
}

///////////////


function TSaveInstruction(){
	this.folderPath = new String("");
	this.folderName = new String("");
	this.fileName = new String("");
	this.filePrefix = new String("");
	this.fileSuffix = new String("");

	this.isFolderPathEnabled= false;
	this.isFolderNameEnabled = false;
	this.isFileNameEnabled = false;
	this.isFilePrefixEnabled = false;
	this.isFileSuffixEnabled = false;
}

TSaveInstruction.prototype.setFolderPath = function(aFolderPath){this.folderPath = new String(aFolderPath);}
TSaveInstruction.prototype.getFolderPath = function(){return this.folderPath;}

TSaveInstruction.prototype.setFolderName = function(aFolderName){this.folderName = new String(aFolderName);}
TSaveInstruction.prototype.getFolderName = function(){return this.folderName;}

TSaveInstruction.prototype.setFileName = function(aFileName){this.fileName = new String(aFileName);}
TSaveInstruction.prototype.getFileName = function(){return this.fileName;}

TSaveInstruction.prototype.setFilePrefix = function(aFilePrefix){this.filePrefix = new String(aFilePrefix);}
TSaveInstruction.prototype.getFilePrefix = function(){return this.filePrefix;}

TSaveInstruction.prototype.setFileSuffix = function(aFileSuffix){this.fileSuffix = new String(aFileSuffix);}
TSaveInstruction.prototype.getFileSuffix = function(){return this.fileSuffix;}


TSaveInstruction.prototype.enableFolderPath = function(aBool){this.isFolderPathEnabled = aBool;}
TSaveInstruction.prototype.isFolderPath = function(){return this.isFolderPathEnabled;}

TSaveInstruction.prototype.enableFolderName = function(aBool){this.isFolderNameEnabled = aBool;}
TSaveInstruction.prototype.isFolderName = function(){return this.isFolderNameEnabled;}

TSaveInstruction.prototype.enableFileName = function(aBool){this.isFileNameEnabled = aBool;}
TSaveInstruction.prototype.isFileName = function(){return this.isFileNameEnabled;}

TSaveInstruction.prototype.enableFilePrefix = function(aBool){this.isFilePrefixEnabled = aBool;}
TSaveInstruction.prototype.isFilePrefix = function(){return this.isFilePrefixEnabled;}

TSaveInstruction.prototype.enableFileSuffix = function(aBool){this.isFileSuffixEnabled = aBool;}
TSaveInstruction.prototype.isFileSuffix = function(){return this.isFileSuffixEnabled;}


TSaveInstruction.prototype.toStringSave = function(){
	var str = "({" + 
			  "folderPath:'" + this.folderPath +
			  "',folderName:'" + this.folderName +
			  "',fileName:'" + this.fileName +
			  "',filePrefix:'" + this.filePrefix +
			  "',fileSuffix:'" + this.fileSuffix +
			  "',isFolderNameEnabled:'" + this.isFolderNameEnabled +
			  "',isFolderPathEnabled:'" + this.isFolderPathEnabled +
			  "',isFileNameEnabled:'" + this.isFileNameEnabled +
			  "',isFilePrefixEnabled:'" + this.isFilePrefixEnabled +
			  "',isFileSuffixEnabled:'" + this.isFileSuffixEnabled +
			  "'})";
	return str;
}

function TDevice(n,w,h,p,m){
	this.uid = 0;
	this.name = n;
	this.width = w;
	this.height = h;
	this.ppi = p;
	this.mode = m;
	this.srcDisplay = false;
	this.saveInstruction = new TSaveInstruction();
}

TDevice.prototype.setUID = function(uid){this.uid = uid;}
TDevice.prototype.getUID = function(){return this.uid;}
TDevice.prototype.setName = function(n){this.name = n;}
TDevice.prototype.getName = function(){return this.name;}
TDevice.prototype.setWidth = function(w){this.width = w;}
TDevice.prototype.getWidth = function(){return this.width;}
TDevice.prototype.setHeight = function(h){this.height = h;}
TDevice.prototype.getHeight = function(){return this.height;}
TDevice.prototype.setPPI = function(p){this.ppi = p;}
TDevice.prototype.getPPI = function(){return this.ppi;}
TDevice.prototype.setMode = function(m){this.mode = m;}
TDevice.prototype.getMode = function(){return this.mode;}
TDevice.prototype.setSrcDisplay = function(sd){this.srcDisplay = sd;}
TDevice.prototype.getSrcDisplay = function(){return this.srcDisplay;}
TDevice.prototype.setSaveInstruction = function(si){this.saveInstruction = si;}
TDevice.prototype.getSaveInstruction = function(){return this.saveInstruction;}


TDevice.prototype.toStringSave = function(){
	var str =  "({" + 
			   "uid:" + this.uid + 
			   ",name:'"+ this.name + 
			   "',width:" + this.width + 
			   ",height:" + this.height + 
			   ",ppi:" + this.ppi + 
			   ",mode:" + this.mode +
			   ",srcDisplay:" + this.srcDisplay +
			   ",saveInstruction:" + this.saveInstruction.toStringSave() +
			   "})";
	return str;
}


function TDeviceSet(){
	this.uid = 0;
	this.name = "";
	this.mode = 0;
	this.deviceSet = [];
}

TDeviceSet.prototype.setUID = function(uid){this.uid = uid;}
TDeviceSet.prototype.getUID = function(){return this.uid;}
TDeviceSet.prototype.setName = function(name){this.name=name;}
TDeviceSet.prototype.getName = function(){return this.name;}

TDeviceSet.prototype.setMode = function(m){
	this.mode = m;

	var i = 0;
	var len = this.deviceSet.length;

	for(i=0;i<len;i++)
		this.deviceSet[i].setMode(this.mode);
}

TDeviceSet.prototype.getMode = function(){return this.mode;}

TDeviceSet.prototype.getArray = function(){return this.deviceSet;}
TDeviceSet.prototype.setWithArray = function(arrayData){
	var arrayOfDevices = null;
	var newDeviceSet = null;
	var device = null;
	var saveInstruction = null;

	for(var i=2;i < arrayData.length;i++){
		if(!newDeviceSet)
			newDeviceSet = new TDeviceSet();

		arrayOfDevices = arrayData[i];

		if(arrayOfDevices instanceof Array){

			newDeviceSet.setName(arrayOfDevices[0]);
			newDeviceSet.setMode(arrayOfDevices[1]);

			for(var j=2;j<arrayOfDevices.length;j++){
				saveInstruction = new TSaveInstruction();
				saveInstruction.setFolderPath(arrayOfDevices[j].saveInstruction.folderPath);
				saveInstruction.setFolderName(arrayOfDevices[j].saveInstruction.folderName);
				saveInstruction.setFileName(arrayOfDevices[j].saveInstruction.fileName);
				saveInstruction.setFilePrefix(arrayOfDevices[j].saveInstruction.filePrefix);
				saveInstruction.setFileSuffix(arrayOfDevices[j].saveInstruction.fileSuffix);
				
				saveInstruction.enableFolderPath(stringToBool(arrayOfDevices[j].saveInstruction.isFolderPathEnabled.valueOf()));
				saveInstruction.enableFolderName(stringToBool(arrayOfDevices[j].saveInstruction.isFolderNameEnabled.valueOf()));
				saveInstruction.enableFileName(stringToBool(arrayOfDevices[j].saveInstruction.isFileNameEnabled.valueOf()));
				saveInstruction.enableFilePrefix(stringToBool(arrayOfDevices[j].saveInstruction.isFilePrefixEnabled.valueOf()));
				saveInstruction.enableFileSuffix(stringToBool(arrayOfDevices[j].saveInstruction.isFileSuffixEnabled.valueOf()));

				device = new TDevice(arrayOfDevices[j].name,arrayOfDevices[j].width,arrayOfDevices[j].height,arrayOfDevices[j].ppi,arrayOfDevices[j].mode);
				device.setSrcDisplay(arrayOfDevices[j].srcDisplay);
				device.setSaveInstruction(saveInstruction);

				newDeviceSet.add(device);
			
			}
			
		}

		this.deviceSet.push(newDeviceSet);

		newDeviceSet = null;
	}
}


TDeviceSet.prototype.add = function(aDevice){
	var index = null;
	if((aDevice instanceof TDeviceSet) || (aDevice instanceof TDevice)){
		index = this.deviceSet.push(aDevice);
		return index-1;	
	}else{
		alert("Can only add device or device set type.");
	}

}

TDeviceSet.prototype.remove = function(atIndex){
	this.deviceSet.splice(atIndex,1);
}

TDeviceSet.prototype.get = function(atIndex){
	return (this.deviceSet[atIndex]);
}

TDeviceSet.prototype.getWithName = function(aDeviceName){

	var len = this.deviceSet.length;
	var i = 0;
	var j = 0;

	var foundDevice = null;

	for(i=0;i<len;i++){

		if(this.deviceSet[i] instanceof TDeviceSet){
			for(j=0;j<this.deviceSet[i].length();j++){
				if(this.deviceSet[i].get(j).getName().localeCompare(aDeviceName) == 0){
					foundDevice = this.deviceSet[i].get(j);
					i = len;
					break;
				}
			}	
		}
	
	}

	return foundDevice;
}

TDeviceSet.prototype.set = function(atIndex, aDevice){
	return (this.deviceSet[atIndex]=aDevice);
}

TDeviceSet.prototype.length = function(){
	return (this.deviceSet.length);
}

TDeviceSet.prototype.toStringSave = function(){
	var length = this.deviceSet.length;
	var str = "['"+this.name+"'," + this.mode + ",";

	for(var i = 0; i <length; i++){

		str += this.deviceSet[i].toStringSave();

		if(i+1 == length){
			
			str += "]";
			break;

		}else str += ",";

	}

	return (str);
}



/////////

function TLayer(aLayer){
	this.layer = null;
	this.properties = [];

	// alert(aLayer.typename);

	if(aLayer){
		if(aLayer.typename === 'ArtLayer' || aLayer.typename === 'LayerSet'){
			this.layer = aLayer;
		}
		else{
			alert("ArtLayer or LayerSet type only");
			return undefined;
		}
	}
}

TLayer.prototype.length = function(){return this.properties.length;}
TLayer.prototype.setLayer = function(aLayer){this.layer = aLayer;}
TLayer.prototype.getLayer = function(){return this.layer;}
TLayer.prototype.getName = function(){return this.layer.name;}
TLayer.prototype.getProperty = function(atIndex){ return this.properties[atIndex];}
TLayer.prototype.removeProperty = function(atIndex){
	this.properties[atIndex].clearInstructions();
	this.properties.splice(atIndex,1);
}

TLayer.prototype.clearProperties = function(){

	var len = this.properties.length;
	var i =0;

	for(i;i<len;i++)
		this.properties[i].clearInstructions();

	this.properties.splice(0,this.properties.length);
}

TLayer.prototype.addProperty = function(aProperty){
	if(aProperty instanceof TLayerProperty){
		this.properties.push(aProperty);
	}
	else alert("can add TProperty only");
}

TLayer.prototype.addInstruction = function(aTInstruction){
	var len = this.properties.length;
	var i = 0;

	if(aTInstruction instanceof TInstruction){
		for(i=0;i<len;i++){
			this.properties[i].addInstruction(aTInstruction);
		}
	}
	else alert("can add TInstruction type only");
};

TLayer.prototype.toStringSave = function(){
	var length = this.properties.length;
	var str = "['"+this.layer.name+"',[";

	for(var i = 0; i < length; i++){

		str += this.properties[i].toStringSave();

		if(i+1 == length){
			
			str += "]";
			break;

		}else str += ",";

	}

	if(length == 0)
		return (str + "]]");
	else 
		return (str + "]");
}

//////////

function TLayerProperty(aTDevice){
	this.device = null;
	this.instructions = null;

	if(aTDevice instanceof TDevice){
		this.device = aTDevice;
		this.instructions = [];
	}
	else{
		alert("TDevice type only");
		return undefined;
	}
}

TLayerProperty.prototype.length = function(){return this.instructions.length;}
TLayerProperty.prototype.getDevice = function(){return this.device;}
TLayerProperty.prototype.getInstruction = function(atIndex){return this.instructions[atIndex];}
TLayerProperty.prototype.setInstruction = function(atIndex,aTInstruction){ this.instructions[atIndex] = aTInstruction;}
TLayerProperty.prototype.removeInstruction = function(atIndex){this.instructions.splice(atIndex,1);}

TLayerProperty.prototype.clearInstructions = function(){
	this.device = undefined;
	this.instructions.splice(0,this.instructions.length);
}

TLayerProperty.prototype.addInstruction = function(aTInstruction){
	if(aTInstruction instanceof TInstruction)
		this.instructions.push(aTInstruction);
	else alert("can add TInstruction type only");
}


TLayerProperty.prototype.toStringSave = function(){
	var length = this.instructions.length;
	var str = "['"+this.device.getName()+"',[";

	for(var i = 0; i <length; i++){

		str += this.instructions[i].toStringSave();

		if(i+1 == length){
			
			str += "]";
			break;
		}else str += ",";

	}

	return (str+"]");
}


//////


function PersistentStringData(folderName,fileName){
	this.data = [];
	this.folderPathAbsolute = Folder.userData + '/' + folderName;
	this.filePathAbsolute = this.folderPathAbsolute + '/' + fileName;
}

PersistentStringData.prototype.length = function(){return this.data.length;}
PersistentStringData.prototype.getArray = function(atIndex){return this.data;}
PersistentStringData.prototype.getData = function(atIndex){return this.data[atIndex];}

PersistentStringData.prototype.deleteData = function(atIndex){

	if(atIndex+1 == this.data.length)
		return;

	this.data.splice(atIndex,1);
}

PersistentStringData.prototype.clearData = function(){
	
	var file = new File(this.filePathAbsolute);
	file.open('e');

	var bakAbsolutePath = this.filePathAbsolute+".bak";
	var bak = new File(bakAbsolutePath);
	
	if(bak.exists){
		bak.remove();
		bak.close();
		bak = null;
	}

	file.copy(bakAbsolutePath);
	file.remove();
	file.close();
	file = null;

	this.data.splice(0,1);
}

PersistentStringData.prototype.loadData = function(){

	var stringDataRead = null;
	var returnData = null;

	var file = new File(this.filePathAbsolute);
	file.open('e');

	var folder = new Folder(this.folderPathAbsolute);

	if(folder.exists == false){
		folder.create(this.folderPathAbsolute);
		folder = null;
	}


	if(file.exists){
		
		while(!file.eof){
			stringDataRead = file.readln();
			this.data.push(stringDataRead);
		}

		returnData = this.data;
	}
	file.close();
	file = null;

	return returnData;
}


PersistentStringData.prototype.saveData = function(dataToSave){
	var compareResult = 0;
	var folder = new Folder(this.folderPathAbsolute);

	if(folder.exists == false){
		folder.create(this.folderPathAbsolute);
		folder.close();
	}

	var file = new File(this.filePathAbsolute);
	file.open('e');

	if(dataToSave === null){

		file.close();
		file = null;
		return;
	}

	if(this.data.length > 0){
		for(var i=0; i < this.data.length; i++){
			compareResult = this.data[i].localeCompare(dataToSave);
			if(compareResult == 0){
				return; 
			}
		}
	}

	this.data.push(dataToSave);

	if(file.length){
		file.seek(file.length,0);
	}

	file.writeln(dataToSave);
	file.close();
	file = null;
}


/////////////


beginNinjaMission();

function beginNinjaMission(){

	var currentScriptFolder = getCurrentScriptFolder();

	var staticTextWidth;

	var buttonRun;
	var buttonCancel;

	var checkboxSelectAllLayers;

	var progressBar;

	var panelProperty;
	var groupWidthOrHeight;
	var radioWidth;
	var radioHeight;
	var checkboxProportion;
	var groupRatio;
	var radioRW;
	var radioRH;
	var checkboxTrim;

	var panelButtonClear;
	var panelButtonApply;

	var iconButtonEdit;

	var dropdown_folderHistory;
	var iconButtonFolder;

	var folderHistoryArray = [];
	var folderHistory_PersistentStringData = new PersistentStringData("Sprite Ninja","folderHistory.data");
	var folderHistory_SelectedIndex = 0;


	var dropdown_deviceSet;
	var buttonPlusDestinationDevice;
	var buttonMinusDestinationDevice;

	var deviceSet = new TDeviceSet();
	var deviceSet_PersistentStringData = new PersistentStringData("Sprite Ninja","deviceSet.data");
	var deviceSet_SelectedSetIndex = 0;


	var dropdown_SourceDevice;
	var sourceDeviceArray = [];
	var sourceDevice_ActualIndexes = [];
	var sourceDevice_SelectedIndex = 0;

	var listbox_layerArray;
	var layerArray = [];
	var layerArray_PersistentStringData = new PersistentStringData("Sprite Ninja","layers.data");
	var layerArray_SelectedIndex = 0;


	var len = 0;
	var i = 0, j = 0;
	var tempSet =  null;
	var tempDevice = null;
	var isCreateNewSet = true;

	var removeDeviceSetFromDropdown = function(selectedDeviceSet){

		dropdown_deviceSet.remove(selectedDeviceSet);
		deviceSet.remove(selectedDeviceSet);

		if(selectedDeviceSet+1 >= deviceSet.length())
			dropdown_deviceSet.selection = dropdown_deviceSet.items[deviceSet.length()-1];
		else if(selectedDeviceSet-1<=0)
			dropdown_deviceSet.selection = dropdown_deviceSet.items[0];
		else
			dropdown_deviceSet.selection = dropdown_deviceSet.items[selectedDeviceSet];

		var str = deviceSet.toStringSave();

		deviceSet_PersistentStringData.clearData();	
		deviceSet_PersistentStringData.saveData(str);
		
		updateDropdownSourceDevice(sourceDevice_ActualIndexes,sourceDeviceArray,dropdown_SourceDevice,deviceSet);
	}

	var checkModeAndUpdateUI = function(){
			if(deviceSet.get(deviceSet_SelectedSetIndex).getMode() == MODE_ICON){
				panelProperty.enabled = true;
				groupWidthOrHeight.enabled = false;
				groupRatio.enabled = false;
				dropdown_SourceDevice.enabled = false;

			}else{
				panelProperty.enabled = true;
				groupWidthOrHeight.enabled = true;
				groupRatio.enabled = true;
				dropdown_SourceDevice.enabled = true;
			}
	}

	var saveLayerArrayToFile = function(){
		layerArray_PersistentStringData.clearData();

		var length = layerArray.length;
		var i = 0;
		var str = "[";

		for(var i = 0; i <length; i++){

			str += layerArray[i].toStringSave();

			if((i+1) == length){
				
				str += "]";
				break;

			}else str += ",";

		}

		layerArray_PersistentStringData.saveData(str);
	}


	var getLayerFromActiveDocumentWithName = function(aName){
		var len = app.activeDocument.layers.length;
		var i = 0;

		for(i=0;i<len;i++){
			if(app.activeDocument.layers[i].name.localeCompare(aName) == 0)
				return app.activeDocument.layers[i];
			else continue;
		}
	}

	var loadLayerArrayNormal = function(){
		var len = 0;
		if(app.documents.length){
			len = app.activeDocument.layers.length;

			for(i=0;i<len;i++){
				if(app.activeDocument.layers[i].visible)
					layerArray.push(new TLayer(app.activeDocument.layers[i]));
			}
		}
	}

	var loadLayerArrayFromFile = function(){
		var i = 0;
		var j = 0;
		var k = 0;
		var len = 0;

		len = layerArray_PersistentStringData.loadData().length;

		if(len > 0){
			var stringData = layerArray_PersistentStringData.getArray();
			var arrayData = eval('('+stringData+')');

			var newLayer = null;
			var newProperty = null;
			var newInstruction = null;
	
			if(arrayData.length != getVisibleLayerCount()){
				stringData = null;
				arrayData.splice(0,1);
				arrayData = null;

				loadLayerArrayNormal();

				return;
			}

			// if(arrayData[0][1][0] !== undefined)
			// if(deviceSet.getWithName(arrayData[0][1][0][0]) === null){
			// 	layerArray_PersistentStringData.clearData();
			// 	loadLayerArrayNormal();
			// 	return;
			// }

			for(i=0;i<arrayData.length; i++){
				if(app.activeDocument.layers){
					try{
						if(!(app.activeDocument.layers.getByName(arrayData[i][0])))
					}catch(error){
						layerArray_PersistentStringData.clearData();
						loadLayerArrayNormal();
						return;
					}
				}
			}

			var tempCount = 0;
			for(i=0;i<arrayData.length; i++){ // EACH TLAYER

				var aLayer = getLayerFromActiveDocumentWithName(arrayData[i][0]);
		
				if(!aLayer.visible){
					tempCount += 1;
					if(tempCount+1 >= arrayData.length){
						loadLayerArrayNormal();
						return;
					}
					continue;
				}

				newLayer = new TLayer(aLayer);

				for(j=0;j<arrayData[i][1].length;j++){ // EACH TPROPERTY

					newProperty = new TLayerProperty(deviceSet.getWithName(arrayData[i][1][j][0]));

					for(k=0;k<arrayData[i][1][j][1].length;k++){ // EACH TINSTRUCTION

						var w = stringToBool(arrayData[i][1][j][1][k].resizeWidth);
						var h = stringToBool(arrayData[i][1][j][1][k].resizeHeight);
						var p = stringToBool(arrayData[i][1][j][1][k].resizeProportional);
						var rw =  stringToBool(arrayData[i][1][j][1][k].useRatioWidth);
						var rh =  stringToBool(arrayData[i][1][j][1][k].useRatioHeight);
						var t =  stringToBool(arrayData[i][1][j][1][k].trimImage);

						newInstruction = new TInstruction(w,h,p,rw,rh,t);

						newProperty.addInstruction(newInstruction);
					}

					newLayer.addProperty(newProperty);
				}
				
				layerArray.push(newLayer);
			}
		}else loadLayerArrayNormal();
	}


	var loadDeviceSetFromFile = function(){
			if(deviceSet_PersistentStringData.loadData().length > 0){
			var stringData = deviceSet_PersistentStringData.getArray();
			var arrayData = eval('('+stringData+')');

			deviceSet.setWithArray(arrayData);
		}
	}


	loadDeviceSetFromFile();
	loadLayerArrayFromFile();

	var leftMargin = 10;
	var winWidth = 500;
	var winHeight = 400;
	var win = new Window('dialog','Sprite Ninja',Bounds(0,0,winWidth,winHeight));
	win.center();

	mainWindow = win;

	win.imageLogoTitle = win.add('iconbutton',Bounds(leftMargin,10,260,50),new File(currentScriptFolder+'/ninjaLogo.png'));
	win.imageLogoTitle.onClick = function(){
		displayNinjaAbout();
	}


///DROPDOWN - SOURCE DEVICE

	var yPosDropdown = 70;
	var textDropDownSourceDevice = "Source Device Size";
	staticTextWidth = textDropDownSourceDevice.length*8;

	win.statictextDropDownSourceDevice = win.add('statictext',Bounds(leftMargin,yPosDropdown,staticTextWidth,10),textDropDownSourceDevice);
	dropdown_SourceDevice = win.add('dropdownlist',Bounds(leftMargin,yPosDropdown+20,260,20));
	dropdown_SourceDevice.helpTip = "Choose Screen/Image/Icon Source Size";

	updateDropdownSourceDevice(sourceDevice_ActualIndexes,sourceDeviceArray,dropdown_SourceDevice,deviceSet);

	dropdown_SourceDevice.onChange = function(){
		sourceDevice_SelectedIndex = dropdown_SourceDevice.selection.index;
	}


///DROPDOWN - DESTINATION DEVICE SET
	var textDropDownDestinationDevice = "Destination Device Size Set";
	staticTextWidth = textDropDownDestinationDevice.length*8;
	
	win.statictextDropDownDestinationDevice = win.add('statictext',Bounds(leftMargin,yPosDropdown+48,staticTextWidth,10),textDropDownDestinationDevice);
	
	dropdown_deviceSet = win.add('dropdownlist',Bounds(leftMargin,yPosDropdown+68,210,20));
	dropdown_deviceSet.helpTip = "Choose Screen/Image/Icon Size Destination Set";
	dropdown_deviceSet.add('item',"Create New Set");
	dropdown_deviceSet.selection = dropdown_deviceSet.items[0];

	len = deviceSet.length();

	if(len == 0){
		var dummySet = new TDeviceSet();
		dummySet.setName("dummy");
		dummySet.add(new TDevice("dummy",9,11,1981,0));
		deviceSet.add(dummySet);
	}

	if(len > 0){
		for(i = 1; i < len; i++){
			dropdown_deviceSet.add('item',deviceSet.get(i).name);			
		}
	}

	dropdown_deviceSet.onChange = function(){
		deviceSet_SelectedSetIndex = dropdown_deviceSet.selection.index;

		if(deviceSet_SelectedSetIndex == 0){
			panelProperty.enabled = false;
			isCreateNewSet = true;
		}else{

			checkModeAndUpdateUI();

			isCreateNewSet = false;
		}
	};

	var xPosButtonPlusMinus = 227;
	var yPosButtonPlusMinus = yPosDropdown + 68; 

	buttonPlusDestinationDevice = win.add('button',Bounds(xPosButtonPlusMinus+24,yPosButtonPlusMinus,20,20),"+");
	buttonPlusDestinationDevice.helpTip = "Add/Edit Device Set";

	buttonPlusDestinationDevice.onClick = function(){
		var selectedItem = dropdown_deviceSet.selection;
		var newSet = null;
		var changedSetName = null;

		if(selectedItem.text === "Create New Set"){
			newSet = addNewDeviceSet();
		}else{

			if(editDeviceSet(deviceSet.get(deviceSet_SelectedSetIndex),deviceSet)){
				
				if(deviceSet.get(deviceSet_SelectedSetIndex).length() == 0){
					removeDeviceSetFromDropdown(deviceSet_SelectedSetIndex);
				}else{

					updateDropdownDestinationDevice(selectedItem.index,dropdown_deviceSet,deviceSet.getArray());

					updateDropdownSourceDevice(sourceDevice_ActualIndexes,sourceDeviceArray,dropdown_SourceDevice,deviceSet);

					deviceSet_PersistentStringData.clearData();
					deviceSet_PersistentStringData.saveData(deviceSet.toStringSave());

					checkModeAndUpdateUI();
				}
			}
		}

		if(newSet){
			var index = deviceSet.add(newSet);

			dropdown_deviceSet.add('item',deviceSet.get(index).getName());
			dropdown_deviceSet.selection = dropdown_deviceSet.items[index];
			
			deviceSet_PersistentStringData.clearData();
			deviceSet_PersistentStringData.saveData(deviceSet.toStringSave());

			updateDropdownSourceDevice(sourceDeviceArray,dropdown_SourceDevice,deviceSet);
		}
	}


	buttonMinusDestinationDevice = win.add('button',Bounds(xPosButtonPlusMinus,yPosButtonPlusMinus,20,20),"-");
	buttonMinusDestinationDevice.helpTip = "Delete Device Set";

	buttonMinusDestinationDevice.onClick = function(){

		if(deviceSet_SelectedSetIndex == 0)
			return;

		var answer = confirm("Delete Device Set?",true);
		if(answer){
	
			removeDeviceSetFromDropdown(deviceSet_SelectedSetIndex);
		}
	}
	

//// PANEL PROPERTIES --- PROPERTY INSTRUCTIONS

	panelProperty = win.add('panel',Bounds(leftMargin,yPosDropdown+98,262,154),"Resize Instruction");

	var yPosPanelItem = 20;
	var xPosPanelItem = leftMargin;

	groupWidthOrHeight = panelProperty.add('group',Bounds(xPosPanelItem,yPosPanelItem,200,15));

	var xPosGroupWidthOrHeight = 0;
	var yPosGroupWidthOrHeight = 0;
	
	radioWidth = groupWidthOrHeight.add('checkbox',Bounds(xPosGroupWidthOrHeight,yPosGroupWidthOrHeight,30,15),"W");
	radioWidth.value = true;
	radioWidth.helpTip = "Resize Width";
	
	radioHeight = groupWidthOrHeight.add('checkbox',Bounds(xPosGroupWidthOrHeight+40,yPosGroupWidthOrHeight,30,15),"H");
	radioHeight.helpTip = "Resize Height";
	
	checkboxProportion = groupWidthOrHeight.add('checkbox',Bounds(xPosGroupWidthOrHeight+80,yPosGroupWidthOrHeight,30,15),"P");
	checkboxProportion.helpTip = "Constrain Proportions";

	groupRatio = panelProperty.add('group',Bounds(xPosPanelItem,yPosPanelItem+25,200,17));
	
	var xPosGroupRatio = 0;
	var yPosGroupRatio = 0;
	
	radioRW = groupRatio.add('radiobutton',Bounds(xPosGroupRatio,yPosGroupRatio,40,15),"RW");
	radioRW.value = true;
	radioRW.helpTip = "Use Width Ratio";

	radioRH = groupRatio.add('radiobutton',Bounds(xPosGroupRatio+40,yPosGroupRatio,40,15),"RH");
	radioRH.helpTip = "Use Height Ratio";

	var xPosCheckboxTrim = xPosPanelItem;
	var yPosCheckboxTrim = 70;
	checkboxTrim = panelProperty.add('checkbox',Bounds(xPosCheckboxTrim,yPosCheckboxTrim,50,15),"Trim");
	checkboxTrim.helpTip = "Remove transparent pixels around image";

	var xPosPanelButton = 108;
	var yPosPanelButton = 115;

	panelButtonClear = panelProperty.add('button',Bounds(xPosPanelButton,yPosPanelButton,70,25),"Clear");
	panelButtonClear.helpTip = "Clear Instruction On Selected Layers";

	panelButtonApply = panelProperty.add('button',Bounds(xPosPanelButton+75,yPosPanelButton,70,25),"Apply");
	panelButtonApply.helpTip = "Apply Instruction On Selected Layers";

	radioWidth.onClick = function(){
		if(radioHeight.value === true)
			radioHeight.value = false;
	}

	radioHeight.onClick = function(){
		if(radioWidth.value === true)
			radioWidth.value = false;
	}

	panelButtonApply.onClick = function(){

		if(listbox_layerArray.items.length == 0 || listbox_layerArray.selection == null){
			alert("Please select a layer or layers to apply.");
			return;
		}

		markListBoxLayer(true,listbox_layerArray.items);

		var layerSelectionCount = listbox_layerArray.selection.length;
		var setCount = deviceSet.get(deviceSet_SelectedSetIndex).length();

		var property = null;
		var device = null;

		var instruction = new TInstruction(radioWidth.value,
										   radioHeight.value,
										   checkboxProportion.value,
										   radioRW.value,
										   radioRH.value,
										   checkboxTrim.value);

		for(var i = 0; i< layerSelectionCount; i++){
			
			if(layerArray[listbox_layerArray.selection[i].index].length() != 0){
				layerArray[listbox_layerArray.selection[i].index].addInstruction(instruction);
				continue;
			}

			for(var j = 0; j < setCount; j++){

				device = deviceSet.get(deviceSet_SelectedSetIndex).get(j);
				
				property = new TLayerProperty(device);
				
				property.addInstruction(instruction);

				layerArray[listbox_layerArray.selection[i].index].addProperty(property);
			}
		}
		
	}

	panelButtonClear.onClick = function(){

		var layerSelectionCount = listbox_layerArray.selection.length;

		// if(layerSelectionCount)
		// 	panelButtonApply.enabled = true;

		markListBoxLayer(false,listbox_layerArray.items);

		for(var i=0;i <layerSelectionCount; i++){
			if(layerArray[listbox_layerArray.selection[i].index].length() != 0)
				layerArray[listbox_layerArray.selection[i].index].clearProperties();
		}

	}

	panelProperty.enabled = false;


	var xPosListBox = 290;
	var yPosListBox = 20;
	
	iconButtonEdit = win.add('iconbutton',Bounds(xPosListBox+180,yPosListBox-4,20,20),
		new File(currentScriptFolder+'/settings-20.png'),
		{style:'toolbutton'});
	iconButtonEdit.helpTip = "Edit Layer's Additional Resize Instruction";
	

///// LISTBOX - ARTLAYERS

	listbox_layerArray = win.add('listbox',Bounds(xPosListBox,yPosListBox+20,200,280),null,{multiselect:true});
	checkboxSelectAllLayers = win.add('checkbox',Bounds(xPosListBox,yPosListBox,150,20),"Select All Layers");

	len = layerArray.length;

	if(len){
		for(i=0;i<len;i++){

			listbox_layerArray.add('item',layerArray[i].getLayer().name);

			if(layerArray[i].length()){
				listbox_layerArray.items[i].selected = true;
			}

		} 

		markListBoxLayer(true,listbox_layerArray.items);

	}

	listbox_layerArray.onChange = function(){
		var len = 0;
		if(checkboxSelectAllLayers.value == true && listbox_layerArray.items.length > listbox_layerArray.selection.length)
			checkboxSelectAllLayers.value = false;
	};

	checkboxSelectAllLayers.onClick = function(){
		if(checkboxSelectAllLayers.value){
			listbox_layerArray.selection = listbox_layerArray.items;
		}else if(!checkboxSelectAllLayers.value){
			listbox_layerArray.selection = null;
		}
	};

	iconButtonEdit.onClick = function(){

		if(listbox_layerArray.selection === null)
			alert("Please select a layer to edit.");
		else if(layerArray[listbox_layerArray.selection[0].index].length() == 0)
			alert("To edit, please apply a Resize Instruction on the selected layer.");
		else if(listbox_layerArray.selection.length > 1)
			alert("To edit, select one layer only.");;
		
		else
			editLayerProperty(layerArray[listbox_layerArray.selection[0].index]);
	};


////////// FOLDER

	var xDestinationFolder = leftMargin;
	var yDestinationFolder = yPosListBox+260;
	var textDropDownDestinationFolder = "Save To Folder";
	staticTextWidth = textDropDownDestinationFolder.length*8;
	win.statictextDropDownDestinationFolder = win.add('statictext',Bounds(xDestinationFolder,yDestinationFolder+50,staticTextWidth,0),textDropDownDestinationFolder);
	dropdown_folderHistory = win.add('dropdownlist',Bounds(xDestinationFolder,yDestinationFolder+70,236,20));

	folderHistory_PersistentStringData.loadData();

	for(i=0;i<folderHistory_PersistentStringData.length();i++){
		var aHistory = File.decode(folderHistory_PersistentStringData.getData(i));
		dropdown_folderHistory.add('item',aHistory);
		folderHistoryArray.push(aHistory);
	}

	dropdown_folderHistory.selection = dropdown_folderHistory.items[0];

	dropdown_folderHistory.onChange = function(){
		folderHistory_SelectedIndex = dropdown_folderHistory.selection.index;
	}

	iconButtonFolder = win.add('iconbutton',Bounds(xDestinationFolder+240,yDestinationFolder+70,20,20),
		new File(currentScriptFolder + '/folder-20.png'),{style:'toolbutton'});

	iconButtonFolder.helpTip = "Change Folder Save Location";
	iconButtonFolder.onClick = function(){

		var folder;

		if(dropdown_folderHistory.items.length == 0)
		 	folder = Folder.selectDialog("Save To Folder");
		else
			folder = Folder.selectDialog("Save To Folder", Folder(dropdown_folderHistory.selection.text));


		if(folder){
			
			var decodedStringPath = File.decode(folder.relativeURI);

			var foundSimilarItem = dropdown_folderHistory.find(decodedStringPath);

			if(foundSimilarItem){
				dropdown_folderHistory.selection = dropdown_folderHistory.items[foundSimilarItem.index];
				folderHistory_SelectedIndex = foundSimilarItem.index;

			}else{

				var newAddedItem = dropdown_folderHistory.add('item',decodedStringPath);

				dropdown_folderHistory.selection = dropdown_folderHistory.items[newAddedItem.index];
				folderHistory_SelectedIndex = newAddedItem.index;

				folderHistory_PersistentStringData.saveData(decodedStringPath);
				folderHistoryArray.push(decodedStringPath);
			}
		}

	}

	progressBar = win.add('progressbar',Bounds(leftMargin,yDestinationFolder+95,winWidth-(leftMargin*2),20));

////// BUTTON RUN AND CANCEL

	var xPosButtons = (winWidth)-180;
	var yPosButtons = 345;
	buttonCancel = win.add('button',Bounds(xPosButtons,yPosButtons,70,25),"Cancel");
	buttonRun = win.add('button',Bounds(xPosButtons+75,yPosButtons,70,25),"Run");

	buttonCancel.onClick = function(){
		win.close();
	}

	var saveInstruction = [];

	buttonRun.onClick = function(){

		if(checkLayerIsReady(listbox_layerArray.items,layerArray) === false){
			alert("No layer is ready to be processed.");
			return;
		}

		if(checkFolderIsReady(folderHistoryArray,folderHistory_SelectedIndex) === false){
			alert("Please select a folder to save to.");
			return;
		}

		if(confirm("Unleash the ninja?",true) === false)
			return;

		var i = 0;
		var j = 0;
		var k = 0;
		
		var property =  null;
		var instruction = null;

		var validLayers = [];

		var layerCount = 0;
		var propertyCount = 0;
		var instructionCount = 0;

		var progressBarIncrement = 0;

		var folderPath = dropdown_folderHistory.items[folderHistory_SelectedIndex];

		var folderToSaveTo = null;

		var Factor = 0;
		var XFactor = 0;
		var YFactor = 0;

		var srcWidth = 0;
		var srcHeight = 0;

		var destWidth = 0;
		var destHeight = 0;

		var srcDevice = sourceDeviceArray[sourceDevice_ActualIndexes[sourceDevice_SelectedIndex]];
		var destDevice = null;

		srcWidth = srcDevice.getWidth();
		srcHeight = srcDevice.getHeight();
		
		// alert("SOURCE WIDTH: "+srcWidth);

		var originalDocument = app.activeDocument; 
		var originalRulerUnitPreference = app.preferences.rulerUnits;
		var originalLayer = null;
		var originalLayerName = "";

		var tempLayerName = "";

		var tempNewDocument = null;
		var tempNewLayer = null;

		app.preferences.rulerUnits = Units.PIXELS;
		app.displayDialogs = DialogModes.NO;

		layerCount = layerArray.length;

		for(i=0;i<layerCount;i++){
			if(layerArray[i].length())
				validLayers.push(layerArray[i]);
		}

		layerCount = validLayers.length;

		progressBarIncrement = progressBar.maxvalue/layerCount;

		for(i=0;i<layerCount;i++){
		
			propertyCount = validLayers[i].length();

			if(!propertyCount)
				continue;
		
			originalLayer = validLayers[i].getLayer();
			originalLayerName = validLayers[i].getName();

			saveInstruction.push((new TSaveInstruction));

			saveInstruction[i].setFolderPath(folderPath);

			tempNewDocument = createNewDocument(originalDocument); 

			setActiveDocument(originalDocument);
			
			setActiveLayer(originalLayer);

			tempNewLayer = duplicateLayer(tempNewDocument,originalLayer);
			
			setActiveDocument(tempNewDocument);
			setActiveLayer(tempNewLayer);
			
			for(j=0;j<propertyCount;j++){

				property = validLayers[i].getProperty(j);

				destDevice = property.getDevice();
				
				tempLayerName = originalLayerName;

				if(destDevice.getSaveInstruction().isFileName())
					tempLayerName = destDevice.getSaveInstruction().getFileName();

				if(destDevice.getSaveInstruction().isFilePrefix())
					tempLayerName =	(destDevice.getSaveInstruction().getFilePrefix())+tempLayerName;

				if(destDevice.getSaveInstruction().isFileSuffix())
					tempLayerName = tempLayerName+(destDevice.getSaveInstruction().getFileSuffix());
				
				saveInstruction[i].setFileName(tempLayerName);


				if(destDevice.getSaveInstruction().isFolderName())
					saveInstruction[i].setFolderName(destDevice.getSaveInstruction().getFolderName());
				else
					saveInstruction[i].setFolderName(destDevice.getName());
				
				destWidth = destDevice.getWidth();
				destHeight = destDevice.getHeight();


				if(destDevice.getMode() == MODE_NORMAL){
					XFactor = destWidth/srcWidth;
					YFactor = destHeight/srcHeight;

					instructionCount = property.length();
		
					for(k=0;k<instructionCount;k++){

						instruction = property.getInstruction(k);

						if(instruction.trimImage){
							trimDocument(tempNewDocument);
						}

						if(instruction.useRatioWidth)
							Factor = XFactor;
						else if(instruction.useRatioHeight)
							Factor = YFactor;

						if(instruction.resizeProportional){

							if(instruction.resizeWidth){
								resizeDocument(tempNewDocument,Factor*tempNewDocument.width,null,destDevice.getPPI());
							}else if(instruction.resizeHeight){
								resizeDocument(tempNewDocument,null,Factor*tempNewDocument.height,destDevice.getPPI());
							}

						}else if(instruction.resizeWidth){
							resizeDocument(tempNewDocument,Factor*tempNewDocument.width,tempNewDocument.height,destDevice.getPPI());

						}else if(instruction.resizeHeight){
							resizeDocument(tempNewDocument,tempNewDocument.width,Factor*tempNewDocument.height,destDevice.getPPI());
						}
					}
				}else if(destDevice.getMode() == MODE_ICON){
					
					instructionCount = property.length();
		
					for(k=0;k<instructionCount;k++){

						instruction = property.getInstruction(k);

						if(instruction.trimImage){
							trimDocument(tempNewDocument);
						}
					}
					
					resizeDocument(tempNewDocument,destWidth,destHeight,destDevice.getPPI());
				}


				folderToSaveTo = folderCreate(saveInstruction[i].getFolderPath(),saveInstruction[i].getFolderName());

				saveFileToFolder(tempNewDocument,folderToSaveTo,saveInstruction[i].getFileName(),(new PNGSaveOptions));

				tempNewDocument.activeHistoryState = tempNewDocument.historyStates[2];
			}

			tempNewDocument.close(SaveOptions.DONOTSAVECHANGES); 
			
			setActiveDocument(originalDocument); 

			progressBar.value += progressBarIncrement;
		}

		saveInstruction.splice(0,saveInstruction.length);
		saveInstruction = null;	

		saveLayerArrayToFile();

		if(displayNinjaMessage("MISSION COMPLETE")){
			Folder(folderPath).execute();
			win.close();
		}else{
			progressBar.value = 0;
		}
	}

	win.defaultElement = null;
	win.cancelElement = buttonCancel;
	return win.show();
}

function addNewDevice(){
	var newDevice = null;
	var tempDevice = new TDevice("",1,1,1,0);

	var win = createWindowForAddEditDevice("Add New Device Size","Cancel","Add");


	win.panelSaveInstructions.checkboxFolderName.onClick = function(){
		if(win.panelSaveInstructions.checkboxFolderName.value && !win.panelSaveInstructions.inputFolderName.enabled){
			win.panelSaveInstructions.inputFolderName.enabled = true;
			tempDevice.getSaveInstruction().enableFolderName(true);

		}
		else if(!win.panelSaveInstructions.checkboxFolderName.value && win.panelSaveInstructions.inputFolderName.enabled){
			win.panelSaveInstructions.inputFolderName.enabled = false;
			tempDevice.getSaveInstruction().enableFolderName(false);
		}
	}

	win.panelSaveInstructions.checkboxFileName.onClick = function(){
		if(win.panelSaveInstructions.checkboxFileName.value && !win.panelSaveInstructions.inputFileName.enabled){
			win.panelSaveInstructions.inputFileName.enabled = true;
			tempDevice.getSaveInstruction().enableFileName(true);

		}
		else if(!win.panelSaveInstructions.checkboxFileName.value && win.panelSaveInstructions.inputFileName.enabled){
			win.panelSaveInstructions.inputFileName.enabled = false;
			tempDevice.getSaveInstruction().enableFileName(false);

		}
	}

	win.panelSaveInstructions.checkboxFilePrefix.onClick = function(){
		if(win.panelSaveInstructions.checkboxFilePrefix.value && !win.panelSaveInstructions.inputFilePrefix.enabled){
			win.panelSaveInstructions.inputFilePrefix.enabled = true;
			tempDevice.getSaveInstruction().enableFilePrefix(true);

		}
		else if(!win.panelSaveInstructions.checkboxFilePrefix.value && win.panelSaveInstructions.inputFilePrefix.enabled){
			win.panelSaveInstructions.inputFilePrefix.enabled = false;
			tempDevice.getSaveInstruction().enableFilePrefix(false);

		}
	}


	win.panelSaveInstructions.checkboxFileSuffix.onClick = function(){
		if(win.panelSaveInstructions.checkboxFileSuffix.value && !win.panelSaveInstructions.inputFileSuffix.enabled){
			win.panelSaveInstructions.inputFileSuffix.enabled = true;
			tempDevice.getSaveInstruction().enableFileSuffix(true);

		}
		else if(!win.panelSaveInstructions.checkboxFileSuffix.value && win.panelSaveInstructions.inputFileSuffix.enabled){
			win.panelSaveInstructions.inputFileSuffix.enabled = false;
			tempDevice.getSaveInstruction().enableFileSuffix(false);

		}
	}


	win.buttonAdd.onClick = function(){

		if(validateInputForAddEditDevice(win)){

			tempDevice.setName(win.inputName.text);
			tempDevice.setWidth(parseInt(win.inputWidth.text.valueOf()));
			tempDevice.setHeight(parseInt(win.inputHeight.text.valueOf()));
			tempDevice.setPPI(parseInt(win.inputPPI.text.valueOf()));
			tempDevice.setSrcDisplay(win.checkboxMakeSource.value);

			if(validateAndProcessInputSaveInstruction(win,tempDevice)){ 
				tempDevice.getSaveInstruction().setFolderName(win.panelSaveInstructions.inputFolderName.text);
				tempDevice.getSaveInstruction().setFileName(win.panelSaveInstructions.inputFileName.text);
				tempDevice.getSaveInstruction().setFilePrefix(win.panelSaveInstructions.inputFilePrefix.text);
				tempDevice.getSaveInstruction().setFileSuffix(win.panelSaveInstructions.inputFileSuffix.text);
				newDevice = tempDevice;
				win.close();
			}
		}

	}

	win.show();

	return newDevice;
}

function editDevice(aDeviceToEdit){
	var len = 0;
	var i = 0;
	var changeDetected = false;

	var win = createWindowForAddEditDevice("Edit Device","Cancel","Done");

	win.inputName.text = aDeviceToEdit.getName();
	win.inputWidth.text = aDeviceToEdit.getWidth();
	win.inputHeight.text = aDeviceToEdit.getHeight();
	win.inputPPI.text = aDeviceToEdit.getPPI();	
	win.checkboxMakeSource.value = aDeviceToEdit.getSrcDisplay();

	initSaveInstructionForEditDevice(aDeviceToEdit,win);

	win.panelSaveInstructions.checkboxFolderName.onClick = function(){
		if(win.panelSaveInstructions.checkboxFolderName.value && !win.panelSaveInstructions.inputFolderName.enabled){
			win.panelSaveInstructions.inputFolderName.enabled = true;
			aDeviceToEdit.getSaveInstruction().enableFolderName(true);

		}
		else if(!win.panelSaveInstructions.checkboxFolderName.value && win.panelSaveInstructions.inputFolderName.enabled){
			win.panelSaveInstructions.inputFolderName.enabled = false;
			aDeviceToEdit.getSaveInstruction().enableFolderName(false);
		}

		changeDetected = true;
	}
	
	win.panelSaveInstructions.checkboxFileName.onClick = function(){
		if(win.panelSaveInstructions.checkboxFileName.value && !win.panelSaveInstructions.inputFileName.enabled){
			win.panelSaveInstructions.inputFileName.enabled = true;
			aDeviceToEdit.getSaveInstruction().enableFileName(true);
		}
		else if(!win.panelSaveInstructions.checkboxFileName.value && win.panelSaveInstructions.inputFileName.enabled){
			win.panelSaveInstructions.inputFileName.enabled = false;
			aDeviceToEdit.getSaveInstruction().enableFileName(false);

		}

		changeDetected = true;
	}

	win.panelSaveInstructions.checkboxFilePrefix.onClick = function(){
		if(win.panelSaveInstructions.checkboxFilePrefix.value && !win.panelSaveInstructions.inputFilePrefix.enabled){
			win.panelSaveInstructions.inputFilePrefix.enabled = true;
			aDeviceToEdit.getSaveInstruction().enableFilePrefix(true);
		}
		else if(!win.panelSaveInstructions.checkboxFilePrefix.value && win.panelSaveInstructions.inputFilePrefix.enabled){
			win.panelSaveInstructions.inputFilePrefix.enabled = false;
			aDeviceToEdit.getSaveInstruction().enableFilePrefix(false);

		}

		changeDetected = true;
	}


	win.panelSaveInstructions.checkboxFileSuffix.onClick = function(){
		if(win.panelSaveInstructions.checkboxFileSuffix.value && !win.panelSaveInstructions.inputFileSuffix.enabled){
			win.panelSaveInstructions.inputFileSuffix.enabled = true;
			aDeviceToEdit.getSaveInstruction().enableFileSuffix(true);

		}
		else if(!win.panelSaveInstructions.checkboxFileSuffix.value && win.panelSaveInstructions.inputFileSuffix.enabled){
			win.panelSaveInstructions.inputFileSuffix.enabled = false;
			aDeviceToEdit.getSaveInstruction().enableFileSuffix(false);

		}

		changeDetected = true;
	}

	win.buttonAdd.onClick = function(){

		
		if(validateInputForAddEditDevice(win)){
		
			if(validateAndProcessInputSaveInstruction(win,aDeviceToEdit)){

				if(win.inputName.text.localeCompare(aDeviceToEdit.getName()) != 0)
					changeDetected = true;
				else
				if(win.inputWidth.text.localeCompare(aDeviceToEdit.getWidth()) != 0)
					changeDetected = true;
				else
				if(win.inputHeight.text.localeCompare(aDeviceToEdit.getHeight()) != 0)
					changeDetected = true;
				else
				if(win.inputPPI.text.localeCompare(aDeviceToEdit.getPPI()) != 0)
					changeDetected = true;
				else
				if(win.panelSaveInstructions.inputFolderName.text.localeCompare(aDeviceToEdit.getSaveInstruction().getFolderName()) != 0)
					changeDetected = true;
				else
				if(win.panelSaveInstructions.inputFileName.text.localeCompare(aDeviceToEdit.getSaveInstruction().getFileName()) != 0)
					changeDetected = true;
				else
				if(win.panelSaveInstructions.inputFilePrefix.text.localeCompare(aDeviceToEdit.getSaveInstruction().getFilePrefix()) != 0)
					changeDetected = true;
				else
				if(win.panelSaveInstructions.inputFileSuffix.text.localeCompare(aDeviceToEdit.getSaveInstruction().getFileSuffix()) != 0)
					changeDetected = true;
				else
				if(win.checkboxMakeSource.value != aDeviceToEdit.getSrcDisplay())
					changeDetected = true;

				aDeviceToEdit.setName(win.inputName.text);
				aDeviceToEdit.setWidth(win.inputWidth.text.valueOf());
				aDeviceToEdit.setHeight(win.inputHeight.text.valueOf());
				aDeviceToEdit.setPPI(win.inputPPI.text.valueOf());
				aDeviceToEdit.setSrcDisplay(win.checkboxMakeSource.value);

				aDeviceToEdit.getSaveInstruction().setFolderName(win.panelSaveInstructions.inputFolderName.text);
				aDeviceToEdit.getSaveInstruction().setFileName(win.panelSaveInstructions.inputFileName.text);
				aDeviceToEdit.getSaveInstruction().setFilePrefix(win.panelSaveInstructions.inputFilePrefix.text);
				aDeviceToEdit.getSaveInstruction().setFileSuffix(win.panelSaveInstructions.inputFileSuffix.text);
			}

		}

		win.close();
	};

	win.show();

	return changeDetected;
}

function validateAndProcessInputSaveInstruction(windowObject,aDevice){
	var isValid = true;
	var win = windowObject;

		if(win.panelSaveInstructions.checkboxFolderName.value){
			if(win.panelSaveInstructions.inputFolderName.text === " " || win.panelSaveInstructions.inputFolderName.text === ""){
				alert("Folder Name - cannot be empty when enabled");
				isValid = false;
			}
		}

		if(win.panelSaveInstructions.checkboxFilePrefix.value){
			if(win.panelSaveInstructions.inputFilePrefix.text === " " || win.panelSaveInstructions.inputFilePrefix.text === ""){
				alert("File Prefix - cannot be empty when enabled");
				isValid = false;
			}
	
		}
		
		if(win.panelSaveInstructions.checkboxFileSuffix.value){
			if(win.panelSaveInstructions.inputFileSuffix.text === " " || win.panelSaveInstructions.inputFileSuffix.text === ""){
				alert("File Suffix - cannot be empty when enabled");
				isValid = false;
			}
		}

	return isValid;
}


function validateInputForAddEditDevice(dialogObject){
	
	var isValid = false;
	var win = dialogObject;

	if(win.inputName.text === " " || win.inputName.text === ""){
			alert("Name - cannot be empty");
	}else
	if(isNaN(win.inputWidth.text.valueOf()) || win.inputWidth.text.valueOf() < 1)
		alert("Width - cannot be 0 or letter");
	else
	if(isNaN(win.inputHeight.text.valueOf()) || win.inputHeight.text.valueOf() < 1)
		alert("Height - cannot be 0 or letter");
	else
	if(isNaN( win.inputPPI.text.valueOf()) ||  win.inputPPI.text.valueOf() < 1)
		alert("PPI - cannot be 0 or letter");
	else 
		isValid = true;

	return isValid;
}

function initSaveInstructionForEditDevice(aDevice,dialogObject){
	var win = dialogObject;

	win.panelSaveInstructions.inputFolderName.text = aDevice.getSaveInstruction().getFolderName();

	if(aDevice.getSaveInstruction().isFolderName()){
		win.panelSaveInstructions.checkboxFolderName.value = true;
		win.panelSaveInstructions.inputFolderName.enabled = true;
	}

	win.panelSaveInstructions.inputFileName.text = aDevice.getSaveInstruction().getFileName();

	if(aDevice.getSaveInstruction().isFileName()){
		win.panelSaveInstructions.checkboxFileName.value = true;
		win.panelSaveInstructions.inputFileName.enabled = true;
	}

	win.panelSaveInstructions.inputFilePrefix.text = aDevice.getSaveInstruction().getFilePrefix();

	if(aDevice.getSaveInstruction().isFilePrefix()){
		win.panelSaveInstructions.checkboxFilePrefix.value = true;
		win.panelSaveInstructions.inputFilePrefix.enabled = true;
	}

	win.panelSaveInstructions.inputFileSuffix.text = aDevice.getSaveInstruction().getFileSuffix();

	if(aDevice.getSaveInstruction().isFileSuffix()){
		win.panelSaveInstructions.checkboxFileSuffix.value = true;
		win.panelSaveInstructions.inputFileSuffix.enabled = true;
	}
}


function createWindowForAddEditDevice(aWindowText,aButtonCancelText,aButtonOkayText){
	var win = new Window('dialog',aWindowText,Bounds(0,0,430, 240));
	win.center();
	win.panelSaveInstructions = win.add('panel',Bounds(220,9,200,220),"Save Instructions");

	var xPosFolderName = 10;
	var yPosFolderName = 20;

	win.panelSaveInstructions.checkboxFolderName = win.panelSaveInstructions.add('checkbox',Bounds(xPosFolderName,yPosFolderName,120,20),"Folder Name");
	win.panelSaveInstructions.checkboxFolderName.helpTip = "Enable if you want to override the default folder name. MUST BE A UNIQUE FOLDER NAME for each device.";

	win.panelSaveInstructions.inputFolderName = win.panelSaveInstructions.add('edittext',Bounds(xPosFolderName,yPosFolderName+20,175,20));
	win.panelSaveInstructions.inputFolderName.enabled = false;

	win.panelSaveInstructions.checkboxFileName = win.panelSaveInstructions.add('checkbox',Bounds(xPosFolderName,yPosFolderName+45,120,20),"File Name");
	win.panelSaveInstructions.checkboxFileName.helpTip = "Enable if you want to override default filename (which is the Layer name).";

	win.panelSaveInstructions.inputFileName = win.panelSaveInstructions.add('edittext',Bounds(xPosFolderName,yPosFolderName+65,175,20));
	win.panelSaveInstructions.inputFileName.enabled = false;

	win.panelSaveInstructions.checkboxFilePrefix = win.panelSaveInstructions.add('checkbox',Bounds(xPosFolderName,yPosFolderName+90,120,20),"File Prefix");
	win.panelSaveInstructions.checkboxFilePrefix.helpTip = "Enable if you want to add a prefix for each file save in the folder.";

	win.panelSaveInstructions.inputFilePrefix = win.panelSaveInstructions.add('edittext',Bounds(xPosFolderName,yPosFolderName+110,175,20));
	win.panelSaveInstructions.inputFilePrefix.enabled = false;

	win.panelSaveInstructions.checkboxFileSuffix = win.panelSaveInstructions.add('checkbox',Bounds(xPosFolderName,yPosFolderName+130,120,20),"File Suffix");
	win.panelSaveInstructions.checkboxFileSuffix.helpTip = "Enable if you want to add a suffix for each file save in the folder.";

	win.panelSaveInstructions.inputFileSuffix = win.panelSaveInstructions.add('edittext',Bounds(xPosFolderName,yPosFolderName+155,175,20));
	win.panelSaveInstructions.inputFileSuffix.enabled = false;

	win.add('statictext',Bounds(10,20,40,15),"Name:");
	win.inputName = win.add('edittext',Bounds(55,15,155,20));
	win.inputName.justify = 'center';
	win.inputName.helpTip = "The name shown in the dropdown menu. Also, the default folder name when Save Instructions folder name is disabled."

	win.add('statictext',Bounds(35,45,15,15),"W:");
	win.add('statictext',Bounds(155,45,15,15),"px");
	win.inputWidth = win.add('edittext',Bounds(55,45,95,20));
	win.inputWidth.justify = 'center';

	win.add('statictext',Bounds(36,75,15,15),"H:");
	win.add('statictext',Bounds(155,75,15,15),"px");
	win.inputHeight = win.add('edittext',Bounds(55,75,95,20));
	win.inputHeight.justify = 'center';

	win.add('statictext',Bounds(27,105,22,15),"PPI:");
	win.inputPPI = win.add('edittext',Bounds(55,105,95,20));
	win.inputPPI.justify = 'center';

	win.checkboxMakeSource = win.add('checkbox',Bounds(38,155,130,20),"Make Source");
	win.checkboxMakeSource.helpTip = "Enable to display device in the Source Device Size dropdown list.";

	win.buttonCancel = win.add('button',Bounds(38,203,70,25),aButtonCancelText);
	
	win.buttonAdd = win.add('button',Bounds(112,203,70,25),aButtonOkayText);

	return win;
}

function addNewDeviceSet(){

	var newDeviceSet;

	var len = 0;
	var i = 0;

	newDeviceSet = new TDeviceSet();
	newDeviceSet.setUID(Math.random());

	var win = createWindowForAddEditDeviceSet("Create New Device Size Set","Cancel","Create");

	win.inputName.helpTip = "The name shown in the dropdown menu.";

	win.buttonMinusDestinationDevice.onClick = function(){
		var indexSelected = win.listBox.selection.index;
		
		var answer = confirm("Delete Device? This will permanently remove the device from the list.",true);

		if(answer){
			if(newDeviceSet.length())
				newDeviceSet.remove(indexSelected);

			if(win.listBox.items.length)
				win.listBox.remove(indexSelected);

			if(indexSelected+1 >= win.listBox.items.length)
				win.listBox.selection = win.listBox.items[win.listBox.items.length-1];
			else if(indexSelected-1<=0)
				win.listBox.selection = win.listBox.items[0];
			else
				win.listBox.selection = win.listBox.items[indexSelected];
		}
	};

	win.buttonPlusDestinationDevice.onClick = function(){
		var device = addNewDevice();

		if(device){
			newDeviceSet.add(device);
			win.displayDeviceInfoInListBox(device);
		}else 
			win.updateDisplayDeviceInfoInListBox(newDeviceSet);

	};

	win.iconButtonEdit.onClick = function(){
		if(editDevice(newDeviceSet.get(win.listBox.selection.index))){
			win.updateDisplayDeviceInfoInListBox(newDeviceSet);
		}
	};

	win.buttonCancel.onClick = function(){
		newDeviceSet = null;
		win.close();
	};

	win.buttonAdd.onClick = function(){
		
		if(win.inputName.text === " " || win.inputName.text === "")
			alert("Name - cannot be empty");

		else if(newDeviceSet.length() == 0)
			alert("Cannot add an empty set.");

		else {

			applyModeSettings(win,newDeviceSet);

			newDeviceSet.setName(win.inputName.text);
			win.close();
		}
	};
	
	win.show();

	return newDeviceSet;
}

function editDeviceSet(aDeviceSetToEdit,aDeviceSetBackendToUpdate){
	var len = 0;
	var i = 0;
	var countModeNormal = 0;
	var countModeIcon = 0;
	var changeDetected = false;


	var win = createWindowForAddEditDeviceSet("Edit Device Set","Cancel","Done");
	win.inputName.text = aDeviceSetToEdit.getName();

	len = aDeviceSetToEdit.length();

	if(len){
		for(i=0;i<len;i++)
			win.displayDeviceInfoInListBox(aDeviceSetToEdit.get(i));
	}

	if(aDeviceSetToEdit.getMode() == MODE_NORMAL)
		win.radioModeNormal.value = true;
	else if(aDeviceSetToEdit.getMode() == MODE_ICON)
		win.radioModeIcon.value = true;

	win.buttonPlusDestinationDevice.onClick = function(){
		var device = addNewDevice();

		if(device){
			changeDetected = true;
			aDeviceSetToEdit.add(device);
			win.displayDeviceInfoInListBox(device);
		}else win.updateDisplayDeviceInfoInListBox(aDeviceSetToEdit);
	};

	win.buttonMinusDestinationDevice.onClick = function(){
		var indexSelected = win.listBox.selection.index;
		
		var answer = confirm("Delete Device? This will permanently remove the device from the list.",true);

		if(answer){
			
			changeDetected = true;

			if(aDeviceSetToEdit.length())
				aDeviceSetToEdit.remove(indexSelected);

			if(win.listBox.items.length)
				win.listBox.remove(indexSelected);

			if(indexSelected+1 >= win.listBox.items.length)
				win.listBox.selection = win.listBox.items[win.listBox.items.length-1];
			else if(indexSelected-1<=0)
				win.listBox.selection = win.listBox.items[0];
			else
				win.listBox.selection = win.listBox.items[indexSelected];
		}
	};

	win.radioModeNormal.onClick = function(){
		changeDetected = true;
	}

	win.radioModeIcon.onClick = function(){
		changeDetected = true;
	}

	win.iconButtonEdit.onClick = function(){

		if(editDevice(aDeviceSetToEdit.get(win.listBox.selection.index))){

			win.updateDisplayDeviceInfoInListBox(aDeviceSetToEdit);
			changeDetected = true;

		}
	};

	win.buttonCancel.onClick = function(){
		if(aDeviceSetToEdit.length() == 0)
			alert("Exiting with an empty device list will remove the device set from the dropdown list.");
		win.close();
	};

	win.buttonAdd.onClick = function(){
		
		if(win.inputName.text === " " || win.inputName.text === "")
			alert("Name - cannot be empty");

		else if(aDeviceSetToEdit.length() == 0)
			alert("Cannot add an empty set.");
		else {

			applyModeSettings(win,aDeviceSetToEdit);

			var changedSetName = aDeviceSetToEdit.getName();

			if(changedSetName.localeCompare(win.inputName.text) != 0){

				changeDetected = true;
				aDeviceSetToEdit.setName(win.inputName.text);
			}

			win.close();
		}
	};


	win.show();

	return changeDetected;
}

function applyModeSettings(controlObject,aDeviceSet){
	var win = controlObject;
	var i = 0;

	if(win.radioModeNormal.value)
		aDeviceSet.setMode(MODE_NORMAL);
	else if(win.radioModeIcon.value)
		aDeviceSet.setMode(MODE_ICON);
}


function createWindowForAddEditDeviceSet(aWindowText,aButtonCancelText,aButtonOkayText){
		var currentScriptFolder = getCurrentScriptFolder();

	var win = new Window('dialog',aWindowText,Bounds(0,0,400,335));
	win.center();

	win.add('statictext',Bounds(10,18,40,15),"Name:");
	win.inputName = win.add('edittext',Bounds(55,14,205,20));
	win.inputName.justify = 'center';

	win.add('statictext',Bounds(10,45,50,15),"Mode:");

	win.groupMode = win.add('group',Bounds(55,42,200,20));

	win.radioModeNormal = win.groupMode.add('radiobutton',Bounds(0,0,70,20),"normal");
	win.radioModeNormal.value = true;
	win.radioModeIcon = win.groupMode.add('radiobutton',Bounds(70,0,50,20),"icon");

	win.listBox = win.add('listbox',Bounds(10,70, 380,210));

	win.buttonMinusDestinationDevice = win.add('button',Bounds(320,15,20,20),"-");
	win.buttonPlusDestinationDevice = win.add('button',Bounds(345,15,20,20),"+");
	win.iconButtonEdit = win.add('iconbutton',Bounds(370,15,20,20),
		new File(currentScriptFolder+'/settings-20.png'),
		{style:'toolbutton'});
	win.iconButtonEdit.helpTip = "Edit Layer's Additional Resize Instruction";


	win.buttonCancel = win.add('button',Bounds(128,300,70,25),aButtonCancelText);
	win.buttonAdd = win.add('button',Bounds(202,300,70,25),aButtonOkayText);

	win.displayDeviceInfoInListBox = function(aDevice){

		win.listBox.add('item',(aDevice.name + ",  " + 
							    aDevice.width + "x" + 
							    aDevice.height + ",  " + 
							    aDevice.ppi + "ppi, FN: " +
		((aDevice.saveInstruction.getFolderName().localeCompare("null")?aDevice.saveInstruction.getFolderName():"")) + ", FP: " +
	    ((aDevice.saveInstruction.getFilePrefix().localeCompare("null")?aDevice.saveInstruction.getFilePrefix():"")) + ", FS: " +
	    ((aDevice.saveInstruction.getFileSuffix().localeCompare("null")?aDevice.saveInstruction.getFileSuffix():""))));
	};

	win.updateDisplayDeviceInfoInListBox = function(aDeviceSet){
		var i = 0;
		var len = aDeviceSet.length();

		win.listBox.removeAll();
		for(i=0;i<len;i++)
			win.displayDeviceInfoInListBox(aDeviceSet.get(i));
	};

	return win;
}



function addInstruction(){

	var newInstruction = null;

	var win = createWindowForAddInstruction();

	win.buttonOkay.onClick = function(){
		newInstruction = new TInstruction(win.radioWidth.value,
										  win.radioHeight.value,
										  win.checkboxProportion.value,
										  win.radioRW.value,
										  win.radioRH.value,
										  win.checkboxTrim.value);
		win.close();
	};

	win.buttonCancel.onClick = function(){
		newInstruction = null;

		win.close();
	};


	win.show();

	return newInstruction;
}

function createWindowForAddInstruction(){
	var leftMargin = 10;
	
	var yPosPanelItem = 20;
	var xPosPanelItem = leftMargin;
	var xPosGroupWidthOrHeight = 0;
	var yPosGroupWidthOrHeight = 0;
	var xPosGroupRatio = 0;
	var yPosGroupRatio = 0;
	var xPosCheckboxTrim = xPosPanelItem;
	var yPosCheckboxTrim = 70;
	var xPosButtonsCancelOkay = (250/2)-72;
	var yPosButtonsCancelOkay = 140;

	var win = new Window('dialog','Add Resize Instruction',Bounds(0,0,250,180));

	win.center();

	win.panelProperty = win.add('panel',Bounds(leftMargin,10,230,110),"Resize Instruction");

	win.groupWidthOrHeight = win.panelProperty.add('group',Bounds(xPosPanelItem,yPosPanelItem,200,15));

	win.radioWidth = win.groupWidthOrHeight.add('radiobutton',Bounds(xPosGroupWidthOrHeight,yPosGroupWidthOrHeight,30,15),"W");
	win.radioWidth.value = true;
	win.radioWidth.helpTip = "Resize Width";

	win.radioHeight = win.groupWidthOrHeight.add('radiobutton',Bounds(xPosGroupWidthOrHeight+40,yPosGroupWidthOrHeight,30,15),"H");
	win.radioHeight.helpTip = "Resize Height";

	win.checkboxProportion = win.groupWidthOrHeight.add('checkbox',Bounds(xPosGroupWidthOrHeight+80,yPosGroupWidthOrHeight,30,15),"P");
	win.checkboxProportion.helpTip = "Constrain Proportions";

	win.groupRatio = win.panelProperty.add('group',Bounds(xPosPanelItem,yPosPanelItem+25,200,17));

	win.radioRW = win.groupRatio.add('radiobutton',Bounds(xPosGroupRatio,yPosGroupRatio,40,15),"RW");
	win.radioRW.value = true;
	win.radioRW.helpTip = "Use Width Ratio";

	win.radioRH = win.groupRatio.add('radiobutton',Bounds(xPosGroupRatio+40,yPosGroupRatio,40,15),"RH");
	win.radioRH.helpTip = "Use Height Ratio";

	win.checkboxTrim = win.panelProperty.add('checkbox',Bounds(xPosCheckboxTrim,yPosCheckboxTrim,50,15),"Trim");
	win.checkboxTrim.helpTip = "Remove transparent pixels around image";

	win.buttonCancel = win.add('button',Bounds(xPosButtonsCancelOkay,yPosButtonsCancelOkay,70,25),"Cancel");
	win.buttonOkay = win.add('button',Bounds(xPosButtonsCancelOkay+74,yPosButtonsCancelOkay,70,25),"OK");

	return win;
}


function editLayerProperty(layerToEdit){

	if(!(layerToEdit instanceof TLayer)){
		alert("editLayerProperty - parameter must be of type TLayer");
		return;
	}

	var leftMargin = 10;
	var yPosDropdown = 80;
	var xPosButtonsCancelOkay = 165;
	var yPosButtonsCancelOkay = yPosDropdown + 240;
	var xPosButtonPlusMinus = 266;
	var yPosButtonPlusMinus = yPosDropdown + 45;

	var newInstruction = null;

	var i = 0;
	var j = 0;
	var length = 0;
	var text = "";

	var win = new Window('dialog','Edit Layer Property',Bounds(0,0,320,360));
	win.center();

	function showInstruction(index){
		var i = 0;
		var len = layerToEdit.getProperty(index).length();
		var text = "";

		win.listBox.removeAll();

		for(i=0;i<len;i++){
			text = layerToEdit.getProperty(index).getInstruction(i).toString();
			win.listBox.add('item',text);
		}
	}
	
	win.textDropDownDestinationDevice = win.add('statictext',Bounds(leftMargin,18,40,15),"Name:");
	win.inputName = win.add('edittext',Bounds(55,14,205,20));
	win.inputName.justify = 'center';
	win.inputName.text = layerToEdit.getName();
	win.inputName.enabled = false;

	win.textDropDownDestinationDevice = win.add('statictext',Bounds(leftMargin,yPosDropdown-4,200,15),"Devices");
	win.dropdown_deviceSet = win.add('dropdownlist',Bounds(leftMargin,yPosDropdown+15,300,20));

	win.buttonCancel = win.add('button',Bounds(xPosButtonsCancelOkay,yPosButtonsCancelOkay,70,25),"Cancel");
	win.buttonOkay = win.add('button',Bounds(xPosButtonsCancelOkay+74,yPosButtonsCancelOkay,70,25),"OK");

	win.listBox = win.add('listbox',Bounds(leftMargin,yPosButtonPlusMinus+22,300,150));

	win.textbuttonMinus = win.add('statictext',Bounds(leftMargin,yPosButtonPlusMinus+2,200,15),"Instructions");

	win.buttonPlusDestinationDevice = win.add('button',Bounds(xPosButtonPlusMinus+24,yPosButtonPlusMinus,20,20),"+");
	win.buttonMinusDestinationDevice = win.add('button',Bounds(xPosButtonPlusMinus,yPosButtonPlusMinus,20,20),"-");

	length = layerToEdit.length();

	for(i=0;i<length;i++){
		text = layerToEdit.getProperty(i).getDevice().getName();
		win.dropdown_deviceSet.add('item',text);
	}

	win.dropdown_deviceSet.selection = win.dropdown_deviceSet.items[0];

	showInstruction(0);

	win.dropdown_deviceSet.onChange = function(){
		showInstruction(win.dropdown_deviceSet.selection.index);
	}

	win.buttonOkay.onClick = function(){
		
		win.close(0);
	};

	win.buttonCancel.onClick = function(){
		
		win.close(0);
	};

	win.buttonPlusDestinationDevice.onClick = function(){
		newInstruction = addInstruction();
		if(newInstruction !== null){
			layerToEdit.getProperty(win.dropdown_deviceSet.selection.index).addInstruction(newInstruction);
			showInstruction(win.dropdown_deviceSet.selection.index);
		}
	};

	win.buttonMinusDestinationDevice.onClick = function(){
		var indexSelected = win.listBox.selection.index;

		layerToEdit.getProperty(win.dropdown_deviceSet.selection.index).removeInstruction(indexSelected);
		win.listBox.remove(indexSelected);

		if(indexSelected+1 >= win.listBox.items.length)
			win.listBox.selection = win.listBox.items[win.listBox.items.length-1];
		else if(indexSelected-1<=0)
			win.listBox.selection = win.listBox.items[0];
		else
			win.listBox.selection = win.listBox.items[indexSelected];

		showInstruction(win.dropdown_deviceSet.selection.index);
	};
	
	win.show();
}

function updateDropdownDestinationDevice(selectedSet,controlObject,withDeviceSet){

	var len = controlObject.items.length;
	var tempStr = controlObject.items[0].text;

	controlObject.removeAll();		
	controlObject.add('item',tempStr);			

	if(len > 0){
		for(i = 1; i < len; i++){
			controlObject.add('item',withDeviceSet[i].getName());			
		}
	}

	controlObject.items[selectedSet].selected = true;
}

function updateDropdownSourceDevice(backendSrcIndexes,backendArray,controlObject,withDeviceSet){

    var len = backendArray.length;
    var i = 0;

    clearArray(backendArray);
    clearArray(backendSrcIndexes);

    controlObject.removeAll();

    len = withDeviceSet.length();

	for(i=1;i<len;i++){
		
		tempSet = withDeviceSet.get(i);
		
		for(j=0;j<tempSet.length();j++){
			tempDevice = tempSet.get(j);

			if(tempDevice.getSrcDisplay()){
				var info = tempDevice.name + ", " + tempDevice.width + "x" + tempDevice.height + ", " + tempDevice.ppi + "ppi";
				controlObject.add('item',info);
				var srcIndex = backendArray.push(tempDevice);
				// alert("SRC INDEX: " + srcIndex);
				backendSrcIndexes.push(srcIndex-1);

			}else{
				backendArray.push(tempDevice);
			}

		}
	}

	controlObject.selection = controlObject.items[0];	
}

function displayNinjaAbout(){

	var theProduct = "Sprite Ninja";
	var theAuthor = "Written by: Lemark Sibala";
	var theEmail = "lemarksibala@gmail.com";
	var theDate = "Coffeeright 2015, Version 1.0.1"; 

	var winWidth = 250;
	var winHeight = 150;

	var win = new Window('dialog','About Sprite Ninja',Bounds(0,0,winWidth,winHeight));

	win.center();

	var textWidth = theProduct.length*6;
	var xPosText = (winWidth/2)-(textWidth/2);
	var yPosText = 20;

	win.lineOne = win.add('statictext',Bounds(xPosText,yPosText,textWidth,15),theProduct);

	textWidth = theAuthor.length*6.5;
	xPosText = (winWidth/2)-(textWidth/2);
	win.lineTwo = win.add('statictext',Bounds(xPosText,yPosText+20,textWidth,15),theAuthor);

	textWidth = theEmail.length*7.5;
	xPosText = (winWidth/2)-(textWidth/2);
	win.lineThree = win.add('statictext',Bounds(xPosText,yPosText+40,textWidth,15),theEmail);


	textWidth = theDate.length*6.5;
	xPosText = (winWidth/2)-(textWidth/2);
	win.lineFour = win.add('statictext',Bounds(xPosText,yPosText+60,textWidth,15),theDate);

	var xPosButtonsCancelOkay = (winWidth/2)-35;
	var yPosButtonsCancelOkay = winHeight-40;

	win.buttonOkay = win.add('button',Bounds(xPosButtonsCancelOkay,yPosButtonsCancelOkay,70,25),"OK");

	win.buttonOkay.onClick = function(){
		win.close();
	}

	win.show();
}

function displayNinjaMessage(aMessage){

	if(!(typeof aMessage === 'string')){
		alert("desplayNinjaMessage - string parameter only.")
		return;
	}
	var result = false;
	var winWidth = 250;
	var winHeight = 150;
	var win = new Window('dialog','Ninja Message',Bounds(0,0,winWidth,winHeight));
	win.center();

	var textWidth = aMessage.length*8;
	var xPosText = (winWidth/2)-(textWidth/2);
	var yPosText = 50;
	win.ninjaMessageText = win.add('statictext',Bounds(xPosText,yPosText,textWidth,15),aMessage);

	var xPosButtonsCancelOkay = (winWidth/2)-35;
	var yPosButtonsCancelOkay = winHeight-50;

	win.buttonOkay = win.add('button',Bounds(xPosButtonsCancelOkay,yPosButtonsCancelOkay,70,25),"OK");

	win.buttonOkay.onClick = function(){
		result = true;
		win.close();
	}


	win.show();

	return result;
}

function checkLayerIsReady(arrayFromListBox,arrayFromBackend){
	var len = arrayFromListBox.length;
	var i = 0;

	for(i = 0; i < len; i++){
		if(arrayFromBackend[arrayFromListBox[i].index].length())
			return true;
	}

	return false;
}

function checkFolderIsReady(arrayOfFolders,aFolderSelectionIndex){
	var i = 0;

	if(arrayOfFolders.length === 0)
		return false;
	else if(arrayOfFolders[aFolderSelectionIndex] === "" || 
		    arrayOfFolders[aFolderSelectionIndex] === " " ||
		    arrayOfFolders[aFolderSelectionIndex] === undefined ||
		    arrayOfFolders[aFolderSelectionIndex] === null){

		return false;
	}

	return true;
}

function markListBoxLayer(isMark,listBoxSelection){
	var count = listBoxSelection.length;
	var str = "";
	var i = 0;

	for(i=0;i<count;i++){

		if(listBoxSelection[i].selected !== true)
			continue;

		str = new String(listBoxSelection[i].text);
		if(isMark === true){

			if(str.search(/^\*/) == -1){

				str = "* " + str;
				listBoxSelection[i].text = str;
			}

		}else if(isMark === false){
			if(str.search(/^\*/) != -1){
				str = str.substr(2);
				listBoxSelection[i].text = str;
			}
		}
	}
}


function createNewDocument(srcDocument){

	var result = app.documents.add(srcDocument.width,
									srcDocument.height,
									srcDocument.resolution,
									'temp'+srcDocument.name,
									NewDocumentMode.RGB,
									DocumentFill.TRANSPARENT,
									1.0,
									srcDocument.bitsPerChannel,
									srcDocument.colorPofileName);
	return result;
}

function resizeDocument(srcDocument,newWidth,newHeight,newPPI){
	var width = undefined; 
	var height = undefined;
	
	if(newWidth === 0 || newWidth === null || newWidth === undefined)
		width = undefined;
	else
		width = new UnitValue(newWidth,"px");

	if(newHeight === 0 || newHeight === null || newHeight === undefined)
		height = undefined;
	else
		height = new UnitValue(newHeight,"px");

	srcDocument.resizeImage(newWidth,newHeight,newPPI,ResampleMethod.BICUBIC,undefined);

}

function setActiveDocument(srcDocument){
	app.activeDocument = srcDocument;
}

function setActiveLayer(srcLayer){
	if(srcLayer.visible)
		srcLayer.parent.activeLayer = srcLayer;
}

function duplicateLayer(destDocument,srcLayer){
	var result = srcLayer.duplicate(destDocument,ElementPlacement.PLACEATBEGINNING);
	return result;
}

function trimDocument(srcDocument){
	srcDocument.trim(TrimType.TRANSPARENT,true,true,true,true);
}

function folderCreate(folderPath,folderName){
	
	var newFolder = null;
	newFolder = new Folder(Folder.encode(folderPath+'/'+folderName));
	if(!newFolder.exists){
		if(!newFolder.create())
			alert('Folder Create Failed!');
	}

	return newFolder;
}


function saveFileToFolder(srcDoc,aFolder,fileName,fileOptions){
	var file = new File(aFolder.absoluteURI+'/'+fileName);
	srcDoc.saveAs(file,fileOptions,true,Extension.LOWERCASE);
}

function getCurrentScriptFolder(){
	var currentScriptFolder = $.fileName.split("/");
	currentScriptFolder.pop();
	currentScriptFolder = currentScriptFolder.join("/");
	return currentScriptFolder;
}

function getVisibleLayerCount(){
	var len = 0;
	var count = 0;

	if(app.documents.length  != 0)
		len = app.activeDocument.layers.length;


	for(var i = 0; i < len; i++){
		if(app.activeDocument.layers[i].visible)
			count += 1;
	}

	return count;
}

