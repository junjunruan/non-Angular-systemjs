export function main(el: HTMLElement): void {

    // add main div to contain window leveling button and canvas
    var mainDiv = document.createElement('div');
    mainDiv.setAttribute("id", "main-div");

    // add window leveling button
    var btn = document.createElement('button');
    var btnText = document.createTextNode("window leveling");// Create a text node
    btn.setAttribute("id", "window-level-btn");
    btn.appendChild(btnText);
    mainDiv.appendChild(btn);

    // add canvas parent div
    var canvasParent = document.createElement('div');
    canvasParent.setAttribute("id", "canvas-parent");
    mainDiv.appendChild(canvasParent);
    // el.appendChild(mainDiv);
    document.body.appendChild(mainDiv);

    // cornerstone required variables
    var element = document.getElementById('canvas-parent');
    const imageId = 'https://i.imgur.com/u8VVJSO.jpg';
    var windowWidth = 256;
    var windowCenter = 128;

    // display image on canvas
    cornerstone.enable(element);
    cornerstone.loadImage(imageId).then((image: any) => {
        cornerstone.displayImage(element, image);
    });

    // do window leveling when click the button
    document.getElementById("window-level-btn").addEventListener("click", () => {
        windowWidth += 10;
        windowCenter += 10;
        let vwport: any = cornerstone.getViewport(element);
        vwport.voi.windowWidth = windowWidth;
        vwport.voi.windowCenter = windowCenter;
        cornerstone.setViewport(element, vwport);
    });
}