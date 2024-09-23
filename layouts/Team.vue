<template>
    <div class="w-full">
        <!-- <div class="cursor" id="cursor">
            <p class="text hidden">Ko'rish</p>
        </div>
        <div class="cursor-tail"></div> -->
        <Topbar />
        <NavTeamHeader class="relative z-10" />
        <NavMobileNav />
        <NuxtPage class="relative z-[1]" />
        <section>
            <Footer />
        </section>
    </div>
</template>

<script setup>
const { $gsap } = useNuxtApp()
function toggleDarkMode(theme) {
  useColorMode().preference = theme
}
onMounted(()=>{
    toggleDarkMode('light')
})
// onMounted(() => {
//     let mouseX = 0;
//     let mouseY = 0;
//     let mouseInTarget = false;

//     const cursor = document.querySelector(".cursor");
//     const tail = document.querySelector(".cursor-tail");
//     document.addEventListener("mousemove", mouseMove);
//     let hiddenEls = document.querySelectorAll(".target-button");
//     hiddenEls.forEach((item)=>{
//         item.addEventListener("mouseenter", Hidden);
//         item.addEventListener("click", Hidden);
//         item.addEventListener("mouseleave", Show);
//     })
//     function Hidden() {
//         cursor.style.display = "none"
//         mouseInTarget = true;
//     }
//     function Show(){
//         cursor.style.display = "block"
//         mouseInTarget = false;
//     }
//     document.addEventListener("mouseover", () => {
//     Show();
// });
//     document.addEventListener("mouseout", (event) => {
//     // Check if the mouse left the window
//     if (!event.relatedTarget && !event.toElement) {
//         Hidden()
//     }
// });

//     function mouseMove(e) {
//         // if (!!e.target.closest(".target-button")) {
//         //     cursor.style.display = "none"
//         // }else{
//         //     cursor.style.display = "block"
//         // }
//         $gsap.set([cursor], { opacity: 1 });
//         const cursorPosition = {
//             left: e.clientX,
//             top: e.clientY
//         };

//         let count;

//         // const targetElements = document.querySelectorAll(".target");

//         // targetElements.forEach((targetEle, idx) => {
//         //     count = idx + 1;
//         //     const rect = targetEle.getBoundingClientRect();

//         //     const triggerDistance = rect.width;

//         //     // Get position of target instance from its center point
//         //     const targetPosition = {
//         //         left: rect.left + rect.width / 2,
//         //         top: rect.top + rect.width / 2
//         //     };

//         //     // Get distance between target instance and mouse (adj & opp)
//         //     const distance = {
//         //         adj: targetPosition.left - cursorPosition.left,
//         //         opp: targetPosition.top - cursorPosition.top
//         //     };

//         //     // We'll get the hypotenuse and use it tp define the trigger
//         //     // area.

//         //     // With the adj and opp we can use Pythogoras Theorum to
//         //     // calculate the length of the hypotenuse a2 + b2 = c2
//         //     // sqaretroot of c2 = hyp
//         //     const hypotenuse = Math.sqrt(
//         //         distance.adj * distance.adj + distance.opp * distance.opp
//         //     );

//         //     // get angle from length of adj and opp
//         //     const angle = Math.atan2(distance.adj, distance.opp);

//         //     // Define the trigger area - inside
//         //     if (hypotenuse < triggerDistance) {
//         //         // grow cursor
//         //         $gsap.to(".cursor, .cursor-tail", {
//         //             left: targetPosition.left - (Math.sin(angle) * hypotenuse) / 6,
//         //             top: targetPosition.top - (Math.cos(angle) * hypotenuse) / 6,
//         //             height: targetEle.clientHeight,
//         //             width: targetEle.clientWidth,
//         //             duration: 0.3
//         //         });

//         //         mouseInTarget = true;
//         //     }
//         // });

//         if (!mouseInTarget) {
//             $gsap.to(".cursor", {
//                 left: cursorPosition.left,
//                 top: cursorPosition.top,
//                 height: "12px",
//                 width: "12px",
//                 duration: 0.5
//             });
//             $gsap.to(".cursor-tail", {
//                 left: cursorPosition.left,
//                 top: cursorPosition.top,
//                 height: "5px",
//                 width: "5px",
//                 duration: 0.5
//             });
//         }
//     }
//     // $gsap.to('.title', { rotation: 3, x: 100, duration: 1 })
// })
</script>

