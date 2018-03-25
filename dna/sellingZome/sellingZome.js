"use strict";
// import { holochain } from '../../holochain';
var genesis = function () {
    return true;
};
var sell = function (sellOrder) {
    var pushers = query({
        Return: {
            Hashes: true,
            Entries: true
        }, Constrain: { EntryTypes: ["pusherEntry"] }
    });
    debug(pushers);
    if (pushers.length === 0) {
        return null;
    }
    var market = getLinks(App.DNA.Hash, 'sellingLink', { Load: true });
    debug(market);
    var isAdded = market.filter(function (h) {
        return h.Entry.Hash == sellOrder.Hash;
    });
    if (isAdded.length > 0) {
        return null;
    }
    var sellingEntry = {};
    sellingEntry.pusher = pushers[0].Hash;
    sellingEntry.hash = sellOrder.hash;
    sellingEntry.price = sellOrder.price;
    var sellingHash = commit('sellingEntry', sellingEntry);
    var link = commit('market', {
        Links: [
            { Base: App.DNA.Hash, Link: sellingHash, Tag: 'sellingLink' }
        ]
    });
    commit('hashLinks', {
        Links: [
            { Base: App.Key.Hash, Link: sellOrder.hash, Tag: 'stash', LinkAction: HC.LinkAction.Del }
        ]
    });
    return sellingHash;
};
var getMarket = function () {
    var market = getLinks(App.DNA.Hash, 'sellingLink', { Load: true });
    return market.map(function (m) {
        return m.Entry;
    });
};
var validateCommit = function (entryName, entry, header, pkg, sources) {
    switch (entryName) {
        case "sellingEntry":
        case "market":
        case "hashLinks":
            return true;
        default:
            // invalid entry name
            return false;
    }
};
var validatePut = function (entryName, entry, header, pkg, sources) {
    switch (entryName) {
        case "hashLinks":
        case "sellingEntry":
            return true;
        default:
            // invalid entry name
            return false;
    }
};
var validateMod = function (entryName, entry, header, replaces, pkg, sources) {
    switch (entryName) {
        case "sellingEntry":
            return true;
        default:
            // invalid entry name
            return false;
    }
};
var validateDel = function (entryName, hash, pkg, sources) {
    switch (entryName) {
        case "sellingEntry":
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
