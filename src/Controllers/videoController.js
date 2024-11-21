
let videos = [
  {
    title : "First Video",
    rating : 5,
    comments : 2,
    createdAt : "2 minutes ago",
    views : 59,
    id : 1
  },
  {
    title : "Second Video",
    rating : 5,
    comments : 2,
    createdAt : "2 minutes ago",
    views : 59,
    id : 2
  },
  {
    title : "Third Video",
    rating : 5,
    comments : 2,
    createdAt : "2 minutes ago",
    views : 59,
    id : 3
  },
];

export const trending = (req, res) => {
  return res.render("home", {pageTitle:"Home", videos});
}

export const see = (req, res) => {
  const { id } = req.params;
  // 아래의 방법으로도 표기가능
  // const id = req.params.id;
  
  const video = videos[id-1];
  // 배열은 0부터 시작 id는 1부터 시작 이기때문에 -1을 해준다.

  return res.render("watch", {pageTitle:`Watching ${video.title}`});
};

export const edit = (req, res) => res.render("edit", {pageTitle:"Edit"});

export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};