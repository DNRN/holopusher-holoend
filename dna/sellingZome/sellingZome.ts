// import { holochain } from '../../holochain';

const genesis = () => {
    return true;
};

const sell = (sellOrder) => {
    const pushers = query({
        Return: {
            Hashes: true,
            Entries: true
        }, Constrain: { EntryTypes: ["pusherEntry"] }
    });
    debug(pushers);
    if (pushers.length === 0) {
        return null;
    }

    const market: any[] = getLinks(App.DNA.Hash, 'sellingLink', { Load: true });
    debug(market);
    const isAdded = market.filter(h => {
        return h.Entry.Hash == sellOrder.Hash;
    });
    if (isAdded.length > 0) {
        return null;
    }

    let sellingEntry: any = {};
    sellingEntry.pusher = pushers[0].Hash;
    sellingEntry.hash = sellOrder.hash;
    sellingEntry.price = sellOrder.price;
    const sellingHash = commit('sellingEntry', sellingEntry);

    const link = commit('market', {
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
}

const getMarket = () => {
    const market = getLinks(App.DNA.Hash, 'sellingLink', { Load: true });
    return market.map(m => {
        return m.Entry;
    });
}

const validateCommit = (entryName, entry, header, pkg, sources) => {
    switch (entryName) {
        case "sellingEntry":
        case "market":
        case "hashLinks":
            return true;

        default:
            // invalid entry name
            return false;
    }
}

const validatePut = (entryName, entry, header, pkg, sources) => {
    switch (entryName) {
        case "hashLinks":
        case "sellingEntry":
            return true;
        default:
            // invalid entry name
            return false;
    }
}

const validateMod = (entryName, entry, header, replaces, pkg, sources) => {
    switch (entryName) {
        case "sellingEntry":
            return true;
        default:
            // invalid entry name
            return false;
    }
}

const validateDel = (entryName, hash, pkg, sources) => {
    switch (entryName) {
        case "sellingEntry":
            return true;
        default:
            // invalid entry name
            return false;
    }
}

const validateLink = (linkEntryType, baseHash, links, pkg, sources) => {
    return true;
}

const validatePutPkg = (entryName) => {
    return null;
}

const validateModPkg = (entryName) => {
    return null;
}

const validateDelPkg = (entryName) => {
    return null;
}

const validateLinkPkg = (entryName) => {
    return null;
}
