// ============================================
// TASK CLASS
// ============================================

class Task {
  constructor(id, text, completed = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }

  toggle() {
    this.completed = !this.completed;
    return this;
  }

  update(newText) {
    if (!newText || !newText.trim()) return false;
    this.text = newText.trim();
    return true;
  }

  toJSON() {
    return {
      id: this.id,
      text: this.text,
      completed: this.completed
    };
  }

  static fromJSON(data) {
    return new Task(data.id, data.text, data.completed);
  }
}
