function debugWin(win: Window): string {
  var w_props: { name: string; opt: any }[] = [
    { name: "internalId", opt: win.internalId },
    { name: "caption", opt: win.caption },
    { name: "output.name", opt: win.output.name },
    { name: "resourceName", opt: win.resourceName },
    { name: "desktopWindow", opt: win.desktopWindow },
    { name: "size", opt: win.size },
    { name: "width", opt: win.width },
    { name: "height", opt: win.height },
    { name: "dock", opt: win.dock },
    { name: "toolbar", opt: win.toolbar },
    { name: "menu", opt: win.menu },
    { name: "dialog", opt: win.dialog },
    { name: "splash", opt: win.splash },
    { name: "utility", opt: win.utility },
    { name: "dropdownMenu", opt: win.dropdownMenu },
    { name: "popupMenu", opt: win.popupMenu },
    { name: "tooltip", opt: win.tooltip },
    { name: "notification", opt: win.notification },
    { name: "criticalNotification", opt: win.criticalNotification },
    { name: "appletPopup", opt: win.appletPopup },
    { name: "onScreenDisplay", opt: win.onScreenDisplay },
    { name: "comboBox", opt: win.comboBox },
    { name: "windowType", opt: win.windowType },
    { name: "managed", opt: win.managed },
    { name: "popupWindow", opt: win.popupWindow },
    { name: "outline", opt: win.outline },
    { name: "stackingOrder", opt: win.stackingOrder },
    { name: "fullScreenable", opt: win.fullScreenable },
    { name: "closeable", opt: win.closeable },
    { name: "minimizable", opt: win.minimizable },
    { name: "specialWindow", opt: win.specialWindow },
    { name: "modal", opt: win.modal },
    { name: "resizeable", opt: win.resizeable },
    { name: "minimized", opt: win.minimized },
    { name: "tile", opt: win.tile },
    { name: "minSize", opt: win.minSize },
    { name: "maxSize", opt: win.maxSize },
    { name: "transient", opt: win.transient },
    { name: "transientFor", opt: win.transientFor },
    { name: "maximizable", opt: win.maximizable },
    { name: "moveable", opt: win.moveable },
    { name: "moveableAcrossScreens", opt: win.moveableAcrossScreens },
    { name: "hidden", opt: win.hidden },
    { name: "keepAbove", opt: win.keepAbove },
    { name: "keepBelow", opt: win.keepBelow },
  ];
  var s = "";
  w_props.forEach((el) => {
    if (el.opt || el.opt === 0 || el.opt === "0") {
      s += "  ";
      s += el.name;
      s += ": ";
      s += el.opt;
    }
  });
  return s;
}
