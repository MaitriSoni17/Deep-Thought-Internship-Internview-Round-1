const sidebar = document.querySelector('.sidebar');
const sidebarHeader = document.querySelector('.sidebar-header');
const sidebarClosedBadge = document.querySelector('#sidebar-closed-badge');
const journeyBoardText = document.querySelector('#journey-board-text');
sidebarHeader.addEventListener('click', () => {
  sidebar.classList.toggle('expanded');
  if (sidebar.classList.contains('expanded')) {
    sidebarClosedBadge.style.display = 'none';
    journeyBoardText.style.display = 'inline-block';
  } else {
    sidebarClosedBadge.style.display = 'inline-block';
    journeyBoardText.style.display = 'none';
  }
});