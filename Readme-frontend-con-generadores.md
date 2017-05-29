# Crear tu frontend desde cero con un generador
## Instalar las dependencias de nodejs que nos permitirán crear el proyecto (las instalaremos de manera global)
```
npm install -g yo generator-fountain-webapp generator-fountain-angular2 @angular/cli@latest
```
## Opción de @angular/cli.
### Creamos un nuevo proyecto de la siguiente forma:
```
ng new frontend --style sass -ng4 --prefix gdg --routing --directory frontend-cli --skip-tests true && ng set defaults.styleExt sass
```
### Una vez se termine de instalar, ingresamos al directorio y probamos que esté todo funcionando:
```
cd frontend-cli
ng serve
```
### Con esto se ejecuta el servidor y en una ventana de nuestro navegador web podemos entrar a
http://localhost:4200/

## Opción de yeoman + fountainjs-angular2.
### Creamos un nuevo proyecto de la siguiente forma:
```
mkdir frontend-wa && cd frontend-wa && yo fountain-angular2:app --ci --framework angular2 --modules webpack --css scss --js typescript --router router --skip-cache true
```
### Una vez se termine de instalar, ingresamos al directorio (si hemos salido) y probamos que esté todo funcionando:
```
cd frontend-wa
npm run serve
```
### Con esto se ejecuta el servidor y en una ventana de nuestro navegador web podemos entrar a
http://localhost:3000/