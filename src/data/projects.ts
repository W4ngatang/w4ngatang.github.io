export interface Project {
  title: string;
  href: string;
  /** HTML is allowed so descriptions can carry inline links. */
  description: string;
}

export const projects: Project[] = [
  {
    title: "NYU AI School",
    href: "https://nyu-mll.github.io/nyu-ai-school-2021/",
    description:
      'A free introductory workshop on machine learning for early undergraduates, organized by students and faculty from the NYU ML² lab (formerly the NYC AI Workshop). A week of lectures from experts in the field plus hands-on coding. <a href="https://nyudatascience.medium.com/cds-members-organize-and-present-at-the-nyu-ai-school-1db8464bf504">More info</a>.',
  },
  {
    title: "A Neural Framework for One-Shot Learning",
    href: "https://github.com/W4ngatang/MatchingNets",
    description:
      'A thorough look at <a href="https://arxiv.org/abs/1606.04080">matching networks</a>, a hybrid of neural networks and nonparametric models, for one-shot learning in various settings. My senior thesis, earning high honors. <a href="/static/papers/thesis.pdf">Thesis</a>.',
  },
  {
    title: "Traffic Swarm Optimization",
    href: "https://github.com/W4ngatang/TrafficSwarmOptimization",
    description:
      'Using swarm optimization methods to optimize traffic light cycles. See the <a href="https://www.seas.harvard.edu/news/2016/06/ants-go-marching-on-to-optimize-traffic-lights">article</a> or the <a href="/static/papers/swarm-optimization-traffic.pdf">writeup</a>.',
  },
  {
    title: "Gaussian Processes for Crime Prediction",
    href: "https://github.com/kandluis/crime-prediction",
    description:
      'Using Gaussian processes to predict future crime rates in cities. See the <a href="/static/papers/gaussian-processes-crime.pdf">writeup</a>.',
  },
  {
    title: "Twitter Plays Chess",
    href: "https://github.com/mgentili/TwitterPlaysChess",
    description:
      "Crowdsourced chess against an AI, where people vote for the human team's next move on Twitter, à la Twitch Plays Pokémon.",
  },
];

export const miscellaneous = [
  { title: "O Brother What Art Thou", href: "https://vimeo.com/206087559" },
  { title: "Watching the Watchman", href: "http://harvardpolitics.com/united-states/watching-watchman/" },
];
