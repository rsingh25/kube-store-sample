const app = require('express')();

app.get('/cart', (req, resp) => {
   resp.json({message: 'cart service new'});
})


app.listen(3001, () => console.log('listening at 3001'));