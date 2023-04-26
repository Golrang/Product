/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-back": "rgba(28, 63, 170, var(--tw-bg-opacity))",
        "primary-text": "rgba(49, 96, 216, var(--tw-text-opacity))",
        "secondary-back": "rgba(226, 232, 240, var(--tw-bg-opacity))",
        "secondary-text": "rgba(160, 174, 192, var(--tw-text-opacity))",
        "success-back": "rgba(145, 199, 20, var(--tw-bg-opacity))",
        "success-text": "rgba(145, 199, 20, var(--tw-text-opacity))",
        "warning-back": "rgba(251, 197, 0, var(--tw-bg-opacity))",
        "warning-text": "rgba(247, 139, 0, var(--tw-text-opacity))",
        "danger-back": "rgba(211, 41, 41, var(--tw-bg-opacity))",
        "danger-text": "rgba(211, 41, 41, var(--tw-text-opacity))",
        "dark-back": "rgba(45, 55, 72, var(--tw-bg-opacity))",
        "dark-text": "rgba(113, 128, 150, var(--tw-text-opacity))",
      },
    },
  },
  plugins: [],
};
