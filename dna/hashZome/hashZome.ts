// import { holochain } from '../../holochain';

const genesis = () => {
    return true;
};

const mine = (seed) => {
    const hash = {
        seed: seed,
        agent: App.Agent.Hash,
        timestamp: 2323
    };
    const hashHash = commit('hashEntry', hash);

    commit('hashLinks', {
        Links: [
            { Base: App.Key.Hash, Link: hashHash, Tag: 'stash' }
        ]
    });

    return hashHash;
}

const hashGetEntry = (hash) => {
    const hashHash = get(hash);
    return hashHash;
}

const getAll = () => {
    const hashes = query({
        Return: {
            Hashes: true,
            Entries: true
        }, Constrain: { EntryTypes: ["hashEntry"] }
    });
    return hashes;
}

const getStash = () => {
    return getLinks(App.Key.Hash, 'stash',  { Load: true });
}

const validateCommit = (entryName, entry, header, pkg, sources) => {
    switch (entryName) {
        case "hashLinks":
        case "hashEntry":
            return true;
        default:
            // invalid entry name
            return false;
    }
}

const validatePut = (entryName, entry, header, pkg, sources) => {
    switch (entryName) {
        case "hashEntry":
            return true;
        default:
            // invalid entry name
            return false;
    }
}

const validateMod = (entryName, entry, header, replaces, pkg, sources) => {
    switch (entryName) {
        case "hashEntry":
            return true;
        default:
            // invalid entry name
            return false;
    }
}

const validateDel = (entryName, hash, pkg, sources) => {
    switch (entryName) {
        case "hashEntry":
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
