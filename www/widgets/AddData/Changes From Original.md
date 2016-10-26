This widget is based on the standard v2.1 Add Data widget.

The following changes have been made to its functionality for working specifically in the Canterbury Maps WAB viewers.

### widget.js ###
- **Change to initContext function** - Portal user check code and portal user/organisation filters commented out as widget to be used anonymously.


### nls\strings.js ###

- **Names of feature layers when added to map** - Change to featureLayerTitlePattern proeprty of root\search object.  Removed reference to layer name so that it will only display the name as registered in ArcGIS.com/Portal.  


### search\util.js ###

- **setNodeTitleText function added** - New function added that adds/sets the title tag of an html element.  Used for setting the mouse tip text.


### search\ItemCard.js ###

- **Change to detailsClicked function** - Check for "Open Data" tag in item tags.  If found, change the url target to be opened to use calculated url for open data site page for the data.  *NOTE - assumes that layer has been registered with open data if the tag is present.*  Calls openDataUrl function to generate the url.
- **isNumeric function added** - New function added that determines wither a passed variable is a number.  Used by the "openDataUrl" function.  *NOTE - to be moved to util function at some point.*
- **openDataUrl function added** - Prepares a formated url that points at the Canterbury Maps Open data website.  If layer is a feature layer, gets and appends the service layer id so the specific page for the sub layer is opened.  Calls isNumeric function.  *NOTE - Url for Canterbury Maps Open Data is hard coded at this stage.* 
- **Change to Render function** 
	- util.setNodeTitleText call added to set the mouse tip text for the title (used when the title is long as behaviour is to truncate the text on screen).
	- Check for "Open Data" tag in item tags.  If found the text of the Details button is changed to "Download" rather than "Details".
- **Change to renderTypeOwnerDate function** 
	- Alteration to code to display snippet value if snippet is not null and not empty string, otherwise falls back to default widget code that displays layer type, owner and date. 
	- Mouse tip text (title tag) set on typeByOwnerNode to match displayed text.  Used when text is long and is truncated in display.    

### search\BBoxOption.js ###
 
- **Change to postCreate function** - Default value of bboxToggle checked value changed to false

### search\ScopeOptions.js ###

- **Change to appendQueryParams function** 
	- Under Scope === 'ArcGISOnline'  comment out the task.scopeIsArcGISOnline = true and replace with q = "(owner: canterburymaps)";

