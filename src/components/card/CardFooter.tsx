import { ArrowReplyRegular } from "@fluentui/react-icons";
import { CardFooter as FluentFooter, Button } from "@fluentui/react-components";
import { CardFooterProperties } from "./CardFooterProperties";

export function CardFooter (properties: CardFooterProperties): React.JSX.Element {
  return (
    <FluentFooter>
        <Button icon={<ArrowReplyRegular fontSize={16} />} onClick={properties.onClick}>Go To Chat</Button>
    </FluentFooter>
  );
};