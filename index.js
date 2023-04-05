function scuberGreetingForFeet(rideFeet) {
  if (rideFeet <= 400) {
    return "This one is on me!";
  } else if (rideFeet <= 2000) {
    return "That will be twenty bucks.";
  } else if (rideFeet > 2500) {
    return "No can do.";
  } else if (rideFeet >= 2001) {
    return "I will gladly take your thirty bucks.";
  }
}

function ternaryCheckCity(cityName) {
  return cityName === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";

    case "not as generous":
      return "Thank you.";

    default:
      return "Bye.";
  }
}
