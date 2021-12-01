const express= require('express');
const router = express.Router();

const PRODUCTOS = require('./../resources/files/productos');


let personas = []

router.get('/',(req,res)=>{
    res.render("index",{personas:personas,title:"Página de Inicio"});
});

router.get('/insert',(req, res)=>{
    res.render('insert',{title:"Insertar Estudiante",
        productos:PRODUCTOS.productos,
        tipos:PRODUCTOS.tipos});
});


router.post('/insert',(req,res)=>{
    const{code, name, lastName, gender, prod, tipo, email, phone } = req.body;
    const produAux = PRODUCTOS.productos.find( record => record.code == prod ).name;
    const tipoAux = PRODUCTOS.tipos.find( record => record.code == tipo ).name;
    const precio_producto= PRODUCTOS.tipos.find( record => record.code== tipo ).Valor;
    precio=parseInt(precio_producto,10);
    const total=precio;
    //const total= precio_producto.valueOf();
    //const total=parceIint(precio_producto,10);
    const city = tipoAux.concat( '-', produAux );
    const genAux = gender == 'F' ? "Femenino" : "Masculino";
    var hoy = new Date();
    var fecha= hoy.getDate()+'-'+(hoy.getMonth()+1)+'-'+hoy.getFullYear();
    var hora= hoy.getHours()+':'+hoy.getMinutes();
    var fechaHora= fecha+' '+hora;

    
    let newReg = {code, lastName, name, genAux, city, email, phone, precio ,total,fechaHora  };
    
    personas.push(newReg);
    res.redirect('/');

    console.log(precio_producto);
    console.log(newReg.total);
});

router.get('/about',(req,res)=>{
   res.render('about',{title:"Sobre Nosotros"});
});

module.exports = router;
