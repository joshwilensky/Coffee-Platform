import React from "react";

export const AppContext = React.createContext({
  languageId: "en",
  firstName: "",
  middleName: "",
  email: "",
  phoneNumber: "",
  avatar: null,
  country: "",
  isInPublicDirectory: false,
  biography: "",
  teamdId: null,
  onLanguageChange: () => {},
  onProfileChange: () => {},
});

AppContext.displayName = "AppContext";
