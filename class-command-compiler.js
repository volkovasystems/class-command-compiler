/*:
 @module-configuration:
 {
 "packageName": "permutate-lexicographically",
 "fileName": "permutate-lexicographically.js",
 "moduleName": "permutateLexicographically",
 "authorName": "Richeve S. Bebedor",
 "authorEMail": "richeve.bebedor@gmail.com",
 "repository": "git@github.com:volkovasystems/permutate-lexicographically.git",
 "isGlobal": true
 }
 @end-module-configuration

 @module-documentation:

 @end-module-documentation

 @include:
 @end-include
 */
var CommandCompiler = function CommandCompiler( compiler ){
    this.compiler = compiler;
};

CommandCompiler.prototype.compile = function compile( ){
    this.compiler.compile.apply( this, Arra )
};

( module || { } ).exports = CommandCompiler;