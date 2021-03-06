
declare global
{
    interface Console {
        log(msg:any, ...params:any[]):void;
        error(msg:any, ...params:any[]):void;
        warn(msg:any, ...params:any[]):void;
        assert(value:any, msg?:any, ...params:any[]):void;
    }
    var console:Console;
}

if (typeof console === 'undefined')
{
    // avoid "use strict" for minecraft addon
    new Function('obj', 'console=obj')({
        log(){},
        warn(){},
        error(){},
        assert(){},
    });
}

const dummyConsole = {
    /**
     * @deprecated not need to use install, it will installed by import
     */
    install():void{}    
};
export default dummyConsole;
