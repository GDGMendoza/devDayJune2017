# Patrones comunes en angular 2
En angular 2 utilizamos mucho estos dos patrones que manejan información asíncronamente.

## Patrón observable
El patrón observable se basa en un objeto que permite almacenar datos y notificar cuando los recibe a aquellos objetos que se hayan subscripto a él.
Siendo la cola de tareas por defecto, para el momento cero, recibir un dato y notificarlo a sus subscriptos, pero dado el caso en que se le subscriba alguien para un momento muerto, vuelve a notificar el último dato almacenado a dicho subscriptor, y después normalmente solo notifica ante un nuevo llamado.
Reglas:
1. Un observable solo notifica si tiene por lo menos un subscripto.
2. Cualquier subscripto puede desubscribirse cuando quiera.
3. Un observable deja de notificar luego de que su observer invoque el método complete();
4. Tres respuestas posibles valor, error o completado.

```
class Ex0 {
    public observable: Observable<number>;
    constructor () {
        this.observable = new Observable(
            observer => {
                setInterval(() => {
                    const integerNumber = randomNumber();
                    if (integerNumber != 0) {
                        observer.next(integerNumber);
                    } else {
                        observer.complete();
                    }
                }, 1000);
            }
        );
    }
}
class Ex1 {
    constructor (private ex0: Ex0) {
        let subscriptor1 = ex0.observable.subscribe(
            value => {
                if (!isNull(value)) {
                    console.log('Number: ', value);
                    makeSomething(value);
                }
            }, error => {
                console.error(error);
            }, () => {
                console.info('Observable cerrado');
            }
        );
        subscriptor1.unsubscribe();
    }
}
class Ex2 {
    constructor (private ex0: Ex0) {
        let subscriptor2 = ex0.observable.subscribe(
            (value) => {
                if (!isNull(value)) {
                    console.log('Number: ', value);
                    makeSomethingelse(value);
                }
            }, error => {
                console.error(error);
            }, () => {
                console.info('Observable cerrado');
            }
        );
        subscriptor2.unsubscribe();
    }
}

```

## Patrón promesa
El patrón promesa se basa en un objeto que permite devolver dos funciones, una para cuando ha sido resuelto con éxito y otra para cuando ha sido resuelto con errores.
Una vez se invoca la promesa, se espera por la respuesta exitosa o no, y con la respuesta termina el ciclo de vida, devolviéndo a quien la llame dos funciones, las cuales pueden recibir datos útiles para el momento de la respuesta.
Reglas:
1. Quien invoque la promesa es quien puede capturar las respuestas.
2. Dos respuestas posibles pero solo una por llamado, resolve y reject consumidos como then y catch.
Ejemplo en typescript:
```
let promise = new Promise(
    (resolve, reject) => {
        const actionResponse = doAnAction();
        if (actionResponse === true) {
            resolve('respuesta correcta');
        } else {
            reject('error');
        }
    }
);
promise.then(
    (message) => {
        console.info(message);
        makeSomething();
    }
).catch(
    (message) => {
        console.error(message);
        makeSomethingElse();
    }
)
```

Diferencia clave, su ciclo de vida, porque el primero puede recibir n veces un dato y propagarlo n veces, mientras que el segundo lo recibe una vez y lo propaga una sola vez tambien.