// -*- mode: js; js-indent-level: 4; indent-tabs-mode: nil -*-

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Docking = Me.imports.docking;
const Convenience = Me.imports.convenience;

// We declare this with var so it can be accessed by other extensions in
// GNOME Shell 3.26+ (mozjs52+).
var dockManager;

let enabled = false;

function init() {
    Convenience.initTranslations('dashtodock');
}

function enable() {
    if (!enabled) {
        dockManager = new Docking.DockManager();
        enabled = true;
    }
    else {
        dockManager.enable();
    }
}

function disable() {
    dockManager.disable();
}
