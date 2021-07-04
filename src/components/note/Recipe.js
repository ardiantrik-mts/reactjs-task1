import React from 'react';

export default class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredient: "",
            recipe: []
        }
    }

    componentDidMount() {
        this.setState({ recipe: [] })
    }

    updateIngredient = (e) => {
        this.setState({ ingredient: e.target.value })
    }

    addIngredient = (ingredient) => {
        const recipe = this.state.recipe;

        this.setState({ recipe: [...recipe, ingredient], ingredient: "" })
    }

    deleteIngredient = (ingredient) => {
        const recipe = this.state.recipe;
        this.setState({ recipe: [...recipe.filter(it => it !== ingredient)] })
    }

    render() {
        return <div>
            <h3>Note</h3>
            <input type="text" value={this.state.ingredient} onChange={this.updateIngredient}></input>
            <button onClick={() => this.addIngredient(this.state.ingredient)}>Add</button> <br /><br />
             <br />
            {
                this.state.recipe.map((it, key) => {
                    return (
                        <div key={key}>{it} <span style={{ cursor: "pointer" }} onClick={() => this.deleteIngredient(it)}>Remove</span> <br />
                        </div>
                    )
                })
            }
        </div>
    }
}