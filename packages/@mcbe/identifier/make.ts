
import Identifier from ".";

/**
 * It makes Identifier automatically by accessed property name
 */
const MAKEID:{[key:string]:Identifier} = new Proxy({}, {
    get(obj:{[key:string]:Identifier}, prop){
        if (typeof prop === 'string')
        {
            return Identifier.getFromName(prop.replace(/\$/, ':'));
        }
        return obj[prop as any];
    }
});

export default MAKEID;
