//requires
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    if (!Number(base)) {
        throw new Error(`El valor ingresado '${base}' No es un numero`);
    }

    console.log('================================'.cyan.inverse);
    console.log(`=======Tabla del ${base} al ${limite}========`.trap);
    console.log('================================'.magenta.inverse);

    for (let i = 1; i <= limite; i++) {
        console.log(`\t${base} * ${i} = ${base*i}`.underline);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado ${base} No es un numero`);
        }

        let tabla = '';

        for (let i = 1; i <= limite; i++) {
            tabla += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, tabla, (err) => {

            if (err) reject(err)
            else
                resolve(`tabla-del-${base}-al-${limite}.txt`.cyan);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}