"use strict";
// import { holochain } from '../../holochain';
var genesis = function () {
    return true;
};
var mine = function (seed) {
    var hash = {
        seed: seed,
        agent: App.Agent.Hash,
        timestamp: 2323
    };
    var hashHash = commit('hashEntry', hash);
    return hashHash;
};
var hashGetEntry = function (hash) {
    var hashHash = get(hash);
    return hashHash;
};
var getAll = function () {
    var hashes = query({ Return: {
            Hashes: true,
            Entries: true
        }, Constrain: { EntryTypes: ["hashEntry"] } });
    return hashes;
};
var validateCommit = function (entryName, entry, header, pkg, sources) {
    switch (entryName) {
        case "hashEntry":
            return true;
        default:
            // invalid entry name
            return false;
    }
};
var validatePut = function (entryName, entry, header, pkg, sources) {
    switch (entryName) {
        case "hashEntry":
            return true;
        default:
            // invalid entry name
            return false;
    }
};
var validateMod = function (entryName, entry, header, replaces, pkg, sources) {
    switch (entryName) {
        case "hashEntry":
            return true;
        default:
            // invalid entry name
            return false;
    }
};
var validateDel = function (entryName, hash, pkg, sources) {
    switch (entryName) {
        case "hashEntry":
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
