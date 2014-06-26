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
define("esri/nls/da/jsapi",({io:{proxyNotSet:"esri.config.defaults.io.proxyUrl er ikke angivet."},map:{deprecateReorderLayerString:"Map.reorderLayer(/*String*/ id, /*Number*/ index) ikke tilgængelig. Brug Map.reorderLayer(/*Layer*/ layer, /*Number*/ index).",deprecateShiftDblClickZoom:"Map.(enable/disable)ShiftDoubleClickZoom ikke tilgængelig. Shift-Double-Click zoom ikke understøttet."},geometry:{deprecateToScreenPoint:"esri.geometry.toScreenPoint ikke tilgængelig. Brug Use esri.geometry.toScreenGeometry.",deprecateToMapPoint:"esri.geometry.toMapPoint ikke tilgængelig. Brug esri.geometry.toMapGeometry."},layers:{tiled:{tileError:"Kan ikke indlæse vindue"},dynamic:{imageError:"Kan ikke indlæse billede"},graphics:{drawingError:"Kan ikke tegne grafik "},agstiled:{deprecateRoundrobin:"Konstruktørvalg 'roundrobin' ikke tilgængelig. Brug 'tileServers'."},imageParameters:{deprecateBBox:"Egenskab 'bbox'ikke tilgængelig. Brug property 'extent'."},FeatureLayer:{noOIDField:"objectIdField er ikke angivet [url: ${url}]",fieldNotFound:"Kan ikke finde feltet '${field}' i laget 'fields' information [url: ${url}]",noGeometryField:"Kan ikke finde et felt af typen 'esriFieldTypeGeometry' i laget  'fields' information. Hvis du bruger et kortservicelag, har funktionerne ikke geometri[url: ${url}]",invalidParams:"forespørgsel indeholder en eller flere ikke-understøttede parametre",updateError:"der opstod en fejl under opdatering af lagene",createUserSeconds:"Oprettet af ${userId} for få sekunder siden",createUserMinute:"Oprettet af ${userId} for et minut siden",editUserSeconds:"Redigeret af ${userId} for få sekunder siden",editUserMinute:"Redigeret af ${userId} for et minut siden",createSeconds:"Oprettet for få sekunder siden",createMinute:"Oprettet for et minut siden",editSeconds:"Redigeret for få sekunder siden",editMinute:"Redigeret for et minut siden",createUserMinutes:"Oprettet af ${userId} for ${minutes} minutters siden",createUserHour:"Oprettet af ${userId} for en time siden",createUserHours:"Oprettet af ${userId} for ${hours} timer siden",createUserWeekDay:"Oprettet af ${userId} ${weekDay} kl. ${formattedTime}",createUserFull:"Oprettet af ${userId} d. ${formattedDate} kl. ${formattedTime}",editUserMinutes:"Redigeret af ${userId} for ${minutes} minutter siden",editUserHour:"Redigeret af ${userId} for en time siden",editUserHours:"Redigeret af ${userId} for ${hours} timer siden",editUserWeekDay:"Redigeret af ${userId} ${weekDay} kl.  ${formattedTime}",editUserFull:"Redigeret af ${userId} d. ${formattedDate} kl. ${formattedTime}",createUser:"Oprettet af ${userId}",editUser:"Redigeret af ${userId}",createMinutes:"Oprettet for ${minutes} minutter siden",createHour:"Oprettet for en time siden",createHours:"Oprettet for ${hours} timer siden",createWeekDay:"Oprettet ${weekDay} kl. ${formattedTime}",createFull:"Oprettet d. ${formattedDate} kl.  ${formattedTime}",editMinutes:"Redigeret for ${minutes} minutter siden",editHour:"Redigeret for en time siden",editHours:"Redigeret for ${hours} timer siden",editWeekDay:"Redigeret ${weekDay} kl. ${formattedTime}",editFull:"Redigeret d. ${formattedDate} kl. ${formattedTime}"}},tasks:{gp:{gpDataTypeNotHandled:"GP-datatype kan ikke behandles."},na:{route:{routeNameNotSpecified:"'RouteName' ikke specificeret for mindst 1 af flere stop i FeatureSet."}},query:{invalid:"Kan ikke udføre forespørgsel. Kontrollér parametre."}},toolbars:{draw:{convertAntiClockwisePolygon:"Polygoner, der er tegnet mod uret bliver vendt, så de er tegnet med uret.",addPoint:"Klik for at tilføje et punkt",addShape:"Klik for at tilføje en form, eller tryk ned for at starte og slip for at afslutte",addMultipoint:"Klik for at begynde at tilføje punkter",freehand:"Tryk ned for at begynde, og slip for at afslutte",start:"Klik for at begynde at tegne",resume:"Klik for at fortsætte med at tegne",complete:"Dobbeltklik for at færdiggøre",finish:"Dobbeltklik for at afslutte",invalidType:"Ikke-understøttet geometritype"},edit:{invalidType:"Kan ikke aktivere værktøjet. Kontrollér, om værktøjet kan bruges på den angivne geometritype.",deleteLabel:"Slet"}},virtualearth:{vetiledlayer:{bingMapsKeyNotSpecified:"BingMapsKey skal angives."},vegeocode:{bingMapsKeyNotSpecified:"BingMapsKey skal angives.",requestQueued:"Servertoken kunne ikke findes. Sætter forespørgsel i kø, indtil servertoken er fundet."}},widgets:{attributeInspector:{NLS_first:"Først",NLS_previous:"Forrige",NLS_next:"Næste",NLS_last:"Sidst",NLS_deleteFeature:"Slet",NLS_title:"Rediger attributter",NLS_errorInvalid:"Ugyldig",NLS_validationInt:"Værdien skal være et helt tal",NLS_validationFlt:"Værdien skal være med flydende komma",NLS_of:"af",NLS_noFeaturesSelected:"Ingen funktioner valgt"},overviewMap:{NLS_drag:"Træk for at ændre kortområdet",NLS_show:"Vis kortoverblik",NLS_hide:"Skjul kortoverblik",NLS_maximize:"Maksimér",NLS_restore:"Gendan",NLS_noMap:"'map' ikke fundet i input-parametre",NLS_noLayer:"hovedkort har ikke noget basislag",NLS_invalidSR:"rum-reference på det givne lag er ikke kompatibel med hovedkortet",NLS_invalidType:"lag-type ikke understøttet. Gyldige typer er 'TiledMapServiceLayer' og 'DynamicMapServiceLayer'"},timeSlider:{NLS_first:"Først",NLS_previous:"Forrige",NLS_next:"Næste",NLS_play:"Afspil/Pause",NLS_invalidTimeExtent:"TimeExtent ikke angivet eller i ukorrekt format."},attachmentEditor:{NLS_attachments:"Vedhæftet:",NLS_add:"Tilføj",NLS_none:"Ingen",NLS_error:"Der opstod en fejl",NLS_fileNotSupported:"Denne filtype understøttes ikke."},directions:{error:{notEnoughStops:"Angiv et udgangspunkt og en destination.",unknownStop:"Sted '<name>' kunne ikke findes.",routeTask:"Kan ikke vise vej til disse adresser.",locator:"Sted kunne ikke findes.",invalidStopType:"Ugyldig type stop",locatorUndefined:"Kan ikke vende geokodning. Lokalisator-URL er ikke defineret.",noAddresses:"Ingen adresser blev returneret.",noStops:"Der blev ikke angivet et antal stop, som skulle tilføjes.",maximumStops:"Det maksimale antal stop er nået"},time:{minute:"minut",minutes:"minutter",hour:"time",hours:"timer"},units:{KILOMETERS:{name:"kilometer",abbr:"km"},METERS:{name:"meter",abbr:"m"},MILES:{name:"miles",abbr:"mi"},NAUTICAL_MILES:{name:"sømil",abbr:"nm."}},showOptions:"Vis indstillinger",hideOptions:"Skjul indstillinger",findOptimalOrder:"Find optimal rækkefølge",returnToStart:"Tilbage til start",addDestination:"Tilføj destination",viewFullRoute:"Zoom til fuld rute",getDirections:"Hent kørselsvejledning",reverseDirections:"Modsat vejledning",print:"Udskriv",printNotes:"Indtast noter her",printDisclaimer:"Kørselsvejledninger stilles udelukkende til rådighed af planlægningshensyn og er underlagt <a href='http://www.esri.com/legal/software-license' target='_blank'>Esri's Vilkår for brug</a>. Der kan forekommme dynamiske vejforhold, som kan forårsage forskelle i nøjagtigheden i forhold til dine egne kørselsvejledninger, og der skal tages hensyn til dette sammen med hensynet til vejskilte og juridiske begrænsninger. Du påtager dig den fulde risiko ved brugen."},editor:{tools:{NLS_attributesLbl:"Atributter",NLS_cutLbl:"Klip",NLS_deleteLbl:"Slet",NLS_extentLbl:"Område",NLS_freehandPolygonLbl:"Frihåndspolygon",NLS_freehandPolylineLbl:"Frihåndspolylinje",NLS_pointLbl:"Punkt",NLS_polygonLbl:"Polygon",NLS_polylineLbl:"Polylinje",NLS_reshapeLbl:"Omform",NLS_selectionNewLbl:"Ny markering",NLS_selectionAddLbl:"Føj til markering",NLS_selectionClearLbl:"Ryd markering",NLS_selectionRemoveLbl:"Fjern fra markering",NLS_selectionUnionLbl:"Forening",NLS_autoCompleteLbl:"Auto-fuldfør",NLS_unionLbl:"Forening",NLS_rectangleLbl:"Rektangel",NLS_circleLbl:"Cirkel",NLS_ellipseLbl:"Ellipse",NLS_triangleLbl:"Triangel",NLS_arrowLbl:"Pil",NLS_arrowLeftLbl:"Pil til venstre",NLS_arrowUpLbl:"Pil opad",NLS_arrowDownLbl:"Pil nedad",NLS_arrowRightLbl:"Pil til højre",NLS_undoLbl:"Fortryd",NLS_redoLbl:"Gentag"}},Geocoder:{main:{clearButtonTitle:"Ryd søgning",searchButtonTitle:"Søg",geocoderMenuButtonTitle:"Skift geokodning",geocoderMenuHeader:"Vælg geokodning",geocoderMenuCloseTitle:"Luk menu",untitledGeocoder:"Geokodning uden titel"},esriGeocoderName:"Esri Verdensgeokodning"},HistogramTimeSlider:{NLS_range:"Område",NLS_cumulative:"Kumulative",NLS_play:"Afspil/Pause",NLS_invalidTimeExtent:"TimeExtent ikke angivet eller i ukorrekt format.",NLS_overview:"OVERSIGT",NLS_range:"komplet område"},legend:{NLS_points:"Punkter",NLS_lines:"Linjer",NLS_polygons:"Polygoner",NLS_creatingLegend:"Opretter forklaring",NLS_noLegend:"Ingen forklaring"},popup:{NLS_moreInfo:"Flere oplysninger",NLS_searching:"Søger",NLS_prevFeature:"Forrige objekt",NLS_nextFeature:"Næste objekt",NLS_close:"Luk",NLS_prevMedia:"Forrige medie",NLS_nextMedia:"Næste medie",NLS_noInfo:"Ingen oplysninger tilgængelige",NLS_noAttach:"Ingen vedhæftede filer",NLS_maximize:"Maksimér",NLS_restore:"Gendan",NLS_zoomTo:"Zoom til",NLS_pagingInfo:"(${index} af ${total})",NLS_attach:"Vedhæftede filer"},measurement:{NLS_distance:"Afstand",NLS_area:"Område",NLS_location:"Lokation",NLS_resultLabel:"Måleresultat",NLS_length_miles:"Miles",NLS_length_kilometers:"Kilometer",NLS_length_feet:"Fod",NLS_length_meters:"Meter",NLS_length_yards:"Yards",NLS_area_acres:"Acres",NLS_area_sq_miles:"Kvadrat-miles",NLS_area_sq_kilometers:"Kvadratkilometer",NLS_area_hectares:"Hektar",NLS_area_sq_yards:"Kvadrat-yards",NLS_area_sq_feet:"Kvadrat-fod",NLS_area_sq_meters:"Kvadratmeter",NLS_deg_min_sec:"DMS",NLS_decimal_degrees:"Grader",NLS_map_coordinate:"Kortkoordinater",NLS_longitude:"Længdegrad",NLS_latitude:"Breddegrad"},bookmarks:{NLS_add_bookmark:"Tilføj bogmærke",NLS_new_bookmark:"Uden titel",NLS_bookmark_edit:"Rediger",NLS_bookmark_remove:"Fjern"},print:{NLS_print:"Udskriv",NLS_printing:"Udskriver",NLS_printout:"Udskrift"},templatePicker:{creationDisabled:"Funktionsoprettelse er deaktiveret for alle lag",loading:"Indlæser.."}},arcgis:{utils:{baseLayerError:"Kan ikke inblæse basiskortlag",geometryServiceError:"Angiv en geometritjeneste for at åbne Web Map"}},identity:{lblItem:"element",title:"Log ind",info:"Log ind for at få adgang til elementet på  ${server} ${resource}",lblUser:"Brugernavn:",lblPwd:"Adgangskode:",lblOk:"OK",lblSigning:"Logger ind...",lblCancel:"Annuller",errorMsg:"Ugyldigt brugernavn/adgangskode. Prøv igen.",invalidUser:"Indtastet brugernavn eller adgangskode er ikke korrekt.",forbidden:"Brugernavn og adgangskode er gyldigt, men du har ikke adgang til denne resource.",noAuthService:"Kan ikke få adgang til godkendelsestjenesten."},common:{cancel:"Annuller",ok:"OK",create:"Opret",close:"Luk",done:"Udført",apply:"Anvend",remove:"Fjern",open:"Åbn",edit:"Rediger",share:"Del",save:"Gem",help:"Hjælp",warning:"Advarsel",deleteLabel:"Slet",titleLabel:"Titel:",newLabel:"Ny",arcgis:"ArcGIS",previous:"Forrige",submit:"Send",next:"Næste",yesLabel:"Ja",noLabel:"Nej",errorTitle:"Fejl",upload:"Overfør",sum:"Sum",minimum:"Minimum",maximum:"Maksimum",average:"Gennemsnit",standardDev:"Standardafvigelse",statistic:"Statistik",attribute:"Attribut",selectAttribute:"Vælg attribut",runAnalysis:"Kør analyse",oneLabel:"1.",twoLabel:"2.",threeLabel:"3.",fourLabel:"4.",outputnameMissingMsg:"Output-navn er påkrævet",miles:"Mil",kilometers:"Kilometer",meters:"Meter",feet:"Fod",degree:"Decimalgrad(er)",inches:"Tomme(r)",nautMiles:"Sømil",pointsUnit:"Punkt(er)",yards:"Yard(s)",comingSoonLabel:"Kommer snart!"},analysisTools:{performAnalysis:"Udfør analyse",summarizeData:"Opsummér data",findLocations:"Find steder",aggregateTool:"Aggregér punkter",bufferTool:"Bufferdata",dataEnrichment:"Data Enrichment",analyzePatterns:"Analysér mønstre",useProximity:"Anvend nærhed",manageData:"Håndtér data",aggregateToolName:"Aggregér punkter",bufferToolName:"Opret buffere",summarizeWithin:"Opsummér inden for",sumnearby:"Opsummér i nærheden",createBuffers:"Opret buffere",driveTimes:"Opret polygoner med køretid",findExistingLocations:"Find eksisterende steder",findNewLocations:"Udled nye steder",geoenrichLayer:"Berig objekter",findRoute:"Find rute",findClosestFacility:"Find nærmeste",generateFleetPlan:"Generér flåderuteplan",findHotSpots:"Find hotspots",createDensitySurface:"Opret tæthedsflade",correlationReporter:"Udforsk korrelationer",createInterpolatedSurface:"Opret flade",attributeCalculator:"Attributberegner",overlayLayers:"Overlay af lag",mergeLayers:"Flet lag",dissolveBoundaries:"Opløs grænser",extractData:"Udtræk data",orgUsrMsg:"Du skal være medlem af en organisation for at køre denne tjeneste.",pubRoleMsg:"Din onlinekonto er ikke blevet tildelt  en udgiverrolle.",servNameExists:"Du har allerede et resultat med dette navn. Omdøb dit resultat, og send analysen igen.",outputLayerLabel:"Navn på resultatlag",outputFileName:"Output-filnavn",emptyResultInfoMsg:"The result of your analysis did not return any features. No layer will be created."},aggregatePointsTool:{aggregateDefine:"Tæl <b>${layername}</b> inden for",outputLayerName:"Aggregering af ${pointlayername} til ${polygonlayername}",groupByLabel:"Vælg en attribut at gruppere efter (valgfrit)",itemDescription:"Featuretjeneste, som er genereret ved at køre Aggregér punkter-løsninger. Punkter fra en csv-fil ${pointlayername} blev aggregeret til ${polygonlayername}",itemTags:"Analyse, Aggregér punkter, ${pointlayername}, ${polygonlayername}",itemSnippet:"Analyse-featuretjeneste genereret på baggrund af Aggregér punkter",removeAttrStats:"Fjern attributstatistik",keepPolygonLabel:"Bevar polygoner uden punkter",addStatsLabel:"Tilføj statistik (valgfrit)",chooseAreaLabel:"Vælg område"},findHotSpotsTool:{hotspotsPolyDefine:"Analysér <b>${layername}</b>  for at finde statistisk signifikante hotspots og coldspots for ",hotspotsPointDefine:"Analysér <b>${layername}</b>  for at finde statistisk signifikante hotspots og coldspots ",fieldLabel:"med eller uden et analysefelt",noAnalysisField:"Intet analysefelt",hotspots:"Hotspots",outputLayerName:"Hotspots ${layername}",Options:"Indstillinger",defineBoundingLabel:"Definér, hvor hændelser er mulige",provideAggLabel:"Angiv aggregeringsområder for samlede hændelser",defaultBoundingOption:"Vælg afgrænsningsområder",defaultAggregationOption:"Vælg aggregeringsområder",itemDescription:"Featuretjeneste, som er genereret gennem kørsel af Find hotspots-løsning.",itemTags:"Analyse, Hotspots, ${layername}, ${fieldname}",itemSnippet:"Analyse-featuretjeneste genereret på baggrund af Find hotspots",chooseAttributeLabel:"Vælg et analysefelt",blayerName:"Tegnede grænser"},overlayLayersTool:{overlayDefine:"Overlay <b>${layername}</b> med",chooseOverlayLayer:"Vælg overlay-lag",chooseOverlayMethod:"Vælg overlay-metode",itemDescription:"Feature Service genereret ud fra kørsel af løsningen Overlay-lag.",itemTags:"Analyse, Overlay-lag, ${layername}",itemSnippet:"Analysis Feature Service genereret af Overlay-lag",unionOutputLyrName:"Forening af ${layername} og ${overlayname}",intersectOutputLyrName:"gennemskæring af ${layername} og ${overlayname}",eraseOutputLyrName:"slet ${layername} med ${overlayname}",overlayLayerPolyMsg:"Overlay-laget bør være et polygonlag for Union-overlay",notSupportedEraseOverlayMsg:"Dette overlay-lag understøttes ikke til Erase-overlay. Standard erIntersect-overlay.",intersect:"Gennemskær",union:"Forening",erase:"Slet"},bufferTool:{bufferDefine:"Opret buffere fra <b>${layername}</b>",outputLayerName:"Buffer af ${layername}",sizeLabel:"Indtast bufferstørrelse",sizeHelp:"Du kan oprette flere buffere ved at angive afstande adskilt af mellemrum (2 3 5.5).",typeLabel:"Buffertype",resultLabel:"Navn på resultatlag",optionsLabel:"Indstillinger",itemDescription:"Feature Service genereret fra kørsel af Buffer Features-løsning. Input fra ${layername} blev brugt som buffer af ${distance_field} ${units}",itemTags:"Buffer, ${layername}",itemSnippet:"Analysis Feature Service genereret fra Buffer",overlap:"Overlap",dissolve:"Opløs",include:"Medtag",exclude:"Udeluk",around:"Omkring",sideType:"Sidetype",endType:"Afslutningstype",left:"Venstre",right:"Højre",round:"Rundt",flat:"Flad",multipleDistance:"Flere afstandsbuffere skal være",rings:"Ringe",disks:"Disks",areaofInputPoly:"Område for inputpolygoner i bufferpolygoner",distanceMsg:"Kun numeriske værdier er tilladt",distance:"Afstand",field:"Felt"},driveTimes:{toolDefine:"Opret områder omkring <b>${layername}</b>",outputLayerName:"Kør fra ${layername}: ---",measureLabel:"Mål:",measureHelp:"Indtast størrelser adskilt af mellemrum (2 3.5 5) for at sende flere områder for hvert punkt",areaLabel:"Områder fra forskellige punkter:",trafficLabel:"Brug trafikforhold (valgfrit)",resultLabel:"Navn på resultatlag",itemDescription:"Feature Service genereret fra kørsel af løsningen Create Drive Times.",itemTags:"Kørselstider, ${layername}",itemSnippet:"Analysis Feature Service genereret fra Create Drive Times"},extractDataTool:{layersToExtract:"Lag, der skal hentes",studyArea:"Undersøgelsesområde",outputDataFormat:"Outputdataformat",filegdb:"Filgeodatabase",shpFile:"Shape-fil",lyrpkg:"Lagpakke",selectFtrs:"Vælg objekter",clipFtrs:"Klip-features",sameAsDisplay:"Samme som Vis",sameAsLayer:"Samme som ${layername}",outputfileName:"OutputName.zip",itemDescription:"Fil genereret fra kørsel af Extract Data-løsningen.",itemTags:"Analyse, Extract Data",itemSnippet:"Analysis File-element genereret fra Extract Data"}}));