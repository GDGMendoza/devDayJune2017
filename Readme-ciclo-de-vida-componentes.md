# Ciclo de vida de un componente

Información extraída de la documentación oficial para [hooks de un componente][1] y adaptada al español en forma de tabla

| Etapa | Resultado |
|---|---|
| 1. constructor | El modelo se crea en javascript |
| 2. ngOnChanges | Se agrega un hook para cambios globales en este punto del ciclo |
| 3. ngOnInit | El componente es creado como objeto |
| 4. ngDoCheck | Se agrega un hook para cambios globales en este punto del ciclo |
| 5. ngAfterContentInit | El template de la vista es renderizado y ya está en el dom |
| 6. ngAfterContentChecked | La vista ya tiene los datos |
| 7. ngAfterViewInit | La vista se renderizó y tenemos acceso a sus hijos en su estado actual |
| 8. ngAfterViewChecked | Se agrega un hook para cambios globales en este punto del ciclo |
| 9. ngOnDestroy | El componente con su vista y datos es eliminado del dom |

[1]: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
