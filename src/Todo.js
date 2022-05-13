export default function Todo({ $app, initialState,removeClick }) {
    this.state = initialState;
    this.target = document.createElement('div');
    this.target.className = "Todo";
    $app.appendChild(this.target)

    this.setState = (next) => {
        this.state = next;
        this.render()
    }
    let count = 0;
    this.removeClick = removeClick;

    this.render = () => {  
        const lists = this.state.list.map(content => {
            count++;
            return `<div class="list"><input type="checkbox" id="${count}" class="checkbox1">
    <div id="one"><label for="${count}">${content}</label><button type="button" class="remove">delete</button></div></div>`      
        }).join('');

        this.target.innerHTML = lists;

        const remove = document.querySelectorAll('.remove');
        remove.forEach(v => {
            v.addEventListener("click", (e) => {
                const removeArr = Array.from(remove);
                const removingTarget = removeArr.findIndex(a => a.parentNode == e.target.parentNode)
                this.removeClick(removingTarget);
        
            })
        })
        
    }
    this.render();
}