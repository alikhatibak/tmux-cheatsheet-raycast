
# Tmux Command Lookup for Raycast

A Raycast extension built with TypeScript and React that provides a searchable lookup for [tmux](https://github.com/tmux/tmux/wiki) commands based on the popular [tmux cheatsheet](https://tmuxcheatsheet.com). Quickly find, review, and copy tmux commands directly from Raycast.

## Features

- **Searchable List:** Filter through a comprehensive list of tmux commands.
- **Detailed View:** See command details and descriptions in a side pane.
- **Quick Actions:** Copy commands to your clipboard with a single click.
- **Modern UI:** Built using Raycast's UI components for a native experience.

## Installation

### Prerequisites

- [Raycast](https://www.raycast.com/) installed on your macOS device.
- [Node.js](https://nodejs.org/) (LTS recommended) installed.
- [Raycast Developer Tools](https://developers.raycast.com/basics/getting-started) (installed via CLI).

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/alikhatibak/tmux-cheatsheet-raycast.git
   cd tmux-cheatsheet-raycast
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run in Development Mode:**

   ```bash
   npm run dev
   ```

   This will launch the extension in Raycast's development mode.

## Project Structure

```
tmux-command-lookup/
├── node_modules/
├── src/
│   ├── tmux-cheatsheet.tsx    # Main component integrating the Raycast UI
│   └── tmuxCommands.ts        # List of tmux commands based on the tmux cheatsheet
├── package.json
└── README.md
```

- **`src/index.tsx`**  
  Contains the main Raycast command component. It renders a searchable list of tmux commands with detail panes and actions to copy commands.

- **`src/tmuxCommands.ts`**  
  Exports an array of tmux command objects with their `id`, `command`, and `description`.

## Usage

1. **Launch Raycast:**  
   Open Raycast on your macOS device.

2. **Run the Command Lookup:**  
   Type the name of the extension (e.g., `Tmux Command Lookup`) in the Raycast command bar.

3. **Search and Copy:**  
   - Use the search bar to filter commands.
   - Click on a command to view its details.
   - Use the "Copy Command" action to copy the selected tmux command to your clipboard.

## Development

### Updating the Command List

To update or expand the tmux command list, modify the file `src/tmuxCommands.ts`:
- Add new commands as objects with the following properties:
  - **`id`**: A unique identifier for the command.
  - **`command`**: The key binding or shell command.
  - **`description`**: A brief description of what the command does.

### API Changes

- **Toast Notifications:**  
  If you see warnings about deprecated Toast styles, update your code from:

  ```tsx
  import { showToast, ToastStyle } from "@raycast/api";
  showToast(ToastStyle.Success, "Command copied!");
  ```

  to:

  ```tsx
  import { showToast, Toast } from "@raycast/api";
  showToast({ style: Toast.Style.Success, title: "Command copied!" });
  ```

### Testing Changes

After making changes, run the development server:

```bash
npm run dev
```

Use Raycast’s developer tools to preview your extension.

## Contributing

Contributions are welcome! If you have suggestions, improvements, or bug fixes, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push your branch.
4. Submit a pull request.

For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).

## Resources

- [Raycast Developer Documentation](https://developers.raycast.com/)
- [tmux Cheatsheet](https://tmuxcheatsheet.com)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
