// Получаем ссылку на холст
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

// Устанавливаем размеры холста равными размерам окна
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Создаем массив для хранения частиц
const particles = [];

// Функция для создания частицы
function createParticle(x, y) {
  const particle = {
    x: x,
    y: y,
    radius: Math.random() * 5 + 1, // Случайный радиус от 1 до 6
    color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`, // Случайный цвет
    velocity: {
      x: (Math.random() - 0.5) * 5, // Случайная скорость по X от -2.5 до 2.5
      y: (Math.random() - 0.5) * 5 // Случайная скорость по Y от -2.5 до 2.5
    },
    lifespan: 100 // Время жизни частицы в кадрах
  };

  particles.push(particle);
}

// Функция для обновления позиции и рисования частиц
function updateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем холст

  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];

    // Обновляем позицию частицы
    particle.x += particle.velocity.x;
    particle.y += particle.velocity.y;

    // Уменьшаем время жизни частицы
    particle.lifespan--;

    // Рисуем частицу
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();

    // Удаляем частицу, если она вышла за пределы холста или ее время жизни истекло
    if (
      particle.x + particle.radius < 0 ||
      particle.x - particle.radius > canvas.width ||
      particle.y + particle.radius < 0 ||
      particle.y - particle.radius > canvas.height ||
      particle.lifespan <= 0
    ) {
      particles.splice(i, 1);
      i--;
    }
  }
}

// Функция для обработки клика
function handleClick(event) {
  const x = event.clientX;
  const y = event.clientY;

  createParticle(x, y);
}

// Добавляем обработчик события клика на холст
canvas.addEventListener('click', handleClick);

// Запускаем анимацию частиц
setInterval(function () {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;

  createParticle(x, y);
}, 10000 / 60); // Создаем новую частицу каждую секунду (60 кадров в секунду)

// Запускаем анимацию частиц
function animateParticles() {
  updateParticles();
  requestAnimationFrame(animateParticles);
}

animateParticles();
