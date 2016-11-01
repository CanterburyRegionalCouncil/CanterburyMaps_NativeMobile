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
        // this is the complete list of currently supported params you can pass to the plugin (all optional)
        var options = {
          message: 'I like this map on CanterburyMaps.govt.nz', // not supported on some apps (Facebook, Instagram)
          subject: 'Cool maps on CanterburyMaps.govt.nz', // fi. for email
          files: [], // an array of filenames either locally or remotely
          url: url,
          chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
        };

        var onSuccess = function(result) {
          console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
          console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
        };

        var onError = function(msg) {
          console.log("Sharing failed with message: " + msg);
          alert('Error on Sharing: ' + msg) ;
        };
        
        window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);

      }
     
    });
    clazz.inPanel = false;
    clazz.hasUIFile = false;
    return clazz;
  });