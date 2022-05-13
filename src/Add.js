export default function Add({ $app,onClick }){

    this.target = document.createElement("div");
    this.target.className = "Add";
    $app.appendChild(this.target);



    this.onClick = onClick;

    this.render = () => {
        this.target.innerHTML = `<input id="write" type="text" placeholder="Add a task"></input><button id="addButton"type="button">+</button>`;
        const button = document.querySelector('#addButton');
        const write = document.querySelector('#write');
        button.addEventListener("click", (e) => {
            if (write.value) {
                this.onClick(write.value);
                write.value = '';
            }else(alert("Type what to do"))
        })
    }

    this.render();
}