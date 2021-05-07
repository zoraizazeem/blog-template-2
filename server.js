const express = require( 'express' );
var router = express.Router();
const cors = require( 'cors' );



const app = express();
app.set( 'view engine', 'ejs' );

app.use( cors() );
app.use( express.json() )

app.get( '/', ( req, res ) => {
    /*res.json( {
        server: 'is online'
    } );*/
    res.render( 'index' );
} );


app.listen( 5000 )