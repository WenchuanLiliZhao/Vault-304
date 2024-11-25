import styles from "./GridViews.module.scss";
import React from "react";

interface ViewProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  className?: string;
}

export const MainView: React.FC<ViewProps> = ({children, className}) => {
  return (
    <div className={`${className} ${styles["view"]}`}>
      {children}
    </div>
  )
}

interface MainGridViewProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  className?: string;
}

export const MainGridView: React.FC<MainGridViewProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`${styles["basic-grid-view"]} ${className}`}>
      {children}
    </div>
  );
};

interface SecInMainGridViewProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  className?: string;
  initSpan: 12 | 10 | 8 | 6; // note: since it is only used for bigger view
}

export const SecInMainGridView: React.FC<SecInMainGridViewProps> = ({
  children,
  className,
  initSpan,
}) => {
  return (
    <div
      className={`${styles["sec-in-grid-view"]} ${className} ${styles[`iniSpan-${initSpan}`]}`}
    >
      {children}
    </div>
  );
};
