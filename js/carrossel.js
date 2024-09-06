/*const carousel = document.querySelector('.carousel');
const totalIcons = 6; // Total de ícones no carrossel
const iconsToShow = 4; // Número de ícones a serem exibidos por vez
const iconWidth = document.querySelector('.icon').offsetWidth; // Largura de cada ícone
let currentIndex = 0;
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
const interval = 2000; // Intervalo para troca automática

// Função para mostrar o próximo ícone automaticamente
function showNextIcon() {
  currentIndex++;
  if (currentIndex > totalIcons - iconsToShow) {
    currentIndex = 0; // Volta ao início quando o último ícone for exibido
  }
  const offset = -currentIndex * iconWidth;
  carousel.style.transition = 'transform 0.3s ease-in-out'; // Transição suave
  carousel.style.transform = `translateX(${offset}px)`;
}

// Troca automática de ícones
let autoSlide = setInterval(showNextIcon, interval);

// Funções de arrastar
carousel.addEventListener('mousedown', startDrag);
carousel.addEventListener('touchstart', startDrag);
carousel.addEventListener('mouseup', endDrag);
carousel.addEventListener('touchend', endDrag);
carousel.addEventListener('mousemove', drag);
carousel.addEventListener('touchmove', drag);

function startDrag(event) {
  clearInterval(autoSlide); // Para o movimento automático durante o arraste
  isDragging = true;
  startPos = getPositionX(event);
  carousel.style.cursor = 'grabbing';
  prevTranslate = currentTranslate;
  
  // Remove a transição suave enquanto arrasta
  carousel.style.transition = 'none';
}

function drag(event) {
  if (!isDragging) return;
  const currentPosition = getPositionX(event);
  const diff = currentPosition - startPos;
  currentTranslate = prevTranslate + diff;
  
  // Atualiza a posição do carrossel sem transição durante o arraste
  carousel.style.transform = `translateX(${currentTranslate}px)`;
}

function endDrag() {
  isDragging = false;
  carousel.style.cursor = 'grab';
  
  // Determina se o usuário arrastou o suficiente para mover para o próximo ou anterior
  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -50 && currentIndex < totalIcons - iconsToShow) {
    currentIndex++;
  }

  if (movedBy > 50 && currentIndex > 0) {
    currentIndex--;
  }

  // Reaplica a transição suave ao finalizar o arraste
  const offset = -currentIndex * iconWidth;
  carousel.style.transition = 'transform 0.3s ease-in-out'; // Suaviza o reposicionamento
  carousel.style.transform = `translateX(${offset}px)`;
  prevTranslate = offset;
  
  // Retoma o movimento automático após um tempo
  autoSlide = setInterval(showNextIcon, interval);
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

// Atualiza a largura dos ícones e o índice de acordo com a largura do contêiner
window.addEventListener('resize', () => {
  // Obtém a largura do ícone novamente após o redimensionamento
  const iconWidth = document.querySelector('.icon').offsetWidth;
  // Calcula o novo índice para manter a posição correta
  const containerWidth = document.querySelector('.carousel-container').offsetWidth;
  const newIconsToShow = Math.floor(containerWidth / iconWidth);
  currentIndex = 0; // Reseta o índice para evitar problemas no reposicionamento
});*/
