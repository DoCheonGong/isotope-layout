window.addEventListener("load", () => {
    const grid = new Isotope("section", { // 배치할 요소를 감싼 부모요소
        itemSelection: "article", // 배치할 요소의 이름
        columnWidth: "article", // 너비값을 구할 요소명 (높이값)
        transitionDuration: "0.5s", // 화면 재배치시 요소가 움직이는 속도
    });

    let btns = document.querySelectorAll("main ul li");

    for (let el of btns) {
        el.addEventListener("click", (e) => {
            e.preventDefault();

            // 버튼 클릭 시 a태그 안의 href 속성 안의 값을 변수로 담는다
            let sort = e.currentTarget.querySelector("a").getAttribute("href");
            // grid를 호출해서 filter를 적용한 값들만 보여지게 한다
            grid.arrange({
                filter: sort
            });
            for (let el of btns) {
                el.classList.remove("on");
            }
            e.currentTarget.classList.add("on");
            // el.classList.add("on");
        });
    }
});