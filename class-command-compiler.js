/*:
    @module-configuration:
        {
            "packageName": "class-command-compiler",
            "fileName": "class-command-compiler.js",
            "moduleName": "CommandCompiler",
            "className": "CommandCompiler",
            "authorName": "Richeve S. Bebedor",
            "authorEMail": "richeve.bebedor@gmail.com",
            "repository": "git@github.com:volkovasystems/class-command-compiler.git",
            "isGlobal": true
        }
    @end-module-configuration

    @module-documentation:

    @end-module-documentation

    @include:
        {
            "arguments-to-array": "argumentsToArray"
        }
    @end-include
*/
var CommandCompiler = function CommandCompiler( compiler ){
    /*:
        @meta-configuration:
            {
                "compiler:required": "Class"
            }
        @end-meta-configuration
    */

    this.setCompiler( compiler );
};

CommandCompiler.prototype.compile = function compile( ){
    this.compiler.compile.apply( this, argumentsToArray( arguments ) );
};

CommandCompiler.prototype.setCompiler = function setCompiler( compiler ){
    /*:
        @meta-configuration:
            {
                "compiler:required": "Class"
            }
        @end-meta-configuration
    */

    this.compiler = new compiler( );
};

CommandCompiler.prototype.setCompilerWithNamespace = function setCompilerWithNamespace( namespace ){
    /*:
        @meta-configuration:
            {
                "namespace:required": "string"
            }
        @end-meta-configuration
    */

    var compiler = this.compilerSet[ namespace ];

    if( "compilerSet" in this &&
        namespace in this.compilerSet &&
        "compiler" in this &&
        this.compiler.constructor !== compiler )
    {
        this.setCompiler( compiler );
    }
};

CommandCompiler.prototype.setCompilerNamespace = function setCompilerNamespace( namespace, compiler ){
    /*:
        @meta-configuration:
            {
                "namespace:required": "string",
                "compiler:required": "Class"
            }
        @end-meta-configuration
    */

    if( !( "compilerSet" in this ) ){
        this.compilerSet = { };
    }

    if( !( namespace in this.compilerSet ) ||
        this.compilerSet[ namespace ] !== compiler.constructor )
    {
        this.compilerSet[ namespace ] = compiler;
    }
};

var argumentsToArray = require( "./arguments-to-array/arguments-to-array.js" );

( module || { } ).exports = CommandCompiler;