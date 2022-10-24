
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const PORT = 3001;
// Sincronizacion de los modelos 
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server escuchando en el puerto ${PORT}`); 
  });
});
