declare module 'signale';
declare module 'fs-extra';
declare module 'webpack-dev-server';
declare module 'webpackbar';


declare module "*.json" {
    const value: any;
    export default value;
}