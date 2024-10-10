$("#bag_burger").click(function () {
  $(".menu").css("visibility", "visible").show();
  $(".menu").css("top", "0");
});
$("#close_icon").click(function () {
  $(".menu").css("top", "-110vh");
  $(".menu").css("visibility", "hidden");
});
$(".wood_option .preparing").click(function () {
  $(".menu").css("top", "-110vh");
  $(".menu").css("visibility", "hidden");
});
$(".wood_option .bandage").click(function () {
  $(".menu").css("top", "-110vh");
  $(".menu").css("visibility", "hidden");
});

// header海拔高度滾動效果
document.addEventListener("DOMContentLoaded", function () {
  const theCard = document.querySelector(".thecard");
  let isCardFlipped = false;

  window.addEventListener("scroll", function () {
    const scrollingNumber = parseInt(
      document.getElementById("scrollingNumber").textContent
    );

    let backgroundImageSource = "../img/entery/title.png";

    if (scrollingNumber >= 200 && scrollingNumber < 400) {
      backgroundImageSource = "./img/hurt/title.png";
    } else if (scrollingNumber >= 400) {
      backgroundImageSource = "./img/entery/title.png";
    } else {
      backgroundImageSource = "./img/package/title.png";
    }

    // 应用翻牌效果
    // theCard.style.transition = "all 0.1s ease";
    // theCard.style.transform = "rotateY(180deg)";

    // 在翻牌效果完成后更改背景图
    setTimeout(function () {
      theCard.style.backgroundImage = `url("${backgroundImageSource}")`;
      theCard.style.transform = "rotateY(360deg)";
    }, 300);
  });
});

// header中間img翻頁效果
document.addEventListener("DOMContentLoaded", function () {
  const theCard = document.querySelector(".thecard");
  const mainContainer = document.getElementById("maincontainer");

  let isCardFlipped = false;

  window.addEventListener("scroll", function () {
    const scrollPercentage =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;

    if (scrollPercentage >= 100 && !isCardFlipped) {
      theCard.style.transform = "rotateY(180deg)";
      isCardFlipped = true;
    } else if (scrollPercentage < 100 && isCardFlipped) {
      theCard.style.transform = "rotateY(0deg)";
      isCardFlipped = false;
    }
  });
});

// header海拔高度滾動效果
document.addEventListener("DOMContentLoaded", function () {
  const scrollingNumberElement = document.getElementById("scrollingNumber");

  let currentNumber = 100;

  window.addEventListener("scroll", function () {
    const scrollPercentage =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;

    const newNumber = Math.round(100 + (scrollPercentage / 100) * 400);

    if (newNumber !== currentNumber) {
      currentNumber = newNumber;
      scrollingNumberElement.textContent = currentNumber;
    }
  });
});

// header level 等級滾動效果
document.addEventListener("DOMContentLoaded", function () {
  const scrollingNumberElement = document.getElementById("scrollingNumber");
  const scrollingTextElement = document.getElementById("scrollingText");

  let currentNumber = 1000;

  window.addEventListener("scroll", function () {
    const scrollPercentage =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;

    const newNumber = Math.round(100 + (scrollPercentage / 100) * 400);

    if (newNumber !== currentNumber) {
      currentNumber = newNumber;
      scrollingNumberElement.textContent = currentNumber;

      // 根据 scrollingNumber 的值计算新的 scrollingText 内容
      let newText;
      if (currentNumber >= 400) {
        newText = "1-3";
      } else if (currentNumber >= 200) {
        newText = "1-2";
      } else {
        newText = "1-1";
      }

      scrollingTextElement.textContent = newText;
    }
  });
});
// phone header level 等級滾動效果
document.addEventListener("DOMContentLoaded", function () {
  const scrollingNumberElement = document.getElementById(
    "scrollingNumber-phone"
  );
  const scrollingTextElement = document.getElementById("scrollingText-phone");

  let currentNumber = 1000;

  window.addEventListener("scroll", function () {
    const scrollPercentage =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;

    const newNumber = Math.round(100 + (scrollPercentage / 100) * 400);

    if (newNumber !== currentNumber) {
      currentNumber = newNumber;
      scrollingNumberElement.textContent = currentNumber;

      // 根据 scrollingNumber 的值计算新的 scrollingText 内容
      let newText;
      if (currentNumber >= 400) {
        newText = "1-3";
      } else if (currentNumber >= 200) {
        newText = "1-2";
      } else {
        newText = "1-1";
      }

      scrollingTextElement.textContent = newText;
    }
  });
});

// 背包頁:Start
setTimeout(function () {
  document.getElementsByClassName("span1")[0].classList.add("active");
  document.getElementsByClassName("span2")[0].classList.add("active");
  document.getElementsByClassName("span3")[0].classList.add("active");
  document.getElementsByClassName("span5")[0].classList.add("active");
  document.getElementsByClassName("span6")[0].classList.add("active");
  document.getElementsByClassName("span7")[0].classList.add("active");
  document.getElementsByClassName("span8")[0].classList.add("active");
  document.getElementsByClassName("span9")[0].classList.add("active");
  document.getElementsByClassName("openbag")[0].classList.add("active");
  document.getElementsByClassName("living")[0].classList.add("active");
  document.getElementsByClassName("other")[0].classList.add("active");
  document.getElementsByClassName("food")[0].classList.add("active");
  document.getElementsByClassName("cook")[0].classList.add("active");
  document.getElementsByClassName("walk")[0].classList.add("active");
  document.getElementsByClassName("cloth")[0].classList.add("active");
}, 200);
setTimeout(function () {
  document
    .getElementsByClassName("prepare-scroll-hint")[0]
    .classList.add("active");
}, 20000);

//居住類
document.getElementById("living").addEventListener("mouseover", function () {
  var img = document.getElementById("living");
  img.src = "img/package/livinghover.svg";
});
document.getElementById("living").addEventListener("mouseout", function () {
  var img = document.getElementById("living");
  img.src = "img/package/living.svg";
});
document.getElementById("living").addEventListener("click", function () {
  document
    .getElementsByClassName("prepare-scroll-hint")[0]
    .classList.remove("active");
  document.getElementsByClassName("living-frame")[0].classList.add("active");
  document.getElementsByClassName("living-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("living-book");
  img.src = "img/雙頁書_翻開.gif";
});
document.getElementById("living-x").addEventListener("click", function () {
  setTimeout(function () {
    document
      .getElementsByClassName("prepare-scroll-hint")[0]
      .classList.add("active");
  }, 1500);
  document.getElementsByClassName("living-frame")[0].classList.remove("active");
  var img = document.getElementById("living-book");
  img.src = "img/雙頁書_闔上.gif";
  setTimeout(() => {
    document
      .getElementsByClassName("living-book")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

//雜項
document.getElementById("other").addEventListener("mouseover", function () {
  var img = document.getElementById("other");
  img.src = "img/package/otherhover.svg";
});
document.getElementById("other").addEventListener("mouseout", function () {
  var img = document.getElementById("other");
  img.src = "img/package/other.svg";
});
document.getElementById("other").addEventListener("click", function () {
  document
    .getElementsByClassName("prepare-scroll-hint")[0]
    .classList.remove("active");
  document.getElementsByClassName("other-frame")[0].classList.add("active");
  document.getElementsByClassName("other-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("other-book");
  img.src = "img/雙頁書_翻開.gif";
});
document.getElementById("other-x").addEventListener("click", function () {
  setTimeout(function () {
    document
      .getElementsByClassName("prepare-scroll-hint")[0]
      .classList.add("active");
  }, 1500);
  document.getElementsByClassName("other-frame")[0].classList.remove("active");
  var img = document.getElementById("other-book");
  img.src = "img/雙頁書_闔上.gif";
  setTimeout(() => {
    document.getElementsByClassName("other-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

//飲食及安全求生類
document.getElementById("food").addEventListener("mouseover", function () {
  var img = document.getElementById("food");
  img.src = "img/package/foodhover.svg";
});
document.getElementById("food").addEventListener("mouseout", function () {
  var img = document.getElementById("food");
  img.src = "img/package/food.svg";
});
document.getElementById("food").addEventListener("click", function () {
  document
    .getElementsByClassName("prepare-scroll-hint")[0]
    .classList.remove("active");
  document.getElementsByClassName("food-frame1")[0].classList.add("active");
  document.getElementsByClassName("food-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("food-book");
  img.src = "img/雙頁書_翻開.gif";
});
document.getElementById("food-arrow1").addEventListener("click", function () {
  document.getElementsByClassName("food-frame1")[0].classList.remove("active");
  document.getElementsByClassName("food-frame2")[0].classList.add("active");
  var img = document.getElementById("food-book");
  img.src = "img/雙頁書_中繼.gif";
});
document.getElementById("food-arrow2").addEventListener("click", function () {
  document.getElementsByClassName("food-frame1")[0].classList.add("active");
  document.getElementsByClassName("food-frame2")[0].classList.remove("active");
  var img = document.getElementById("food-book");
  img.src = "img/雙頁書_中繼.gif";
});
document.getElementById("food-arrow3").addEventListener("click", function () {
  document.getElementsByClassName("food-frame3")[0].classList.add("active");
  document.getElementsByClassName("food-frame2")[0].classList.remove("active");
  var img = document.getElementById("food-book");
  img.src = "img/雙頁書_中繼.gif";
});
document.getElementById("food-arrow4").addEventListener("click", function () {
  document.getElementsByClassName("food-frame2")[0].classList.add("active");
  document.getElementsByClassName("food-frame3")[0].classList.remove("active");
  var img = document.getElementById("food-book");
  img.src = "img/雙頁書_中繼.gif";
  document.getElementById("food-arrow5").addEventListener("click", function () {
    document.getElementsByClassName("food-frame4")[0].classList.add("active");
    document
      .getElementsByClassName("food-frame3")[0]
      .classList.remove("active");
    var img = document.getElementById("food-book");
    img.src = "img/雙頁書_中繼.gif";
  });
  document.getElementById("food-arrow6").addEventListener("click", function () {
    document.getElementsByClassName("food-frame3")[0].classList.add("active");
    document
      .getElementsByClassName("food-frame4")[0]
      .classList.remove("active");
    var img = document.getElementById("food-book");
    img.src = "img/雙頁書_中繼.gif";
  });
});
document.getElementById("food-x1").addEventListener("click", function () {
  setTimeout(function () {
    document
      .getElementsByClassName("prepare-scroll-hint")[0]
      .classList.add("active");
  }, 1500);
  document.getElementsByClassName("food-frame1")[0].classList.remove("active");
  document.getElementsByClassName("food-frame2")[0].classList.remove("active");
  var img = document.getElementById("food-book");
  img.src = "img/雙頁書_闔上.gif";
  setTimeout(() => {
    document.getElementsByClassName("food-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});
document.getElementById("food-x2").addEventListener("click", function () {
  setTimeout(function () {
    document
      .getElementsByClassName("prepare-scroll-hint")[0]
      .classList.add("active");
  }, 1500);
  document.getElementsByClassName("food-frame1")[0].classList.remove("active");
  document.getElementsByClassName("food-frame2")[0].classList.remove("active");
  var img = document.getElementById("food-book");
  img.src = "img/雙頁書_闔上.gif";
  setTimeout(() => {
    document.getElementsByClassName("food-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});
document.getElementById("food-x3").addEventListener("click", function () {
  setTimeout(function () {
    document
      .getElementsByClassName("prepare-scroll-hint")[0]
      .classList.add("active");
  }, 1500);
  document.getElementsByClassName("food-frame2")[0].classList.remove("active");
  document.getElementsByClassName("food-frame3")[0].classList.remove("active");
  var img = document.getElementById("food-book");
  img.src = "img/雙頁書_闔上.gif";
  setTimeout(() => {
    document.getElementsByClassName("food-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});
document.getElementById("food-x4").addEventListener("click", function () {
  setTimeout(function () {
    document
      .getElementsByClassName("prepare-scroll-hint")[0]
      .classList.add("active");
  }, 1500);
  document.getElementsByClassName("food-frame3")[0].classList.remove("active");
  document.getElementsByClassName("food-frame4")[0].classList.remove("active");
  var img = document.getElementById("food-book");
  img.src = "img/雙頁書_闔上.gif";
  setTimeout(() => {
    document.getElementsByClassName("food-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

//烹煮類
document.getElementById("cook").addEventListener("mouseover", function () {
  var img = document.getElementById("cook");
  img.src = "img/package/cookhover.svg";
});
document.getElementById("cook").addEventListener("mouseout", function () {
  var img = document.getElementById("cook");
  img.src = "img/package/cook.svg";
});
document.getElementById("cook").addEventListener("click", function () {
  document
    .getElementsByClassName("prepare-scroll-hint")[0]
    .classList.remove("active");
  document.getElementsByClassName("cook-frame1")[0].classList.add("active");
  document.getElementsByClassName("cook-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("cook-book");
  img.src = "img/雙頁書_翻開.gif";
});
document.getElementById("cook-arrow1").addEventListener("click", function () {
  document.getElementsByClassName("cook-frame2")[0].classList.add("active");
  document.getElementsByClassName("cook-frame1")[0].classList.remove("active");
  var img = document.getElementById("cook-book");
  img.src = "img/雙頁書_中繼.gif";
});
document.getElementById("cook-arrow2").addEventListener("click", function () {
  document.getElementsByClassName("cook-frame1")[0].classList.add("active");
  document.getElementsByClassName("cook-frame2")[0].classList.remove("active");
  var img = document.getElementById("cook-book");
  img.src = "img/雙頁書_中繼.gif";
});
document.getElementById("cook-x1").addEventListener("click", function () {
  setTimeout(function () {
    document
      .getElementsByClassName("prepare-scroll-hint")[0]
      .classList.add("active");
  }, 1500);
  document.getElementsByClassName("cook-frame1")[0].classList.remove("active");
  document.getElementsByClassName("cook-frame2")[0].classList.remove("active");
  var img = document.getElementById("cook-book");
  img.src = "img/雙頁書_闔上.gif";
  setTimeout(() => {
    document.getElementsByClassName("cook-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});
document.getElementById("cook-x2").addEventListener("click", function () {
  setTimeout(function () {
    document
      .getElementsByClassName("prepare-scroll-hint")[0]
      .classList.add("active");
  }, 1500);
  document.getElementsByClassName("cook-frame1")[0].classList.remove("active");
  document.getElementsByClassName("cook-frame2")[0].classList.remove("active");
  var img = document.getElementById("cook-book");
  img.src = "img/雙頁書_闔上.gif";
  setTimeout(() => {
    document.getElementsByClassName("cook-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

//行走類
document.getElementById("walk").addEventListener("mouseover", function () {
  var img = document.getElementById("walk");
  img.src = "img/package/walkhover.svg";
});
document.getElementById("walk").addEventListener("mouseout", function () {
  var img = document.getElementById("walk");
  img.src = "img/package/walk.svg";
});
document.getElementById("walk").addEventListener("click", function () {
  document
    .getElementsByClassName("prepare-scroll-hint")[0]
    .classList.remove("active");
  document.getElementsByClassName("walk-frame")[0].classList.add("active");
  document.getElementsByClassName("walk-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("walk-book");
  img.src = "img/雙頁書_翻開.gif";
});
document.getElementById("walk-x").addEventListener("click", function () {
  setTimeout(function () {
    document
      .getElementsByClassName("prepare-scroll-hint")[0]
      .classList.add("active");
  }, 1500);
  document.getElementsByClassName("walk-frame")[0].classList.remove("active");
  var img = document.getElementById("walk-book");
  img.src = "img/雙頁書_闔上.gif";
  setTimeout(() => {
    document.getElementsByClassName("walk-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});
//衣著類
document.getElementById("cloth").addEventListener("mouseover", function () {
  var img = document.getElementById("cloth");
  img.src = "img/package/clothhover.svg";
});
document.getElementById("cloth").addEventListener("mouseout", function () {
  var img = document.getElementById("cloth");
  img.src = "img/package/cloth.svg";
});
document.getElementById("cloth").addEventListener("click", function () {
  document
    .getElementsByClassName("prepare-scroll-hint")[0]
    .classList.remove("active");
  document.getElementsByClassName("cloth-frame1")[0].classList.add("active");
  document.getElementsByClassName("cloth-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("cloth-book");
  img.src = "img/雙頁書_翻開.gif";
});
document.getElementById("cloth-arrow1").addEventListener("click", function () {
  document.getElementsByClassName("cloth-frame1")[0].classList.remove("active");
  document.getElementsByClassName("cloth-frame2")[0].classList.add("active");
  var img = document.getElementById("cloth-book");
  img.src = "img/雙頁書_中繼.gif";
});
document.getElementById("cloth-arrow2").addEventListener("click", function () {
  document.getElementsByClassName("cloth-frame1")[0].classList.add("active");
  document.getElementsByClassName("cloth-frame2")[0].classList.remove("active");
  var img = document.getElementById("cloth-book");
  img.src = "img/雙頁書_中繼.gif";
});
document.getElementById("cloth-arrow3").addEventListener("click", function () {
  document.getElementsByClassName("cloth-frame3")[0].classList.add("active");
  document.getElementsByClassName("cloth-frame2")[0].classList.remove("active");
  var img = document.getElementById("cloth-book");
  img.src = "img/雙頁書_中繼.gif";
});
document.getElementById("cloth-arrow4").addEventListener("click", function () {
  document.getElementsByClassName("cloth-frame2")[0].classList.add("active");
  document.getElementsByClassName("cloth-frame3")[0].classList.remove("active");
  var img = document.getElementById("cloth-book");
  img.src = "img/雙頁書_中繼.gif";
});
document.getElementById("cloth-x1").addEventListener("click", function () {
  setTimeout(function () {
    document
      .getElementsByClassName("prepare-scroll-hint")[0]
      .classList.add("active");
  }, 1500);
  document.getElementsByClassName("cloth-frame1")[0].classList.remove("active");
  document.getElementsByClassName("cloth-frame2")[0].classList.remove("active");
  var img = document.getElementById("cloth-book");
  img.src = "img/雙頁書_闔上.gif";
  setTimeout(() => {
    document.getElementsByClassName("cloth-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});
document.getElementById("cloth-x2").addEventListener("click", function () {
  setTimeout(function () {
    document
      .getElementsByClassName("prepare-scroll-hint")[0]
      .classList.add("active");
  }, 1500);
  document.getElementsByClassName("cloth-frame1")[0].classList.remove("active");
  document.getElementsByClassName("cloth-frame2")[0].classList.remove("active");
  var img = document.getElementById("cloth-book");
  img.src = "img/雙頁書_闔上.gif";
  setTimeout(() => {
    document.getElementsByClassName("cloth-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

// 頁面滾動的parallax
gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".package",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  })
  .to(".package", { backgroundPosition: "50% 0", ease: "none" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".hurt",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  })
  .to(".hurt", { backgroundPosition: "50% 0", ease: "none" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".entry",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  })
  .to(".entry", { backgroundPosition: "50% 0", ease: "none" });

// 雲轉場的parallax
// window.addEventListener("scroll", function () {
//   const scrollValue = window.scrollY;
//   const imgElement = document.getElementById("transcloud1");

//   const newBottomValue = 125 - scrollValue / 13 + "vh";

//   imgElement.style.top = newBottomValue;
// });
// window.addEventListener("scroll", function () {
//   const scrollValue = window.scrollY;
//   const imgElement = document.getElementById("transcloud3");

//   const newBottomValue = 146 - scrollValue / 13 + "vh";

//   imgElement.style.top = newBottomValue;
// });
// window.addEventListener("scroll", function () {
//   const scrollValue = window.scrollY;
//   const imgElement = document.getElementById("transcloud4");

//   const newBottomValue = 160 - scrollValue / 13 + "vh";

//   imgElement.style.top = newBottomValue;
// });
// window.addEventListener("scroll", function () {
//   const scrollValue = window.scrollY;
//   const imgElement = document.getElementById("transcloud5");

//   const newBottomValue = 400 - scrollValue / 13 + "vh";

//   imgElement.style.top = newBottomValue;
// });
// window.addEventListener("scroll", function () {
//   const scrollValue = window.scrollY;
//   const imgElement = document.getElementById("transcloud6");

//   const newBottomValue = 422 - scrollValue / 13 + "vh";

//   imgElement.style.top = newBottomValue;
// });
// window.addEventListener("scroll", function () {
//   const scrollValue = window.scrollY;
//   const imgElement = document.getElementById("transcloud7");

//   const newBottomValue = 443 - scrollValue / 13 + "vh";

//   imgElement.style.top = newBottomValue;
// });
// window.addEventListener("scroll", function () {
//   const scrollValue = window.scrollY;
//   const imgElement = document.getElementById("transcloud8");

//   const newBottomValue = 448 - scrollValue / 13 + "vh";

//   imgElement.style.top = newBottomValue;
// });
