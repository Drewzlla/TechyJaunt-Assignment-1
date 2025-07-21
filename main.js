// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const icon = hamburgerButton.querySelector('i');

  hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');

    // Toggle icon from bars to times
    const isOpen = mobileMenu.classList.contains('active');
    icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
  });
});

// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content');

  faqContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-header');
    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-body');
    const icon = groupHeader.querySelector('i');

    // Toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    // Toggle visibility of body
    groupBody.classList.toggle('open');

    // Close all other FAQs
    const otherGroups = faqContainer.querySelectorAll('.faq-group');
    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faq-body');
        const otherIcon = otherGroup.querySelector('.faq-header i');
        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });
});
