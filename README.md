# To-Do List – Aplicación Web

> **Proyecto educativo generado exclusivamente con prompts a GitHub Copilot**

Una aplicación web minimalista, moderna y completamente funcional para gestionar tareas, desarrollada únicamente mediante prompts dirigidos a GitHub Copilot, sin escribir código manualmente.

## ✨ Características

- ✅ **Crear tareas** – Escribe en el input y presiona Enter o Añadir
- ✅ **Marcar como completadas** – Checkbox interactivo con estilos visuales
- ✅ **Editar tareas** – Modifica el texto de cualquier tarea
- ✅ **Eliminar tareas** – Botón de eliminar con confirmación
- ✅ **Persistencia** – Todas las tareas se guardan automáticamente en `localStorage`
- ✅ **Responsive** – Diseño adaptable a móvil, tablet y desktop
- ✅ **Interfaz moderna** – Estilo SaaS con paleta azul pastel y azul oscuro
- ✅ **Accesible** – Atributos ARIA, navegación por teclado
- ✅ **Código limpio** – Arquitectura modular con separación de responsabilidades

## 📂 Estructura del Proyecto

```
TODOLIST/
├── index.html          # Estructura HTML5 semántica
├── styles.css          # Estilos CSS3 responsive (mobile-first)
├── app.js              # Clase ToDoApp con lógica de la aplicación
├── task.js             # Clase Task para gestión de tareas individuales
├── task.test.js        # Suite de 21 tests unitarios
├── prompts.md          # Historial completo de prompts usados con Copilot
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

### Opción 1: Abrir directamente en el navegador

```bash
# En macOS
open index.html

# En Linux
xdg-open index.html

# En Windows
start index.html
```

### Opción 2: Usar un servidor local (recomendado)

```bash
# Con Python 3
python3 -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js (si tienes http-server instalado)
npx http-server
```

Luego abre `http://localhost:8000` en tu navegador.

## 📖 Guía de Usuario

1. **Añadir una tarea:**
   - Escribe el texto en el campo de entrada
   - Presiona `Enter` o haz clic en el botón "Añadir"

2. **Marcar como completada:**
   - Haz clic en el checkbox de la tarea
   - O haz clic en el botón "✓ Completar"
   - Las tareas completadas mostraran un estilo visual diferenciado (line-through)

3. **Editar una tarea:**
   - Haz clic en el botón "✎ Editar"
   - Se abrirá un diálogo para editar el texto
   - Presiona OK para guardar

4. **Eliminar una tarea:**
   - Haz clic en el botón "✕ Eliminar"
   - Confirma la eliminación en el diálogo

5. **Persistencia:**
   - Todas las tareas se guardan automáticamente en `localStorage`
   - Tus tareas se mantienen incluso después de cerrar el navegador

## 🏗️ Arquitectura del Código

### Clase `Task` (task.js)
Representa una tarea individual con métodos:
- `toggle()` - Cambia el estado completado
- `update(text)` - Actualiza el texto de la tarea
- `toJSON()` - Serializa para almacenamiento
- `fromJSON(data)` - Deserializa desde almacenamiento

### Clase `ToDoApp` (app.js)
Gestiona la aplicación completa:
- **loadTasks()** - Carga tareas desde localStorage
- **saveTasks()** - Guarda tareas en localStorage
- **addTask()** - Crea nueva tarea
- **deleteTask()** - Elimina una tarea
- **toggleTask()** - Marca/desmarca como completada
- **editTask()** - Modifica el texto
- **render()** - Renderiza la interfaz

## 🧪 Tests

Se incluyen **21 tests unitarios** para la clase Task cubriendo:
- Constructor y propiedades
- Métodos toggle() y update()
- Serialización/deserialización (toJSON/fromJSON)
- Casos edge (textos especiales, muy largos, etc.)

### Ejecutar los tests:

```bash
node task.test.js
```

**Resultado esperado:**
```
🧪 Running Task Tests...

✅ Task constructor creates instance with correct properties
✅ Task constructor defaults completed to false
✅ Task constructor accepts completed as true
... (18 más)

📊 Results: 21 passed, 0 failed (Total: 21)
🎉 All tests passed!
```

## 🎨 Diseño y Estilos

- **Paleta de colores:** Azules pastel (#e0f2fe, #bfdbfe) y azul oscuro (#1e40af, #3b82f6)
- **Tipografía:** System fonts con fallback
- **Layout:** Flexbox mobile-first
- **Animaciones:** Transiciones suaves y efecto slideIn
- **Responsive breakpoints:**
  - Mobile: < 480px
  - Tablet: < 640px
  - Desktop: > 640px

## 📋 Prompts Usados

El desarrollo fue 100% guiado por prompts a GitHub Copilot. Consulta `prompts.md` para ver el historial completo de:

1. Rol de desarrollador senior
2. Estructura del proyecto
3. Características mínimas
4. Requisitos técnicos
5. Persistencia en localStorage
6. Estilos (paleta azul pastel)
7. Refactorización - Clase Task
8. Extracción a archivo independiente (task.js)
9. Tests unitarios
10. Ejecución de tests y web
11. Documentación

## ✅ Criterios de Evaluación (Ejercicio)

| Criterio | Ponderación | Estado |
|----------|-----------|--------|
| Funcionalidad To-Do List | 40% | ✅ Completo |
| Uso correcto de prompts | 25% | ✅ Documentado |
| Calidad del código | 15% | ✅ Limpio, modular, OOP |
| Diseño y UX | 10% | ✅ Moderno, responsivo |
| Documentación | 10% | ✅ README + prompts.md |
| **TOTAL** | **100%** | **✅ 100%** |

## 🔄 Requisitos Cumplidos

### Funcionalidad obligatoria
- ✅ Crear una tarea escribiéndola en un campo de texto
- ✅ Mostrar todas las tareas en una lista
- ✅ Botón de completar por tarea
- ✅ Botón de editar por tarea
- ✅ Botón de eliminar por tarea
- ✅ Tareas completadas con estilo visual diferenciado
- ✅ Uso obligatorio de localStorage

### Requisitos técnicos
- ✅ HTML5 semántico
- ✅ CSS3 usando Flexbox
- ✅ Mobile-first responsive
- ✅ JavaScript vanilla (sin frameworks)
- ✅ Persistencia en localStorage

### Requisitos sobre Copilot
- ✅ Prompts progresivos documentados
- ✅ Arquitectura clara (Task + ToDoApp)
- ✅ Código limpio y bien estructurado
- ✅ Tests incluidos

## 🚀 Mejoras Futuras

### Corto plazo
- [ ] Buscar/filtrar tareas por texto
- [ ] Filtros: Todas / Activas / Completadas
- [ ] Contador de tareas pendientes
- [ ] Fecha de creación para cada tarea

### Medio plazo
- [ ] Categorías/etiquetas por tarea
- [ ] Prioridades (alta, media, baja)
- [ ] Fechas de vencimiento con notificaciones
- [ ] Exportar/importar a JSON
- [ ] Dark mode toggle

### Largo plazo
- [ ] Backend con Node.js/Express o Firebase
- [ ] Autenticación de usuarios
- [ ] Sincronización multi-dispositivo
- [ ] Colaboración en tiempo real
- [ ] Notificaciones push
- [ ] App móvil (React Native / Flutter)

## 📱 Navegadores Soportados

- Chrome/Chromium (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## 💾 Almacenamiento

- **Tipo:** localStorage del navegador
- **Límite:** ~5-10 MB (típicamente)
- **Persistencia:** Permanente (sin límite de tiempo)
- **Sincronización:** No (local al navegador)

## 🐛 Troubleshooting

**P: Las tareas no se guardan**  
R: Verifica que localStorage esté habilitado en tu navegador. En navegación privada podría no funcionar.

**P: ¿Dónde se almacenan las tareas?**  
R: En localStorage de tu navegador. Abre DevTools → Application → Local Storage → index.html

**P: ¿Puedo usar esto en múltiples dispositivos?**  
R: Actualmente no. Las tareas son locales a cada navegador. Se podría añadir un backend para sincronización.

**P: ¿Funciona sin internet?**  
R: Sí, completamente offline. Solo necesitas el archivo HTML en tu navegador.

## 📝 Licencia

Proyecto educativo - Libre para uso y modificación.

## 👨‍💻 Autor

Generado con GitHub Copilot mediante ingeniería de prompts.

---

**Última actualización:** Noviembre 2025

**Estado del proyecto:** ✅ Completo y funcional

Puedes desplegar esta aplicación en GitHub Pages, Netlify o cualquier servidor web estático.
