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
    return hashHash;
}

const hashGetEntry = (hash) => {
    const hashHash = get(hash);
    return hashHash;
}

const getAll = () => {

}

const validateCommit = (entryName, entry, header, pkg, sources) => {
    switch (entryName) {
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
    return false;
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
