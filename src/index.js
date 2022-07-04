import app from './app' 
import "./database" 

/* app.listen( app.get('port'), () => {
    console.log('server on port:', app.get('port'));
}) */

// con async await

async function main() {
    await app.listen( process.env.PORT || 3001 )
    console.log('server on port:', app.get('port'))
}

main()



