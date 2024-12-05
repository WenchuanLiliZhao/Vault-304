import styles from "./Callout.module.scss";
import React from "react";

interface CalloutProps {
  type: "warning" | "note";
  children: string;
}

export const Callout: React.FC<CalloutProps> = ({ type, children }) => {
  const icon = () => {
    switch (type) {
      case "warning":
        return "⚠️";
      case "note":
        return "📝";
      default:
        return "💡";
    }
  };

  return `
<div class=${styles["callout"]}>
<div class=${styles["icon"]}>${icon()}</div>
<div class=${styles["text"]}>

${children}

</div>
</div>
  `;
};


