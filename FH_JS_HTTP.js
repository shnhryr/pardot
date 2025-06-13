document.getElementById("postButton").addEventListener("click", function () {
    console.log("繝懊ち繝ｳ縺後け繝ｪ繝�け縺輔ｌ縺ｾ縺励◆");
    // 繝輔か繝ｼ繝�縺ｮ蜈･蜉帛､繧貞叙蠕�
    const input1 = document.getElementById("email").value;
    //const input2 = document.getElementById("lastname").value;
    //const input3 = document.getElementById("firstname").value;
  
    // 騾∽ｿ｡縺吶ｋ繝��繧ｿ繧貞ｮ夂ｾｩ
    const data = {
      email: input1,
     // lastname: input2,
     // firstname: input3,
    };
  
    // 繝��繧ｿ繧誕pplication/x-www-form-urlencoded蠖｢蠑上↓螟画鋤
    const formBody = Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  
    // POST繝ｪ繧ｯ繧ｨ繧ｹ繝医ｒ騾∽ｿ｡
    fetch("htt://www.site.t-rex.cf/l/982672/2025-06-12/fmynwv", {
      method: "POST",
      mode: "no-cors",
       //縺薙ｌ縺後け繝�く繝ｼ縺ｫ蠖ｱ髻ｿ縺励※縺�◎縺�
       //credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("繝阪ャ繝医Ρ繝ｼ繧ｯ蠢懃ｭ斐′豁｣蟶ｸ縺ｧ縺ｯ縺ゅｊ縺ｾ縺帙ｓ!");
        }
        return response.json();
      })
      .then((data) => {
        console.log("謌仙粥!!:", data);
      })
      .catch((error) => {
        console.error("繧ｨ繝ｩ繝ｼ!!:", error);
      });
  });
  
