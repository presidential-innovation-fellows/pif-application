CKEDITOR.on("dialogDefinition",function(a){var b=function(a,b){for(var c=0;c<b.length;c++)for(var d=0;d<a.items.length;d++)if(a.items[d][1]===b[c]){a.items.splice(d,1);b.splice(c,1);break}},e=a.data.definition;"link"==a.data.name&&(a=e.getContents("info"),linkTypeDef=a.get("linkType"),b(linkTypeDef,["email"]),a.remove("anchorId"),protocolDef=a.get("protocol"),b(protocolDef,["news://"]),targetDef=e.getContents("target").get("linkTargetType"),b(targetDef,["popup"]),e.minHeight=125)});