import { CardHeader as FluentHeader } from "@fluentui/react-components";
import { CardHeaderProperties } from "./CardHeaderProperties";


export function CardHeader(properties: CardHeaderProperties): React.JSX.Element {
  return (
      <FluentHeader
        image={ properties.image }
        header={ properties.header }
        description={ properties.description }
      />
  );
};