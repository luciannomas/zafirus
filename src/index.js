import app from './app' 
import "./database" 

/* app.listen( app.get('port'), () => {
    console.log('server on port:', app.get('port'));
}) */

// con async await

async function main() {
    const PORT = process.env.PORT;
    await app.listen( PORT || 3001 )
    console.log('server on port:', app.get('port'))
}

main()



