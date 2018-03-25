// import { holochain } from '../../holochain';

const genesis = () => {
    return true;
};

const pusherEntryCreate = (pusher) => {
    pusher.agent = App.Agent.Hash;
    const pusherHash = commit('pusherEntry', pusher);

    commit('pushers', {Links:[
        {Base: App.DNA.Hash, Link: pusherHash, Tag: 'pushersLink' }
    ]});

    return pusherHash;
}

const pusherGetEntry = (hash) => {
    const pusher = get(hash);
    return pusher;
}

const pusherGetFromAgent = () => {
    const pusher = query({ Constrain: { EntryTypes: ["pusherEntry"] } });
    return pusher;
}

const pushersGetAll = () => {
    const pushers = getLinks(App.DNA.Hash, 'pushersLink', { Load: true });
    debug(pushers);
    return pushers;
}

const validateCommit = (entryName, entry, header, pkg, sources) => {
    switch (entryName) {
        case "pusherEntry":
        case "pushers":
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
