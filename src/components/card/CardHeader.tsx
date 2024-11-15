import { CardHeader } from "@fluentui/react-components";
import { CardHeaderProperties } from "./CardHeaderProperties";


export function DefaultCardHeader(properties: CardHeaderProperties): React.JSX.Element {
  return (
      <CardHeader
        image={ properties.image }
        header={ properties.header }
        description={ properties.description }
      />
  );
};