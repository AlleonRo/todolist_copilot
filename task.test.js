// ============================================
// TASK CLASS DEFINITION (for Node.js testing)
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

// ============================================
// TEST RUNNER
// ============================================

class TestRunner {
  constructor() {
    this.tests = [];
    this.passed = 0;
    this.failed = 0;
  }

  test(name, fn) {
    this.tests.push({ name, fn });
  }

  assert(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
  }

  assertEqual(actual, expected, message) {
    if (actual !== expected) {
      throw new Error(message || `Expected ${expected}, got ${actual}`);
    }
  }

  assertDeepEqual(actual, expected, message) {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      throw new Error(message || `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
    }
  }

  run() {
    console.log('🧪 Running Task Tests...\n');
    
    this.tests.forEach(test => {
      try {
        test.fn(this);
        this.passed++;
        console.log(`✅ ${test.name}`);
      } catch (error) {
        this.failed++;
        console.log(`❌ ${test.name}`);
        console.log(`   Error: ${error.message}\n`);
      }
    });

    console.log(`\n📊 Results: ${this.passed} passed, ${this.failed} failed (Total: ${this.tests.length})`);
    
    if (this.failed === 0) {
      console.log('🎉 All tests passed!');
    }
  }
}

// ============================================
// TEST SUITE
// ============================================

const runner = new TestRunner();

// Constructor Tests
runner.test('Task constructor creates instance with correct properties', (assert) => {
  const task = new Task('1', 'Test task', false);
  assert.assertEqual(task.id, '1', 'ID should be "1"');
  assert.assertEqual(task.text, 'Test task', 'Text should be "Test task"');
  assert.assertEqual(task.completed, false, 'Completed should be false');
});

runner.test('Task constructor defaults completed to false', (assert) => {
  const task = new Task('2', 'Another task');
  assert.assertEqual(task.completed, false, 'Completed should default to false');
});

runner.test('Task constructor accepts completed as true', (assert) => {
  const task = new Task('3', 'Completed task', true);
  assert.assertEqual(task.completed, true, 'Completed should be true');
});

// toggle() Tests
runner.test('toggle() changes completed from false to true', (assert) => {
  const task = new Task('4', 'Test', false);
  task.toggle();
  assert.assertEqual(task.completed, true, 'Completed should be true after toggle');
});

runner.test('toggle() changes completed from true to false', (assert) => {
  const task = new Task('5', 'Test', true);
  task.toggle();
  assert.assertEqual(task.completed, false, 'Completed should be false after toggle');
});

runner.test('toggle() returns the task instance for chaining', (assert) => {
  const task = new Task('6', 'Test', false);
  const result = task.toggle();
  assert.assert(result === task, 'toggle() should return the task instance');
});

runner.test('toggle() can be chained multiple times', (assert) => {
  const task = new Task('7', 'Test', false);
  task.toggle().toggle().toggle();
  assert.assertEqual(task.completed, true, 'After 3 toggles from false, should be true');
});

// update() Tests
runner.test('update() changes text correctly', (assert) => {
  const task = new Task('8', 'Old text', false);
  const result = task.update('New text');
  assert.assertEqual(task.text, 'New text', 'Text should be updated');
  assert.assertEqual(result, true, 'update() should return true on success');
});

runner.test('update() trims whitespace', (assert) => {
  const task = new Task('9', 'Test', false);
  task.update('  Trimmed text  ');
  assert.assertEqual(task.text, 'Trimmed text', 'Text should be trimmed');
});

runner.test('update() returns false for empty string', (assert) => {
  const task = new Task('10', 'Test', false);
  const result = task.update('');
  assert.assertEqual(result, false, 'update() should return false for empty string');
  assert.assertEqual(task.text, 'Test', 'Text should not change');
});

runner.test('update() returns false for whitespace-only string', (assert) => {
  const task = new Task('11', 'Test', false);
  const result = task.update('   ');
  assert.assertEqual(result, false, 'update() should return false for whitespace-only');
  assert.assertEqual(task.text, 'Test', 'Text should not change');
});

runner.test('update() returns false for null', (assert) => {
  const task = new Task('12', 'Test', false);
  const result = task.update(null);
  assert.assertEqual(result, false, 'update() should return false for null');
});

// toJSON() Tests
runner.test('toJSON() returns correct object structure', (assert) => {
  const task = new Task('13', 'JSON test', true);
  const json = task.toJSON();
  assert.assertDeepEqual(
    json,
    { id: '13', text: 'JSON test', completed: true },
    'toJSON() should return correct object'
  );
});

runner.test('toJSON() returns new object (not reference)', (assert) => {
  const task = new Task('14', 'Test', false);
  const json1 = task.toJSON();
  const json2 = task.toJSON();
  assert.assert(json1 !== json2, 'toJSON() should return new object each time');
});

// fromJSON() Tests
runner.test('fromJSON() creates task from object', (assert) => {
  const data = { id: '15', text: 'From JSON', completed: true };
  const task = Task.fromJSON(data);
  assert.assertEqual(task.id, '15', 'ID should match');
  assert.assertEqual(task.text, 'From JSON', 'Text should match');
  assert.assertEqual(task.completed, true, 'Completed should match');
});

runner.test('fromJSON() creates new instance (not reference)', (assert) => {
  const data = { id: '16', text: 'Test', completed: false };
  const task = Task.fromJSON(data);
  assert.assert(task !== data, 'fromJSON() should create new instance');
});

// Serialization/Deserialization Round-trip Tests
runner.test('Task serialization and deserialization round-trip', (assert) => {
  const original = new Task('17', 'Round trip test', true);
  const json = original.toJSON();
  const restored = Task.fromJSON(json);
  
  assert.assertEqual(restored.id, original.id, 'ID should match');
  assert.assertEqual(restored.text, original.text, 'Text should match');
  assert.assertEqual(restored.completed, original.completed, 'Completed should match');
});

runner.test('Multiple tasks JSON serialization', (assert) => {
  const tasks = [
    new Task('18', 'Task 1', false),
    new Task('19', 'Task 2', true),
    new Task('20', 'Task 3', false)
  ];
  
  const json = JSON.stringify(tasks.map(t => t.toJSON()));
  const data = JSON.parse(json);
  const restored = data.map(d => Task.fromJSON(d));
  
  assert.assertEqual(restored.length, 3, 'Should restore 3 tasks');
  assert.assertEqual(restored[1].text, 'Task 2', 'Second task text should match');
  assert.assertEqual(restored[1].completed, true, 'Second task completed should be true');
});

// Edge Cases
runner.test('Task with special characters in text', (assert) => {
  const task = new Task('21', 'Test with <special> "chars" & symbols!', false);
  assert.assertEqual(task.text, 'Test with <special> "chars" & symbols!', 'Should handle special characters');
});

runner.test('Task with very long text', (assert) => {
  const longText = 'a'.repeat(10000);
  const task = new Task('22', longText, false);
  assert.assertEqual(task.text.length, 10000, 'Should handle long text');
});

runner.test('Task with empty ID', (assert) => {
  const task = new Task('', 'Test', false);
  assert.assertEqual(task.id, '', 'Should accept empty ID');
});

// Run all tests
runner.run();
