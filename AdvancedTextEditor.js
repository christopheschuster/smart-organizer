// File Name: AdvancedTextEditor.js

// Define a class for a sophisticated text editor
class TextEditor {
  constructor() {
    this.text = '';
    this.history = [];
    this.cursorPosition = 0;
  }

  // Insert text at the current cursor position
  insertText(newText) {
    this.text = this.text.slice(0, this.cursorPosition) + newText + this.text.slice(this.cursorPosition);
    this.cursorPosition += newText.length;
    this.history.push({ operation: 'insert', cursorPosition: this.cursorPosition, newText });
  }

  // Delete the character before the current cursor position
  deleteCharacter() {
    if (this.cursorPosition > 0) {
      const deletedChar = this.text[this.cursorPosition - 1];
      this.text = this.text.slice(0, this.cursorPosition - 1) + this.text.slice(this.cursorPosition);
      this.cursorPosition--;
      this.history.push({ operation: 'delete', cursorPosition: this.cursorPosition, deletedChar });
    }
  }

  // Undo the last operation
  undo() {
    if (this.history.length > 0) {
      const lastOperation = this.history.pop();
      if (lastOperation.operation === 'insert') {
        this.text = this.text.slice(0, lastOperation.cursorPosition - lastOperation.newText.length) +
          this.text.slice(lastOperation.cursorPosition);
        this.cursorPosition -= lastOperation.newText.length;
      } else if (lastOperation.operation === 'delete') {
        this.text = this.text.slice(0, lastOperation.cursorPosition) +
          lastOperation.deletedChar + this.text.slice(lastOperation.cursorPosition);
        this.cursorPosition++;
      }
    }
  }

  // Get the current text content
  getText() {
    return this.text;
  }
}

// Create an instance of the text editor
const editor = new TextEditor();

// Insert some text
editor.insertText('This is a sophisticated text editor.\n');
editor.insertText('It supports multiple undo and redo operations.\n');

// Delete a character
editor.deleteCharacter(); // Delete the dot in the previous sentence

// Perform multiple undo operations
editor.undo(); // Undo deleting the dot
editor.undo(); // Undo inserting the second sentence
editor.undo(); // Undo inserting the first sentence

// Get the current text content
const content = editor.getText();
console.log(content); // Output: ''