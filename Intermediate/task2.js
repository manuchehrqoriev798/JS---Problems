const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const email = "example@example.com";
console.log(`Is "${email}" a valid email? ${isValidEmail(email)}`);
