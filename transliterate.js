// Функция для транслитерации
function transliterate(text) {
  const rus = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  const lat = ["a","b","v","g","d","e","e","zh","z","i","y","k","l","m","n","o","p","r","s","t","u","f","kh","ts","ch","sh","shch","","y","","e","yu","ya"];
  let result = "";

  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const index = rus.indexOf(char);
    result += index !== -1 ? lat[index] : char;
  }
  // Убираем лишние символы и заменяем пробелы на дефисы
  return result.replace(/[^a-z0-9\-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}

// Функция для обновления URL
function updatePostUrl() {
  const titleInput = document.querySelector('input[name="post.title"]'); // Поле заголовка
  const urlInput = document.querySelector('input[name="post.slug"]');    // Поле URL

  if (titleInput && urlInput) {
    titleInput.addEventListener('input', function() {
      const transliteratedTitle = transliterate(this.value); // Транслитерируем заголовок
      urlInput.value = transliteratedTitle; // Обновляем поле URL
    });
  }
}

// Запускаем функцию после загрузки страницы
window.addEventListener('load', updatePostUrl);
