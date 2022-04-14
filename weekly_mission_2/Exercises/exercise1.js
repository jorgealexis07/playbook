const repo = {
  name: "LaunchX",
  author: "carlogilmar",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close;
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`;
  },
};

console.log("Nombre del repo:" + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());
console.log("===========================================================");
console.log("===========================================================");

const issue = {
    title: "Creacion de repo",
    repositoryNameAssociated: "Javascript",
    status: "Activo",
    numberOfComments: 55,
    labels: ["models","functions","methods"],
    author: "Charles Adams",
    dateCreated: new Date(),
    lastUpdated: new Date(),
    getTitleAndAutor: function () {
      return "Titulo: " + this.title + " y lo escribio : " + this.author;
    },
    getGeneralInfo: function () {
      return `This repository ${this.repositoryNameAssociated} was created by ${this.author} the ${this.dateCreated}`;
    },
  };
  
  console.log("Nombre del issue:" + issue.title);
  console.log("Numero de comentarios: " + issue.numberOfComments);
  console.log(issue.getTitleAndAutor());
  console.log(issue.getGeneralInfo());
  console.log("===========================================================");
  console.log("===========================================================");

  const PullRequest = {
    title: "Se agrega info al repo",
    branchName: "Develop",
    dateCreated: new Date(),
    status: "Activo",
    repositoryNameAssociated: "branch master",
    getStatus: function () {
      return `This repository is ${this.status}`;
    },
    getTitleAndAutor: function () {
      return "Titulo: " + this.title + " y lo escribio : " + this.author;
    },
    
  };
  
  console.log("Nombre del issue:" + issue.title);
  console.log("Numero de comentarios: " + issue.numberOfComments);
  console.log(issue.getTitleAndAutor());
  console.log(issue.getGeneralInfo());


  console.log("===========================================================");
  console.log("===========================TWITTER==========================");
  console.log("===========================================================");

  const User = {
    user: "Alexis",
    username: "AlexisDev",
    bio: "I'm fronbtend developer",
    status: "Online",
    age: "24",
    getUsername: function () {
      return `This  is user is from: ${this.username}`;
    },
    getBiografy: function () {
      return `Biography: ${this.bio}`;
    },
    
  };
  console.log("Nombre del usuario:" + User.user);
  console.log("Age: " + User. age);
  console.log(User.getUsername());
  console.log(User.getBiografy());


  console.log("===========================================================");
  const trending_topic = {
    name: "Trending",
    labels: ["Develop","Music","Machine-lerning"],
   
    getLabels: function () {
      return `labels: ${this.labels}`;
    },
    
  };
  console.log("Name of trending:" + trending_topic.name);
  console.log(trending_topic.getLabels());