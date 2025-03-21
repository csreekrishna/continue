import {
  BookOpenIcon,
  ChatBubbleLeftIcon,
  CubeIcon,
  FolderIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import AssistantSelect from "../../modelSelection/platform/AssistantSelect";
import HoverItem from "../InputToolbar/HoverItem";

function TopToolbarIcon(props: {
  tooltip: string;
  icon: React.ComponentType<any>;
  itemCount?: number;
  onClick: () => void;
}) {
  return (
    <HoverItem onClick={props.onClick}>
      <div className="relative flex items-center">
        <props.icon className="h-3 w-3 hover:brightness-125" />
      </div>
    </HoverItem>
  );
}

interface TopInputProps {
  selectedSection: string | null;
  setSelectedSection: (value: string | null) => void;
}
export function TopInputToolbar(props: TopInputProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-1 text-gray-400">
          <TopToolbarIcon
            icon={CubeIcon}
            tooltip="Models"
            onClick={() => props.setSelectedSection("models")}
          />
          <TopToolbarIcon
            icon={PencilIcon}
            tooltip="Rules"
            onClick={() => props.setSelectedSection("rules")}
          />
          <TopToolbarIcon
            icon={BookOpenIcon}
            tooltip="Docs"
            onClick={() => props.setSelectedSection("docs")}
          />
          <TopToolbarIcon
            icon={ChatBubbleLeftIcon}
            tooltip="Prompts"
            onClick={() => props.setSelectedSection("prompts")}
          />
          <TopToolbarIcon
            icon={FolderIcon}
            tooltip="Context"
            onClick={() => props.setSelectedSection("context")}
          />
        </div>
        <AssistantSelect />
      </div>
    </div>
  );
}
