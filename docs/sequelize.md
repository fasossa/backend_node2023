# Comandos Sequelize
## Para generar models y migraciones
```
npx sequelize-cli model:generate --name Usuario --attributes username:string,email:string,password:string,estado:boolean

npx sequelize-cli model:generate --name Categoria --attributes nombre:string,detalle:text

npx sequelize-cli model:generate --name Producto --attributes nombre:string,precio:decimal,stock:integer,imagen:string,estado:boolean,descripcion:text,categoriaId:integer

npx sequelize-cli model:generate --name Cliente --attributes nombre_completo:string,ci_nit:string,telefono:string,correo:string

npx sequelize-cli model:generate --name Pedido --attributes fecha_pedido:date,nro_factura:string,userId:integer,estado:integer,clienteId:integer

npx sequelize-cli model:generate --name PedidoProducto --attributes pedidoId:integer,productoId:integer,cantidad:integer

```

```
npx sequelize-cli model:generate --name Usuario --attributes username:string,email:string,password:string,estado:boolean

npx sequelize-cli model:generate --name Categoria --attributes nombre:string,detalle:text

npx sequelize-cli model:generate --name Proveedor --attributes nombre:string,nit:integer,detalle:text

npx sequelize-cli model:generate --name Presentacion --attributes nombre:string,detalle:text

npx sequelize-cli model:generate --name Producto --attributes nombre:string,nom_comercial:string,lote:string,fecha_ven:date,precio:decimal,pventa:decimal,punitario:decimal,stock:integer,imagen:string,estado:boolean,descripcion:text,proveedorID:integer,presentacionID:integer,categoriaId:integer

npx sequelize-cli model:generate --name Cliente --attributes nombre_completo:string,ci_nit:string,telefono:string,correo:string

npx sequelize-cli model:generate --name Pedido --attributes fecha_pedido:date,nro_factura:string,userId:integer,estado:integer,clienteId:integer

npx sequelize-cli model:generate --name PedidoProducto --attributes pedidoId:integer,productoId:integer,cantidad:integer

```

```
npm i mysql2
npx sequelize-cli db:migrate

```