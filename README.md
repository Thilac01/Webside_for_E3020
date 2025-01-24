# Steps to Clone, Open, and Edit the Project

## 1. Download Git
Ensure that Git is installed on your system. If not, download and install Git from [https://git-scm.com](https://git-scm.com).

---

## 2. Clone the Repository
1. Open any folder where you want to clone the project.
2. In the folder, click the address bar at the top, type `cmd`, and press **Enter** to open Command Prompt.
3. In the Command Prompt, type the following command to clone the repository:
   ```bash
   git clone https://github.com/Thilac01/Webside_for_E3020
   ```

---

## 3. Navigate to the Cloned Folder
1. Go into the newly cloned `Webside_for_E3020` folder.
2. In this folder, click the address bar again, type `cmd`, and press **Enter** to open Command Prompt.

---

## 4. Open the Project in Visual Studio Code
1. In the Command Prompt, type the following command to open the folder in Visual Studio Code:
   ```bash
   code .
   ```
2. If this doesn't work, ensure that the `code` command is added to your PATH. Follow [this guide](https://code.visualstudio.com/docs/editor/command-line) if needed.

---

## 5. Install the Live Server Extension
1. Open **Visual Studio Code**.
2. Go to the **Extensions** tab (shortcut: `Ctrl+Shift+X`).
3. Search for `Live Server` and install the extension by **Ritwick Dey**.

---

## 6. Open the Project in Live Server
1. In Visual Studio Code, locate the `index.html` file.
2. Right-click on the file and select **"Open with Live Server"** to view the website in your browser.

---

## 7. Edit the Pages
You can now make edits to the HTML, CSS, or JavaScript files in the project.

---

# Notes for Responsive Design
- The page dimensions were initially designed to fit your PC screen, so alignment issues may occur on different devices or screen sizes.
- To ensure the website is **responsive** on all devices (including mobile screens):
  - Update the **CSS** to use responsive units like `em`, `rem`, `%`, or `vh/vw` instead of fixed pixels.
  - Utilize **CSS media queries** to handle different screen sizes. Example:
    ```css
    @media (max-width: 768px) {
      /* Styles for tablets and smaller screens */
    }
    @media (max-width: 480px) {
      /* Styles for mobile phones */
    }
    ```

---

# High-Resolution Images
- You can download high-resolution, royalty-free images from [https://www.freepik.com](https://www.freepik.com).

---

# Backend Notes (Server & Authentication)
- Use **MongoDB** for database management and **Firebase** for authentication.
- Refer to their official documentation for setup:
  - MongoDB: [https://www.mongodb.com/docs/](https://www.mongodb.com/docs/)
  - Firebase Authentication: [https://firebase.google.com/docs/auth](https://firebase.google.com/docs/auth)
# Webside_for_E3020
