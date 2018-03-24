"use strict";
// import { holochain } from '../../holochain';
var genesis = function () {
    return true;
};
var pusherEntryCreate = function (pusher) {
    var pusherHash = commit('pusherEntry', pusher);
    return pusherHash;
};
var pusherGetEntry = function (hash) {
    var pusher = get(hash);
    return pusher;
};
var validateCommit = function (entryName, entry, header, pkg, sources) {
    switch (entryName) {
        case "pusherEntry":
            return true;
        default:
            // invalid entry name
            return false;
    }
};
var validatePut = function (entryName, entry, header, pkg, sources) {
    switch (entryName) {
        case "pusherEntry":
            return true;
        default:
            // invalid entry name
            return false;
    }
};
var validateMod = function (entryName, entry, header, replaces, pkg, sources) {
    switch (entryName) {
        case "pusherEntry":
            return true;
        default:
            // invalid entry name
            return false;
    }
};
var validateDel = function (entryName, hash, pkg, sources) {
    switch (entryName) {
        case "pusherEntry":
            return true;
        default:
            // invalid entry name
            return false;
    }
};
var validateLink = function (linkEntryType, baseHash, links, pkg, sources) {
    return false;
};
var validatePutPkg = function (entryName) {
    return null;
};
var validateModPkg = function (entryName) {
    return null;
};
var validateDelPkg = function (entryName) {
    return null;
};
var validateLinkPkg = function (entryName) {
    return null;
};
