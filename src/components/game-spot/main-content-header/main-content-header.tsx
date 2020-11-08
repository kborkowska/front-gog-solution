import React, { FunctionComponent } from "react";

import { Headers } from "../../../common/consts";

export const MainContentHeader: FunctionComponent = () => {
  return <h3 className="main-content-header">{Headers.MainContent}</h3>;
};
