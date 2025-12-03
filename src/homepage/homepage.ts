let canScroll: boolean = false;
let count: number = 0;
let firstTime: boolean = true;

//HTML
let div = document.getElementById("SectiuneIntro") as HTMLDivElement;

if(!canScroll){
    window.addEventListener("wheel", function(e: WheelEvent): void{
        e.preventDefault();
        console.log(e.deltaY);
        
        if(e.deltaY > 0){
            count += 1;
        } else if(e.deltaY < 0) {
            count -= 1;
        }

        switch(count){
            case 0:
                if(!firstTime){
                    div.innerHTML = `
                        <img src="../../assets/gymintro2.jpeg" id="produsIntro">

                        <h1 id="textIntro1">Mananci</h1>
                        <h1 id="textIntro2">mai</h1>
                        <h1 id="textIntro3">sanatos</h1>
                        <h1 id="textIntro4">traiesti</h1>
                        <h1 id="textIntro5">mai</h1>
                        <h1 id="textIntro6">frumos</h1>
                        <h1 id="textIntro7">cu</h1>
                        <h1 id="textIntro8">Nutri-Pro</h1>
                        <button id="exploreButton">Exploreaza</button>
                    `;
                }
            break;

            case 1:
                div.innerHTML = `
                    <img src="../../assets/categoriProduse/mancare.png" id="produs">
                    <h1 id="textFood1">Mancare</h1>
                    <h1 id="textFood2">100%</h1>
                    <h1 id="textFood3">dietetica</h1>
                    <h1 id="textFood4">Exploreaza & fa-ti pe plac</h1>
                    <button id="foodButton">Lista Noastra</button>
                `;
                firstTime = false;
            break;

            case 2:
                div.innerHTML = `
                    <img src="../../assets/categoriProduse/batoane.png" id="produs2">
                    <h1 id="textBaton1">Batoane</h1>
                    <h1 id="textBaton2">pe</h1>
                    <h1 id="textBaton3">gustul tau</h1>
                    <button id="BatonButton">Exploreaza</button>
                `;
            break;

            case 3: canScroll = true; break;
        }
        console.log(count);
    }, { passive: false });
}