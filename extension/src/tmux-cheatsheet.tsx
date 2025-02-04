// src/index.tsx
import { ActionPanel, Action, List, Toast, showToast } from "@raycast/api";
import { useState } from "react";
import { tmuxCommands, TmuxCommand } from "./tmuxCommands";

export default function CommandLookup() {
  const [searchText, setSearchText] = useState("");

  // Filter commands based on the search text.
  const filteredCommands: TmuxCommand[] = tmuxCommands.filter((cmd) =>
    cmd.command.toLowerCase().includes(searchText.toLowerCase()) ||
    cmd.description.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <List
      searchText={searchText}
      onSearchTextChange={setSearchText}
      isShowingDetail={true}
      searchBarPlaceholder="Search tmux commands..."
    >
      {filteredCommands.map((cmd) => (
        <List.Item
          key={cmd.id}
          title={cmd.command}
          subtitle={cmd.description}
          accessories={[{ text: cmd.id }]}
          actions={
            <ActionPanel>
              <Action.CopyToClipboard
                title="Copy Command"
                content={cmd.command}
                onCopy={async () => {
                  await showToast({ style: Toast.Style.Success, title: "Command copied!" });
                }}
              />
            </ActionPanel>
          }
          detail={
            <List.Item.Detail
              markdown={`
**Command:** \`${cmd.command}\`

**Description:** ${cmd.description}

`}
            />
          }
        />
      ))}
    </List>
  );
}

