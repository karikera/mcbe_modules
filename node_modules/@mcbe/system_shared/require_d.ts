
interface NodeRequireFunction {
    /* tslint:disable-next-line:callable-types */
    (id: string): any;
}
interface NodeRequire extends NodeRequireFunction {
}

declare var require: NodeRequire;
