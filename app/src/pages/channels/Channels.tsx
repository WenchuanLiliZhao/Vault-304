import About from "./Infos/About";
import ArtAndDesign from "./Main/ArtAndDesign";
import BrainWaves from "./Main/BrainWaves";
import Collections from "./Main/Collections";
import Contact from "./Infos/Contact";
import HireMe from "./Infos/HireMe";
import Home from "./Main/Home";
import NotFound from "./NotFound";
import Privacy from "./Others/Privacy";
import TermsOfUse from "./Others/TermsOfUse";

export const MainChennels = {
  Home,
  ArtAndDesign,
  BrainWaves,
  Collections,
}

export const InfoChannels = {
  About,
  Contact,
  HireMe,
}

export const OtherChannels = {
  Privacy,
  TermsOfUse,
}


export const Channels = {
  NotFound,

  ...MainChennels,
  ...InfoChannels,
  ...OtherChannels,
}