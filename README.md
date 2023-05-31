# Bases de Datos II

## Insertar datos cifrados a una tabla en SQL Server

---

### Crear la base de datos en SQL Server

El archivo [**_bd_clientes.sql_**](./src/public/bd_clientes.sql) hay que ejecutarlo en el Sistema Gestor de Microsoft SQL Server para guardar la base de datos en la computadora

---

### Configurar el servidor de bd

Al descargar el programa, hay que configurar el archivo en la ruta [**_src/config.js_**](./src/config.js) con las siguientes lineas:

    port: 'numero de puerto'
    user: 'nombre de usuario de la bd',
    password: 'cotraseña del usuario',
    server: 'localhost',
    database: 'nombre_de_la_base_de_datos'

Y debe de coincidir con la información del Sistema Gestor de Microsoft SQL Server

---

### Iniciar el servidor de node

Debe de iniciar el servidor para poder visualizar el sistema, con el siguiente comando:

    npm run dev

y podrá accecer a la página desde cualquier navegador

### IMPORTANTE

Descargar los módulos de **node** que se usaron en el sistema, los puede encontrar en el archivo **_package.json_**

    "dependencies": {
        "cors": "^2.8.5",
        "crypto-js": "^4.1.1",
        "dotenv": "^16.0.3",
        "express": "^4.18.2",
        "morgan": "^1.10.0",
        "mssql": "^9.1.1"
    },

Módulos de desarrollo:

    "devDependencies": {
        "@babel/cli": "^7.21.5",
        "@babel/core": "^7.21.8",
        "@babel/node": "^7.20.7",
        "@babel/plugin-transform-runtime": "^7.21.4",
        "@babel/preset-env": "^7.21.5",
        "nodemon": "^2.0.22"
    }

Todas estos módulos los puede descargar con el comando:

    npm install nombre-de-paquete
    npm install nombre-de-paquete-de-desarrollo -D
