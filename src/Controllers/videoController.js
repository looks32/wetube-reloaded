
let videos = [
  {
    title : "First Video",
    rating : 5,
    comments : 2,
    createdAt : "2 minutes ago",
    views : 1,
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

export const watch = (req, res) => {
  const { id } = req.params;
  // 아래의 방법으로도 표기가능
  // const id = req.params.id;
  
  const video = videos[id-1];
  // 배열은 0부터 시작 id는 1부터 시작 이기때문에 -1을 해준다.

  return res.render("watch", {pageTitle:`Watching ${video.title}`, video});
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  // console.log(req.body);
  const { title } = req.body;

  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
}

export const getUpload = (req, res) => {
  return res.render("upload", {pageTitle:"Upload Video"});
}

export const postUpload = (req, res) => {
  const {title} = req.body;
  const newVideo = {
    title,
    rating : 9,
    comments : 9,
    createdAt : "just now",
    views : 0,
    id : videos.length + 1.
  }
  videos.push(newVideo);
  return res.redirect("/");
}