import React, { useState } from "react";

export default () => {
  const [token, setToken] = useState();

  return [token, setToken];
};
