// import { holochain } from '../../holochain';

const genesis = () => {
    return true;
};

const pusherEntryCreate = (pusher) => {
    const pusherHash = commit('pusherEntry', pusher);
    return pusherHash;
}

const pusherGetEntry = (hash) => {
    const pusher = get(hash);
    return pusher;
}

const validateCommit = (entryName, entry, header, pkg, sources) => {
    switch (entryName) {
        case "pusherEntry":
            return true;
        default:
            // invalid entry name
            return false;
    }
}

const validatePut = (entryName, entry, header, pkg, sources) => {
    switch (entryName) {
        case "pusherEntry":
            return true;
        default:
            // invalid entry name
            return false;
    }
}

const validateMod = (entryName, entry, header, replaces, pkg, sources) => {
    switch (entryName) {
        case "pusherEntry":
            return true;
        default:
            // invalid entry name
            return false;
    }
}

const validateDel = (entryName, hash, pkg, sources) => {
    switch (entryName) {
        case "pusherEntry":
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