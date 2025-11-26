// ============================================
// TO-DO LIST APPLICATION
// ============================================

class ToDoApp {
  constructor() {
    this.taskInput = document.getElementById('task-input');
    this.addBtn = document.getElementById('add-btn');
    this.taskList = document.getElementById('task-list');
    this.emptyState = document.getElementById('empty-state');
    this.form = document.getElementById('task-form');

    // Load tasks from localStorage
    this.tasks = this.loadTasks();

    // Setup event listeners
    this.setupEventListeners();

    // Initial render
    this.render();
  }

  // ============================================
  // STORAGE METHODS
  // ============================================

  loadTasks() {
    try {
      const stored = localStorage.getItem('tasks');
      if (!stored) return [];
      
      const data = JSON.parse(stored);
      return data.map(item => Task.fromJSON(item));
    } catch (error) {
      console.error('Error loading tasks:', error);
      return [];
    }
  }

  saveTasks() {
    try {
      const data = this.tasks.map(task => task.toJSON());
      localStorage.setItem('tasks', JSON.stringify(data));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  }

  // ============================================
  // CRUD METHODS
  // ============================================

  addTask(text) {
    if (!text || !text.trim()) return;

    const task = new Task(Date.now().toString(), text.trim(), false);
    this.tasks.unshift(task);
    this.saveTasks();
    this.render();
    this.taskInput.value = '';
    this.taskInput.focus();
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
    this.render();
  }

  toggleTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.toggle();
      this.saveTasks();
      this.render();
    }
  }

  editTask(id, newText) {
    const task = this.tasks.find(t => t.id === id);
    if (task && task.update(newText)) {
      this.saveTasks();
      this.render();
    }
  }

  // ============================================
  // RENDERING METHODS
  // ============================================

  render() {
    this.renderTaskList();
    this.toggleEmptyState();
  }

  renderTaskList() {
    this.taskList.innerHTML = '';

    this.tasks.forEach(task => {
      const li = this.createTaskElement(task);
      this.taskList.appendChild(li);
    });
  }

  createTaskElement(task) {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;
    li.dataset.id = task.id;

    // Content wrapper
    const content = document.createElement('div');
    content.className = 'task-content';

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => this.toggleTask(task.id));

    // Task text
    const textSpan = document.createElement('span');
    textSpan.className = 'task-text';
    textSpan.textContent = task.text;

    content.appendChild(checkbox);
    content.appendChild(textSpan);

    // Controls wrapper
    const controls = document.createElement('div');
    controls.className = 'task-controls';

    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.type = 'button';
    completeBtn.className = 'btn btn-sm btn-complete';
    completeBtn.textContent = task.completed ? '↺ Deshacer' : '✓ Completar';
    completeBtn.addEventListener('click', () => this.toggleTask(task.id));

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.className = 'btn btn-sm btn-edit';
    editBtn.textContent = '✎ Editar';
    editBtn.addEventListener('click', () => this.promptEdit(task.id, task.text));

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'btn btn-sm btn-delete';
    deleteBtn.textContent = '✕ Eliminar';
    deleteBtn.addEventListener('click', () => {
      if (confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
        this.deleteTask(task.id);
      }
    });

    controls.appendChild(completeBtn);
    controls.appendChild(editBtn);
    controls.appendChild(deleteBtn);

    li.appendChild(content);
    li.appendChild(controls);

    return li;
  }

  promptEdit(id, currentText) {
    const newText = prompt('Editar tarea:', currentText);
    if (newText !== null) {
      this.editTask(id, newText);
    }
  }

  toggleEmptyState() {
    if (this.tasks.length === 0) {
      this.emptyState.classList.remove('hidden');
    } else {
      this.emptyState.classList.add('hidden');
    }
  }

  // ============================================
  // EVENT LISTENERS
  // ============================================

  setupEventListeners() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.addTask(this.taskInput.value);
    });
  }
}

// ============================================
// INITIALIZE APP
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  new ToDoApp();
});
