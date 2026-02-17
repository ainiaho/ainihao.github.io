var posts=["2026/02/17/linux/","2026/02/17/My-New-Post/","1970/01/01/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };