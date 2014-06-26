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
define("esri/geometry/Extent",["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","esri/kernel","esri/lang","esri/SpatialReference","esri/geometry/Geometry","esri/geometry/Point","esri/geometry/webMercatorUtils","esri/geometry/mathUtils"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b){var _c={type:"extent",xmin:0,ymin:0,xmax:0,ymax:0};var _d=_1(_8,{declaredClass:"esri.geometry.Extent",constructor:function(_e,_f,_10,_11,_12){_3.mixin(this,_c);if(_3.isObject(_e)){_3.mixin(this,_e);if(this.spatialReference){this.spatialReference=new _7(this.spatialReference);}}else{this.update(_e,_f,_10,_11,_12);}this.verifySR();},getWidth:function(){return Math.abs(this.xmax-this.xmin);},getHeight:function(){return Math.abs(this.ymax-this.ymin);},getCenter:function(){return new _9((this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2,this.spatialReference);},centerAt:function(_13){var _14=this.getCenter(),dx=_13.x-_14.x,dy=_13.y-_14.y;return new _d(this.xmin+dx,this.ymin+dy,this.xmax+dx,this.ymax+dy,this.spatialReference);},update:function(_15,_16,_17,_18,_19){this.xmin=_15;this.ymin=_16;this.xmax=_17;this.ymax=_18;this.spatialReference=_19;return this;},offset:function(ox,oy){return new _d(this.xmin+ox,this.ymin+oy,this.xmax+ox,this.ymax+oy,this.spatialReference);},expand:function(_1a){var _1b=(1-_1a)/2,_1c=this.getWidth()*_1b,_1d=this.getHeight()*_1b;return new _d(this.xmin+_1c,this.ymin+_1d,this.xmax-_1c,this.ymax-_1d,this.spatialReference);},intersects:function(_1e){var _1f=_1e.type,_20=this.spatialReference,_21=_1e.spatialReference;if(_20&&_21&&!_20.equals(_21)&&_20._canProject(_21)){_1e=_20.isWebMercator()?_a.geographicToWebMercator(_1e):_a.webMercatorToGeographic(_1e,true);}switch(_1f){case "point":return this.contains(_1e);case "multipoint":return this._intersectsMultipoint(_1e);case "extent":return this._intersectsExtent(_1e);case "polygon":return this._intersectsPolygon(_1e);case "polyline":return this._intersectsPolyline(_1e);}},_intersectsMultipoint:function(_22){var len=_22.points.length,i;for(i=0;i<len;i++){if(this.contains(_22.getPoint(i))){return true;}}return false;},_intersectsExtent:function(_23){var _24,_25,_26,_27,_28=false;if(this.xmin<=_23.xmin){_24=_23.xmin;if(this.xmax<_24){_28=true;}else{_26=Math.min(this.xmax,_23.xmax)-_24;}}else{_24=this.xmin;if(_23.xmax<_24){_28=true;}else{_26=Math.min(this.xmax,_23.xmax)-_24;}}if(this.ymin<=_23.ymin){_25=_23.ymin;if(this.ymax<_25){_28=true;}else{_27=Math.min(this.ymax,_23.ymax)-_25;}}else{_25=this.ymin;if(_23.ymax<_25){_28=true;}else{_27=Math.min(this.ymax,_23.ymax)-_25;}}if(_28){return null;}return new _d(_24,_25,_24+_26,_25+_27,this.spatialReference);},_intersectsPolygon:function(_29){var _2a=[this.xmin,this.ymax],_2b=[this.xmax,this.ymax],_2c=[this.xmin,this.ymin],_2d=[this.xmax,this.ymin],_2e=[_2a,_2b,_2c,_2d],_2f=[[_2c,_2a],[_2a,_2b],[_2b,_2d],[_2d,_2c]],i,j,_30=_29.rings,_31=_30.length,_32,len,_33=new _9(0,0,this.spatialReference);len=_2e.length;for(i=0;i<len;i++){_33.update(_2e[i][0],_2e[i][1]);if(_29.contains(_33)){return true;}}_33.setSpatialReference(_29.spatialReference);var pi,pj;for(i=0;i<_31;i++){_32=_30[i];len=_32.length;if(!len){continue;}pi=_32[0];_33.update(pi[0],pi[1]);if(this.contains(_33)){return true;}for(j=1;j<len;j++){pj=_32[j];_33.update(pj[0],pj[1]);if(this.contains(_33)||this._intersectsLine([pi,pj],_2f)){return true;}pi=pj;}}return false;},_intersectsPolyline:function(_34){var _35=[[[this.xmin,this.ymin],[this.xmin,this.ymax]],[[this.xmin,this.ymax],[this.xmax,this.ymax]],[[this.xmax,this.ymax],[this.xmax,this.ymin]],[[this.xmax,this.ymin],[this.xmin,this.ymin]]];var i,j,_36=_34.paths,_37=_36.length,_38,len;var pi,pj,_39=new _9(0,0,_34.spatialReference);for(i=0;i<_37;i++){_38=_36[i];len=_38.length;if(!len){continue;}pi=_38[0];_39.update(pi[0],pi[1]);if(this.contains(_39)){return true;}for(j=1;j<len;j++){pj=_38[j];_39.update(pj[0],pj[1]);if(this.contains(_39)||this._intersectsLine([pi,pj],_35)){return true;}pi=pj;}}return false;},_intersectsLine:function(_3a,_3b){var _3c=_b._getLineIntersection2,i,len=_3b.length;for(i=0;i<len;i++){if(_3c(_3a,_3b[i])){return true;}}return false;},contains:function(_3d){if(!_3d){return false;}var _3e=_3d.type;if(_3e==="point"){var _3f=this.spatialReference,_40=_3d.spatialReference,_41,x=_3d.x,y=_3d.y;if(_3f&&_40&&!_3f.equals(_40)&&_3f._canProject(_40)){_41=_3f.isWebMercator()?_9.lngLatToXY(x,y):_9.xyToLngLat(x,y,true);x=_41[0];y=_41[1];}return (x>=this.xmin&&x<=this.xmax&&y>=this.ymin&&y<=this.ymax);}else{if(_3e==="extent"){return this._containsExtent(_3d);}}return false;},_containsExtent:function(_42){var _43=_42.xmin,_44=_42.ymin,_45=_42.xmax,_46=_42.ymax,sr=_42.spatialReference,pt1=new _9(_43,_44,sr),pt2=new _9(_43,_46,sr),pt3=new _9(_45,_46,sr),pt4=new _9(_45,_44,sr);if(this.contains(pt1)&&this.contains(pt2)&&this.contains(pt3)&&this.contains(pt4)){return true;}return false;},union:function(_47){return new _d(Math.min(this.xmin,_47.xmin),Math.min(this.ymin,_47.ymin),Math.max(this.xmax,_47.xmax),Math.max(this.ymax,_47.ymax),this.spatialReference);},getExtent:function(){var sr=this.spatialReference;return new _d(this.xmin,this.ymin,this.xmax,this.ymax,sr&&new _7(sr.toJson()));},_shiftCM:function(_48){if(!this._shifted){var _49=new _d(this.toJson()),sr=_49.spatialReference;_48=_48||sr._getInfo();if(_48){var _4a=this._getCM(_48);if(_4a){var _4b=sr._isWebMercator()?_a.webMercatorToGeographic(_4a):_4a;_49.xmin-=_4a.x;_49.xmax-=_4a.x;if(!sr._isWebMercator()){_4b.x=this._normalizeX(_4b.x,_48).x;}_49.spatialReference.wkt=_6.substitute({Central_Meridian:_4b.x},sr.wkid===4326?_48.altTemplate:_48.wkTemplate);_49.spatialReference.wkid=null;}}this._shifted=_49;}return this._shifted;},_getCM:function(_4c){var _4d,_4e=_4c.valid[0],_4f=_4c.valid[1],_50=this.xmin,_51=this.xmax;var _52=(_50>=_4e&&_50<=_4f),_53=(_51>=_4e&&_51<=_4f);if(!(_52&&_53)){_4d=this.getCenter();}return _4d;},_normalize:function(_54,_55,_56){var _57=new _d(this.toJson()),sr=_57.spatialReference;if(sr){_56=_56||sr._getInfo();if(_56){var _58=_2.map(this._getParts(_56),function(_59){return _59.extent;});if(_58.length>2){if(_54){return this._shiftCM(_56);}else{return _57.update(_56.valid[0],_57.ymin,_56.valid[1],_57.ymax,sr);}}else{if(_58.length===2){if(_54){return this._shiftCM(_56);}else{return _55?_58:{"rings":_2.map(_58,function(_5a){return [[_5a.xmin,_5a.ymin],[_5a.xmin,_5a.ymax],[_5a.xmax,_5a.ymax],[_5a.xmax,_5a.ymin],[_5a.xmin,_5a.ymin]];}),"spatialReference":sr};}}else{return _58[0]||_57;}}}}return _57;},_getParts:function(_5b){if(!this._parts){var _5c=this.xmin,_5d=this.xmax,_5e=this.ymin,_5f=this.ymax,sr=this.spatialReference,_60=this.getWidth(),_61=_5c,_62=_5d,_63=0,_64=0,_65,_66=[],_67,_68,_69;_5b=_5b||sr._getInfo();_67=_5b.valid[0];_68=_5b.valid[1];_65=this._normalizeX(_5c,_5b);_5c=_65.x;_63=_65.frameId;_65=this._normalizeX(_5d,_5b);_5d=_65.x;_64=_65.frameId;_69=(_5c===_5d&&_60>0);if(_60>(2*_68)){var E1=new _d(_61<_62?_5c:_5d,_5e,_68,_5f,sr),E2=new _d(_67,_5e,_61<_62?_5d:_5c,_5f,sr),E3=new _d(0,_5e,_68,_5f,sr),E4=new _d(_67,_5e,0,_5f,sr),k,_6a=[],_6b=[];if(E1.contains(E3)){_6a.push(_63);}if(E1.contains(E4)){_6b.push(_63);}if(E2.contains(E3)){_6a.push(_64);}if(E2.contains(E4)){_6b.push(_64);}for(k=_63+1;k<_64;k++){_6a.push(k);_6b.push(k);}_66.push({extent:E1,frameIds:[_63]},{extent:E2,frameIds:[_64]},{extent:E3,frameIds:_6a},{extent:E4,frameIds:_6b});}else{if((_5c>_5d)||_69){_66.push({extent:new _d(_5c,_5e,_68,_5f,sr),frameIds:[_63]},{extent:new _d(_67,_5e,_5d,_5f,sr),frameIds:[_64]});}else{_66.push({extent:new _d(_5c,_5e,_5d,_5f,sr),frameIds:[_63]});}}this._parts=_66;}return this._parts;},_normalizeX:function(x,_6c){var _6d=0,_6e=_6c.valid[0],_6f=_6c.valid[1],_70=2*_6f,_71;if(x>_6f){_71=Math.ceil(Math.abs(x-_6f)/_70);x-=(_71*_70);_6d=_71;}else{if(x<_6e){_71=Math.ceil(Math.abs(x-_6e)/_70);x+=(_71*_70);_6d=-_71;}}return {x:x,frameId:_6d};},toJson:function(){var _72={xmin:this.xmin,ymin:this.ymin,xmax:this.xmax,ymax:this.ymax},sr=this.spatialReference;if(sr){_72.spatialReference=sr.toJson();}return _72;}});_d.defaultProps=_c;if(_4("extend-esri")){_3.setObject("geometry.Extent",_d,_5);_5.geometry.defaultExtent=_c;}return _d;});