# Historial de Prompts – To-Do List

Registro de todos los prompts enviados a GitHub Copilot y sus resultados.

---

## Prompt 1: Registrar Prompts

**Prompt enviado:**
```
"Registra en un archivo prompts.md todos los prompts que te escriba y su resultado, incluído este"
```

**Resultado:**
- Archivo `prompts.md` creado
- Se registrarán todos los prompts y resultados en este archivo
- El historial será actualizado progresivamente

---

## Prompt 2: Rol de Desarrollador Senior

**Prompt enviado:**
```
"Actúa como un desarrollador senior especializado en interfaces web responsive."
```

**Resultado:**
- Aceptado el rol de desarrollador senior
- Especialización: interfaces web responsive
- Aplicará mejores prácticas en diseño y desarrollo frontend
- Considerará mobile-first, accesibilidad, performance y UX

---

## Prompt 3: Estructura del Proyecto

**Prompt enviado:**
```
"El proyecto deberá estar compuesto como mínimo por:
● index.html
● styles.css
● app.js"
```

**Resultado:**
- Estructura definida con 3 archivos mínimos
- `index.html` - Estructura HTML5 semántica
- `styles.css` - Estilos CSS3 responsive
- `app.js` - Lógica JavaScript del proyecto
- Se crearán estos archivos en los próximos pasos

---

## Prompt 4: Características y Creación de Archivos

**Prompt enviado:**
```
"Vas a crear una aplicación web de lista de tareas (To-Do List) con las siguientes características mínimas:
● Añadir tareas
● Marcar tareas como completadas
● Editar tareas
● Eliminar tareas
● Guardar las tareas en localStorage
● Interface limpia, responsiva y usable
Crea los archivos en el proyecto"
```

**Resultado:**
✅ Archivos creados con funcionalidad completa:

- **index.html** - Estructura semántica con input, botón y lista de tareas
- **styles.css** - Diseño responsivo mobile-first con variables CSS y flexbox
- **app.js** - Clase ToDoApp con métodos CRUD y persistencia en localStorage

---

## Prompt 5: Requisitos Técnicos

**Prompt enviado:**
```
"Requisitos técnicos:
- HTML5
- CSS3 usando Flexbox
- Mobile-first"
```

**Resultado:**
✅ Confirmado cumplimiento de requisitos técnicos:

- **HTML5** - Estructura semántica completa con atributos modernos
- **CSS3 Flexbox** - Utilizado en todo el layout (app-container, task-form, task-list, task-item, task-controls)
- **Mobile-first** - Media queries desde 640px y 480px para adaptarse a desktop

---

## Prompt 6: Persistencia en localStorage

**Prompt enviado:**
```
"Usa localStorage para guardar los datos"
```

**Resultado:**
✅ localStorage implementado en app.js:

- **loadTasks()** - Carga tareas desde localStorage al inicializar
- **saveTasks()** - Guarda tareas automáticamente tras cada cambio (add, edit, delete, complete)
- **Persistencia automática** - Todas las operaciones CRUD guardan en localStorage
- **Recuperación de datos** - Las tareas se cargan automáticamente al recargar la página

---

## Prompt 7: Estilo Visual Mejorado

**Prompt enviado:**
```
"Estilo usando tonos pastel azul y azul oscuro. Botones elegantes con pequeñas sombras, cambio de color a mas claro en hover"
```

**Resultado:**
✅ Estilos actualizados en styles.css:

- **Paleta de colores** - Tonos pastel azul (#e0f2fe, #bfdbfe) y azul oscuro (#1e40af, #3b82f6)
- **Fondos** - Gradientes sutiles con azules claros
- **Botones** - Sombras elegantes (box-shadow), transiciones suaves
- **Hover effects** - Botones cambian a tonos más claros con elevación
- **Coherencia visual** - Aplicado en header, botones, inputs y tareas completadas

---

## Prompt 8: Refactorización de Código

**Prompt enviado:**
```
"refactoriza app.js para sacar a parte la clase tarea con sus métodos"
```

**Resultado:**
✅ Refactorización completada en app.js:

- **Clase Task** - Nueva clase independiente con métodos para tareas individuales
- **Propiedades de Task** - id, text, completed, métodos toggle() y update()
- **Clase ToDoApp** - Refactorizada para usar instancias de Task
- **Mejor separación de responsabilidades** - Lógica de tarea separada de lógica de app

---

## Prompt 9: Extracción de Clase Task a Archivo Independiente

**Prompt enviado:**
```
"saca la clase tarea a otro archivo js para separar responsabilidades"
```

**Resultado:**
✅ Arquitectura mejorada:

- **task.js** - Archivo nuevo con la clase Task y sus métodos
- **app.js** - Refactorizado, ahora solo contiene clase ToDoApp
- **index.html** - Actualizado con referencias a ambos archivos (task.js antes que app.js)
- **Separación clara** - Cada archivo tiene una responsabilidad única (Task vs ToDoApp)

---

## Prompt 10: Tests para la Clase Task

**Prompt enviado:**
```
"crea tests para la clase tarea"
```

**Resultado:**
✅ Suite de tests completa:

- **task.test.js** - Archivo nuevo con tests unitarios para la clase Task
- **Constructor** - Verifica creación correcta de instancias
- **toggle()** - Prueba cambio de estado completado
- **update()** - Prueba actualización de texto
- **toJSON() / fromJSON()** - Prueba serialización y deserialización
- **Validaciones** - Pruebas de casos edging y errores

---

## Prompt 11: Ejecutar Tests y Abrir Web

**Prompt enviado:**
```
"ejecuta tests y abre la web"
```

**Resultado:**
✅ Ejecución completada:

- Tests ejecutados en Node.js
- Web abierta en navegador predeterminado
- Aplicación lista para pruebas funcionales

---

## Prompt 12: Crear README.md

**Prompt enviado:**
```
"crea archivo README.md"
```

**Resultado:**
✅ Creado archivo README: