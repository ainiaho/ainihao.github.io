var posts=["2026/02/17/My-New-Post/","2026/02/17/linux/","1970/01/01/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };