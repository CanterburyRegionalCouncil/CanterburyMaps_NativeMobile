/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
require({cache:{"url:esri/dijit/templates/Measurement.html":"<div class=\"esriMeasurement\">\r\n  <div dojoType='dijit.form.ToggleButton' baseClass='esriButton' dojoAttachPoint='area' checked='false' iconClass='areaIcon' showLabel='false' dojoAttachEvent='onClick:areaToggleButton'></div>\r\n  <div dojoType='dijit.form.ToggleButton' baseClass='esriButton' dojoAttachPoint='distance' iconClass='distanceIcon' showLabel='false' dojoAttachEvent='onClick:distanceToggleButton'></div>\r\n  <div dojoType='dijit.form.ToggleButton' baseClass='esriButton' dojoAttachPoint='location' iconClass='locationIcon' showLabel='false' dojoAttachEvent='onClick:locationToggleButton'></div>\r\n  <div style=\"display:inline;margin-left:2px;margin-right:2px;padding-top:2px;\">|</div>\r\n  <button dojoType='dijit.form.DropDownButton' baseClass='esriToggleButton' dojoAttachPoint='unit' label='unit' value='unit' style='visibility:hidden;'></button>\r\n  <div dojoType='dijit.layout.ContentPane' dojoAttachPoint='resultLabel' class='resultLabel'></div>\r\n  <div dojoType='dijit.layout.ContentPane' dojoAttachPoint='resultValue' align='left' class='result'></div>\r\n</div>"}});define("esri/dijit/Measurement",["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/Color","dojo/has","dojo/number","dojo/dom-style","dijit/_Widget","dijit/_Templated","dijit/registry","dijit/Menu","dijit/MenuItem","esri/SpatialReference","esri/symbols/PictureMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/geometry/geodesicUtils","esri/geometry/webMercatorUtils","esri/geometry/Point","esri/geometry/Polyline","esri/geometry/Polygon","esri/graphic","esri/tasks/AreasAndLengthsParameters","esri/tasks/LengthsParameters","esri/tasks/GeometryService","esri/kernel","esri/config","esri/domUtils","esri/lang","esri/units","esri/WKIDUnitConversion","dojo/text!esri/dijit/templates/Measurement.html","dojo/i18n!esri/nls/jsapi","dijit/form/ToggleButton","dijit/form/DropDownButton","dijit/layout/ContentPane"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_1a,_1b,_1c,_1d,_1e,_1f,_20,_21,_22){var _23=_2([_a,_b],{declaredClass:"esri.dijit.Measurement",widgetsInTemplate:true,templateString:_21,unitDictionary:[],result:null,inputPoints:[],measureGraphics:[],numberPattern:"#,###,###,##0.0",constructor:function(_24,_25){_24=_24||{};if(!_24.map){console.log("dijit.MeasureTool: unable to find the 'map' property in parameters");return;}this._map=_24.map;this._map.cs=this._checkCS(this._map.spatialReference);this._geometryService=_1c.defaults.geometryService;if(_24.pointSymbol){this._pointSymbol=_24.pointSymbol;}else{var url=_1.toUrl("esri/dijit/images/flag.png");this._pointSymbol=new _10(url,24,24);this._pointSymbol.setOffset(9,11);}if(_24.lineSymbol){this._lineSymbol=_24.lineSymbol;}else{this._lineSymbol=new _11(_11.STYLE_SOLID,new _6([0,128,255]),3);}if(_24.defaultLengthUnit){this._defaultLengthUnit=_24.defaultLengthUnit;}else{this._defaultLengthUnit=_1f.MILES;}if(_24.defaultAreaUnit){this._defaultAreaUnit=_24.defaultAreaUnit;}else{this._defaultAreaUnit=_1f.ACRES;}if(_24.defaultLocationUnit){this._defaultLocationUnit=_24.defaultLocationUnit;}else{this._defaultLocationUnit=_1f.DECIMAL_DEGREES;}this._snappingCallback=_3.hitch(this,this._snappingCallback);},startup:function(){var _26=_22.widgets.measurement;this.unitDictionary[_26.NLS_length_miles]=1;this.unitDictionary[_26.NLS_length_kilometers]=1.609344;this.unitDictionary[_26.NLS_length_feet]=5280;this.unitDictionary[_26.NLS_length_meters]=1609.34;this.unitDictionary[_26.NLS_length_yards]=1760;this.unitDictionary["Nautical Miles"]=0.869;this.unitDictionary[_26.NLS_area_acres]=1;this.unitDictionary[_26.NLS_area_sq_kilometers]=0.004047;this.unitDictionary[_26.NLS_area_sq_miles]=0.0015625;this.unitDictionary[_26.NLS_area_sq_feet]=43560;this.unitDictionary[_26.NLS_area_sq_meters]=4046.87;this.unitDictionary[_26.NLS_area_hectares]=0.4047;this.unitDictionary[_26.NLS_area_sq_yards]=4840;this.units={"esriMiles":_26.NLS_length_miles,"esriKilometers":_26.NLS_length_kilometers,"esriFeet":_26.NLS_length_feet,"esriMeters":_26.NLS_length_meters,"esriYards":_26.NLS_length_yards,"esriAcres":_26.NLS_area_acres,"esriSquareKilometers":_26.NLS_area_sq_kilometers,"esriSquareMiles":_26.NLS_area_sq_miles,"esriSquareFeet":_26.NLS_area_sq_feet,"esriSquareMeters":_26.NLS_area_sq_meters,"esriHectares":_26.NLS_area_hectares,"esriSquareYards":_26.NLS_area_sq_yards,"esriDecimalDegrees":_26.NLS_decimal_degrees,"esriDegreeMinuteSeconds":_26.NLS_deg_min_sec};_c.byNode(this.distance.domNode).setLabel(_22.widgets.measurement.NLS_distance);_c.byNode(this.area.domNode).setLabel(_22.widgets.measurement.NLS_area);_c.byNode(this.location.domNode).setLabel(_22.widgets.measurement.NLS_location);_c.byNode(this.resultLabel.domNode).setContent(_22.widgets.measurement.NLS_resultLabel);},measureArea:function(){this._map.navigationManager.setImmediateClick(true);this._createAreaUnitList();this.inputPoints=[];this.tempGraphic=new _17();this.tempGraphic.setSymbol(this._lineSymbol);this.tempGraphic.setGeometry(new _15(this._map.spatialReference));this._map.graphics.add(this.tempGraphic);if(this._map.cs==="PCS"){this._geometryAreaHandler=_5.connect(this._geometryService,"onAreasAndLengthsComplete",this,"_outputArea");}this.mouseClickMapHandler=_5.connect(this._map,"onClick",this,"_measureAreaMouseClickHandler");this.doubleClickMapHandler=_5.connect(this._map,"onDblClick",this,"_measureAreaDblClickHandler");},measureDistance:function(){this._map.navigationManager.setImmediateClick(true);if(this._map.cs==="PCS"){this._projectMapExtent(this._map.extent);this._mapExtentChangeHandler=_5.connect(this._map,"onExtentChange",this,"_projectMapExtent");}this.inputPoints=[];this._createLengthUnitList();this.mouseClickMapHandler=_5.connect(this._map,"onClick",this,"_measureDistanceMouseClickHandler");this.doubleClickMapHandler=_5.connect(this._map,"onDblClick",this,"_measureDistanceDblClickHandler");},measureLocation:function(){this._map.navigationManager.setImmediateClick(true);this.measureGraphics=[];this._createLocationUnitList();this._map.graphics.remove(this.locationGraphic);if(this._map.cs==="PCS"){this._projectMapExtent(this._map.extent);this._mapExtentChangeHandler=_5.connect(this._map,"onExtentChange",_3.hitch(this,this._projectMapExtent));}this._clickMapHandler=_5.connect(this._map,"onClick",this,"_measureLocationClickHandler");this.mouseMoveMapHandler=_5.connect(this._map,"onMouseMove",this,"_showCoordinates");this.mouseDragMapHandler=_5.connect(this._map,"onMouseDrag",_3.hitch(this,function(){_c.byNode(this.resultValue.domNode).setAttribute("disabled",true);}));},setTool:function(_27,_28){this.closeTool();var _29=_c.byNode(this[_27].domNode).checked;_9.set(this.unit.domNode,"visibility","visible");_c.byNode(this.area.domNode).setAttribute("checked",false);_c.byNode(this.distance.domNode).setAttribute("checked",false);_c.byNode(this.location.domNode).setAttribute("checked",false);if(_28===true||_28===false){_29=_28;}_c.byNode(this[_27].domNode).setAttribute("checked",_29);if(_29){this.activeTool=_27;if(this.map.isDoubleClickZoom){this._map.disableDoubleClickZoom();}if(_27==="area"){this.measureArea();}else{if(_27==="distance"){this.measureDistance();}else{if(_27==="location"){this.measureLocation();}}}if(this._map.snappingManager){this._map.snappingManager._startSelectionLayerQuery();this._map.snappingManager._setUpSnapping();}}},areaToggleButton:function(){this.clearResult();this.setTool("area");},distanceToggleButton:function(){this.clearResult();this.setTool("distance");},locationToggleButton:function(){this.clearResult();this.setTool("location");},closeTool:function(){var map=this._map;map.navigationManager.setImmediateClick(false);if(!map.isDoubleClickZoom){map.enableDoubleClickZoom();}this.inputPoints=[];if(map.snappingManager&&map.snappingManager._snappingGraphic){map.graphics.remove(map.snappingManager._snappingGraphic);}_5.disconnect(this.mouseClickMapHandler);_5.disconnect(this.mouseMoveMapHandler);_5.disconnect(this.doubleClickMapHandler);_5.disconnect(this.mouseDragMapHandler);_5.disconnect(this._clickMapHandler);_5.disconnect(this._mapExtentChangeHandler);_5.disconnect(this._geometryAreaHandler);this.mouseClickMapHandler=this.mouseMoveMapHandler=this.doubleClickMapHandler=this.mouseDragMapHandler=this._clickMapHandler=this._mapExtentChangeHandler=this._geometryAreaHandler=null;if(this._map.snappingManager){this._map.snappingManager._stopSelectionLayerQuery();this._map.snappingManager._killOffSnapping();}},clearResult:function(){var map=this._map;this.result=0;_c.byNode(this.resultValue.domNode).setAttribute("content","");var i;for(i=0;i<this.measureGraphics.length;i++){map.graphics.remove(this.measureGraphics[i]);}this.measureGraphics=[];map.graphics.remove(this.tempGraphic);},show:function(){_1d.show(this.domNode);},hide:function(){_1d.hide(this.domNode);},showTool:function(_2a){var _2b=this[_2a].domNode;_2b.style.display="inline";},hideTool:function(_2c){var _2d=this[_2c].domNode;_2d.style.display="none";},destroy:function(){this.closeTool();this.clearResult();this.inherited(arguments);this._map=this._geometryService=this.measureGraphic=this.measureGraphic=this.tempGraphic=null;},onMeasureEnd:function(){},_densifyGeometry:function(_2e){if(this._map.cs==="Web Mercator"){_2e=_13.webMercatorToGeographic(_2e);}var _2f;if(this._map.cs==="PCS"){_2f=_2e;}else{_2f=_12.geodesicDensify(_2e,500000);}if(this._map.cs==="Web Mercator"){_2f=_13.geographicToWebMercator(_2f);}return _2f;},_measureAreaMouseClickHandler:function(evt){var _30;if(this._map.snappingManager){_30=this._map.snappingManager._snappingPoint;}var _31=_30||evt.mapPoint;this.inputPoints.push(_31);this._currentStartPt=_31;if(this.inputPoints.length===1){this.tempGraphic.setGeometry(new _15(this._map.spatialReference));var i;for(i=0;i<this.measureGraphics.length;i++){this._map.graphics.remove(this.measureGraphics[i]);}this.measureGraphics=[];this.result=0;this._outputResult(this.result,_22.widgets.measurement.NLS_area_acres);this.mouseMoveMapHandler=_5.connect(this._map,"onMouseMove",this,"_measureAreaMouseMoveHandler");}this.measureGraphic=new _17();this.measureGraphic.setSymbol(this._lineSymbol);this.measureGraphics.push(this.measureGraphic);if(this.inputPoints.length>1){var _32=new _15(this._map.spatialReference);_32.addPath([this.inputPoints[this.inputPoints.length-2],_31]);var _33=new _15(this._map.spatialReference);_33.addPath([this.inputPoints[0],_31]);var _34=this._densifyGeometry(_32);var _35=this._densifyGeometry(_33);this.tempGraphic.setGeometry(_35);this.measureGraphic.setGeometry(_34);this._map.graphics.add(this.measureGraphic);}},_measureAreaMouseMoveHandler:function(evt){var _36;if(this.inputPoints.length>0){var _37=new _15(this._map.spatialReference);var _38;if(this._map.snappingManager){_38=this._map.snappingManager._snappingPoint;}_36=_38||evt.mapPoint;_37.addPath([this._currentStartPt,_36]);var _39=this._densifyGeometry(_37);this.tempGraphic.setGeometry(_39);}if(this.inputPoints.length>1){var _3a=new _15(this._map.spatialReference);_3a.addPath([_36,this.inputPoints[0]]);var _3b=this._densifyGeometry(_3a);this.tempGraphic.setGeometry(this.tempGraphic.geometry.addPath(_3b.paths[0]));}},_measureAreaDblClickHandler:function(evt){_5.disconnect(this.mouseMoveMapHandler);this.mouseMoveMapHandler=null;var _3c=new _16(this._map.spatialReference);var _3d=[];var i;for(i=0;i<this.inputPoints.length;i++){_3d.push([this.inputPoints[i].x,this.inputPoints[i].y]);}_3d.push([this.inputPoints[0].x,this.inputPoints[0].y]);_3c.addRing(_3d);this.inputPoints=[];this.measurementGeometry=this._densifyGeometry(_3c);this._getArea(_3c);},_getArea:function(_3e){var _3f=[];var _40=new _18();_40.areaUnit=_1a.UNIT_ACRES;_40.calculationType="geodesic";if(_16.prototype.isSelfIntersecting(_3e)){this._geometryService.simplify([_3e],_3.hitch(this,function(_41){_4.forEach(_41,_3.hitch(this,function(_42,idx){if(this._map.cs==="PCS"){_40.polygons=_41;this._geometryService.areasAndLengths(_40);return;}else{if(this._map.cs==="Web Mercator"){_42=_13.webMercatorToGeographic(_42);}}_3f.push(_42);}));var _43=_12.geodesicAreas(_3f,_1f.ACRES);this._showArea(_43[0]);}));}else{if(this._map.cs==="Web Mercator"){_3e=_13.webMercatorToGeographic(_3e);}_3f.push(_3e);if(this._map.cs==="PCS"){_40.polygons=_3f;this._geometryService.areasAndLengths(_40);return;}var _44=_12.geodesicAreas(_3f,_1f.ACRES);this._showArea(Math.abs(_44[0]));}},_outputArea:function(_45){this._showArea(Math.abs(_45.areas[0]));},_showArea:function(_46){if(_46){this.result=_46;var _47=_c.byNode(this.unit.domNode).label;this._outputResult(this.result,_47);}this.onMeasureEnd(this.activeTool,this.measurementGeometry);},_measureDistanceDblClickHandler:function(evt){_5.disconnect(this.mouseMoveMapHandler);this.mouseMoveMapHandler=null;var _48=new _15(this._map.spatialReference);_48.addPath(this.inputPoints);_48=this._densifyGeometry(_48);if(this._map.cs==="PCS"){var _49=new _19();_49.polylines=[_48];_49.lengthUnit=9093;_49.calculationType="geodesic";this._geometryService.lengths(_49,_3.hitch(this,function(_4a){this.result=_4a.lengths[0];this._showDistance(this.result);}));}this.inputPoints=[];this.onMeasureEnd(this.activeTool,_48);},_measureDistanceMouseClickHandler:function(evt){var _4b;if(this._map.snappingManager){_4b=this._map.snappingManager._snappingPoint;}var _4c=_4b||evt.mapPoint;this.inputPoints.push(_4c);this._currentStartPt=_4c;if(this.inputPoints.length===1){var i;for(i=0;i<this.measureGraphics.length;i++){this._map.graphics.remove(this.measureGraphics[i]);}this._map.graphics.remove(this.tempGraphic);this.measureGraphics=[];this.result=0;this._outputResult(this.result,_22.widgets.measurement.NLS_length_miles);this.tempGraphic=new _17();this.tempGraphic.setSymbol(this._lineSymbol);this._map.graphics.add(this.tempGraphic);this.mouseMoveMapHandler=_5.connect(this._map,"onMouseMove",this,"_measureDistanceMouseMoveHandler");}this.tempGraphic.setGeometry(new _15(this._map.spatialReference));this.flagGraphic=new _17();this.flagGraphic.setSymbol(this._pointSymbol);this.flagGraphic.setGeometry(_4c);this.measureGraphics.push(this.flagGraphic);this._map.graphics.add(this.flagGraphic);if(this.inputPoints.length>1){this.measureGraphic=new _17();this.measureGraphic.setSymbol(this._lineSymbol);this.measureGraphics.push(this.measureGraphic);var _4d=new _15(this._map.spatialReference);_4d.addPath([this.inputPoints[this.inputPoints.length-2],_4c]);var _4e=this._densifyGeometry(_4d);this.measureGraphic.setGeometry(_4e);this._map.graphics.add(this.measureGraphic);this.result+=this._geodesicDistance(this.inputPoints[this.inputPoints.length-2],_4c);this._showDistance(this.result);}},_measureDistanceMouseMoveHandler:function(evt){if(this.inputPoints.length>0){var _4f=new _15(this._map.spatialReference);var _50;if(this._map.snappingManager){_50=this._map.snappingManager._snappingPoint;}var _51=_50||evt.mapPoint;_4f.addPath([this._currentStartPt,_51]);var _52=this._densifyGeometry(_4f);this.tempGraphic.setGeometry(_52);var _53=this._geodesicDistance(this._currentStartPt,_51);this._showDistance(_53+this.result);}},_geodesicDistance:function(pt1,pt2){var _54=new _15(this._map.spatialReference);if(this._map.cs==="PCS"){pt1=this._getGCSLocation(pt1);pt2=this._getGCSLocation(pt2);}_54.addPath([pt1,pt2]);if(this._map.cs==="Web Mercator"){_54=_13.webMercatorToGeographic(_54);}return _12.geodesicLengths([_54],_1f.MILES)[0];},_showDistance:function(_55){if(_55){this._outputResult(_55,_c.byNode(this.unit.domNode).label);}},_measureLocationClickHandler:function(evt){_c.byNode(this.location.domNode).setAttribute("checked",false);var _56;if(this._map.snappingManager){_56=this._map.snappingManager._snappingPoint;}var _57=_56||evt.mapPoint;this.locationToggleButton();this.locationGraphic=new _17();this.locationGraphic.setGeometry(_57);this.locationGraphic.setSymbol(this._pointSymbol);this._map.graphics.add(this.locationGraphic);this.measureGraphics.push(this.locationGraphic);var _58={mapPoint:_57};if(this._map.cs==="PCS"){this._showCoordinates(_58,true);}else{this._showCoordinates(_58);}this.onMeasureEnd(this.activeTool,_57);},_getGCSLocation:function(pt){var _59=pt;if(this._map.cs==="Web Mercator"){_59=_13.webMercatorToGeographic(_59);}else{if(this._map.cs==="PCS"){if(this._map._newExtent){var _5a=Math.abs((this._map._newExtent.xmax-this._map._newExtent.xmin)/(this._map.extent.xmax-this._map.extent.xmin));var _5b=Math.abs((this._map._newExtent.ymax-this._map._newExtent.ymin)/(this._map.extent.ymax-this._map.extent.ymin));var _5c=(_59.x-this._map.extent.xmin)*_5a+this._map._newExtent.xmin;var _5d=(_59.y-this._map.extent.ymin)*_5b+this._map._newExtent.ymin;_59=new _14(_5c,_5d,this._map.spatialReference);}}}return _59;},_projectMapExtent:function(_5e){var _5f=new _17(_5e);var _60=new _f({wkid:4326});this._geometryService.project([_5f.geometry],_60,_3.hitch(this,function(_61){if(!this.mouseMoveMapHandler&&this.activeTool==="location"){this.mouseMoveMapHandler=_5.connect(this._map,"onMouseMove",_3.hitch(this,this._showCoordinates));this.mouseDragMapHandler=_5.connect(this._map,"onMouseDrag",_3.hitch(this,function(){_c.byNode(this.resultValue.domNode).setAttribute("disabled",true);}));}this._map._newExtent=_61[0];}));},_showCoordinates:function(evt,_62){var _63;if(this._map.snappingManager){_63=this._map.snappingManager._snappingPoint;}var _64=_63||evt.mapPoint;var _65;if(!_62){_65=this._getGCSLocation(_64);this.locationX=_65.x;this.locationY=_65.y;this._outputLocationResult(_65.x,_65.y,_c.byNode(this.unit.domNode).label);}else{var _66=new _f({wkid:4326});this._geometryService.project([_64],_66,_3.hitch(this,function(_67){_65=_67[0];this.locationX=_65.x;this.locationY=_65.y;this._outputLocationResult(_65.x,_65.y,_c.byNode(this.unit.domNode).label);}));}},_checkCS:function(_68){if(_68.wkid){if(_68.wkid===3857||_68.wkid===102100||_68.wkid===102113){return "Web Mercator";}if(_1e.isDefined(_20[_68.wkid])){return "PCS";}return "GCS";}if(_68.wkt){if(_68.wkt.indexOf("WGS_1984_Web_Mercator")!==-1){return "Web Mercator";}if(_68.wkt.indexOf("PROJCS")===0){return "PCS";}return "GCS";}},_switchUnit:function(_69){_c.byNode(this.unit.domNode).setAttribute("label",_69);if(this.result===null){return;}this._outputResult(this.result,_69);},_outputResult:function(_6a,_6b){var _6c=_6a*this.unitDictionary[_6b];if(_6c===0){_c.byNode(this.resultValue.domNode).setAttribute("content","");}else{if(_6c>1000000){_c.byNode(this.resultValue.domNode).setAttribute("content",_8.format(_6c.toPrecision(9),{pattern:this.numberPattern})+" "+_6b);}else{_c.byNode(this.resultValue.domNode).setAttribute("content",_8.format(_6c.toFixed(2),{pattern:this.numberPattern})+" "+_6b);}}},_switchLocationUnit:function(_6d){_c.byNode(this.unit.domNode).setAttribute("label",_6d);if(this.result===null||this.resultValue.domNode.innerHTML===""){return;}this._outputLocationResult(this.locationX,this.locationY,_6d);},_outputLocationResult:function(x,y,_6e){var lon,lat;var _6f=_22.widgets.measurement;if(_6e===_6f.NLS_decimal_degrees){lon=x.toFixed(6);lat=y.toFixed(6);}else{if(_6e===_6f.NLS_deg_min_sec){var _70=false;var _71=false;if(x<0){_70=true;x=Math.abs(x);}if(y<0){_71=true;y=Math.abs(y);}lon=Math.floor(x)+"°"+Math.floor((x-Math.floor(x))*60)+"'"+Math.floor(((x-Math.floor(x))*60-Math.floor((x-Math.floor(x))*60))*60)+"\"";lat=Math.floor(y)+"°"+Math.floor((y-Math.floor(y))*60)+"'"+Math.floor(((y-Math.floor(y))*60-Math.floor((y-Math.floor(y))*60))*60)+"\"";if(_70){lon="-"+lon;}if(_71){lat="-"+lat;}}}_c.byNode(this.resultValue.domNode).setAttribute("content",_22.widgets.measurement.NLS_longitude+": "+lon+"<br/>"+_22.widgets.measurement.NLS_latitude+": "+lat);},_createLengthUnitList:function(){var _72=new _d({style:"display: none;"});var _73=_22.widgets.measurement;var _74=[_73.NLS_length_miles,_73.NLS_length_kilometers,_73.NLS_length_feet,_73.NLS_length_meters,_73.NLS_length_yards];_4.forEach(_74,_3.hitch(this,function(_75,idx){var _76=new _e({label:_75,onClick:_3.hitch(this,function(){this._switchUnit(_75);})});_76.setAttribute("class","unitDropDown");_72.addChild(_76);}));_c.byNode(this.unit.domNode).setAttribute("dropDown",_72);var _77=this.units[this._defaultLengthUnit];_c.byNode(this.unit.domNode).setAttribute("label",_77);},_createAreaUnitList:function(){var _78=new _d({style:"display: none;"});var _79=_22.widgets.measurement;var _7a=[_79.NLS_area_acres,_79.NLS_area_sq_miles,_79.NLS_area_sq_kilometers,_79.NLS_area_hectares,_79.NLS_area_sq_yards,_79.NLS_area_sq_feet,_79.NLS_area_sq_meters];_4.forEach(_7a,_3.hitch(this,function(_7b,idx){var _7c=new _e({label:_7b,onClick:_3.hitch(this,function(){this._switchUnit(_7b);})});_7c.setAttribute("class","unitDropDown");_78.addChild(_7c);}));_c.byNode(this.unit.domNode).setAttribute("dropDown",_78);var _7d=this.units[this._defaultAreaUnit];_c.byNode(this.unit.domNode).setAttribute("label",_7d);},_createLocationUnitList:function(){var _7e=new _d({style:"display: none;"});var _7f=_22.widgets.measurement;var _80=[_7f.NLS_decimal_degrees,_7f.NLS_deg_min_sec];_4.forEach(_80,_3.hitch(this,function(_81,idx){var _82=new _e({label:_81,onClick:_3.hitch(this,function(){this._switchLocationUnit(_81);})});_82.setAttribute("class","unitDropDown");_7e.addChild(_82);}));_c.byNode(this.unit.domNode).setAttribute("dropDown",_7e);var _83=this.units[this._defaultLocationUnit];_c.byNode(this.unit.domNode).setAttribute("label",_83);}});if(_7("extend-esri")){_3.setObject("dijit.Measurement",_23,_1b);}return _23;});