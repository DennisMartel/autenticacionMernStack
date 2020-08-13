const app = require('./app')
require('./database')

const run = () => {
    app.listen(app.get('port'))
    console.log(`server runnig on port: ${app.get('port')}`)
}

run()