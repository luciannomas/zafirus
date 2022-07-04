import express from 'express' 
import morgan from 'morgan' 

import userRoutes from './routes/user.routes'

import cors from 'cors'

//TODO: INIT APP
const app = express();
// createRoles();

//Setting
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended: false})) // for form
app.use(cors());

// Init port
app.set('port', process.env.PORT || 3001 ) // Method with seting the var / const

//TODO: Routes
app.get('/', (req, res) => {
    res.json({ message: 'Api-zafitus start..' })
});

app.use('/users', userRoutes )

export default app