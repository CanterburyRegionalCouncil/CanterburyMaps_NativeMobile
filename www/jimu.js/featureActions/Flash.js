///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 Esri. All Rights Reserved.
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
  'dojo/_base/lang',
  // 'dojo/_base/array',
  '../BaseFeatureAction',
  'jimu/utils'
], function(declare, lang, BaseFeatureAction, utils) {
  return declare([BaseFeatureAction], {
    name: 'Flash',
    iconClass: 'icon-flash',

    isFeatureSupported: function(featureSet, layer) {
      if(featureSet.features.length < 1 || !layer){
        return false;
      }

      var feature = featureSet.features[0];
      var rendererSymbol = lang.getObject('renderer.symbol', false, layer);

      return feature && feature.geometry &&
        (feature.symbol || rendererSymbol) &&
        this.map.getLayer(layer.id);
    },

    onExecute: function(featureSet, layer) {
      utils.featureAction.flash(featureSet && featureSet.features, layer);
    }
  });
});