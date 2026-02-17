var posts=["2026/02/17/My-New-Post/","1970/01/01/hello-world/","2026/02/17/linux/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };