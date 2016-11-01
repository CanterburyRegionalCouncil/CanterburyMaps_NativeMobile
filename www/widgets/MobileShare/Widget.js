///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 - 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define([
    'dojo/_base/declare',
    'jimu/BaseWidget',
    './js/ExtentUtilities',
    "esri/arcgis/utils",
    'dojo/_base/html',
    'dojo/on',
    'dojo/_base/lang',
    'jimu/utils',
    'jimu/dijit/Message',
    'dojo/touch'
  ],
  function(declare, BaseWidget, ExtentUtilities,arcgisUtils,html, on, lang, jimuUtils) {
    var clazz = declare([BaseWidget, ExtentUtilities], {

      name: 'MobileShare',
      baseClass: 'jimu-widget-mobileshare',

      _baseurl: "http://test.canterburymaps.govt.nz/webapps/mapviewer/",
      //_baseurl: this.config.baseurl,

      startup: function() {
        this.inherited(arguments);
        this.placehoder = html.create('div', {
          'class': 'mobileshare',
          title: this.label
        }, this.domNode);
  
          this.own(on(this.placehoder, 'click', lang.hitch(this, this.onShareClick)));
        },

      onShareClick: function() {
        this._currentExtentToURLParameters();
      },

      destroy: function() {
        // NEED THIS?
        this.inherited(arguments);
      },

      
      projectionStringReady:function(projectionString){
        this.inherited(arguments);
        
        var url = this._baseurl;
        url += "?webmap=" + this.map.itemId; 
        url += "&extent=" + projectionString;
      
        console.log("share url:" + url);
        // START NATIVE PLUGIN
        // INPUTS
        // message,subject,file,url,successcallback,errorcallback
        window.plugins.socialsharing.share(
          "I like this map on CanterburyMaps.govt.nz",
          "Cool maps on CanterburyMaps.govt.nz",
          null,
          url,
          [successCallback], // e.g. function(result) {console.log('result: ' + result)}
          [errorCallback]    // e.g. function(result) {alert('error: ' + result);
        );
        
      },
      successCallback:function(result){
        console.log('Sharing result: ' + result);
      },
      errorCallback:function(result){
        alert('Error on Sharing: ' + result) ;
      }
     
    });
    clazz.inPanel = false;
    clazz.hasUIFile = false;
    return clazz;
  });