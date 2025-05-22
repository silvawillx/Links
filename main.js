 function toggleMode() {
        const html = document.documentElement;
        const icon = document.getElementById("icon");

        html.classList.toggle("light");

        if (html.classList.contains("light")) {
          icon.setAttribute("name", "sunny");
          localStorage.setItem("theme", "light");
        } else {
          icon.setAttribute("name", "moon");
          localStorage.setItem("theme", "dark");
        }
      }

      window.addEventListener("DOMContentLoaded", () => {
        const savedTheme = localStorage.getItem("theme");
        const html = document.documentElement;
        const icon = document.getElementById("icon");

        if (savedTheme === "light") {
          html.classList.add("light");
          if (icon) icon.setAttribute("name", "sunny");
        } else {
          html.classList.remove("light");
          if (icon) icon.setAttribute("name", "moon");
        }
      });