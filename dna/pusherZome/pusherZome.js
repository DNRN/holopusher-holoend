"use strict";
// import { holochain } from '../../holochain';
var genesis = function () {
    return true;
};
var pusherEntryCreate = function (pusher) {
    pusher.agent = App.Agent.Hash;
    var pusherHash = commit('pusherEntry', pusher);
    commit('pushers', { Links: [
            { Base: App.DNA.Hash, Link: pusherHash, Tag: 'pushersLink' }
        ] });
    return pusherHash;
};
var pusherGetEntry = function (hash) {
    var pusher = get(hash);
    return pusher;
};
var pusherGetFromAgent = function () {
    var pusher = query({ Constrain: { EntryTypes: ["pusherEntry"] } });
    return pusher;
};
var pushersGetAll = function () {
    var pushers = getLinks(App.DNA.Hash, 'pushersLink', { Load: true });
    debug(pushers);
    return pushers;
};
var validateCommit = function (entryName, entry, header, pkg, sources) {
    switch (entryName) {
        case "pusherEntry":
        case "pushers":
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
    return true;
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
