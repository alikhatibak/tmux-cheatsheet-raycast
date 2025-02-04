export const tmuxCommands: TmuxCommand[] = [
  // ─────────────────────────────────────────────
  // Session Commands
  // ─────────────────────────────────────────────
  {
    id: "new-session",
    command: "tmux new-session -s <session-name>",
    description: "Create a new tmux session with the given name.",
  },
  {
    id: "detach-session",
    command: "Ctrl-b d",
    description: "Detach from the current tmux session.",
  },
  {
    id: "list-sessions",
    command: "tmux list-sessions",
    description: "List all existing tmux sessions.",
  },
  {
    id: "attach-session",
    command: "tmux attach-session -t <session-name>",
    description: "Attach to an existing tmux session by name.",
  },
  {
    id: "kill-session",
    command: "tmux kill-session -t <session-name>",
    description: "Kill the specified tmux session.",
  },

  // ─────────────────────────────────────────────
  // Window Commands
  // ─────────────────────────────────────────────
  {
    id: "new-window",
    command: "Ctrl-b c",
    description: "Create a new window in the current session.",
  },
  {
    id: "next-window",
    command: "Ctrl-b n",
    description: "Switch to the next window.",
  },
  {
    id: "previous-window",
    command: "Ctrl-b p",
    description: "Switch to the previous window.",
  },
  {
    id: "select-window",
    command: "Ctrl-b <window-number>",
    description: "Switch to a specific window by its number.",
  },
  {
    id: "rename-window",
    command: "Ctrl-b ,",
    description: "Rename the current window.",
  },
  {
    id: "kill-window",
    command: "Ctrl-b &",
    description: "Close the current window.",
  },
  {
    id: "list-windows",
    command: "Ctrl-b w",
    description: "List all windows in the current session.",
  },
  {
    id: "move-window",
    command: "Ctrl-b .",
    description: "Move the current window to a different position.",
  },

  // ─────────────────────────────────────────────
  // Pane Commands
  // ─────────────────────────────────────────────
  {
    id: "split-vertical",
    command: "Ctrl-b %",
    description: "Split the current window into two vertical panes.",
  },
  {
    id: "split-horizontal",
    command: "Ctrl-b \"",
    description: "Split the current window into two horizontal panes.",
  },
  {
    id: "toggle-pane-layout",
    command: "Ctrl-b Space",
    description: "Toggle between different pane layouts.",
  },
  {
    id: "switch-pane",
    command: "Ctrl-b o",
    description: "Switch focus between panes.",
  },
  {
    id: "kill-pane",
    command: "Ctrl-b x",
    description: "Close the current pane.",
  },
  {
    id: "resize-pane",
    command: "Ctrl-b :resize-pane -{L|R|U|D} <amount>",
    description:
      "Resize the current pane. Use -L, -R, -U, or -D for left, right, up, or down.",
  },

  // ─────────────────────────────────────────────
  // Copy Mode & Buffers
  // ─────────────────────────────────────────────
  {
    id: "copy-mode",
    command: "Ctrl-b [",
    description: "Enter copy mode to scroll and select text.",
  },
  {
    id: "paste-buffer",
    command: "Ctrl-b ]",
    description: "Paste the most recent buffer.",
  },

  // ─────────────────────────────────────────────
  // Miscellaneous & Advanced Commands
  // ─────────────────────────────────────────────
  {
    id: "list-keys",
    command: "tmux list-keys",
    description: "Display a list of all key bindings.",
  },
  {
    id: "reload-config",
    command: "tmux source-file ~/.tmux.conf",
    description: "Reload the tmux configuration file.",
  },
  {
    id: "synchronize-panes",
    command: "Ctrl-b :setw synchronize-panes on",
    description:
      "Enable synchronized input across all panes in the current window.",
  },
  {
    id: "unsynchronize-panes",
    command: "Ctrl-b :setw synchronize-panes off",
    description:
      "Disable synchronized input across panes in the current window.",
  },
  {
    id: "swap-pane",
    command: "Ctrl-b {  or  Ctrl-b }",
    description:
      "Swap the current pane with the previous or next pane (depending on the key used).",
  },
  {
    id: "zoom-pane",
    command: "Ctrl-b z",
    description: "Toggle zoom for the current pane.",
  },
  {
    id: "display-panes",
    command: "Ctrl-b q",
    description:
      "Temporarily display pane numbers for quick pane selection.",
  },
  {
    id: "scroll-up",
    command: "Ctrl-b PageUp",
    description:
      "Scroll up (in copy mode, if supported) to view previous output.",
  },
  {
    id: "scroll-down",
    command: "Ctrl-b PageDown",
    description:
      "Scroll down (in copy mode, if supported) to view more recent output.",
  },
];

