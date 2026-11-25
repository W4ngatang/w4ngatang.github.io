export interface Paper {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  links: { label: string; href: string }[];
  award?: string;
  /** Shown on the home page. */
  selected?: boolean;
}

// Newest first. "Alex Wang" is highlighted wherever it appears in `authors`.
export const papers: Paper[] = [
  {
    title: "What Do NLP Researchers Believe? Results of the NLP Community Metasurvey",
    authors: ["Julian Michael", "Ari Holtzman", "Alicia Parrish", "Aaron Mueller", "Alex Wang", "Angelica Chen", "Divyam Madaan", "Nikita Nangia", "Richard Yuanzhe Pang", "Jason Phang", "Samuel R. Bowman"],
    venue: "arXiv",
    year: 2022,
    links: [
      { label: "paper", href: "https://arxiv.org/abs/2208.12852" },
      { label: "site", href: "https://nlpsurvey.net/" },
    ],
  },
  {
    title: "SQuALITY: Building a Long-Document Summarization Dataset the Hard Way",
    authors: ["Alex Wang", "Richard Yuanzhe Pang", "Angelica Chen", "Jason Phang", "Samuel R. Bowman"],
    venue: "arXiv",
    year: 2022,
    links: [
      { label: "paper", href: "/static/papers/squality.pdf" },
      { label: "code", href: "https://github.com/nyu-mll/SQuALITY" },
    ],
    selected: true,
  },
  {
    title: "QuestEval: Summarization Asks for Fact-Based Evaluation",
    authors: ["Thomas Scialom", "Paul-Alexis Dray", "Patrick Gallinari", "Sylvain Lamprier", "Benjamin Piwowarski", "Jacopo Staiano", "Alex Wang"],
    venue: "EMNLP",
    year: 2022,
    links: [{ label: "paper", href: "https://arxiv.org/abs/2103.12693" }],
  },
  {
    title: "Label Representations in Modeling Classification as Text Generation",
    authors: ["Xinyi Chen", "Jiangxian Xu", "Alex Wang"],
    venue: "AACL-IJCNLP SRW",
    year: 2020,
    award: "Best Paper Runner-Up",
    links: [{ label: "paper", href: "https://www.aclweb.org/anthology/2020.aacl-srw.23/" }],
  },
  {
    title: "Asking and Answering Questions to Evaluate the Factual Consistency of Summaries",
    authors: ["Alex Wang", "Kyunghyun Cho", "Mike Lewis"],
    venue: "ACL",
    year: 2020,
    links: [
      { label: "paper", href: "https://arxiv.org/abs/2004.04228" },
      { label: "code", href: "https://github.com/w4ngatang/qags" },
    ],
    selected: true,
  },
  {
    title: "jiant: A Software Toolkit for Research on General-Purpose Text Understanding Models",
    authors: ["Yada Pruksachatkun", "Phil Yeres", "Haokun Liu", "Jason Phang", "Phu Mon Htut", "Alex Wang", "Ian Tenney", "Samuel R. Bowman"],
    venue: "ACL (demo)",
    year: 2020,
    links: [
      { label: "paper", href: "https://arxiv.org/abs/2003.02249" },
      { label: "site", href: "https://jiant.info/" },
    ],
  },
  {
    title: "A Generalized Framework of Sequence Generation with Application to Undirected Sequence Models",
    authors: ["Elman Mansimov", "Alex Wang", "Sean Welleck", "Kyunghyun Cho"],
    venue: "Northern European Journal of Language Technology",
    year: 2019,
    links: [
      { label: "paper", href: "https://arxiv.org/abs/1905.12790" },
      { label: "code", href: "https://github.com/nyu-dl/dl4mt-seqgen" },
    ],
  },
  {
    title: "SuperGLUE: A Stickier Benchmark for General-Purpose Language Understanding Systems",
    authors: ["Alex Wang", "Yada Pruksachatkun", "Nikita Nangia", "Amanpreet Singh", "Julian Michael", "Felix Hill", "Omer Levy", "Samuel R. Bowman"],
    venue: "NeurIPS",
    year: 2019,
    links: [
      { label: "paper", href: "https://arxiv.org/abs/1905.00537" },
      { label: "site", href: "https://super.gluebenchmark.com" },
    ],
    selected: true,
  },
  {
    title: "Can You Tell Me How to Get Past Sesame Street? Sentence-Level Pretraining Beyond Language Modeling",
    authors: ["Alex Wang", "Jan Hula", "Patrick Xia", "Raghavendra Pappagari", "R. Thomas McCoy", "Roma Patel", "Najoung Kim", "Ian Tenney", "Yinghui Huang", "Katherin Yu", "Shuning Jin", "Berlin Chen", "Benjamin Van Durme", "Edouard Grave", "Ellie Pavlick", "Samuel R. Bowman"],
    venue: "ACL",
    year: 2019,
    links: [
      { label: "paper", href: "https://arxiv.org/abs/1812.10860" },
      { label: "code", href: "https://github.com/nyu-mll/jiant/releases/tag/r2" },
      { label: "poster", href: "/static/posters/sesame-street-acl-poster.pdf" },
    ],
  },
  {
    title: "BERT has a Mouth, and It Must Speak: BERT as a Markov Random Field Language Model",
    authors: ["Alex Wang", "Kyunghyun Cho"],
    venue: "NeuralGen",
    year: 2019,
    links: [
      { label: "paper", href: "https://arxiv.org/abs/1902.04094" },
      { label: "demo", href: "https://colab.research.google.com/drive/1MxKZGtQ9SSBjTK5ArsZ5LKhkztzg52RV" },
    ],
  },
  {
    title: "Probing What Different NLP Tasks Teach Machines about Function Word Comprehension",
    authors: ["Najoung Kim", "Roma Patel", "Adam Poliak", "Alex Wang", "Patrick Xia", "R. Thomas McCoy", "Ian Tenney", "Alexis Ross", "Tal Linzen", "Benjamin Van Durme", "Samuel R. Bowman", "Ellie Pavlick"],
    venue: "*SEM",
    year: 2019,
    award: "Best Paper",
    links: [
      { label: "paper", href: "https://www.aclweb.org/anthology/S19-1026" },
      { label: "code", href: "https://github.com/nyu-mll/jiant" },
    ],
    selected: true,
  },
  {
    title: "On Measuring Social Biases in Sentence Encoders",
    authors: ["Chandler May", "Alex Wang", "Shikha Bordia", "Samuel R. Bowman", "Rachel Rudinger"],
    venue: "NAACL",
    year: 2019,
    links: [
      { label: "paper", href: "https://arxiv.org/abs/1903.10561" },
      { label: "code", href: "https://github.com/W4ngatang/sent-bias" },
    ],
  },
  {
    title: "GLUE: A Multi-Task Benchmark and Analysis Platform for Natural Language Understanding",
    authors: ["Alex Wang", "Amanpreet Singh", "Julian Michael", "Felix Hill", "Omer Levy", "Samuel R. Bowman"],
    venue: "ICLR",
    year: 2019,
    links: [
      { label: "paper", href: "https://arxiv.org/abs/1804.07461" },
      { label: "site", href: "https://gluebenchmark.com/" },
    ],
    selected: true,
  },
  {
    title: "What do you learn from context? Probing for sentence structure in contextualized word representations",
    authors: ["Ian Tenney", "Patrick Xia", "Berlin Chen", "Alex Wang", "Adam Poliak", "Benjamin Van Durme", "Sam Bowman", "Dipanjan Das", "Ellie Pavlick"],
    venue: "ICLR",
    year: 2019,
    links: [
      { label: "paper", href: "https://openreview.net/forum?id=SJzSgnRcKX" },
      { label: "code", href: "https://github.com/nyu-mll/jiant/tree/master/probing" },
    ],
  },
  {
    title: "Learning Linguistic Descriptors of User Roles in Online Communities",
    authors: ["Alex Wang", "William L. Hamilton", "Jure Leskovec"],
    venue: "NLP+CSS Workshop @ EMNLP",
    year: 2016,
    // TODO: this is the GLUE arXiv link, carried over from the old site.
    links: [{ label: "paper", href: "https://arxiv.org/abs/1804.07461" }],
  },
];
