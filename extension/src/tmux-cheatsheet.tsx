// src/index.tsx
import { ActionPanel, Action, List } from "@raycast/api";
import { useState } from "react";
import { tmuxCommands, TmuxCommand } from "./tmuxCommands";
import CommandDetail from "./CommandDetail";

export default function CommandLookup() {
  const [searchText, setSearchText] = useState("");

  // When search text is provided, display a flat, filtered list.
  if (searchText.trim().length > 0) {
    const query = searchText.toLowerCase();
    const filteredCommands: TmuxCommand[] = tmuxCommands.filter((cmd: TmuxCommand) =>
      (cmd.command + " " + cmd.description + " " + cmd.category).toLowerCase().includes(query)
    );
    return (
      <List
        searchText={searchText}
        onSearchTextChange={setSearchText}
        searchBarPlaceholder="Search tmux commands..."
      >
        {filteredCommands.map((cmd: TmuxCommand) => (
          <List.Item
            key={cmd.id}
            title={cmd.command}
            subtitle={cmd.description}
            actions={
              <ActionPanel>
                <Action.Push title="Show Details" target={<CommandDetail command={cmd} />} />
              </ActionPanel>
            }
          />
        ))}
      </List>
    );
  } else {
    // When there's no search text, group commands by their category.
    const grouped: { [category: string]: TmuxCommand[] } = {};
    tmuxCommands.forEach((cmd: TmuxCommand) => {
      if (!grouped[cmd.category]) {
        grouped[cmd.category] = [];
      }
      grouped[cmd.category].push(cmd);
    });

    // Define the order in which categories should appear.
    const orderedCategories: string[] = [
      "Session Commands",
      "Window Commands",
      "Pane Commands",
      "Resize Commands",
      "Copy/Paste Commands",
      "Layout & Options",
      "Miscellaneous Commands",
    ];

    return (
      <List
        searchText={searchText}
        onSearchTextChange={setSearchText}
        searchBarPlaceholder="Search tmux commands..."
      >
        {orderedCategories.map((category: string) => {
          const commands: TmuxCommand[] = grouped[category] || [];
          if (commands.length === 0) return null;
          return (
            <List.Section key={category} title={category}>
              {commands.map((cmd: TmuxCommand) => (
                <List.Item
                  key={cmd.id}
                  title={cmd.command}
                  subtitle={cmd.description}
                  actions={
                    <ActionPanel>
                      <Action.Push title="Show Details" target={<CommandDetail command={cmd} />} />
                    </ActionPanel>
                  }
                />
              ))}
            </List.Section>
          );
        })}
      </List>
    );
  }
}

