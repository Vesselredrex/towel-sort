function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  const result = [];

  for (let i = 0; i < matrix.length; i += 1) {
    if (i % 2 === 0) {
      // Парні рядки (0, 2, 4, ...) - додаємо в прямому порядку
      for (let j = 0; j < matrix[i].length; j += 1) {
        result.push(matrix[i][j]);
      }
    } else {
      // Непарні рядки (1, 3, 5, ...) - додаємо в зворотньому порядку
      for (let j = matrix[i].length - 1; j >= 0; j -= 1) {
        result.push(matrix[i][j]);
      }
    }
  }

  return result;
}

module.exports = towelSort;
