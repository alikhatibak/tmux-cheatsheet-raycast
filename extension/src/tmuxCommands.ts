// src/tmuxCommands.ts

export interface TmuxCommand {
  id: string;
  command: string;
  description: string;
  category: string;
}

export const tmuxCommands: TmuxCommand[] = [
  // Session Commands
  {
    id: "new-session",
    command: "tmux new-session -s <session_name>",
    description:
      "Creates a new session. (Terminal: `tmux new-session -s <session_name>`) (No default shortcut)",
    category: "Session Commands",
  },
  {
    id: "attach-session",
    command: "tmux attach-session -t <session_name>",
    description:
      "Attaches to an existing session. (Terminal: `tmux attach-session -t <session_name>`) (No default shortcut)",
    category: "Session Commands",
  },
  {
    id: "list-sessions",
    command: "tmux list-sessions",
    description:
      "Lists all active sessions. (Terminal: `tmux list-sessions`) (No default shortcut)",
    category: "Session Commands",
  },
  {
    id: "kill-session",
    command: "tmux kill-session -t <session_name>",
    description:
      "Kills the specified session. (Terminal: `tmux kill-session -t <session_name>`) (No default shortcut)",
    category: "Session Commands",
  },
  {
    id: "rename-session",
    command: "tmux rename-session <new_name>",
    description:
      "Renames the current session. (Terminal: `tmux rename-session <new_name>`) (No default shortcut)",
    category: "Session Commands",
  },

  // Window Commands
  {
    id: "new-window",
    command: "tmux new-window -n <window_name>",
    description:
      "Creates a new window. Shortcut: `<C-b> + c` (or `<Leader> + c`)\nTerminal: `tmux new-window -n <window_name>`",
    category: "Window Commands",
  },
  {
    id: "rename-window",
    command: "tmux rename-window <new_name>",
    description:
      "Renames the current window. Shortcut: `<C-b> + ,` (or `<Leader> + ,`)\nTerminal: `tmux rename-window <new_name>`",
    category: "Window Commands",
  },
  {
    id: "kill-window",
    command: "tmux kill-window",
    description:
      "Kills the current window. Shortcut: `<C-b> + &` (or `<Leader> + &`)\nTerminal: `tmux kill-window`",
    category: "Window Commands",
  },
  {
    id: "list-windows",
    command: "tmux list-windows",
    description:
      "Lists all windows in the session. Shortcut: `<C-b> + w` (or `<Leader> + w`)\nTerminal: `tmux list-windows`",
    category: "Window Commands",
  },
  {
    id: "next-window",
    command: "tmux next-window",
    description:
      "Moves to the next window. Shortcut: `<C-b> + n` (or `<Leader> + n`)\nTerminal: `tmux next-window`",
    category: "Window Commands",
  },
  {
    id: "previous-window",
    command: "tmux previous-window",
    description:
      "Moves to the previous window. Shortcut: `<C-b> + p` (or `<Leader> + p`)\nTerminal: `tmux previous-window`",
    category: "Window Commands",
  },
  {
    id: "last-window",
    command: "tmux last-window",
    description:
      "Toggles to the last active window. Shortcut: `<C-b> + l` (or `<Leader> + l`)\nTerminal: `tmux last-window`",
    category: "Window Commands",
  },

  // Pane Commands
  {
    id: "split-window-vertical",
    command: "tmux split-window -v",
    description:
      "Splits the pane vertically. Shortcut: `<C-b> + \"` (or `<Leader> + \"`)\nTerminal: `tmux split-window -v`",
    category: "Pane Commands",
  },
  {
    id: "split-window-horizontal",
    command: "tmux split-window -h",
    description:
      "Splits the pane horizontally. Shortcut: `<C-b> + %` (or `<Leader> + %`)\nTerminal: `tmux split-window -h`",
    category: "Pane Commands",
  },
  {
    id: "select-pane-up",
    command: "tmux select-pane -U",
    description:
      "Moves focus to the pane above. Shortcut: `<C-b> + Up Arrow` (or `<Leader> + Up Arrow`)\nTerminal: `tmux select-pane -U`",
    category: "Pane Commands",
  },
  {
    id: "select-pane-down",
    command: "tmux select-pane -D",
    description:
      "Moves focus to the pane below. Shortcut: `<C-b> + Down Arrow` (or `<Leader> + Down Arrow`)\nTerminal: `tmux select-pane -D`",
    category: "Pane Commands",
  },
  {
    id: "select-pane-left",
    command: "tmux select-pane -L",
    description:
      "Moves focus to the pane left of the current one. Shortcut: `<C-b> + Left Arrow` (or `<Leader> + Left Arrow`)\nTerminal: `tmux select-pane -L`",
    category: "Pane Commands",
  },
  {
    id: "select-pane-right",
    command: "tmux select-pane -R",
    description:
      "Moves focus to the pane right of the current one. Shortcut: `<C-b> + Right Arrow` (or `<Leader> + Right Arrow`)\nTerminal: `tmux select-pane -R`",
    category: "Pane Commands",
  },
  {
    id: "display-panes",
    command: "tmux display-panes",
    description:
      "Displays pane numbers to assist in selection. Shortcut: `<C-b> + q` (or `<Leader> + q`)\nTerminal: `tmux display-panes`",
    category: "Pane Commands",
  },
  {
    id: "kill-pane",
    command: "tmux kill-pane",
    description:
      "Kills the current pane. (Usually run via command prompt as there’s no default shortcut.)\nTerminal: `tmux kill-pane`",
    category: "Pane Commands",
  },
  {
    id: "swap-pane",
    command: "tmux swap-pane -s <src-pane> -t <dst-pane>",
    description:
      "Swaps two panes. (Run via the command prompt.)\nTerminal: `tmux swap-pane -s <src-pane> -t <dst-pane>`",
    category: "Pane Commands",
  },
  {
    id: "move-pane",
    command: "tmux move-pane -s <src-pane> -t <dst-pane>",
    description:
      "Moves a pane from one location to another. (Run via the command prompt.)\nTerminal: `tmux move-pane -s <src-pane> -t <dst-pane>`",
    category: "Pane Commands",
  },

  // Resize Commands
  {
    id: "resize-pane-left",
    command: "tmux resize-pane -L 10",
    description:
      "Resizes the pane by moving its left border left 10 cells.\n(Terminal: `tmux resize-pane -L 10`)",
    category: "Resize Commands",
  },
  {
    id: "resize-pane-right",
    command: "tmux resize-pane -R 10",
    description:
      "Resizes the pane by moving its right border right 10 cells.\n(Terminal: `tmux resize-pane -R 10`)",
    category: "Resize Commands",
  },
  {
    id: "resize-pane-up",
    command: "tmux resize-pane -U 5",
    description:
      "Resizes the pane by moving its top border up 5 cells.\n(Terminal: `tmux resize-pane -U 5`)",
    category: "Resize Commands",
  },
  {
    id: "resize-pane-down",
    command: "tmux resize-pane -D 5",
    description:
      "Resizes the pane by moving its bottom border down 5 cells.\n(Terminal: `tmux resize-pane -D 5`)",
    category: "Resize Commands",
  },

  // Copy/Paste Commands
  {
    id: "copy-mode",
    command: "tmux copy-mode",
    description:
      "Enters copy mode for scrolling/selecting text. Shortcut: `<C-b> + [` (or `<Leader> + [`)\nTerminal: `tmux copy-mode`",
    category: "Copy/Paste Commands",
  },
  {
    id: "paste-buffer",
    command: "tmux paste-buffer",
    description:
      "Pastes from the copy buffer. Shortcut: `<C-b> + ]` (or `<Leader> + ]`)\nTerminal: `tmux paste-buffer`",
    category: "Copy/Paste Commands",
  },

  // Layout & Options
  {
    id: "select-layout",
    command: "tmux select-layout <layout>",
    description:
      "Changes the window layout (e.g., even-horizontal, main-vertical).\n(Terminal: `tmux select-layout <layout>`) (No default shortcut)",
    category: "Layout & Options",
  },
  {
    id: "toggle-synchronize-panes",
    command: "tmux set-window-option synchronize-panes",
    description:
      "Toggles synchronized input for all panes.\n(Terminal: `tmux set-window-option synchronize-panes`) (No default shortcut)",
    category: "Layout & Options",
  },

  // Miscellaneous Commands
  {
    id: "command-prompt",
    command: "tmux command-prompt",
    description:
      "Opens the tmux command prompt. Shortcut: `<C-b> + :` (or `<Leader> + :`)\nTerminal: `tmux command-prompt`",
    category: "Miscellaneous Commands",
  },
  {
    id: "list-keys",
    command: "tmux list-keys",
    description:
      "Displays current key bindings.\n(Terminal: `tmux list-keys`) (No default shortcut)",
    category: "Miscellaneous Commands",
  },
  {
    id: "reload-config",
    command: "tmux source-file ~/.tmux.conf",
    description:
      "Reloads your tmux configuration file.\n(Terminal: `tmux source-file ~/.tmux.conf`) (No default shortcut)",
    category: "Miscellaneous Commands",
  },
  {
    id: "lock-session",
    command: "tmux lock-session",
    description:
      "Locks the current tmux session.\n(Terminal: `tmux lock-session`) (No default shortcut)",
    category: "Miscellaneous Commands",
  },
  {
    id: "detach",
    command: "tmux detach",
    description:
      "Detaches from the current session. Shortcut: `<C-b> + d` (or `<Leader> + d`)\nTerminal: `tmux detach`",
    category: "Miscellaneous Commands",
  },
];

