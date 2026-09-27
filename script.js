// Update these values with your details before publishing.
const portfolio = {
  email: "mandco0003@gmail.com",
  phone: "+919916075838"
};

document.querySelectorAll("[data-email]").forEach((element) => {
  element.href = `mailto:${portfolio.email}`;
});
document.querySelectorAll("[data-phone]").forEach((element) => {
  element.href = `tel:${portfolio.phone}`;
});
document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
  navigation.classList.toggle("is-open", !isOpen);
});
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
    navigation.classList.remove("is-open");
  });
});
