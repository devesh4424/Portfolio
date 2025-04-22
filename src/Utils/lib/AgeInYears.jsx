import React from "react";

export const ageInYears = Math.floor(
  (new Date().getTime() - new Date("2003-22-06").getTime()) /
    (365.25 * 24 * 60 * 60 * 1000)
);
