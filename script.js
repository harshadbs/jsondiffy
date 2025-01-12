window.addEventListener('DOMContentLoaded', () => {
    const input1 = localStorage.getItem('input1');
    const input2 = localStorage.getItem('input2');
    const result = document.getElementById('result');
  
    function compareLines(a, b) {
      const lines1 = a.split('\n');
      const lines2 = b.split('\n');
      let output = '';
  
      const maxLength = Math.max(lines1.length, lines2.length);
  
      for (let i = 0; i < maxLength; i++) {
        if (lines1[i] !== lines2[i]) {
          output += `Line ${i + 1}: \n`;
          output += `  Input 1: ${lines1[i] || '<empty>'}\n`;
          output += `  Input 2: ${lines2[i] || '<empty>'}\n\n`;
        }
      }
      return output || 'No differences found!';
    }
  
    const diffResult = compareLines(input1, input2);
    result.textContent = diffResult;
  });
  